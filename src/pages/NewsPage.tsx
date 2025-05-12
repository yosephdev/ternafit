import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

interface NewsItem {
  id: number;
  title: {
    en: string;
    sv: string;
  };
  content: {
    en: string;
    sv: string;
  };
  date: string;
  category: string;
  imageUrl?: string;
  url: string;
}

interface SentimentStats {
  positive: number;
  negative: number;
  neutral: number;
}

interface NewsDataIOArticle {
  article_id: string;
  title: string;
  link: string;
  keywords: string[] | null;
  creator: string[] | null;
  video_url: string | null;
  description: string | null;
  content: string | null;
  pubDate: string;
  image_url: string | null;
  source_id: string;
  source_url: string | null;
  source_icon: string | null;
  source_priority: number | null;
  country: string[];
  category: string[];
  language: string;
  ai_tag?: string;
  sentiment?: string;
  sentiment_stats?: SentimentStats;
  ai_region?: string;
}

interface GNewsArticle {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedAt: string;
  source: {
    name: string;
    url?: string; // Adding optional URL for source based on typical API structures
  };
}

interface MediastackArticle {
  title: string;
  description: string;
  published_at: string;
  source: string;
  image?: string;
  url: string;
}

const NewsPage = () => {
  const { t, language } = useLanguage();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>(["all"]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const GNEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
    const MEDIASTACK_API_KEY = import.meta.env.VITE_MEDIASTACK_API_KEY;
    const NEWSDATA_API_KEY = import.meta.env.VITE_NEWSDATAIO_API_KEY;

    const fetchNews = async () => {
      setIsLoading(true);
      setError(null);
      const currentLang = language === 'sv' ? 'sv' : 'en';
      const cacheKey = `tigrayCombinedNews_v2_${currentLang}`; // Updated cache key
      const cachedData = sessionStorage.getItem(cacheKey);

      if (cachedData) {
        try {
          const parsed = JSON.parse(cachedData);
          setNewsItems(parsed.newsItems);
          setCategories(parsed.categories);
          setIsLoading(false);
          return;
        } catch (e) {
          console.error("Error parsing cached data:", e);
          sessionStorage.removeItem(cacheKey); // Clear corrupted cache
        }
      }

      let allArticles: NewsItem[] = [];
      const errors: string[] = [];

      // 1. GNews
      if (GNEWS_API_KEY) {
        try {
          const response = await axios.get('https://gnews.io/api/v4/search', {
            params: {
              q: 'Tigray',
              lang: currentLang,
              country: 'et',
              max: 15,
              apikey: GNEWS_API_KEY,
            },
          });
          const gnewsArticles = response.data.articles?.map((article: GNewsArticle): NewsItem | null => {
            if (!article.url) return null;
            return {
              id: 0, // Temporary ID, will be reassigned
              title: {
                en: article.title || "No title available",
                sv: article.title || "Ingen titel tillgänglig",
              },
              content: {
                en: article.description || "No content available",
                sv: article.description || "Inget innehåll tillgängligt",
              },
              date: article.publishedAt || new Date().toISOString(),
              category: article.source?.name || "GNews",
              imageUrl: article.image || undefined,
              url: article.url,
            };
          }).filter((item: NewsItem | null) => item !== null) as NewsItem[];
          allArticles = allArticles.concat(gnewsArticles);
        } catch (e: unknown) {
          if (e instanceof Error) {
          console.error("Error fetching GNews:", e.message);
        } else {
          console.error("Error fetching GNews: An unknown error occurred", e);
        }
          errors.push("GNews");
        }
      }

      // 2. Mediastack
      if (MEDIASTACK_API_KEY) {
        try {
          // Note: Mediastack free plan might not support HTTPS or all params.
          // Using HTTP as per some free plan examples. Adjust if your plan supports HTTPS.
          const response = await axios.get('http://api.mediastack.com/v1/news', {
            params: {
              access_key: MEDIASTACK_API_KEY,
              keywords: 'Tigray',
              countries: 'et', 
              languages: currentLang === 'sv' ? 'sv' : 'en', // Mediastack uses 'en', 'sv'
              limit: 15,
              sort: 'published_desc',
            },
          });
          const mediastackArticles = response.data.data?.map((article: MediastackArticle): NewsItem | null => {
            if (!article.url) return null;
            return {
              id: 0,
              title: {
                en: article.title || "No title available",
                sv: article.title || "Ingen titel tillgänglig",
              },
              content: {
                en: article.description || "No content available",
                sv: article.description || "Inget innehåll tillgängligt",
              },
              date: article.published_at || new Date().toISOString(),
              category: article.source || "Mediastack",
              imageUrl: article.image || undefined,
              url: article.url,
            };
          }).filter((item: NewsItem | null) => item !== null) as NewsItem[];
          allArticles = allArticles.concat(mediastackArticles);
        } catch (e: unknown) {
          console.error("Error fetching Mediastack:", e);
          errors.push("Mediastack");
        }
      }

      // 3. NewsData.io
      if (NEWSDATA_API_KEY) {
        try {
          const response = await axios.get('https://newsdata.io/api/1/news', {
            params: {
              apikey: NEWSDATA_API_KEY,
              q: 'Tigray',
              country: 'et',
              language: currentLang, 
              size: 10, // Max for free tier is often 10 results per page
            },
          });
          const newsdataArticles = response.data.results?.map((article: NewsDataIOArticle): NewsItem | null => {
            if (!article.link) return null;
            return {
              id: 0,
              title: {
                en: article.title || "No title available",
                sv: article.title || "Ingen titel tillgänglig",
              },
              content: {
                en: article.description || article.content || "No content available",
                sv: article.description || article.content || "Inget innehåll tillgängligt",
              },
              date: article.pubDate || new Date().toISOString(),
              category: article.source_id || "NewsData.io", // source_id might be a slug
              imageUrl: article.image_url || undefined,
              url: article.link,
            };
          }).filter((item: NewsItem | null) => item !== null) as NewsItem[];
          allArticles = allArticles.concat(newsdataArticles);
        } catch (e: unknown) {
          console.error("Error fetching NewsData.io:", e);
          errors.push("NewsData.io");
        }
      }
      
      // Deduplicate articles by URL
      const uniqueArticlesMap = new Map<string, NewsItem>();
      allArticles.forEach(article => {
        if (!uniqueArticlesMap.has(article.url)) {
          uniqueArticlesMap.set(article.url, article);
        }
      });
      let finalArticles = Array.from(uniqueArticlesMap.values());

      // Sort by date descending
      finalArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      // Re-assign unique IDs
      finalArticles = finalArticles.map((article, index) => ({ ...article, id: index + 1 }));


      if (finalArticles.length > 0) {
        const uniqueCategories = [
          "all",
          ...Array.from(new Set(finalArticles.map(item => item.category.toLowerCase()))),
        ];
        setNewsItems(finalArticles);
        setCategories(uniqueCategories);
        setError(null);
        try {
          sessionStorage.setItem(
            cacheKey,
            JSON.stringify({ newsItems: finalArticles, categories: uniqueCategories })
          );
        } catch (e) {
          console.warn("Could not cache news data:", e);
        }
      } else {
        if (errors.length === 3 && GNEWS_API_KEY && MEDIASTACK_API_KEY && NEWSDATA_API_KEY) { // Check if all configured APIs failed
             setError(`Failed to load news from all sources. Errors: ${errors.join(', ')}.`);
        } else if (errors.length > 0 && errors.length < 3) {
             setError(`Failed to load news from some sources: ${errors.join(', ')}. Displaying available data.`);
             // If some data was fetched but then filtered to zero, this case might not be ideal
             // but if allArticles was empty from the start and some APIs failed:
             if(allArticles.length === 0) setNewsItems([]); 
        } else if (!GNEWS_API_KEY && !MEDIASTACK_API_KEY && !NEWSDATA_API_KEY) {
            setError("No news APIs configured. Please check environment variables.");
        }
         else {
           setError("No news articles found matching your criteria.");
           setNewsItems([]); // Ensure newsItems is empty
        }
      }
      setIsLoading(false);
    };

    fetchNews();
  }, [language]); // API keys are not in dependency array as they come from import.meta.env and don't change

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (e) {
      console.error("Invalid date format:", dateStr);
      return "";
    }
  };

  const filteredNewsItems = activeCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category.toLowerCase() === activeCategory);

  const totalPages = Math.ceil(filteredNewsItems.length / itemsPerPage);
  const currentNewsItems = filteredNewsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderText = (text: string | { en: string; sv: string }): string => {
    if (typeof text === "string") return text;
    if (text && (text.en || text.sv)) return text[language] || text.en || "";
    return "";
  };

  return (
    <main>
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">{t("news.title") || "Ternafit News & Updates"}</h1>
          <p className="text-center mt-4 text-lg max-w-2xl mx-auto">
            {t("news.description") || "Stay connected with Ternafit as we continue our journey to support the people of Tigray. Bookmark this page for updates, milestones, and news of impact from our organization and the region."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Category Filter */}
              <div className="mb-8 overflow-x-auto">
                <div className="flex space-x-2 min-w-max">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        activeCategory === category
                          ? "bg-terracotta text-white"
                          : "bg-muted text-foreground hover:bg-terracotta/20"
                      }`}
                      onClick={() => {
                        setActiveCategory(category);
                        setCurrentPage(1);
                      }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <hr className="my-10" />

              {/* Loading and Error States */}
              {isLoading && (
                <div className="text-center py-10">Loading news...</div>
              )}
              
              {error && (
                <div className="text-center text-red-600 py-10">{error}</div>
              )}

              {/* News List */}
              {!isLoading && !error && (
                <>
                  <div className="space-y-8">
                    {currentNewsItems.length > 0 ? (
                      currentNewsItems.map((item) => (
                        <article key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <div className="md:flex">
                            {item.imageUrl && (
                              <div className="md:w-1/3">
                                <img
                                  src={item.imageUrl}
                                  alt={renderText(item.title)}
                                  className="w-full h-48 md:h-full object-cover"
                                  loading="lazy"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/images/default-news.jpg';
                                  }}
                                />
                              </div>
                            )}
                            <div className={`p-6 ${item.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
                              <div className="flex justify-between items-start mb-2">
                                <span className="bg-muted px-3 py-1 rounded-full text-xs">
                                  {item.category}
                                </span>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  <span>{formatDate(item.date)}</span>
                                </div>
                              </div>
                              <h2 className="text-xl font-serif font-bold mb-3">
                                {renderText(item.title)}
                              </h2>
                              <p className="text-muted-foreground mb-4 line-clamp-3">
                                {renderText(item.content)}
                              </p>
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-terracotta font-medium hover:underline flex items-center"
                              >
                                {t("common.readMore") || "Read more"}
                                <ArrowRight className="h-4 w-4 ml-1" />
                              </a>
                            </div>
                          </div>
                        </article>
                      ))
                    ) : (
                      <div className="text-center py-10">No news found for this category.</div>
                    )}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-10">
                      <nav className="flex items-center space-x-2">
                        <button
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage(currentPage - 1)}
                          className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors disabled:opacity-50"
                          aria-label="Previous page"
                        >
                          &larr;
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded ${
                              currentPage === index + 1
                                ? "bg-terracotta text-white"
                                : "border border-muted hover:bg-muted"
                            }`}
                            aria-label={`Page ${index + 1}`}
                          >
                            {index + 1}
                          </button>
                        ))}
                        <button
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage(currentPage + 1)}
                          className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors disabled:opacity-50"
                          aria-label="Next page"
                        >
                          &rarr;
                        </button>
                      </nav>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              <DonateBox compact sticky />

              {/* Featured News */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-serif font-semibold mb-4">
                  {t("news.featured") || "Featured News"}
                </h3>
                <div className="space-y-4">
                  {newsItems.slice(0, 3).map((item) => (
                    <div key={`featured-${item.id}`} className="flex gap-3">
                      <div className="flex-shrink-0 w-16 h-16">
                        <img
                          src={item.imageUrl || '/images/default-news.jpg'}
                          alt={renderText(item.title)}
                          className="w-full h-full object-cover rounded"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-terracotta"
                          >
                            {renderText(item.title)}
                          </a>
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(item.date)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-terracotta text-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-serif font-semibold mb-3">
                  {t("news.newsletterTitle") || "Stay Updated"}
                </h3>
                <p className="text-sm mb-4">
                  {t("news.newsletterDescription") || "Subscribe to our newsletter to receive the latest news and updates from Ternafit."}
                </p>
                <form 
                  action="https://dev.us9.list-manage.com/subscribe/post?u=17d8ed2a68846353b5803e6f6&id=43d363d756&f_id=001c52e1f0" 
                  method="post" 
                  name="mc-embedded-subscribe-form"
                  className="validate space-y-3"
                  target="_blank" 
                  noValidate
                >
                  <input
                    type="email"
                    name="EMAIL" 
                    placeholder={t("common.email") || "Your email"}
                    className="w-full px-4 py-2 rounded border border-white bg-transparent placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    required 
                  />
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                      <input type="text" name="b_17d8ed2a68846353b5803e6f6_43d363d756" tabIndex={-1} defaultValue="" />
                  </div>
                  <button 
                    type="submit" 
                    name="subscribe"
                    className="w-full py-2 bg-white text-terracotta font-medium rounded hover:bg-white/90 transition-colors"
                  >
                    {t("common.subscribe") || "Subscribe"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;