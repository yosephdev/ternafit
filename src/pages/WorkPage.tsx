import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { workTranslations } from "@/translations/workTranslations";

// Components
import DonateBox from "@/components/shared/DonateBox";
import Introduction from "@/components/work/Introduction";
import WorkAreas from "@/components/work/WorkAreas";
import ApproachPrinciples from "@/components/work/ApproachPrinciples";
import CurrentProjects from "@/components/work/CurrentProjects";
import VolunteerCTA from "@/components/work/VolunteerCTA";

// Optional: If using Next.js or similar, for page metadata
// import Head from "next/head";

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
        {/* Page Header */}
        <section className="bg-muted py-14">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-center">
              {t("work.title")}
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Main Section */}
              <div className="md:col-span-2 space-y-12">
                <Introduction />
                <WorkAreas />
                <ApproachPrinciples />
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="space-y-6 sticky top-6">
                  <DonateBox compact />
                  <CurrentProjects />
                  <VolunteerCTA />
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

