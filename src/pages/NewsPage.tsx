import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for internal routing

// Import the new curated content
import { curatedNews, NewsItem } from "@/data/curatedNews";

const NewsPage = () => {
  const { t, language } = useLanguage();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>(["all"]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 6; // Adjusted for a better layout

  useEffect(() => {
    setIsLoading(true);

    // No API call needed. We use our high-quality curated list directly.
    const allArticles = curatedNews;

    // Sort by date descending
    allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Extract unique categories
    const uniqueCategories = [
      "all",
      ...Array.from(new Set(allArticles.map(item => item.category))),
    ];

    setNewsItems(allArticles);
    setCategories(uniqueCategories);
    setIsLoading(false);
  }, [language]); 

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  const filteredNewsItems = activeCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const totalPages = Math.ceil(filteredNewsItems.length / itemsPerPage);
  const currentNewsItems = filteredNewsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const ReadMoreLink = ({ item }: { item: NewsItem }) => {
    const text = item.type === 'internal' ? (t("news.readAnalysis") || "Read Our Analysis") : (t("common.readMore") || "Read More");

    if (item.url === "#") {
      return <span className="text-muted-foreground italic text-sm mt-4 block">{t("news.partnerUpdate") || "Partner Field Update"}</span>;
    }

    if (item.type === 'internal') {
      return (
        <Link to={item.url} className="text-terracotta font-medium hover:underline flex items-center mt-4">
          {text}
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      );
    }

    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-terracotta font-medium hover:underline flex items-center mt-4">
        {text}
        <ArrowRight className="h-4 w-4 ml-1" />
      </a>
    );
  };


  return (
    <main>
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-4">{t("news.title") || "News & Updates"}</h1>
              <p className="text-lg">
                {t("news.description") || "A curated feed of important updates from our partners on the ground, our own analysis, and significant news regarding the recovery and rebuilding of Tigray."}
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/stories/selam-story.webp" 
                alt="News and updates from Tigray" 
                className="rounded-lg shadow-lg max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="mb-8 overflow-x-auto">
                <div className="flex space-x-2 border-b pb-4">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                        activeCategory === category
                          ? "bg-terracotta text-white"
                          : "bg-gray-100 text-foreground hover:bg-gray-200"
                      }`}
                      onClick={() => { setActiveCategory(category); setCurrentPage(1); }}
                    >
                      {t(`news.categories.${category.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_')}`) || category}
                    </button>
                  ))}
                </div>
              </div>

              {isLoading ? (
                <div className="text-center py-10">Loading news...</div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-8">
                    {currentNewsItems.length > 0 ? (
                      currentNewsItems.map((item) => (
                        <article key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row">
                          {item.imageUrl && (
                            <div className="md:w-1/3">
                              <img src={item.imageUrl} alt={item.title[language]} className="w-full h-48 md:h-full object-cover" loading="lazy" />
                            </div>
                          )}
                          <div className={`p-6 flex flex-col ${item.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs font-semibold text-terracotta uppercase">{item.source}</span>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-1.5" />
                                <span>{formatDate(item.date)}</span>
                              </div>
                            </div>
                            <h2 className="text-xl font-serif font-bold mb-3 flex-grow">
                              {item.title[language]}
                            </h2>
                            <p className="text-muted-foreground mb-4 line-clamp-3">
                              {item.content[language]}
                            </p>
                            <ReadMoreLink item={item} />
                          </div>
                        </article>
                      ))
                    ) : (
                      <div className="text-center py-10">No news found for this category.</div>
                    )}
                  </div>

                  {totalPages > 1 && (
                     <div className="flex justify-center mt-10 space-x-2">
                      {[...Array(totalPages)].map((_, i) => (
                        <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-10 h-10 rounded-full text-sm font-medium ${currentPage === i + 1 ? 'bg-terracotta text-white' : 'bg-muted hover:bg-gray-200'}`}>
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <aside className="md:col-span-1 space-y-8 sticky top-24">
              <DonateBox />
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-serif font-semibold mb-4">
                  {t("news.featured") || "Featured Updates"}
                </h3>
                <div className="space-y-4">
                  {newsItems.slice(0, 3).map((item) => (
                    <div key={`featured-${item.id}`}>
                      <p className="text-xs text-muted-foreground">{formatDate(item.date)}</p>
                      <h4 className="text-sm font-semibold leading-tight">
                        <a href={item.url} target={item.type === 'external' ? '_blank' : '_self'} rel="noopener noreferrer" className="hover:text-terracotta">
                          {item.title[language]}
                        </a>
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;