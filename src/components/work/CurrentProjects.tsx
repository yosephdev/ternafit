
import { useLanguage } from "@/contexts/LanguageContext";
import { useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const CurrentProjects = () => {
  const { t } = useLanguage();

  // Use useMemo to prevent unnecessary re-renders
  const currentProjects = useMemo(() => [
    {
      title: t("work.project.food"),
      description: t("work.project.food.description"),
      problem: "Food insecurity due to drought and conflict.",
      activities: "Distribution of food packages and nutritional supplements.",
      metrics: "10,000 families served in 2024.",
      budget: "$50 provides a month's food for a family."
    },
    {
      title: t("work.project.school"),
      description: t("work.project.school.description"),
      problem: "Schools damaged and lack of supplies.",
      activities: "Rebuilding classrooms, providing books and uniforms.",
      metrics: "15 schools rebuilt, 1,200 students supported.",
      budget: "$100 supplies a student for a year."
    },
    {
      title: t("work.project.healthcare"),
      description: t("work.project.healthcare.description"),
      problem: "Limited access to healthcare and medicine.",
      activities: "Mobile clinics, training healthcare workers.",
      metrics: "350 healthcare workers trained.",
      budget: "$200 equips a clinic for a month."
    },
    {
      title: t("work.project.water"),
      description: t("work.project.water.description"),
      problem: "Scarcity of clean water sources.",
      activities: "Well construction, water purification systems.",
      metrics: "5,000 people provided with clean water.",
      budget: "$500 builds a community well."
    }
  ], [t]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-lg font-serif font-semibold mb-4">{t("work.projects")}</h3>
      <ScrollArea className="h-[200px]">
        <ul className="space-y-3">
          {currentProjects.map((project, index) => (
            <li key={index} className={index < currentProjects.length - 1 ? "border-b border-muted pb-3" : ""}>
              <h4 className="font-medium">{project.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
              <ul className="text-xs text-gray-600 mb-2">
                <li><strong>Problem:</strong> {project.problem}</li>
                <li><strong>Activities:</strong> {project.activities}</li>
                <li><strong>Metrics:</strong> {project.metrics}</li>
                <li><strong>Budget:</strong> {project.budget}</li>
              </ul>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default CurrentProjects;
