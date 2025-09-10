import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Consider if you really need regional backgrounds if you're using a video.
// If you do, ensure these images are high quality and impactful.
const regionalBackgrounds = {
  nordic: "/images/hero/hero-nordic-fallback.webp", // Specific, impactful image for Nordic
  international: "/images/hero/hero-international-fallback.webp", // Specific, impactful image for International
  default: "/images/hero/hero-default-fallback.webp", // General fallback
};

const Hero = () => {
  const { t, language } = useLanguage();
  const [region, setRegion] = useState<string>("default");

  // Simulating AI-driven location detection (using language as proxy for now)
  useEffect(() => {
    // In a real implementation, this would be based on IP geolocation or user preference
    if (language === 'sv') {
      setRegion("nordic");
    } else {
      setRegion("international");
    }
  }, [language]);

  // Determine which fallback image to use
  const fallbackBackgroundImage = regionalBackgrounds[region] || regionalBackgrounds.default;

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
      {/* Background Video with Fallback and Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          // Add a poster image for faster loading before video starts
          poster={fallbackBackgroundImage}
        >
          <source src="/videos/gemini-hero-video.webm" type="video/webm" />
          <source src="/videos/gemini-hero-video.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
          <img
            src={fallbackBackgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content Area - Centered and Spaced */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center justify-center min-h-[80vh]">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up drop-shadow-lg max-w-4xl">
          {t("home.hero.title")}
        </h1>

        {/* Subtitle / Mission Statement */}
        <p className="text-lg md:text-xl text-white mb-10 max-w-3xl animate-fade-in-up delay-200">
          {t("home.hero.subtitle")}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-400">
          <Link to={t("path.donate")}>
            <Button className="bg-terracotta text-white hover:bg-terracotta-dark font-bold px-10 py-7 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              {t("home.cta.donate")}
            </Button>
          </Link>

          <Link to={t("path.about")}>
            <Button
              variant="outline"
              className="border-2 border-white text-terracotta hover:bg-white hover:text-terracotta font-bold px-10 py-7 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              {t("home.cta.learn")}
            </Button>
          </Link>
        </div>

        {/* Optional: Immediate Impact / Social Proof */}
        {/* Reduced size to keep focus on main CTAs, could be a separate component below hero too */}
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 text-white text-sm md:text-base animate-fade-in-up delay-600">
          <span className="font-semibold">3 {t('home.donations.people')}</span> {t('home.donations.donatedToday')}
        </div>

        {/* Testimonial Snippet - A simplified version to keep the hero clean */}
        {/* Consider moving the full testimonial block to a dedicated section below the hero. */}
        {/* If keeping it here, make it smaller and less dominant than the main message. */}
        {/* <div className="mt-8 max-w-sm mx-auto bg-white/80 rounded-lg shadow-md p-4 animate-fade-in-up delay-700">
          <div className="flex items-center mb-2">
            <img src="/images/team/selam.webp" alt="Selam" className="w-9 h-9 rounded-full object-cover mr-2" />
            <span className="font-semibold text-terracotta text-sm">Selam, Student</span>
          </div>
          <blockquote className="italic text-gray-700 text-sm">"This scholarship didn't just pay for my school fees; it gave my family and me hope."</blockquote>
        </div> */}

        {/* Tigray Knowledge Base Snippet - Also consider moving this to a dedicated section below the hero */}
        {/* If keeping here, perhaps just a subtle link or small banner, not a full block. */}
        {/* <div className="mt-8 bg-yellow-50/80 rounded-lg shadow p-4 max-w-lg mx-auto text-center animate-fade-in-up delay-800">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <img
              src="/images/logo-tigray-knowledge-base.svg"
              alt="Tigray Knowledge Base Logo"
              className="h-6 w-auto"
            />
            <h3 className="text-xl font-bold text-terracotta">Tigray Knowledge Base</h3>
          </div>
          <p className="text-sm text-gray-700 mb-3">The World's Most Comprehensive Resource on Tigray. Explore now!</p>
          <a href="https://tigray.ternafit.org/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-terracotta text-white px-4 py-2 text-sm rounded shadow hover:bg-terracotta/90">Explore</Button>
          </a>
        </div> */}

      </div>
    </div>
  );
};

export default Hero;