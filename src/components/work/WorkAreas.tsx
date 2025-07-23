
import { useLanguage } from "@/contexts/LanguageContext";
import { useMemo } from "react";

const WorkAreas = () => {
  const { t, language } = useLanguage();
  
  // Use useMemo to prevent unnecessary re-renders
  const workAreas = useMemo(() => [
    {
      title: t("work.area.emergency"),
      description: t("work.area.emergency.description"),
      image: "/images/projects/work-area-1.webp"
    },
    {
      title: t("work.area.education"),
      description: t("work.area.education.description"),
      image: "/images/projects/work-area-2.webp"
    },
    {
      title: t("work.area.healthcare"),
      description: t("work.area.healthcare.description"),
      image: "/images/projects/work-area-3.webp"
    },
    {
      title: t("work.area.advocacy"),
      description: t("work.area.advocacy.description"),
      image: "/images/projects/work-area-4.webp"
    }
  ], [t]);

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
              width="500"
              height="300"
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
