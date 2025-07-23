
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Hero backgrounds for different regions
const regionalBackgrounds = {
  nordic: "/images/projects/hero-international.webp", // Placeholder - this would be replaced with actual image
  international: "/images/projects/hero-international.webp", // Placeholder - this would be replaced with actual image
  default: "/images/projects/hero-international.webp", // Default image
};

const Hero = () => {
  const { t, language } = useLanguage();
  const [region, setRegion] = useState<string>("default");
  
  // Simulating AI-driven location detection
  useEffect(() => {
    // In a real implementation, this would be based on IP geolocation
    // For now, we'll just use the language setting
    if (language === 'sv') {
      setRegion("nordic");
    } else {
      setRegion("international");
    }
  }, [language]);

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/gemini-hero-video.webm" type="video/webm" />
          <source src="/videos/gemini-hero-video.mp4" type="video/mp4" />
          <img 
            src="/images/projects/hero-international.webp" 
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
          {t("home.hero.title")}
        </h1>
        
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl animate-fade-in">
          {t("home.hero.subtitle")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Link to={t("path.donate")}>
            <Button className="bg-white text-terracotta hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
              {t("home.cta.donate")}
            </Button>
          </Link>
          
          <Link to={t("path.about")}>
            <Button variant="outline" className="border-2 border-white text-terracotta hover:bg-white/10 font-semibold px-8 py-6 text-lg">
              {t("home.cta.learn")}
            </Button>
          </Link>
        </div>
        
        {/* Optional: Add a "Currently X people are donating" banner */}
        <div className="mt-12 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white text-sm">
          <span className="font-semibold">3 {t('home.donations.people')}</span> {t('home.donations.donatedToday')}
        </div>
      </div>
    </div>
  );
};

export default Hero;
