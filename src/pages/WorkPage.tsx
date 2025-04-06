
import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { Button } from "@/components/ui/button";

const WorkPage = () => {
  const { t, language } = useLanguage();

  // Add translations for the Work page
  const workTranslations = {
    'work.title': { en: 'Our Work', sv: 'Vårt arbete' },
    'work.intro': { 
      en: 'At Ternafit, our work focuses on four key areas to support the Tigrean community. We believe in a holistic approach to addressing the challenges faced by the community, working hand-in-hand with local partners to ensure sustainable impact.',
      sv: 'På Ternafit fokuserar vårt arbete på fyra huvudområden för att stödja det tigreanska samhället. Vi tror på en helhetssyn för att hantera de utmaningar som samhället står inför, och arbetar hand i hand med lokala partners för att säkerställa hållbar påverkan.'
    },
    'work.approach': { en: 'Our Approach', sv: 'Vårt tillvägagångssätt' },
    'work.approach.description': {
      en: 'We believe in working closely with local communities to understand their needs and develop sustainable solutions. Our approach is built on the following principles:',
      sv: 'Vi tror på att arbeta nära lokala samhällen för att förstå deras behov och utveckla hållbara lösningar. Vårt tillvägagångssätt bygger på följande principer:'
    },
    'work.community': { en: 'Community-Led', sv: 'Samhällsledd' },
    'work.community.description': {
      en: 'We involve local communities in all stages of our work, from planning to implementation and evaluation.',
      sv: 'Vi involverar lokala samhällen i alla stadier av vårt arbete, från planering till implementering och utvärdering.'
    },
    'work.sustainable': { en: 'Sustainable', sv: 'Hållbar' },
    'work.sustainable.description': {
      en: 'We develop solutions that can be maintained and built upon by local communities over time.',
      sv: 'Vi utvecklar lösningar som kan underhållas och byggas vidare på av lokala samhällen över tid.'
    },
    'work.inclusive': { en: 'Inclusive', sv: 'Inkluderande' },
    'work.inclusive.description': {
      en: 'We ensure that our programs are accessible to all members of the community, regardless of age, gender, or ability.',
      sv: 'Vi säkerställer att våra program är tillgängliga för alla medlemmar i samhället, oavsett ålder, kön eller förmåga.'
    },
    'work.transparent': { en: 'Transparent', sv: 'Transparent' },
    'work.transparent.description': {
      en: 'We maintain open communication with our donors and partners about how resources are used and the impact they create.',
      sv: 'Vi upprätthåller öppen kommunikation med våra givare och partners om hur resurser används och vilken påverkan de skapar.'
    },
    'work.projects': { en: 'Current Projects', sv: 'Aktuella projekt' },
    'work.volunteer': { en: 'Volunteer With Us', sv: 'Volontär med oss' },
    'work.volunteer.description': {
      en: 'We\'re always looking for dedicated volunteers to help us in our mission. Whether you have specialized skills or simply want to contribute your time, we welcome your support.',
      sv: 'Vi söker alltid engagerade volontärer som kan hjälpa oss i vårt uppdrag. Oavsett om du har specialiserade färdigheter eller helt enkelt vill bidra med din tid, välkomnar vi ditt stöd.'
    },
    'work.join': { en: 'Join Our Team', sv: 'Gå med i vårt team' },
    'work.whatwedo': { en: 'What We Do', sv: 'Vad vi gör' },
  };

  // Register translations
  useLanguage().addTranslations(workTranslations);

  // Define our work areas
  const workAreas = [
    {
      title: language === 'sv' ? "Akut nödhjälp" : "Emergency Relief",
      description: language === 'sv' 
        ? "Tillhandahåller omedelbar hjälp till samhällen som påverkas av konflikt och kris, inklusive mat, vatten, skydd och medicinsk hjälp." 
        : "Providing immediate assistance to communities affected by conflict and crisis, including food, water, shelter, and medical aid.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: language === 'sv' ? "Utbildning" : "Education",
      description: language === 'sv'
        ? "Stöder utbildningsmöjligheter för barn och vuxna genom skolmaterial, lärarutbildning och infrastrukturutveckling."
        : "Supporting educational opportunities for children and adults through school supplies, teacher training, and infrastructure development.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: language === 'sv' ? "Sjukvård" : "Healthcare",
      description: language === 'sv'
        ? "Förbättrar tillgången till sjukvårdstjänster genom medicinska förnödenheter, utbildning av sjukvårdspersonal och drift av mobila kliniker."
        : "Improving access to healthcare services through medical supplies, healthcare worker training, and mobile clinic operations.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: language === 'sv' ? "Påverkansarbete" : "Advocacy",
      description: language === 'sv'
        ? "Ökar medvetenheten om situationen i Tigray och för talan för den tigreanska gemenskapens rättigheter och behov."
        : "Raising awareness about the situation in Tigray and advocating for the rights and needs of the Tigrean community.",
      image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=500&auto=format&fit=crop"
    }
  ];

  // Current projects
  const currentProjects = [
    {
      title: language === 'sv' ? "Akut matdistribution" : "Emergency Food Distribution",
      description: language === 'sv' ? "Förser 5 000 familjer med matpaket" : "Providing food packages to 5,000 families"
    },
    {
      title: language === 'sv' ? "Skolåteruppbyggnad" : "School Rebuilding",
      description: language === 'sv' ? "Återuppbygger 3 skolor som skadats under konflikten" : "Reconstructing 3 schools damaged during the conflict"
    },
    {
      title: language === 'sv' ? "Utbildning av sjukvårdspersonal" : "Community Health Workers",
      description: language === 'sv' ? "Utbildar 50 nya sjukvårdspersonal" : "Training 50 new healthcare providers"
    },
    {
      title: language === 'sv' ? "Vattentillgång" : "Water Access",
      description: language === 'sv' ? "Installerar brunnar i 12 byar" : "Installing wells in 12 villages"
    }
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">{t("work.title")}</h1>
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
                <h2 className="text-2xl font-serif font-bold mb-4">{t("work.whatwedo")}</h2>
                <p className="text-muted-foreground mb-6">
                  {t("work.intro")}
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
                <h2 className="text-2xl font-serif font-bold mb-4">{t("work.approach")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("work.approach.description")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-serif font-medium mb-2">{t("work.community")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("work.community.description")}
                    </p>
                  </div>
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-serif font-medium mb-2">{t("work.sustainable")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("work.sustainable.description")}
                    </p>
                  </div>
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-serif font-medium mb-2">{t("work.inclusive")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("work.inclusive.description")}
                    </p>
                  </div>
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-serif font-medium mb-2">{t("work.transparent")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("work.transparent.description")}
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
                  <h3 className="text-lg font-serif font-semibold mb-4">{t("work.projects")}</h3>
                  <ul className="space-y-3">
                    {currentProjects.map((project, index) => (
                      <li key={index} className={index < currentProjects.length - 1 ? "border-b border-muted pb-3" : ""}>
                        <h4 className="font-medium">{project.title}</h4>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Volunteer CTA */}
                <div className="bg-terracotta text-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-serif font-semibold mb-4">{t("work.volunteer")}</h3>
                  <p className="text-sm mb-4">
                    {t("work.volunteer.description")}
                  </p>
                  <Button className="w-full bg-white text-terracotta hover:bg-white/90">
                    {t("work.join")}
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
