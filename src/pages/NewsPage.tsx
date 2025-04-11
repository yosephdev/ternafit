import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const NewsPage = () => {
  const { t, language } = useLanguage();
  const [newsItems, setNewsItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState(["all"]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNews = async () => {
      const cacheKey = `tigrayNews_${language}`;
      const cachedData = sessionStorage.getItem(cacheKey);

      if (cachedData) {
        const parsed = JSON.parse(cachedData);
        setNewsItems(parsed.newsItems);
        setCategories(parsed.categories);
        return;
      }

      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'Tigray AND Tigray',
            apiKey: '9fcccfdfe49f43cf8408d08263b75355',
            language: language === 'sv' ? 'sv' : 'en',
          },
        });

        const filteredArticles = response.data.articles.filter(article =>
          article.title?.toLowerCase().includes('tigray') ||
          article.description?.toLowerCase().includes('tigray') ||
          article.content?.toLowerCase().includes('tigray')
        );

        const articles = filteredArticles.map((article, index) => ({
          id: index + 1,
          title: {
            en: article.title,
            sv: article.title,
          },
          content: {
            en: article.description || article.content,
            sv: article.description || article.content,
          },
          date: article.publishedAt,
          category: article.source.name,
          imageUrl: article.urlToImage,
          url: article.url,
        }));

        const uniqueCategories = [
          "all",
          ...Array.from(new Set(articles.map(item => item.category.toLowerCase()))),
        ];

        setNewsItems(articles);
        setCategories(uniqueCategories);

        sessionStorage.setItem(cacheKey, JSON.stringify({ newsItems: articles, categories: uniqueCategories }));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [language]);

  const formatDate = (dateString, language) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const filteredNews = activeCategory === "all"
    ? newsItems
    : newsItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNewsItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <main>
      {/* Page Header */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">{t("nav.news")}</h1>
        </div>
      </section>

      {/* News Content */}
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
                        setCurrentPage(1); // Reset page when category changes
                      }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* News List */}
              <div className="space-y-8">
                {currentNewsItems.map((item) => (
                  <article key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      {item.imageUrl && (
                        <div className="md:w-1/3">
                          <img
                            src={item.imageUrl}
                            alt={item.title[language] || item.title.en}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-2">
                          <span className="bg-muted px-3 py-1 rounded-full text-xs">
                            {item.category}
                          </span>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{formatDate(item.date, language)}</span>
                          </div>
                        </div>
                        <h2 className="text-xl font-serif font-bold mb-3">
                          {item.title[language] || item.title.en}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {item.content[language] || item.content.en}
                        </p>
                        <a
                            href={item.url} // Ensure item.url is correctly populated
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-terracotta font-medium hover:underline flex items-center"
                          >
                            {t("common.readMore")}
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </a>

                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-10">
                  <nav className="flex items-center space-x-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                      className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors"
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
                      >
                        {index + 1}
                      </button>
                    ))}
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors"
                    >
                      &rarr;
                    </button>
                  </nav>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="space-y-6">
                <DonateBox compact sticky />

                {/* Featured News */}
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h3 className="text-lg font-serif font-semibold mb-4">Featured News</h3>
                  <div className="space-y-4">
                    {newsItems.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="flex-shrink-0 w-16 h-16">
                          <img
                            src={item.imageUrl}
                            alt={item.title[language] || item.title.en}
                            className="w-full h-full object-cover rounded"
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
                              {item.title[language] || item.title.en}
                            </a>
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {formatDate(item.date, language)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-terracotta text-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-serif font-semibold mb-3">Stay Updated</h3>
                  <p className="text-sm mb-4">
                    Subscribe to our newsletter to receive the latest news and updates from Ternafit.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder={t("common.email")}
                      className="w-full px-4 py-2 rounded border border-white bg-transparent placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="w-full py-2 bg-white text-terracotta font-medium rounded hover:bg-white/90 transition-colors">
                      {t("common.subscribe")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
