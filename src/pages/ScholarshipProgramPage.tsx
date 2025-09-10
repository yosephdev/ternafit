import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

// NEW: Data for the named memorial scholarships. This makes it easy to add more in the future.
const memorialScholarships = [
  {
    name: "The Emperor Yohannes IV Memorial Scholarship",
  image: "/images/figures/yohannes-iv.webp", // Placeholder image
    bio: "Honoring the 19th-century Emperor of Ethiopia from Tigray, a unifying leader known for his dedication to defending the nation's sovereignty and his efforts to modernize the state. Emperor Yohannes IV's legacy is one of profound courage and leadership.",
    focus: "Awarded to students demonstrating exceptional leadership potential and a commitment to community service.",
    donateLink: "/donate?fund=yohannes-iv-memorial"
  },
  {
    name: "The Gebrehiwot Baykedagn Intellectual Fund",
  image: "/images/figures/gebrehiwot-baykedagn.webp", // Placeholder image
    bio: "In tribute to one of Ethiopia's foremost intellectuals and political economists of the early 20th century. Gebrehiwot Baykedagn was a visionary who advocated for education, industrialization, and modern governance as the keys to a prosperous future.",
    focus: "Awarded to outstanding university students pursuing studies in economics, political science, and development.",
    donateLink: "/donate?fund=gebrehiwot-baykedagn-fund"
  }
];

const ScholarshipProgramPage = () => {
  const { t } = useLanguage();
  
  return (
  <main className="container mx-auto py-12 px-4">
    {/* MODIFIED: Title is more encompassing now */}
    <h1 className="text-4xl font-bold mb-6 text-center">Empowering Tigray's Future Through Education</h1>
    
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-3">Our General Scholarship Fund</h2>
      <p className="mb-4 text-lg text-muted-foreground">
        The General Scholarship Fund provides direct financial support, books, and uniforms to students affected by conflict and poverty in Tigray. Our goal is to ensure every child has the opportunity to pursue their education and build a brighter future.
      </p>
      <div className="md:flex gap-8 items-center">
        <div className="flex-1">
            <ul className="mb-4 list-disc pl-6 text-base space-y-2">
                <li><strong>The Need:</strong> Many promising students lack the basic resources to attend or stay in school due to conflict and economic hardship.</li>
                <li><strong>Our Support:</strong> We fund scholarships, school supplies, uniforms, and mentorship programs run by our partner, ADS.</li>
                <li><strong>Our Impact:</strong> Over 1,200 students supported to date.</li>
                <li><strong>Your Contribution:</strong> Just $100 can provide a student with essential supplies for an entire school year.</li>
            </ul>
            {/* MODIFIED: Button text is now more specific */}
            <Button asChild className="bg-terracotta text-white font-semibold px-6 py-3 rounded shadow hover:bg-terracotta/90">
                <a href="/donate?fund=general-scholarship">
                    Donate to the General Fund
                </a>
            </Button>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
            <img src="/images/projects/education-group.webp" alt="Group of students supported by the scholarship program" className="rounded-lg shadow w-full" />
        </div>
      </div>
    </section>

    {/* NEW SECTION: Memorial & Named Scholarships */}
    <section className="mt-16 pt-12 border-t">
      <h2 className="text-3xl font-bold mb-8 text-center">{t('scholarship.memorial.title')}</h2>
      <p className="text-center max-w-3xl mx-auto text-muted-foreground mb-12">
        {t('scholarship.memorial.description')}
      </p>
      <div className="space-y-12">
        {memorialScholarships.map((scholarship, index) => (
          <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden md:flex">
            <div className="md:w-1/3">
              <img src={scholarship.image} alt={scholarship.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-8 md:w-2/3">
              <h3 className="text-2xl font-semibold text-terracotta">{scholarship.name}</h3>
              <p className="mt-4 text-gray-600">{scholarship.bio}</p>
              <p className="mt-4 font-semibold text-gray-800">{scholarship.focus}</p>
              <Button asChild className="mt-6 bg-gray-800 text-white font-semibold px-6 py-2 rounded shadow hover:bg-gray-700">
                <a href={scholarship.donateLink}>
                    {t('scholarship.memorial.contribute')}
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="mt-16 pt-12 border-t">
      <h2 className="text-2xl font-semibold mb-4 text-center">A Story of Impact</h2>
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
  <img src="/images/team/selam.webp" alt="Selam" className="w-32 h-32 rounded-full object-cover mb-4" />
        <p className="text-sm font-semibold text-terracotta">Selam, Recipient of the General Scholarship Fund</p>
        <blockquote className="italic text-xl text-muted-foreground mt-2">
          “For years, my dream of becoming a doctor felt out of reach. This scholarship didn't just pay for my school fees; it gave my family and me hope. I am studying harder than ever to one day serve my community.”
        </blockquote>
      </div>
    </section>
  </main>
  );
};

export default ScholarshipProgramPage;