import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

interface FeaturedUpdate {
  id: number;
  date: string;
  title: string;
  content: string;
}

const featuredUpdates: FeaturedUpdate[] = [
  {
    id: 1,
    date: "2024-01-01",
    title: "Our Beginnings: Ternafit's First Year in Action",
    content: "Since its founding, Ternafit has been actively building the groundwork for a long-term impact. Learn about our first steps, including our focus on partnerships and raising awareness about the ongoing crisis in Tigray."
  },
  {
    id: 2,
    date: "2024-05-23",
    title: "Raising Awareness: The Power of Global Voices",
    content: "Ternafit continues to engage with the Tigrayan diaspora and international communities to highlight the situation in Tigray. Explore how our outreach efforts are helping to amplify the voices of those affected by the conflict."
  },
  {
    id: 3,
    date: "2024-06-01",
    title: "Small Steps, Big Impact: How Your Support is Making a Difference",
    content: "Even in these early stages, every donation and act of support has been crucial. Read stories of how your contributions are beginning to make an impact, from supporting advocacy efforts to planning future humanitarian aid."
  },
  {
    id: 4,
    date: "2024-08-27",
    title: "Building Momentum: Our Plans for the Year Ahead",
    content: "Looking forward, Ternafit is focused on expanding its reach and impact. Learn about our plans for the coming year, including initiatives to increase fundraising, volunteer opportunities, and community engagement."
  },
  {
    id: 5,
    date: "2024-08-27",
    title: "Latest Developments from Ternafit",
    content:
      "As of August 27, 2024, Ternafit has reached several significant milestones:\n" +
      "- **Finalized Organizational Bylaws**: We have established our official bylaws and organizational structure.\n" +
      "- **Documented Initiatives**: An official record of our initiatives and decisions has been created to ensure transparency and accountability.\n" +
      "- **Inaugural Meeting**: We were excited to invite our supporters to our inaugural meeting, where we discussed our vision and future plans.\n" +
      "- **Social Media Campaigns**: Our social media campaigns are now live, aimed at expanding the reach of our mission and engaging with a broader audience.\n" +
      "- **Website Launch**: We have successfully built the website for AneniTigray Development Services (ADS), a key organization dedicated to supporting Tigrayan initiatives.\n" +
      "- **Google Business Profile**: A Google Business profile and official organizational email addresses have been established for ADS staff to enhance our professional presence.\n"
  },
  {
    id: 6,
    date: "2024-09-10",
    title: "Recent News: Tigray's Path to Recovery",
    content:
      "Humanitarian Aid Reaches Remote Areas\n\n" +
      "As of September 2024, humanitarian aid has successfully reached some of the most remote areas in Tigray. This effort has been crucial in providing food, medical supplies, and other essential resources to communities that have been cut off due to the conflict.\n\n" +
      "Education Initiatives for Tigrayan Children\n\n" +
      "In October 2024, Ternafit launched a new education initiative aimed at providing learning materials and support to children in Tigray. This program focuses on ensuring that children can continue their education despite the ongoing challenges.\n\n" +
      "Healthcare Improvements in Tigray\n\n" +
      "Recent efforts have been made to improve healthcare facilities in Tigray. New clinics have been established, and existing ones have been refurbished to provide better medical care to the local population."
  }
];

