import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, DollarSign } from "lucide-react";

const DonatePage = () => {
  const { t, language } = useLanguage();
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("onetime");
  const currency = language === 'sv' ? 'SEK' : 'USD';

  // Donation amounts
  const amounts = [25, 50, 100, 250];
  
  // Handle amount selection
  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };
  
  // Handle custom amount input
  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount(0);
  };
  
  // Actual amount to use
  // const actualAmount = customAmount ? parseFloat(customAmount) : donationAmount; // This might be used by Ko-fi if we customize it further


  return (
    <main>
      {/* Page Header */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">{t("donate.title")}</h1>
          <p className="text-center mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t("donate.subtitle")}
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Left side - Impact Information */}
              <div className="md:w-1/3 bg-terracotta text-white p-6 md:p-8">
                <h3 className="text-xl font-serif font-bold mb-6">Your Impact</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-terracotta" />
                    </div>
                    <span className="text-sm">
                      <strong>$25</strong> provides emergency food supplies for a family for a week
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-terracotta" />
                    </div>
                    <span className="text-sm">
                      <strong>$50</strong> ensures clean water access for a month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-terracotta" />
                    </div>
                    <span className="text-sm">
                      <strong>$100</strong> provides educational materials for 10 children
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-terracotta" />
                    </div>
                    <span className="text-sm">
                      <strong>$250</strong> supports medical aid for a community clinic
                    </span>
                  </li>
                </ul>
              </div>
              
              {/* Right side - Donation Form */}
              <div className="md:w-2/3 p-6 md:p-8">
                <h3 className="text-xl font-serif font-bold mb-6">{t("donate.title")}</h3>
                
                {/* Ko-fi Embedded Panel */}
                <iframe id='kofiframe' src='https://ko-fi.com/ternafit/?hidefeed=true&widget=true&embed=true&preview=true' style={{border:'none', width:'100%', height:'712px', backgroundColor:'#f9f9f9', borderRadius:'10px', overflow:'hidden'}} title='ternafit'></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">Your Support Makes a Difference</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-muted-foreground mb-4">
                "Thanks to the donations from Ternafit supporters, our village now has clean water access for the first time in decades."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="/images/projects/Testimonial-1.png"
                    alt="Image of a rural village or a water tap" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Haile Berhe</h4>
                  <p className="text-sm text-muted-foreground">Community Leader</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-muted-foreground mb-4">
                "The educational resources provided by Ternafit have allowed our children to continue learning despite the difficult circumstances."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="/images/projects/Testimonial-2.png" 
                    alt="Image of children in a classroom or reading books" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Marta Tesfay</h4>
                  <p className="text-sm text-muted-foreground">Teacher</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-muted-foreground mb-4">
                "I donate monthly to Ternafit because I know my contribution is making a real difference in people's lives."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="/images/projects/Testimonial-3.jpg" 
                    alt="Image of a person" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Julian Bergman</h4>
                  <p className="text-sm text-muted-foreground">Regular Donor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonatePage;
