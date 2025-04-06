
import { useLanguage } from "@/contexts/LanguageContext";

const Introduction = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-4">{t("work.whatwedo")}</h2>
      <p className="text-muted-foreground mb-6">
        {t("work.intro")}
      </p>
    </div>
  );
};

export default Introduction;