const NewsPage = () => {
  const { t, language } = useLanguage();

  // External News
  interface NewsItem {
    id: number;
    title: string | { en: string; sv: string };
    content: string | { en: string; sv: string };
    date: string;
    category: string;
    imageUrl: string | null;
    url: string;
  }
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Replace the existing useEffect hook with this updated version
useEffect(() => {
  const cacheKey = `tigrayNews_${language}`;

  // Detect and wipe incompatible cache
  const cachedData = sessionStorage.getItem(cacheKey);
  let incompatibleCache = false;

  if (cachedData) {
    const parsed = JSON.parse(cachedData);
    if (parsed.newsItems?.length && 
        (typeof parsed.newsItems[0].title === "object" ||
         typeof parsed.newsItems[0].content === "object")) {
      incompatibleCache = true;
      sessionStorage.removeItem(cacheKey);
    }
  }

  setIsLoading(true);
  setFetchError(null);

  if (!incompatibleCache && cachedData) {
    const parsed = JSON.parse(cachedData);
    setNewsItems(parsed.newsItems);
    setIsLoading(false);
    return;
  }

  // Use GNews API instead of NewsAPI
  axios.get('https://gnews.io/api/v4/search', {
    params: {
      q: 'Tigray OR TPLF OR Mekelle',
      apikey: import.meta.env.VITE_GNEWS_API_KEY, // Changed from token to apikey and use env var
      lang: language === 'sv' ? 'sv' : 'en',
      country: 'et', // Added country
      max: 10
    },
  })
    .then(response => {
      // GNews API returns articles in response.data.articles
      const filteredArticles = response.data.articles.filter(article =>
        article.title?.toLowerCase().includes('tigray') ||
        article.description?.toLowerCase().includes('tigray') ||
        article.content?.toLowerCase().includes('tigray')
      );

      const articles = filteredArticles.map((article, index) => ({
        id: index + 1,
        title: article.title,
        content: article.description || article.content || "",
        date: article.publishedAt,
        category: article.source?.name || "Unknown Source",
        imageUrl: article.image || null,
        url: article.url,
      }));

      setNewsItems(articles);
      sessionStorage.setItem(cacheKey, JSON.stringify({ newsItems: articles }));
    })
    .catch(error => {
      setFetchError("External news could not be loaded at this time. Please check back later.");
      console.error("News fetch error:", error);
    })
    .finally(() => setIsLoading(false));

}, [language]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const currentNewsItems = newsItems.slice(
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
      {/* Page Header */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">Ternafit News & Updates</h1>
          <p className="text-center mt-4 text-lg max-w-2xl mx-auto">
            Stay connected with Ternafit as we continue our journey to support the people of Tigray. Bookmark this page for updates, milestones, and news of impact from our organization and the region.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">

              {/* Featured Ternafit Updates */}
              <section>
                <h2 className="text-2xl font-serif font-bold mb-6">Featured Updates from Ternafit</h2>
                <div className="space-y-7">
                  {featuredUpdates.map(update => (
                    <article key={update.id} className="bg-white rounded-lg shadow-md p-6 border">
                      <div className="flex items-center mb-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{formatDate(update.date)}</span>
                      </div>
                      <h3 className="text-xl font-serif font-semibold mb-2">{update.title}</h3>
                      <div className="prose">
                        {update.content.split('\n').map((para, i) => (
                          para.trim() !== "" ? <p key={i}>{para}</p> : <br key={i} />
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Divider */}
              <hr className="my-10" />

              {/* More News (External) */}
              <section>
                <h2 className="text-xl font-serif font-bold mb-6">More News about Tigray</h2>
                {isLoading && <div className="mb-6 text-center">Loading latest news…</div>}
                {fetchError && <div className="mb-6 text-center text-red-600">{fetchError}</div>}
                {!isLoading && !fetchError && currentNewsItems.length === 0 && (
                  <div className="mb-6 text-center">No external news found.</div>
                )}
                <div className="space-y-8">
                  {currentNewsItems.map(item => (
                    <article key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="md:flex">
                        {item.imageUrl && (
                          <div className="md:w-1/3">
                            <img
                              src={item.imageUrl}
                              alt={renderText(item.title)}
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
                              <span>{formatDate(item.date)}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{renderText(item.title)}</h3>
                          <p className="text-muted-foreground mb-2">
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
                        aria-label="Previous page"
                      >
                        &larr;
                      </button>
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`px-3 py-1 rounded ${currentPage === index + 1
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
                        className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors"
                        aria-label="Next page"
                      >
                        &rarr;
                      </button>
                    </nav>
                  </div>
                )}
              </section>

            </div>
            {/* Sidebar */}
            <aside className="md:col-span-1 space-y-6">
              <DonateBox compact sticky />
              <div className="bg-terracotta text-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-serif font-semibold mb-3">Stay Updated</h3>
                <p className="text-sm mb-4">
                  Subscribe to our newsletter to receive the latest news and updates from Ternafit.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder={t("common.email") || "Your email"}
                    className="w-full px-4 py-2 rounded border border-white bg-transparent placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full py-2 bg-white text-terracotta font-medium rounded hover:bg-white/90 transition-colors">
                    {t("common.subscribe") || "Subscribe"}
                  </button>
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
