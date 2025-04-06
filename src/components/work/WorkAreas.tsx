
import { useLanguage } from "@/contexts/LanguageContext";

const WorkAreas = () => {
  const { t, language } = useLanguage();
  
  // Define our work areas as array of objects
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

  return (
    <div className="space-y-10">
      {workAreas.map((area, index) => (
        <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center`}>
          <div className="md:w-1/2">
            <img 
              src={area.image}
              alt={area.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-serif font-bold mb-3">{area.title}</h3>
            <p className="text-muted-foreground">{area.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkAreas;
