
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { Users, Megaphone, Handshake } from "lucide-react";

const ImpactStats = () => {
  const { t } = useLanguage();
  const [animated, setAnimated] = useState(false);
  
  // Animation trigger
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('impact-stats');
      if (!element) return;
      
      const position = element.getBoundingClientRect();
      // If element is in viewport
      if (position.top < window.innerHeight && position.bottom >= 0) {
        setAnimated(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-terracotta" />,
      value: 3500,
      label: t("home.impact.peopleReached"),
      prefix: "",
      suffix: "+",
    },
    {
      icon: <Megaphone className="h-8 w-8 text-terracotta" />,
      value: 5,
      label: t("home.impact.advocacyCampaigns"),
      prefix: "",
      suffix: "",
    },
    {
      icon: <Handshake className="h-8 w-8 text-terracotta" />,
      value: 4,
      label: t("home.impact.strategicPartnerships"),
      prefix: "",
      suffix: "",
    },
  ];
  
  return (
    <section id="impact-stats" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          {t("home.impact.title")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 rounded-xl border border-muted bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">
                {stat.prefix}
                {animated ? stat.value : 0}
                {stat.suffix}
              </div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
