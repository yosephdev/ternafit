
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

// Mock news data - in a real implementation, this would come from an API
const newsItems = [
  {
    id: 1,
    title: {
      en: "Emergency Relief Delivered to Eastern Tigray",
      sv: "Akut nödhjälp levererad till östra Tigray"
    },
    excerpt: {
      en: "Thanks to your donations, we were able to deliver essential supplies to families in need.",
      sv: "Tack vare era donationer kunde vi leverera nödvändiga förnödenheter till behövande familjer."
    },
    date: "2025-03-10",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: {
      en: "New Educational Program Launches Next Month",
      sv: "Nytt utbildningsprogram startar nästa månad"
    },
    excerpt: {
      en: "Our new initiative aims to provide educational resources to children affected by the crisis.",
      sv: "Vårt nya initiativ syftar till att tillhandahålla utbildningsresurser till barn som påverkats av krisen."
    },
    date: "2025-03-05",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: {
      en: "Advocacy Campaign Results in Policy Changes",
      sv: "Påverkanskampanj resulterar i policyförändringar"
    },
    excerpt: {
      en: "Our recent advocacy efforts have led to significant policy changes to benefit the Tigrean community.",
      sv: "Våra senaste påverkansinsatser har lett till betydande policyförändringar till förmån för det tigreanska samhället."
    },
    date: "2025-02-28",
    imageUrl: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=500&auto=format&fit=crop"
  }
];

const formatDate = (dateString: string, language: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const LatestNews = () => {
  const { t, language } = useLanguage();

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article 
              key={item.id} 
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title[language as keyof typeof item.title] || item.title.en}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(item.date, language)}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {item.title[language as keyof typeof item.title] || item.title.en}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.excerpt[language as keyof typeof item.excerpt] || item.excerpt.en}
                </p>
                <Link 
                  to={`/news/${item.id}`} 
                  className="text-terracotta font-medium hover:underline"
                >
                  {t("common.readMore")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
