
import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";

const AboutPage = () => {
  const { t } = useLanguage();

  // Non-physical achievements (impact)
  const impact = [
    {
      icon: "🌍",
      title: "Reliable Information Shared",
      desc: "Curated hundreds of news updates and resources to keep our audience informed about the situation in Tigray."
    },
    {
      icon: "📢",
      title: "Awareness Campaigns",
      desc: "Launched multiple social media campaigns and online discussions, amplifying the Tigrayan voice worldwide."
    },
    {
      icon: "🤝",
      title: "Community Connections",
      desc: "Fostered collaborations between Swedish Tigreans and established aid organizations for support and volunteering."
    },
    {
      icon: "✉️",
      title: "Newsletter Subscribers",
      desc: "Built an engaged community who receives regular updates, opportunities, and ways to get involved."
    }
  ];

  return (
    <main>
      {/* Welcome & Intro */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center mb-4">{t("about.title")} <span className="block text-lg font-normal mt-2">(Tigrinya: ጠርናፊት)</span></h1>
          <p className="text-lg text-center max-w-2xl mx-auto">
            <strong>Welcome to Ternafit!</strong><br />
            Ternafit is a Sweden-based NGO with a mission to empower the Tigrean people through initiatives in information sharing, raising awareness, and building connections for aid.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-10">

              {/* Mission statement */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">Our Mission</h2>
                <p className="mb-4">
                  Empowering the Tigrean people through various initiatives is not just our commitment, it's our calling.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Standing with the people of Tigray for dignity, justice, and opportunity.</li>
                  <li>Supporting Tigray by sharing accurate and timely information, amplifying voices, and connecting passionate supporters to effective aid opportunities.</li>
                </ul>
              </div>

              {/* How We Support */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">How We Support Tigray</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg p-6 shadow flex gap-4 items-start">
                    <span className="text-3xl">🌍</span>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Sharing Reliable Information</h3>
                      <p className="text-muted-foreground">
                        We curate and share resources from trusted voices, ensuring our community stays updated on Tigray.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow flex gap-4 items-start">
                    <span className="text-3xl">📢</span>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Raising Awareness</h3>
                      <p className="text-muted-foreground">
                        We advocate for the Tigrean people, leading discussions and running campaigns to keep their story heard.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow flex gap-4 items-start">
                    <span className="text-3xl">🤝</span>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Connecting with Aid Organizations</h3>
                      <p className="text-muted-foreground">
                        We bridge Swedish Tigreans and reputable aid organizations, helping facilitate volunteer and donation opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Values */}
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

              {/* Join Our Cause */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">Join Our Cause</h2>
                <ul className="list-disc ml-6 text-muted-foreground space-y-3 mb-4">
                  <li>
                    <strong>Stay Informed:</strong> Subscribe to our newsletter for news, resources, and ways to make a difference.
                  </li>
                  <li>
                    <strong>Raise Awareness:</strong> Share and discuss the situation in Tigray on your social media, network, and beyond.
                  </li>
                  <li>
                    <strong>Collaborate with Us:</strong> Contribute your ideas, time, or resources. All support helps strengthen our impact!
                  </li>
                </ul>
                <div className="mt-4">
                  <a
                    href="/#newsletter"
                    className="inline-block bg-terracotta text-white px-6 py-2 rounded-full font-medium shadow hover:bg-terracotta/90"
                  >
                    Subscribe to Newsletter
                  </a>
                </div>
              </div>

              {/* Our Team */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                      <img 
                        src="/images/team/yoseph.jpg" 
                        alt="Team Member" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-serif font-medium">Yoseph Berhane</h3>
                    <p className="text-sm text-muted-foreground">Executive Director</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                      <img 
                        src="/images/team/mebrat.webp" 
                        alt="Team Member" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-serif font-medium">Mebrat Gebru</h3>
                    <p className="text-sm text-muted-foreground">Programs Director</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="md:col-span-1 space-y-6">
              <DonateBox compact sticky />

              {/* Non-physical impact/achievements */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-lg font-serif font-semibold mb-4">Our Impact So Far</h3>
                <ul className="space-y-3">
                  {impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <strong className="block">{item.title}</strong>
                        <span className="text-sm block text-muted-foreground">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                  <li className="text-xs text-muted-foreground mt-4">
                    Every action, big or small, makes a difference. <br />
                    <strong>Together, we stand with Tigray!</strong>
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
