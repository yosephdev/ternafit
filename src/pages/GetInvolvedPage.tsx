import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getInvolvedTranslations } from "@/translations/getInvolvedTranslations";

const GetInvolvedPage = () => {
  const { t, addTranslations } = useLanguage();

  useEffect(() => {
    addTranslations(getInvolvedTranslations);
  }, [addTranslations]);

  const waysToHelp = [
    {
      title: t("getInvolved.card.donate.title"),
      description: t("getInvolved.card.donate.description"),
      cta: t("getInvolved.card.donate.cta"),
      link: t("path.donate"),
    },
    {
      title: t("getInvolved.card.volunteer.title"),
      description: t("getInvolved.card.volunteer.description"),
      cta: t("getInvolved.card.volunteer.cta"),
      link: t("path.contact"),
    },
    {
      title: t("getInvolved.card.spreadWord.title"),
      description: t("getInvolved.card.spreadWord.description"),
      cta: t("getInvolved.card.spreadWord.cta"),
      link: "#", // Add social media links here
    },
  ];

  return (
    <main>
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-4">{t("getInvolved.hero.title")}</h1>
              <p className="text-lg mb-6">
                {t("getInvolved.hero.subtitle")}
              </p>
              <div>
                <a href="/reports/annual-report-2024.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-terracotta text-white font-semibold px-6 py-3 rounded shadow hover:bg-terracotta/90">
                  Download Annual Report
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/stories/abeba-liya.webp" 
                alt="Get involved with community development" 
                className="rounded-lg shadow-lg max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {waysToHelp.map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <Link to={item.link}>
                    <Button>{item.cta}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Learn How to Volunteer</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">Even if opportunities are limited, your time and skills can make a difference. Contact us to learn more about volunteering with Ternafit.</p>
          <a href="mailto:info@ternafit.org" className="inline-block bg-terracotta text-white font-semibold px-6 py-3 rounded shadow hover:bg-terracotta/90">Contact Us to Volunteer</a>
        </div>
      </section>
    </main>
  );
};

export default GetInvolvedPage;
