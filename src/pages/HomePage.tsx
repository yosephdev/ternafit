
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import LatestNews from "@/components/home/LatestNews";
import DonateBox from "@/components/shared/DonateBox";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Impact Statistics */}
      <ImpactStats />
      
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="/images/projects/hero-international.jpg" 
                alt="Ternafit Mission" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-4">{t('about.mission.title')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ternafit is a non-profit organization dedicated to serving the Tigrayan community. Our mission is to provide humanitarian assistance, advocate for human rights, and empower Tigrayans through education and economic development.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2023, we work closely with local communities to deliver sustainable solutions that address immediate needs while building long-term resilience.
              </p>
              <Link to="/about">
                <Button variant="outline" className="text-terracotta hover:bg-terracotta hover:text-white">
                  {t('common.learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section - New section from original website */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/projects/emergency-relief.jpg" 
                  alt="Emergency Relief" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">Emergency Relief</h3>
                <p className="text-muted-foreground mb-4">
                  Providing food, water, shelter, and medical aid to communities affected by conflict and crisis in Tigray.
                </p>
                <Link to="/work" className="text-terracotta hover:underline font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/projects/youth-education.jpg" 
                  alt="Education & Youth" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">Education & Youth</h3>
                <p className="text-muted-foreground mb-4">
                  Creating educational opportunities for children and young adults through scholarships, school supplies, and learning programs.
                </p>
                <Link to="/work" className="text-terracotta hover:underline font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/projects/advocacy.jpg" 
                  alt="Advocacy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">Advocacy & Awareness</h3>
                <p className="text-muted-foreground mb-4">
                  Advocating for the rights and welfare of Tigrayans through media engagement, community events, and policy initiatives.
                </p>
                <Link to="/work" className="text-terracotta hover:underline font-medium">
                  Learn more →
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
                Your support enables us to provide critical assistance to those in need. Every contribution makes a difference in the lives of the Tigrayan community.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-terracotta rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Provide emergency relief to families in need</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-terracotta rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Support educational programs for children</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-terracotta rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Fund healthcare services in remote areas</span>
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
    </main>
  );
};

export default HomePage;
