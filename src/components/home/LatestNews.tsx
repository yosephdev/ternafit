import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface NewsItem {
  id: string;
  title: { en: string; sv: string };
  excerpt: { en: string; sv: string };
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

// Use Netlify function in production; provide dev fallback
const NETLIFY_NEWS_FN = '/.netlify/functions/fetch-news';
const TOP_HEADLINES_QUERY = 'Tigray OR Tigrayan OR Tigrinya OR Mekelle OR Axum OR Adwa OR Shire OR Abi Adi';
const DEV_GNEWS_API_KEY = (import.meta as any).env?.VITE_GNEWS_API_KEY as string | undefined;

const fallbackLocal: NewsItem[] = [
  {
    id: 'local-1',
    title: { en: 'Tigray Health Bureau Reports Progress in Medical Supply Distribution', sv: 'Tigrays hälsobyrå rapporterar framsteg i distributionen av medicinska förnödenheter' },
    excerpt: { en: 'Essential medicines delivered to 15 health centers across central Tigray.', sv: 'Viktiga läkemedel levererade till 15 vårdcentraler i centrala Tigray.' },
    date: new Date().toISOString(),
    imageUrl: '/images/news/health-supplies.webp',
    url: '#',
    source: { name: 'Tigray Health Bureau' },
  },
  {
    id: 'local-2',
    title: { en: 'School Reconstruction Begins in Mekelle Suburbs', sv: 'Skolåteruppbyggnad börjar i Mekelles förorter' },
    excerpt: { en: 'Community-led initiative launches reconstruction of 8 primary schools.', sv: 'Samhällslett initiativ startar återuppbyggnaden av 8 grundskolor.' },
    date: new Date(Date.now() - 86400000).toISOString(),
    imageUrl: '/images/news/school-rebuild.webp',
    url: '#',
    source: { name: 'Mekelle Education Office' },
  },
];

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

// Enhanced filtering for Tigray relevance
function isTigrayRelevant(text: string): boolean {
  const lowerText = text.toLowerCase();
  const tigrayKeywords = [
    'tigray', 'tplf', 'mekelle', 'axum', 'adwa', 'tigrayan', 'tigrinya',
    'ayder hospital', 'tigray region', 'northern ethiopia', 'humanitarian tigray'
  ];
  
  const contextKeywords = [
    'humanitarian', 'aid', 'medical', 'food', 'water', 'education', 
    'reconstruction', 'recovery', 'children', 'health', 'crisis'
  ];
  
  const hasTigrayKeyword = tigrayKeywords.some(kw => lowerText.includes(kw));
  const hasContextKeyword = contextKeywords.some(kw => lowerText.includes(kw));
  
  return hasTigrayKeyword && hasContextKeyword;
}

const LatestNews = () => {
  const { t, language } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setLoading(true);
    setShowSpinner(false);
    const spinnerTimer = setTimeout(() => setShowSpinner(true), 600);
    setError(null);

    const params = new URLSearchParams({
      query: TOP_HEADLINES_QUERY,
      // Force English for better coverage; can expand per language later
      lang: 'en',
      max: '12'
    });

    fetch(`${NETLIFY_NEWS_FN}?${params.toString()}`)
      .then(res => {
        const contentType = res.headers.get('content-type') || '';
        if (!res.ok) {
          return res.json().then(errData => {
            throw new Error(errData.errors ? errData.errors.join(', ') : `API request failed: ${res.statusText}`);
          }).catch(() => {
            throw new Error(`API request failed: ${res.statusText}`);
          });
        }
        if (!contentType.includes('application/json')) {
          throw new Error('Unexpected response type from news endpoint');
        }
        return res.json();
      })
      .then(data => {
        const raw: Array<Partial<NewsItem>> = data.articles || [];
        const toStringSafe = (value: unknown): string => (typeof value === 'string' ? value : '');
        const filtered = raw.filter((article) => {
          const title = toStringSafe((article as any).title);
          const desc = toStringSafe((article as any).description);
          const text = `${title} ${desc}`.toLowerCase();
          const must = ['tigray','tigrayan','tigrinya','mekelle','axum','adwa','shire','abi adi'];
          return must.some(k => text.includes(k));
        });
        const articles: NewsItem[] = filtered.map((article: Partial<NewsItem>) => ({
          id: toStringSafe(article.url) || `news-${Math.random()}`,
          title: {
            en: toStringSafe((article as any).title) || 'No title available',
            sv: toStringSafe((article as any).title) || 'Ingen titel tillgänglig',
          },
          excerpt: {
            en: toStringSafe((article as any).description) || toStringSafe((article as any).content) || '',
            sv: toStringSafe((article as any).description) || toStringSafe((article as any).content) || '',
          },
          date: toStringSafe((article as any).publishedAt) || new Date().toISOString(),
          imageUrl: (article as any).image || (article as any).urlToImage || null,
          url: toStringSafe(article.url) || '#',
          source: typeof (article as any).source === 'object' && (article as any).source !== null ? ((article as any).source as any).name || 'Unknown source' : typeof (article as any).source === 'string' ? (article as any).source : 'Unknown source',
        }));
        const finalList = articles.length > 0 ? articles.slice(0, 6) : fallbackLocal.slice(0, 6);
        setNews(finalList);
      })
      .catch((err) => {
        // Fallback to direct GNews in dev if function is unavailable or returns HTML
        if (DEV_GNEWS_API_KEY) {
          const gnewsUrl = `https://gnews.io/api/v4/search?q=${encodeURIComponent(TOP_HEADLINES_QUERY)}&lang=en&max=12&apikey=${DEV_GNEWS_API_KEY}`;
          fetch(gnewsUrl)
            .then(r => r.json())
            .then(data => {
              const raw: Array<Partial<NewsItem>> = data.articles || [];
              const toStringSafe = (value: unknown): string => (typeof value === 'string' ? value : '');
              const filtered = raw.filter((article) => {
                const title = toStringSafe((article as any).title);
                const desc = toStringSafe((article as any).description);
                const text = `${title} ${desc}`.toLowerCase();
                const must = ['tigray','tigrayan','tigrinya','mekelle','axum','adwa','shire','abi adi'];
                return must.some(k => text.includes(k));
              });
              const articles: NewsItem[] = filtered.map((article: Partial<NewsItem>) => ({
                id: toStringSafe(article.url) || `news-${Math.random()}`,
                title: { en: toStringSafe((article as any).title) || 'No title available', sv: toStringSafe((article as any).title) || 'Ingen titel tillgänglig' },
                excerpt: { en: toStringSafe((article as any).description) || toStringSafe((article as any).content) || '', sv: toStringSafe((article as any).description) || toStringSafe((article as any).content) || '' },
                date: toStringSafe((article as any).publishedAt) || new Date().toISOString(),
                imageUrl: (article as any).image || (article as any).urlToImage || null,
                url: toStringSafe(article.url) || '#',
                source: typeof (article as any).source === 'object' && (article as any).source !== null ? ((article as any).source as any).name || 'Unknown source' : typeof (article as any).source === 'string' ? (article as any).source : 'Unknown source',
              }));
              const finalList = articles.length > 0 ? articles.slice(0, 6) : fallbackLocal.slice(0, 6);
              setNews(finalList);
              setError(null);
            })
            .catch((fallbackErr) => {
              console.error('Fallback GNews fetch failed:', fallbackErr);
              setNews(fallbackLocal.slice(0, 6));
              setError(null);
            })
            .finally(() => setLoading(false));
          return;
        }
        console.error("Error fetching top headlines:", err);
        setNews(fallbackLocal.slice(0, 6));
        setError(null);
      })
      .finally(() => { setLoading(false); clearTimeout(spinnerTimer); });
  }, [language, t]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-serif font-bold">{t("nav.news")}</h2>
          <Link to={t("path.news")}>
            <Button variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10">
              {t("common.readMore")}
            </Button>
          </Link>
        </div>

        {loading ? (
          <div className="text-center text-lg py-12">{showSpinner ? t('news.loading') : ''}</div>
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
                title={item.title[language]}
              >
                {item.imageUrl ? (
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title[language]}
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
                  <h3 className="text-xl font-serif font-bold mb-3 line-clamp-2">{item.title[language]}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">{item.excerpt[language]}</p>
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
