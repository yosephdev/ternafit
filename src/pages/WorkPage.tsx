import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { workTranslations } from "@/translations/workTranslations";

// Components
import DonateBox from "@/components/shared/DonateBox";

// REFINED: Clarified Ternafit's specific role as a support NGO.
// These are the core functions performed by Ternafit in Sweden.
const ternafitWorkHighlights = [
  {
    icon: "💰",
    key: "fundraising"
  },
  {
    icon: "💻",
    key: "digitalAdvocacy"
  },
  {
    icon: "🤝",
    key: "partnershipSupport"
  },
  {
    icon: "📊",
    key: "transparencyReporting"
  },
];

// This section remains strong, reflecting universal values. No changes needed.
const approachPrinciples = [
  {
    icon: "🤝",
    key: "community"
  },
  {
    icon: "🌱",
    key: "sustainable"
  },
  {
    icon: "🧑‍🤝‍🧑",
    key: "inclusive"
  },
  {
    icon: "🔎",
    key: "transparent"
  },
];

// REFINED: These are now explicitly the on-the-ground project areas of ADS, which Ternafit supports.
// The keys are more specific to reflect known project types.
const partnerFocusAreas = [
  {
    icon: "🎓",
    key: "girlsEducation"
  },
  {
    icon: "👩‍⚕️",
    key: "maternalHealth"
  },
  {
    icon: "💧",
    key: "waterAndFood"
  },
  {
    icon: "📈",
    key: "economicEmpowerment"
  }
];

const WorkPage = () => {
  const { addTranslations, t } = useLanguage();

  useEffect(() => {
    addTranslations(workTranslations);
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 50);
    return () => clearTimeout(timeout);
  }, [addTranslations]);

  return (
    <>
      <main className="min-h-screen">
        <section className="bg-muted py-14">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-serif font-bold mb-4">{t("work.title")}</h1>
                <p className="text-lg">{t("work.hero.subtitle")}</p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/images/stories/ternafit-ads-donor.webp" 
                  alt="Ternafit and ADS partnership work in Tigray" 
                  className="rounded-lg shadow-lg max-w-sm w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-12">
                <section>
                  {/* MODIFIED: Title changed to be specific to Ternafit's role */}
                  <h2 className="text-2xl font-serif font-bold mb-6">{t("work.whatWeDo.title")}</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* MODIFIED: Using the new ternafitWorkHighlights array */}
                    {ternafitWorkHighlights.map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 shadow flex gap-4 items-start">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{t(`work.whatWeDo.${item.key}.title`)}</h3>
                          <p className="text-muted-foreground">{t(`work.whatWeDo.${item.key}.desc`)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-6">{t("work.approach.title")}</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {approachPrinciples.map((p, idx) => (
                      <div key={idx} className="border rounded-lg p-6 flex gap-3 items-start bg-muted/50">
                        <span className="text-2xl">{p.icon}</span>
                        <div>
                          <h4 className="text-lg font-medium mb-1">{t(`work.approach.${p.key}.title`)}</h4>
                          <p className="text-sm text-muted-foreground">{t(`work.approach.${p.key}.desc`)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-6">{t("work.focusAreas.title")}</h2>
                  {/* MODIFIED: Added a subtitle to explicitly credit the implementing partner, ADS. */}
                  <p className="text-muted-foreground -mt-4 mb-6">{t("work.focusAreas.partnershipSubtitle")}</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* MODIFIED: Using the new partnerFocusAreas array */}
                    {partnerFocusAreas.map((f, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 shadow flex gap-4 items-start">
                        <span className="text-3xl">{f.icon}</span>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{t(`work.focusAreas.${f.key}.title`)}</h3>
                          <p className="text-muted-foreground">{t(`work.focusAreas.${f.key}.desc`)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-terracotta text-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-serif font-semibold mb-3">{t("work.volunteer.title")}</h3>
                  <p className="text-sm mb-4">
                    {t("work.volunteer.desc")}
                  </p>
                  {/* MODIFIED: Link changed to point to a local contact page for volunteering with Ternafit */}
                  <a
                    href="/contact"
                    className="inline-block bg-white text-terracotta px-6 py-2 rounded-full font-medium shadow hover:bg-white/90"
                  >
                    {t("work.volunteer.button")}
                  </a>
                </section>
              </div>

              <div className="md:col-span-1">
                <div className="space-y-6 sticky top-6">
                  <DonateBox compact />
                  
                  {/* MODIFIED: Active campaigns are now specific to Ternafit's first year of operation */}
                  <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h3 className="text-lg font-serif font-semibold mb-4">{t("work.activeCampaigns.title")}</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-2xl mt-1">🚀</span>
                        <div>
                          <strong className="block">{t("work.activeCampaigns.launchYearFund.title")}</strong>
                          <span className="text-sm block text-muted-foreground">
                            {t("work.activeCampaigns.launchYearFund.desc")}
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-2xl mt-1">🤝</span>
                        <div>
                          <strong className="block">{t("work.activeCampaigns.supportADS.title")}</strong>
                          <span className="text-sm block text-muted-foreground">
                            {t("work.activeCampaigns.supportADS.desc")}
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-2xl mt-1">🌐</span>
                        <div>
                          <strong className="block">{t("work.activeCampaigns.digitalReach.title")}</strong>
                          <span className="text-sm block text-muted-foreground">
                            {t("work.activeCampaigns.digitalReach.desc")}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WorkPage;