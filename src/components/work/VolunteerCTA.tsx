
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const VolunteerCTA = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-terracotta text-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-serif font-semibold mb-4">{t("work.volunteer")}</h3>
      <p className="text-sm mb-4">
        {t("work.volunteer.description")}
      </p>
      <Button className="w-full bg-white text-terracotta hover:bg-white/90">
        {t("work.join")}
      </Button>
    </div>
  );
};

export default VolunteerCTA;
