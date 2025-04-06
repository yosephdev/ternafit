
import { useLanguage } from "@/contexts/LanguageContext";

const ApproachPrinciples = () => {
  const { t } = useLanguage();

  return (
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
  );
};

export default ApproachPrinciples;
