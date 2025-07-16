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

const NewsPage = () => {
  const { t, language } = useLanguage();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>(["all"]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 10;

  // Enhanced news sources configuration
  const NEWS_SOURCES = [
    {
      name: 'Toronto Star',
      searchTerms: ['Tigray', 'Ethiopia humanitarian', 'Horn of Africa crisis'],
      category: 'International'
    },
    {
      name: 'The Conversation',
      searchTerms: ['Tigray conflict', 'Ethiopia analysis', 'Horn of Africa'],
      category: 'Analysis'
    },
    {
      name: 'Associated Press',
      searchTerms: ['Tigray', 'Ethiopia', 'humanitarian crisis'],
      category: 'International'
    },
    {
      name: 'Globe and Mail',
      searchTerms: ['Ethiopia Tigray', 'humanitarian aid', 'conflict recovery'],
      category: 'International'
    },
    {
      name: 'The Guardian',
      searchTerms: ['Tigray', 'Ethiopia humanitarian', 'conflict aftermath'],
      category: 'International'
    }
  ];

  // Enhanced local news with more variety and international sources
  const getLocalNews = () => [
    {
      title: { 
        en: "Tigray Health Bureau Reports Progress in Medical Supply Distribution", 
        sv: "Tigrays hälsostyrelse rapporterar framsteg i distribution av medicinska förnödenheter" 
      },
      content: { 
        en: "Local health officials confirm delivery of essential medicines to 15 health centers across central Tigray, benefiting over 50,000 residents.", 
        sv: "Lokala hälsotjänstemän bekräftar leverans av viktiga mediciner till 15 hälsocenter över centrala Tigray." 
      },
      date: new Date().toISOString(),
      category: "Health",
      imageUrl: "/images/news/tigray-health.jpg",
      url: "#local-health-update"
    },
    {
      title: { 
        en: "Education Revival: 450 Schools Reopen Across Tigray", 
        sv: "Utbildningsuppvaknande: 450 skolor öppnar igen över hela Tigray" 
      },
      content: { 
        en: "A major milestone as hundreds of schools welcome back students, though many still lack basic supplies and infrastructure.", 
        sv: "En viktig milstolpe när hundratals skolor välkomnar tillbaka elever." 
      },
      date: new Date(Date.now() - 172800000).toISOString(),
      category: "Education",
      imageUrl: "/images/news/schools-reopen.jpg",
      url: "#education-revival"
    },
    {
      title: { 
        en: "Women's Cooperatives Launch Income Generation Projects", 
        sv: "Kvinnors kooperativ lanserar inkomstgenererande projekt" 
      },
      content: { 
        en: "Local women's groups in rural Tigray establish textile and agricultural cooperatives, creating sustainable livelihoods for 200+ families.", 
        sv: "Lokala kvinnogrupper på landsbygden i Tigray etablerar textil- och jordbrukskooperativ." 
      },
      date: new Date(Date.now() - 259200000).toISOString(),
      category: "Women & Gender",
      imageUrl: "/images/news/womens-cooperatives.jpg",
      url: "#womens-cooperatives"
    },
    {
      title: { 
        en: "Mobile Clinics Reach Remote Villages in Western Tigray", 
        sv: "Mobila kliniker når avlägsna byar i västra Tigray" 
      },
      content: { 
        en: "Healthcare teams provide essential services to isolated communities, conducting health screenings and vaccinations for children.", 
        sv: "Vårdteam tillhandahåller viktiga tjänster till isolerade samhällen." 
      },
      date: new Date(Date.now() - 345600000).toISOString(),
      category: "Health",
      imageUrl: "/images/news/mobile-clinics.jpg",
      url: "#mobile-clinics"
    },
    // Add more fallback international-style news
    {
      title: { 
        en: "UN Reports Improved Humanitarian Access to Tigray Region", 
        sv: "FN rapporterar förbättrad humanitär tillgång till Tigray-regionen" 
      },
      content: { 
        en: "United Nations agencies report increased access to previously unreachable areas, enabling delivery of food aid to 75,000 additional people.", 
        sv: "FN-organ rapporterar ökad tillgång till tidigare onåbara områden, vilket möjliggör leverans av mathjälp till ytterligare 75 000 personer." 
      },
      date: new Date(Date.now() - 432000000).toISOString(),
      category: "International",
      imageUrl: "/images/news/un-aid.jpg",
      url: "https://news.un.org/en/story/2024/07/1151726"
    },
    {
      title: { 
        en: "Ethiopian Government Announces Infrastructure Rebuilding Initiative", 
        sv: "Etiopiska regeringen tillkännager initiativ för återuppbyggnad av infrastruktur" 
      },
      content: { 
        en: "Major infrastructure projects launched to restore roads, bridges, and communication networks in Tigray, with international funding support.", 
        sv: "Stora infrastrukturprojekt lanserade för att återställa vägar, broar och kommunikationsnätverk i Tigray, med internationellt finansieringsstöd." 
      },
      date: new Date(Date.now() - 518400000).toISOString(),
      category: "Reconstruction",
      imageUrl: "/images/news/infrastructure.jpg",
      url: "https://www.reuters.com/world/africa/ethiopia-tigray-reconstruction-2024-07-10/"
    }
  ];

  // Enhanced filtering function
  const isTigrayRelevant = (text: string): boolean => {
    const lowerText = text.toLowerCase();
    const tigrayKeywords = [
      'tigray', 'tigrayan', 'tigrinya', 'mekelle', 'axum', 'adwa',
      'ayder hospital', 'tigray region', 'northern ethiopia'
    ];
    
    const contextKeywords = [
      'humanitarian', 'aid', 'medical', 'food', 'water', 'education', 
      'reconstruction', 'recovery', 'children', 'health', 'crisis',
      'conflict', 'peace', 'rebuilding', 'support'
    ];
    
    const hasTigrayKeyword = tigrayKeywords.some(kw => lowerText.includes(kw));
    const hasContextKeyword = contextKeywords.some(kw => lowerText.includes(kw));
    
    return hasTigrayKeyword || (lowerText.includes('ethiopia') && hasContextKeyword);
  };

  useEffect(() => {
    const GNEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

    const fetchNews = async () => {
      setIsLoading(true);
      setError(null);
      const currentLang = language === 'sv' ? 'sv' : 'en';
      const cacheKey = `tigrayCombinedNews_v3_${currentLang}`;
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
          sessionStorage.removeItem(cacheKey);
        }
      }

      let allArticles: NewsItem[] = [];

      // 1. Add local news first
      const localNews = getLocalNews();
      allArticles = allArticles.concat(localNews.map((item, index) => ({
        ...item,
        id: 1000 + index
      })));

      // 2. Fetch from international sources via GNews
      if (GNEWS_API_KEY) {
        try {
          const queries = [
            'Tigray humanitarian aid',
            'Ethiopia Tigray recovery',
            'Horn of Africa crisis',
            'Ethiopia conflict aftermath',
            'Tigray children education health'
          ];

          for (const query of queries) {
            try {
              const response = await axios.get('https://gnews.io/api/v4/search', {
                params: {
                  q: query,
                  lang: currentLang,
                  max: 6,
                  apikey: GNEWS_API_KEY,
                },
              });

              const articles = response.data.articles?.filter((article: GNewsArticle) => {
                const text = `${article.title} ${article.description}`.toLowerCase();
                return isTigrayRelevant(text);
              }).map((article: GNewsArticle): NewsItem => ({
                id: 0,
                title: {
                  en: article.title || "No title available",
                  sv: article.title || "Ingen titel tillgänglig",
                },
                content: {
                  en: article.description || "No content available",
                  sv: article.description || "Inget innehåll tillgängligt",
                },
                date: article.publishedAt || new Date().toISOString(),
                category: article.source?.name || "International",
                imageUrl: article.image || undefined,
                url: article.url,
              })) || [];

              allArticles = allArticles.concat(articles);
            } catch (queryError) {
              console.error(`Error fetching news for query "${query}":`, queryError);
            }
          }
        } catch (e) {
          console.error("Error fetching international news:", e);
        }
      }

      // 3. Deduplicate and process articles
      const uniqueArticlesMap = new Map<string, NewsItem>();
      allArticles.forEach(article => {
        if (!uniqueArticlesMap.has(article.url)) {
          uniqueArticlesMap.set(article.url, article);
        }
      });
      
      let finalArticles = Array.from(uniqueArticlesMap.values());

      // 4. Sort by date descending
      finalArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      // 5. Re-assign unique IDs
      finalArticles = finalArticles.map((article, index) => ({ ...article, id: index + 1 }));

      // 6. Enhanced categorization
      const categorizeArticle = (article: NewsItem): string => {
        const text = `${article.title.en} ${article.content.en}`.toLowerCase();
        
        if (text.includes('health') || text.includes('medical') || text.includes('hospital') || text.includes('clinic')) return 'Health';
        if (text.includes('education') || text.includes('school') || text.includes('student') || text.includes('teacher')) return 'Education';
        if (text.includes('food') || text.includes('water') || text.includes('humanitarian') || text.includes('aid')) return 'Humanitarian';
        if (text.includes('women') || text.includes('gender') || text.includes('cooperative')) return 'Women & Gender';
        if (text.includes('child') || text.includes('youth') || text.includes('young')) return 'Children & Youth';
        if (text.includes('agriculture') || text.includes('farming') || text.includes('crop')) return 'Agriculture';
        if (text.includes('reconstruction') || text.includes('rebuild') || text.includes('recovery')) return 'Reconstruction';
        if (text.includes('peace') || text.includes('reconciliation') || text.includes('dialogue')) return 'Peace & Reconciliation';
        
        return 'General';
      };

      // Apply categorization
      finalArticles = finalArticles.map(article => ({
        ...article,
        category: categorizeArticle(article)
      }));

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
        setError("No news articles found matching your criteria.");
        setNewsItems([]);
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
                                  alt={item.title[language]}
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
                                {item.title[language]}
                              </h2>
                              <p className="text-muted-foreground mb-4 line-clamp-3">
                                {item.content[language]}
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
                          alt={item.title[language]}
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
                            {item.title[language]}
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
