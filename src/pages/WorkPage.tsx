import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { workTranslations } from "@/translations/workTranslations";

// Components
import DonateBox from "@/components/shared/DonateBox";

// Optional: If using Next.js or similar, for page metadata
// import Head from "next/head";

// Editable – add/change these as your org grows.
const workHighlights = [
  {
    icon: "🌐",
    key: "infoSharing"
  },
  {
    icon: "📢",
    key: "awareness"
  },
  {
    icon: "🤲",
    key: "alliances"
  },
  {
    icon: "💡",
    key: "innovativeSupport"
  },
];

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

const focusAreas = [
  {
    icon: "📚",
    key: "education"
  },
  {
    icon: "🏥",
    key: "healthcare"
  },
  {
    icon: "⛑️",
    key: "emergencyRelief"
  },
  {
    icon: "🗣️",
    key: "advocacyRights"
  }
];

const WorkPage = () => {
  const { addTranslations, t } = useLanguage();

  useEffect(() => {
    // Register translations
    addTranslations(workTranslations);

    // Scroll to top with a slight delay to prevent layout shift scroll
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 50);

    return () => clearTimeout(timeout);
  }, [addTranslations]);

  return (
    <>
      {/* Optional: Meta tags for SEO */}
      {/* 
      <Head>
        <title>{t("work.title")} | Your Site Name</title>
        <meta name="description" content="Learn about our work, current projects, and how you can get involved." />
      </Head> 
      */}

      <main className="min-h-screen">
        {/* Hero - Inviting Mission Statement */}
        <section className="bg-muted py-14">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-serif font-bold mb-3">{t("work.title")}</h1>
            <p className="text-lg max-w-2xl mx-auto">
              {t("work.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Main Section */}
              <div className="md:col-span-2 space-y-12">
                {/* What We Do Highlights */}
                <section>
                  <h2 className="text-2xl font-serif font-bold mb-6">{t("work.whatWeDo.title")}</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {workHighlights.map((item, idx) => (
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

                {/* Our Principles */}
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

                {/* Focus Areas */}
                <section>
                  <h2 className="text-2xl font-serif font-bold mb-6">{t("work.focusAreas.title")}</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {focusAreas.map((f, idx) => (
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

                {/* Volunteer CTA */}
                <section className="bg-terracotta text-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-serif font-semibold mb-3">{t("work.volunteer.title")}</h3>
                  <p className="text-sm mb-4">
                    {t("work.volunteer.desc")}
                  </p>
                  <a
                    href="https://www.anenitigray.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-terracotta px-6 py-2 rounded-full font-medium shadow hover:bg-white/90"
                  >
                    {t("work.volunteer.button")}
                  </a>
                </section>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="space-y-6 sticky top-6">
                  <DonateBox compact />
                  
                  {/* Active Campaigns & Impact */}
                  <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h3 className="text-lg font-serif font-semibold mb-4">{t("work.activeCampaigns.title")}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">📢</span>
                        <div>
                          <strong className="block">{t("work.activeCampaigns.standWithTigray.title")}</strong>
                          <span className="text-sm block text-muted-foreground">
                            {t("work.activeCampaigns.standWithTigray.desc")}
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">🤝</span>
                        <div>
                          <strong className="block">{t("work.activeCampaigns.partnerships.title")}</strong>
                          <span className="text-sm block text-muted-foreground">
                            {t("work.activeCampaigns.partnerships.desc")}
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">💬</span>
                        <div>
                          <strong className="block">{t("work.activeCampaigns.mediaOutreach.title")}</strong>
                          <span className="text-sm block text-muted-foreground">
                            {t("work.activeCampaigns.mediaOutreach.desc")}
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">🤝</span>
                        <div>
                          <strong className="block">{t("work.activeCampaigns.adsPartnership.title")}</strong>
                          <span className="text-sm block text-muted-foreground">
                            {t("work.activeCampaigns.adsPartnership.desc")}
                          </span>
                        </div>
                      </li>
                      <li className="text-xs text-muted-foreground mt-4">
                        {t("work.activeCampaigns.callToAction")}
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

