import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const GetInvolvedPage = () => {
  const { t } = useLanguage();

  const waysToHelp = [
    {
      title: "Donate",
      description: "Your financial support helps us provide essential resources to the Tigrean community.",
      cta: "Donate Now",
      link: "/donate",
    },
    {
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and contribute your skills to our mission.",
      cta: "Learn More",
      link: "/contact",
    },
    {
      title: "Spread the Word",
      description: "Follow us on social media and share our content to raise awareness about the situation in Tigray.",
      cta: "Follow Us",
      link: "#", // Add social media links here
    },
  ];

  return (
    <main>
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Get Involved</h1>
          <p className="text-lg max-w-2xl mx-auto">
            There are many ways you can support Ternafit and the Tigrean community. Choose the one that's right for you.
          </p>
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
    </main>
  );
};

export default GetInvolvedPage;
