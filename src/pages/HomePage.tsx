
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/home/Hero";
import CrisisUpdate from '@/components/home/CrisisUpdate';
import ImpactStats from "@/components/home/ImpactStats";
import LatestNews from "@/components/home/LatestNews";
import DonateBox from "@/components/shared/DonateBox";
import LatestPosts from "@/components/home/LatestPosts";
import FeaturedVideo from "@/components/home/FeaturedVideo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <Hero />
      <CrisisUpdate />
      
      {/* Impact Statistics */}
      <ImpactStats />
      
      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">{t("home.impact.sectionTitle")}</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="/images/stories/abeba-liya.webp"
                alt="Success story - Community impact in Tigray"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <p className="text-red-800 font-medium text-sm">
                  <strong>Crisis Reality:</strong> With 9 million people requiring food aid and crop production at just 10% of pre-war levels, 
                  our local partners provide life-saving interventions where they're needed most.
                </p>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                {t("home.impact.description")}
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800 font-medium text-sm">
                  <strong>Local Implementer Advantage:</strong> Your donations reach communities directly through trusted, 
                  embedded partners who understand the context intimately - no international overhead.
                </p>
              </div>
              <ul className="space-y-3 mb-8 text-base">
                <li>
                  <span className="font-bold text-terracotta">3,500+</span> {t("home.impact.stat1")}
                </li>
                <li>
                  <span className="font-bold text-terracotta">5</span> {t("home.impact.stat2")}
                </li>
                <li>
                  <span className="font-bold text-terracotta">4</span> {t("home.impact.stat3")}
                </li>
              </ul>
              <div className="flex flex-col gap-4 mb-4">
                <a href="/reports/ternafit-annual-report-2024.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-terracotta text-white font-semibold px-6 py-3 rounded shadow hover:bg-terracotta/90">{t('common.downloadAnnualReport')}</a>
                <Link to={t("path.getInvolved")}> 
                  <Button variant="outline" className="text-terracotta hover:bg-terracotta hover:text-white">{t('getInvolved.volunteer.title')}</Button>
                </Link>
                <Link to={t("path.stories")}> 
                  <Button variant="outline" className="text-terracotta hover:bg-terracotta hover:text-white">{t('nav.impactStories')}</Button>
                </Link>
                <Link to={t("path.impact")}> 
                  <Button variant="outline" className="text-terracotta hover:bg-terracotta hover:text-white">{t('nav.ourImpact')}</Button>
                </Link>
              </div>
              <Link to={t("path.about")}> 
                <Button variant="outline" className="text-terracotta hover:bg-terracotta hover:text-white">
                  {t('common.learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Award Announcement Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">{t("home.award.title")}</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            {t("home.award.description1")}
          </p>
          <p className="text-xl text-terracotta mb-6">🏆</p>
          <p className="text-lg text-gray-600 mb-2">
            {t("home.award.description2")}
          </p>
         <p className="text-md text-gray-500">
            ➡️ <a href="https://www.acquisition-international.com/winners/ternafit/" target="_blank" rel="noopener noreferrer">{t("home.award.readMore")}</a> 
          </p>
          <img src="/images/ternafit-ai-magazine.webp" alt="Ternafit in Acquisition International Magazine" className="max-w-full h-auto mt-8" />
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-8">{t("home.featuredVideo.title")}</h2>
          <FeaturedVideo />
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">{t("home.programs.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/stories/tesfay-farmer.webp"
                  alt="Emergency Relief"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">{t("home.programs.emergencyRelief.title")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("home.programs.emergencyRelief.description")}
                </p>
                <Link to={t("path.work")} className="text-terracotta hover:underline font-medium">
                  {t("common.learnMore")} →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/stories/selam-story.webp"
                  alt="Education & Youth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">{t("home.programs.educationYouth.title")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("home.programs.educationYouth.description")}
                </p>
                <Link to={t("path.work")} className="text-terracotta hover:underline font-medium">
                  {t("common.learnMore")} →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/projects/advocacy.webp"
                  alt="Advocacy & Awareness"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">{t("home.programs.advocacyAwareness.title")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("home.programs.advocacyAwareness.description")}
                </p>
                <Link to={t("path.work")} className="text-terracotta hover:underline font-medium">
                  {t("common.learnMore")} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">{t('donate.title')}</h2>
              <p className="text-lg mb-6">
                {t("home.donate.intro")}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-terracotta rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{t("home.donate.benefit1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-terracotta rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{t("home.donate.benefit2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-terracotta rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{t("home.donate.benefit3")}</span>
                </li>
              </ul>
            </div>
            <div>
              <DonateBox />
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest News */}
      <LatestNews />
      
      {/* Latest Blog Posts */}
      <LatestPosts />
    </main>
  );
};

export default HomePage;
