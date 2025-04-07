
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { workTranslations } from "@/translations/workTranslations";
import Introduction from "@/components/work/Introduction";
import WorkAreas from "@/components/work/WorkAreas";
import ApproachPrinciples from "@/components/work/ApproachPrinciples";
import CurrentProjects from "@/components/work/CurrentProjects";
import VolunteerCTA from "@/components/work/VolunteerCTA";

const WorkPage = () => {
  const { addTranslations } = useLanguage();

  // Register translations first (moved up before any component rendering)
  useEffect(() => {
    // Register translations
    addTranslations(workTranslations);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [addTranslations]);

  const { t } = useLanguage();

  return (
    <main className="overflow-y-auto pb-10">
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
              <Introduction />

              {/* Work Areas */}
              <WorkAreas />

              {/* Our Approach */}
              <ApproachPrinciples />
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="space-y-6">
                <DonateBox compact sticky />

                {/* Current Projects */}
                <CurrentProjects />
                
                {/* Volunteer CTA */}
                <VolunteerCTA />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkPage;
