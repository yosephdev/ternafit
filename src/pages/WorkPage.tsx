
import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";

const WorkPage = () => {
  const { t } = useLanguage();

  // Define our work areas
  const workAreas = [
    {
      title: "Emergency Relief",
      description: "Providing immediate assistance to communities affected by conflict and crisis, including food, water, shelter, and medical aid.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Education",
      description: "Supporting educational opportunities for children and adults through school supplies, teacher training, and infrastructure development.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Healthcare",
      description: "Improving access to healthcare services through medical supplies, healthcare worker training, and mobile clinic operations.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Advocacy",
      description: "Raising awareness about the situation in Tigray and advocating for the rights and needs of the Tigrean community.",
      image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">{t("nav.work")}</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">What We Do</h2>
                <p className="text-muted-foreground mb-6">
                  At Ternafit, our work focuses on four key areas to support the Tigrean community. We believe in a holistic approach to addressing the challenges faced by the community, working hand-in-hand with local partners to ensure sustainable impact.
                </p>
              </div>

              {/* Work Areas */}
              <div className="space-y-10">
                {workAreas.map((area, index) => (
                  <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center`}>
                    <div className="md:w-1/2">
                      <img 
                        src={area.image}
                        alt={area.title}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-serif font-bold mb-3">{area.title}</h3>
                      <p className="text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Our Approach */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">Our Approach</h2>
                <p className="text-muted-foreground mb-4">
                  We believe in working closely with local communities to understand their needs and develop sustainable solutions. Our approach is built on the following principles:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-serif font-medium mb-2">Community-Led</h3>
                    <p className="text-sm text-muted-foreground">
                      We involve local communities in all stages of our work, from planning to implementation and evaluation.
                    </p>
                  </div>
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-serif font-medium mb-2">Sustainable</h3>
                    <p className="text-sm text-muted-foreground">
                      We develop solutions that can be maintained and built upon by local communities over time.
                    </p>
                  </div>
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-serif font-medium mb-2">Inclusive</h3>
                    <p className="text-sm text-muted-foreground">
                      We ensure that our programs are accessible to all members of the community, regardless of age, gender, or ability.
                    </p>
                  </div>
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-serif font-medium mb-2">Transparent</h3>
                    <p className="text-sm text-muted-foreground">
                      We maintain open communication with our donors and partners about how resources are used and the impact they create.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="space-y-6">
                <DonateBox compact sticky />

                {/* Current Projects */}
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h3 className="text-lg font-serif font-semibold mb-4">Current Projects</h3>
                  <ul className="space-y-3">
                    <li className="border-b border-muted pb-3">
                      <h4 className="font-medium">Emergency Food Distribution</h4>
                      <p className="text-sm text-muted-foreground">Providing food packages to 5,000 families</p>
                    </li>
                    <li className="border-b border-muted pb-3">
                      <h4 className="font-medium">School Rebuilding</h4>
                      <p className="text-sm text-muted-foreground">Reconstructing 3 schools damaged during the conflict</p>
                    </li>
                    <li className="border-b border-muted pb-3">
                      <h4 className="font-medium">Community Health Workers</h4>
                      <p className="text-sm text-muted-foreground">Training 50 new healthcare providers</p>
                    </li>
                    <li>
                      <h4 className="font-medium">Water Access</h4>
                      <p className="text-sm text-muted-foreground">Installing wells in 12 villages</p>
                    </li>
                  </ul>
                </div>
                
                {/* Volunteer CTA */}
                <div className="bg-terracotta text-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-serif font-semibold mb-4">Volunteer With Us</h3>
                  <p className="text-sm mb-4">
                    We're always looking for dedicated volunteers to help us in our mission. Whether you have specialized skills or simply want to contribute your time, we welcome your support.
                  </p>
                  <Button className="w-full bg-white text-terracotta hover:bg-white/90">
                    Join Our Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkPage;
