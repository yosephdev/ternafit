
import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <main>
      {/* Page Header */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">{t("about.title")}</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">{t("about.mission.title")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("about.mission.text")}
                </p>
                <p className="text-muted-foreground">
                  Ternafit was founded in 2015 as a response to the growing humanitarian crisis in Tigray. 
                  Our team consists of dedicated volunteers from diverse backgrounds who share a common 
                  goal: to alleviate suffering and create sustainable solutions for the Tigrean community.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">{t("about.vision.title")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("about.vision.text")}
                </p>
                <p className="text-muted-foreground">
                  We envision a future where the Tigrean community has access to quality education, 
                  healthcare, and economic opportunities. We believe in empowering communities through 
                  sustainable development initiatives that respect local culture and traditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">Our Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-serif font-medium mb-2">Compassion</h3>
                    <p className="text-sm text-muted-foreground">
                      We approach our work with empathy and respect for the dignity of those we serve.
                    </p>
                  </div>
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-serif font-medium mb-2">Integrity</h3>
                    <p className="text-sm text-muted-foreground">
                      We are committed to transparency and accountability in all our operations.
                    </p>
                  </div>
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-serif font-medium mb-2">Collaboration</h3>
                    <p className="text-sm text-muted-foreground">
                      We work together with local communities and organizations to achieve our goals.
                    </p>
                  </div>
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-serif font-medium mb-2">Innovation</h3>
                    <p className="text-sm text-muted-foreground">
                      We continuously seek creative solutions to complex challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
                        alt="Team Member" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-serif font-medium">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Executive Director</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                        alt="Team Member" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-serif font-medium">Michael Tesfaye</h3>
                    <p className="text-sm text-muted-foreground">Programs Director</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="space-y-6">
                <DonateBox compact sticky />

                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h3 className="text-lg font-serif font-semibold mb-4">Our Achievements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-terracotta mr-2">•</span>
                      <span className="text-sm">Provided emergency relief to over 25,000 people</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta mr-2">•</span>
                      <span className="text-sm">Established 12 community schools in remote areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta mr-2">•</span>
                      <span className="text-sm">Implemented sustainable water solutions in 45 villages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta mr-2">•</span>
                      <span className="text-sm">Trained 120 local healthcare workers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
