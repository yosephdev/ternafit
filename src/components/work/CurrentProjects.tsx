
import { useLanguage } from "@/contexts/LanguageContext";

const CurrentProjects = () => {
  const { t, language } = useLanguage();

  // Current projects - simplified for better performance
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
  );
};

export default CurrentProjects;
