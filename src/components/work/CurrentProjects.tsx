
import { useLanguage } from "@/contexts/LanguageContext";
import { useMemo } from "react";

const CurrentProjects = () => {
  const { t } = useLanguage();

  // Use useMemo to prevent unnecessary re-renders
  const currentProjects = useMemo(() => [
    {
      title: t("work.project.food"),
      description: t("work.project.food.description")
    },
    {
      title: t("work.project.school"),
      description: t("work.project.school.description")
    },
    {
      title: t("work.project.healthcare"),
      description: t("work.project.healthcare.description")
    },
    {
      title: t("work.project.water"),
      description: t("work.project.water.description")
    }
  ], [t]);

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
