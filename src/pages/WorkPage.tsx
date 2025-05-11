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
    title: "Information Sharing",
    description: "Curated reliable updates and resources about Tigray, making critical information accessible for the global community."
  },
  {
    icon: "📢",
    title: "Raising Awareness",
    description: "Spearheaded online campaigns, webinars, and social media discussions to amplify the voices of the Tigrean people."
  },
  {
    icon: "🤲",
    title: "Building Alliances",
    description: "Connected Swedish Tigreans with aid organizations and fostered partnerships for sustainable, positive change."
  },
  {
    icon: "💡",
    title: "Innovative Support",
    description: "Piloted creative solutions, including virtual support groups and collaborative research for long-term rebuilding."
  },
];

const approachPrinciples = [
  {
    icon: "🤝",
    title: "Community-Led",
    desc: "We work hand-in-hand with local communities and diaspora groups to ensure lasting impact and mutual trust."
  },
  {
    icon: "🌱",
    title: "Sustainable",
    desc: "We invest in education, healthcare, and capacity-building for outcomes that last far beyond short-term aid."
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Inclusive",
    desc: "We strive to reach every group regardless of age, gender, or background—leaving no one behind."
  },
  {
    icon: "🔎",
    title: "Transparent",
    desc: "We communicate openly about progress, challenges, and resource use with donors, partners, and the public."
  },
];

const focusAreas = [
  {
    icon: "📚",
    title: "Education Initiatives",
    desc: "Support for school reopening drives, supplies for children, and digital learning outreach to keep students engaged."
  },
  {
    icon: "🏥",
    title: "Healthcare Advocacy",
    desc: "Community health events, healthcare worker training, and partnerships for mobile clinics and medical donations."
  },
  {
    icon: "⛑️",
    title: "Emergency Relief",
    desc: "Responding to critical developments by connecting the community with credible aid organizations and material support."
  },
  {
    icon: "🗣️",
    title: "Advocacy & Rights",
    desc: "Campaigning for peace, protection, and the human rights of the Tigrayan people on international platforms."
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
              At Ternafit, our work goes beyond physical aid. We empower, inform, connect, and advocate for Tigray — online and in real life — to build lasting hope and opportunities.
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
                  <h2 className="text-2xl font-serif font-bold mb-6">What We Do</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {workHighlights.map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 shadow flex gap-4 items-start">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Our Principles */}
                <section>
                  <h2 className="text-2xl font-serif font-bold mb-6">Our Approach</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {approachPrinciples.map((p, idx) => (
                      <div key={idx} className="border rounded-lg p-6 flex gap-3 items-start bg-muted/50">
                        <span className="text-2xl">{p.icon}</span>
                        <div>
                          <h4 className="text-lg font-medium mb-1">{p.title}</h4>
                          <p className="text-sm text-muted-foreground">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Focus Areas */}
                <section>
                  <h2 className="text-2xl font-serif font-bold mb-6">Our Current Focus</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {focusAreas.map((f, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 shadow flex gap-4 items-start">
                        <span className="text-3xl">{f.icon}</span>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                          <p className="text-muted-foreground">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Volunteer CTA */}
                <section className="bg-terracotta text-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-serif font-semibold mb-3">Volunteer With Us</h3>
                  <p className="text-sm mb-4">
                    We're always looking for dedicated volunteers and fresh ideas—whether you're in Sweden, the diaspora, or following our mission online.
                  </p>
                  <a
                    href="/#contact"
                    className="inline-block bg-white text-terracotta px-6 py-2 rounded-full font-medium shadow hover:bg-white/90"
                  >
                    Get Involved
                  </a>
                </section>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="space-y-6 sticky top-6">
                  <DonateBox compact />
                  
                  {/* Active Campaigns & Impact */}
                  <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h3 className="text-lg font-serif font-semibold mb-4">Active Campaigns & Impact</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">📢</span>
                        <div>
                          <strong className="block">#StandWithTigray Campaigns</strong>
                          <span className="text-sm block text-muted-foreground">
                            Engaging hundreds via social and virtual events raising global awareness.
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">🤝</span>
                        <div>
                          <strong className="block">Partnerships Established</strong>
                          <span className="text-sm block text-muted-foreground">
                            Multiple collaborations with NGOs and community groups for skilled volunteering and advocacy.
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">💬</span>
                        <div>
                          <strong className="block">Media Outreach</strong>
                          <span className="text-sm block text-muted-foreground">
                            Featured in diaspora newsletters and regional radio broadcasts to spread our message.
                          </span>
                        </div>
                      </li>
                      <li className="text-xs text-muted-foreground mt-4">
                        Every action (big or small) moves Tigray forward.
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

