
import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Mock news data - in a real implementation, this would come from an API
const newsItems = [
  {
    id: 1,
    title: {
      en: "Emergency Relief Delivered to Eastern Tigray",
      sv: "Akut nödhjälp levererad till östra Tigray"
    },
    content: {
      en: "Thanks to your donations, we were able to deliver essential supplies to families in need.",
      sv: "Tack vare era donationer kunde vi leverera nödvändiga förnödenheter till behövande familjer."
    },
    date: "2025-03-10",
    category: "Emergency Relief",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: {
      en: "New Educational Program Launches Next Month",
      sv: "Nytt utbildningsprogram startar nästa månad"
    },
    content: {
      en: "Our new initiative aims to provide educational resources to children affected by the crisis.",
      sv: "Vårt nya initiativ syftar till att tillhandahålla utbildningsresurser till barn som påverkats av krisen."
    },
    date: "2025-03-05",
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: {
      en: "Advocacy Campaign Results in Policy Changes",
      sv: "Påverkanskampanj resulterar i policyförändringar"
    },
    content: {
      en: "Our recent advocacy efforts have led to significant policy changes to benefit the Tigrean community.",
      sv: "Våra senaste påverkansinsatser har lett till betydande policyförändringar till förmån för det tigreanska samhället."
    },
    date: "2025-02-28",
    category: "Advocacy",
    imageUrl: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 4,
    title: {
      en: "Water Project Completed in Western Tigray",
      sv: "Vattenprojekt slutfört i västra Tigray"
    },
    content: {
      en: "Clean water is now accessible to thousands of residents through our latest infrastructure project.",
      sv: "Rent vatten är nu tillgängligt för tusentals invånare genom vårt senaste infrastrukturprojekt."
    },
    date: "2025-02-20",
    category: "Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 5,
    title: {
      en: "Healthcare Training Program Graduates First Cohort",
      sv: "Sjukvårdsutbildningsprogram utexaminerar första kullen"
    },
    content: {
      en: "25 new healthcare workers have completed their training and will be deployed to rural clinics.",
      sv: "25 nya sjukvårdare har slutfört sin utbildning och kommer att sättas in på landsbygdskliniker."
    },
    date: "2025-02-15",
    category: "Healthcare",
    imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 6,
    title: {
      en: "Annual Fundraising Gala Raises Record Amount",
      sv: "Årlig insamlingsgala samlar in rekordbelopp"
    },
    content: {
      en: "This year's gala event raised over $250,000 for our ongoing programs in Tigray.",
      sv: "Årets galaevenemang samlade in över 2,5 miljoner kronor till våra pågående program i Tigray."
    },
    date: "2025-02-10",
    category: "Fundraising",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop"
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

const NewsPage = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter news by category
  const filteredNews = activeCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(newsItems.map(item => item.category.toLowerCase())))];

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
                      onClick={() => setActiveCategory(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* News List */}
              <div className="space-y-8">
                {filteredNews.map((item) => (
                  <article key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={item.imageUrl}
                          alt={item.title[language as keyof typeof item.title] || item.title.en}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
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
                          {item.title[language as keyof typeof item.title] || item.title.en}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {item.content[language as keyof typeof item.content] || item.content.en}
                        </p>
                        <Link to={`/news/${item.id}`} className="text-terracotta font-medium hover:underline flex items-center">
                          {t("common.readMore")}
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-10">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors">
                    &larr;
                  </button>
                  <button className="px-3 py-1 rounded bg-terracotta text-white">1</button>
                  <button className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors">2</button>
                  <button className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors">3</button>
                  <button className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors">
                    &rarr;
                  </button>
                </nav>
              </div>
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
                            alt={item.title[language as keyof typeof item.title] || item.title.en}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium line-clamp-2">
                            <Link to={`/news/${item.id}`} className="hover:text-terracotta">
                              {item.title[language as keyof typeof item.title] || item.title.en}
                            </Link>
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
