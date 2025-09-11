
import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { teamMembers } from "@/data/teamMembers";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";

const AboutPage = () => {
  const { t } = useLanguage();

  // Non-physical achievements (impact)
  const impact = [
    {
      icon: "🌍",
      key: "infoShared",
    },
    {
      icon: "📢",
      key: "awarenessCampaigns",
    },
    {
      icon: "🤝",
      key: "communityConnections",
    },
    {
      icon: "✉️",
      key: "newsletterSubscribers",
    }
  ];

  return (
    <main>
      {/* Welcome & Intro */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-4">{t("about.title")} <span className="block text-lg font-normal mt-2">(Tigrinya: ጠርናፊት)</span></h1>
              <p className="text-lg max-w-2xl">
                <strong>{t("about.welcome")}</strong><br />
                {t("about.intro")}
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/figures/yohannes-iv.webp" 
                alt="Emperor Yohannes IV - Historical figure from Tigray" 
                className="rounded-lg shadow-lg max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-10">

              {/* Mission statement */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">{t("about.mission.title")}</h2>
                  <p className="mb-4">
                    {t("about.mission.text1")}
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>{t("about.mission.text2")}</li>
                    <li>{t("about.mission.text3")}</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/images/figures/gebrehiwot-baykedagn.webp" 
                    alt="Gebrehiwot Baykedagn - Historical figure from Tigray" 
                    className="rounded-lg shadow-lg max-w-sm w-full"
                  />
                </div>
              </div>

              {/* How We Support */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">{t("about.howWeSupport.title")}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg p-6 shadow flex gap-4 items-start">
                    <span className="text-3xl">🌍</span>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t("about.howWeSupport.infoSharing.title")}</h3>
                      <p className="text-muted-foreground">
                        {t("about.howWeSupport.infoSharing.desc")}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow flex gap-4 items-start">
                    <span className="text-3xl">📢</span>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t("about.howWeSupport.awareness.title")}</h3>
                      <p className="text-muted-foreground">
                        {t("about.howWeSupport.awareness.desc")}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow flex gap-4 items-start">
                    <span className="text-3xl">🤝</span>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t("about.howWeSupport.connections.title")}</h3>
                      <p className="text-muted-foreground">
                        {t("about.howWeSupport.connections.desc")}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <img 
                        src="/images/logos/AneniTigray-Development-Services-logo.png" 
                        alt="Aneni Tigray Development Services Logo" 
                        className="h-12 w-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t("about.howWeSupport.adsPartnership.title")}</h3>
                      <p className="text-muted-foreground">
                        {t("about.howWeSupport.adsPartnership.desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Values */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">{t("about.values.title")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-muted">
                    <h3 className="text-lg font-serif font-medium mb-2">{t("about.values.compassion.title")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("about.values.compassion.desc")}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-muted">
                    <h3 className="text-lg font-serif font-medium mb-2">{t("about.values.integrity.title")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("about.values.integrity.desc")}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-muted">
                    <h3 className="text-lg font-serif font-medium mb-2">{t("about.values.collaboration.title")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("about.values.collaboration.desc")}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-muted">
                    <h3 className="text-lg font-serif font-medium mb-2">{t("about.values.innovation.title")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("about.values.innovation.desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Join Our Cause */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">{t("about.joinCause.title")}</h2>
                <ul className="list-disc ml-6 text-muted-foreground space-y-3 mb-4">
                  <li>
                    <strong>{t("about.joinCause.stayInformed.title")}</strong> {t("about.joinCause.stayInformed.desc")}
                  </li>
                  <li>
                    <strong>{t("about.joinCause.raiseAwareness.title")}</strong> {t("about.joinCause.raiseAwareness.desc")}
                  </li>
                  <li>
                    <strong>{t("about.joinCause.collaborate.title")}</strong> {t("about.joinCause.collaborate.desc")}
                  </li>
                </ul>
                <div className="mt-4">
                  <a
                    href="https://dev.us9.list-manage.com/subscribe/post?u=17d8ed2a68846353b5803e6f6&id=43d363d756&f_id=001c52e1f0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-terracotta text-white px-6 py-2 rounded-full font-medium shadow hover:bg-terracotta/90"
                  >
                    {t("about.joinCause.subscribeButton")}
                  </a>
                </div>
              </div>

              {/* Our Team */}
              <section id="team" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-serif font-bold text-center mb-12">Meet Our Team</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {teamMembers.map((member) => (
                      <TeamMemberCard key={member.name} member={member} />
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="md:col-span-1 space-y-6">
              <DonateBox compact sticky />

              {/* Non-physical impact/achievements */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-lg font-serif font-semibold mb-4">{t("about.impactSoFar.title")}</h3>
                <ul className="space-y-3">
                  {impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <strong className="block">{t(`about.impactSoFar.${item.key}.title`)}</strong>
                        <span className="text-sm block text-muted-foreground">{t(`about.impactSoFar.${item.key}.desc`)}</span>
                      </div>
                    </li>
                  ))}
                  <li className="text-xs text-muted-foreground mt-4">
                    {t("about.impactSoFar.callToAction1")} <br />
                    <strong>{t("about.impactSoFar.callToAction2")}</strong>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
