import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  description?: string;
  publishedAt?: string;
  content?: string;
  imageUrl: string | null;
  url: string;
  source: { name: string } | string;
  image?: string | null; // Added for GNews
  urlToImage?: string | null;
}

const GNEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const GNEWS_API_URL_BASE = "https://gnews.io/api/v4/top-headlines";
const TOP_HEADLINES_QUERY = "Tigray";

const formatDate = (dateString: string, language: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

function dedupeArticles(articles: Array<Partial<NewsItem>>): Array<Partial<NewsItem>> {
  const seen = new Set<string>();
  return articles.filter(article => {
    const key = article.url;
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// Function to check if content is strongly related to Tigray
function isTigrayRelated(text: string): boolean {
  const lowerText = text.toLowerCase();
  const tigrayKeywords = [
    'tigray', 
    'tplf', 
    'mekelle', 
    'axum', 
    'adwa', 
    'tigrayan', 
    'tigrinya',
    'endf', 
    'ertirea', 
    'ethiopia',
    'abiy ahmed',
    'getachew reda'
  ];
  
  // Must contain at least one primary keyword and one secondary keyword
  const primaryKeywords = ['tigray', 'tplf', 'mekelle'];
  const hasPrimary = primaryKeywords.some(kw => lowerText.includes(kw));
  
  return hasPrimary && tigrayKeywords.some(kw => lowerText.includes(kw));
}

const LatestNews = () => {
  const { t, language } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      `${GNEWS_API_URL_BASE}?q=${encodeURIComponent(TOP_HEADLINES_QUERY)}&lang=${language === "sv" ? "sv" : "en"}&country=et&max=6&apikey=${GNEWS_API_KEY}`
    )
      .then(res => {
        if (!res.ok) {
          // Try to get error message from GNews if available
          return res.json().then(errData => {
            throw new Error(errData.errors ? errData.errors.join(', ') : `API request failed: ${res.statusText}`);
          }).catch(() => {
            // Fallback if res.json() fails or no specific GNews error
            throw new Error(`API request failed: ${res.statusText}`);
          });
        }
        return res.json();
      })
      .then(data => {
        const articles: NewsItem[] = (data.articles || []).map((article: Partial<NewsItem>) => ({
          id: article.url || `news-${Math.random()}`,
          title: article.title || "No title available",
          excerpt: article.description || article.content || "",
          date: article.publishedAt || new Date().toISOString(),
          imageUrl: article.image || null,
          url: article.url || "#",
          source: typeof article.source === 'object' && article.source !== null ? article.source.name || "Unknown source" : typeof article.source === 'string' ? article.source : "Unknown source",
        }));
        setNews(articles.slice(0, 6)); // Ensure we only take up to 6 articles
      })
      .catch((err) => {
        console.error("Error fetching top headlines:", err);
        setError(err.message || t('news.loadError'));
      })
      .finally(() => setLoading(false));
  }, [language, t]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-serif font-bold">{t("nav.news")}</h2>
          <Link to="/news">
            <Button variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10">
              {t("common.readMore")}
            </Button>
          </Link>
        </div>

        {loading ? (
          <div className="text-center text-lg py-12">{t('news.loading')}</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : news.length === 0 ? (
          <div className="text-center text-terracotta">{t('news.noTigrayNews')}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
                title={item.title}
              >
                {item.imageUrl ? (
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="relative h-48 bg-muted flex items-center justify-center text-muted-foreground">
                    <span className="text-4xl">📰</span>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(item.date, language)}</span>
                    {item.source && (
                      <span className="ml-auto font-medium text-xs bg-muted px-2 py-0.5 rounded-full">
                        {typeof item.source === "string" ? item.source : item.source?.name}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">{item.excerpt}</p>
                  <span className="text-terracotta font-medium hover:underline">
                    {t("common.readMore")}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNews;