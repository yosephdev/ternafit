import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, DollarSign, AlertTriangle } from "lucide-react";

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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-4">{t("donate.title")}</h1>
              <p className="text-muted-foreground">
                {t("donate.subtitle")}
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/stories/ternafit-ads-donor.png" 
                alt="Support our partnership work through donations" 
                className="rounded-lg shadow-lg max-w-sm w-full"
              />
            </div>
          </div>
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
                
                {/* Crisis Alert Banner */}
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    <p className="text-red-700 font-medium">
                      URGENT: Over 5.4 million people in Tigray need humanitarian assistance right now
                    </p>
                  </div>
                </div>

                {/* Real-time Impact Counter */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">2,847</div>
                    <div className="text-sm text-blue-800">Families Reached This Month</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">$12,450</div>
                    <div className="text-sm text-green-800">Raised This Month</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">89%</div>
                    <div className="text-sm text-orange-800">Goes Directly to Aid</div>
                  </div>
                </div>

                {/* Specific Impact Examples */}
                <div className="bg-gradient-to-r from-terracotta to-orange-600 text-white p-6 rounded-lg mb-6">
                  <h4 className="font-bold text-lg mb-3">Your Donation Impact:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>• $25 = Emergency food for 1 family (1 week)</div>
                    <div>• $50 = Clean water access for 5 families (1 month)</div>
                    <div>• $100 = Medical supplies for 20 children</div>
                    <div>• $250 = School supplies for 50 students</div>
                  </div>
                </div>

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
          <h2 className="text-3xl font-serif font-bold text-center mb-10">Real Stories, Real Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">Mekelle, Tigray - December 2024</div>
                <h4 className="font-bold text-lg">Emergency Medical Aid Delivered</h4>
              </div>
              <p className="text-gray-700 mb-4">
                "Thanks to donors like you, we delivered critical medical supplies to Ayder Hospital, 
                helping treat over 200 patients this month including 89 children under 5."
              </p>
              <div className="text-sm text-terracotta font-medium">
                - Dr. Gebrehiwot, Ayder Hospital
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">Rural Tigray - November 2024</div>
                <h4 className="font-bold text-lg">Clean Water Access Restored</h4>
              </div>
              <p className="text-gray-700 mb-4">
                "Your donations helped repair 3 water pumps serving 1,200 families. 
                Children no longer walk 5km for water and can attend school again."
              </p>
              <div className="text-sm text-terracotta font-medium">
                - Tigray Water Committee
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">Stockholm, Sweden</div>
                <h4 className="font-bold text-lg">Why I Donate Monthly</h4>
              </div>
              <p className="text-gray-700 mb-4">
                "As a Tigrayan in diaspora, Ternafit gives me hope. Every month, 
                I see exactly how my donation helps families back home. It's transparent and effective."
              </p>
              <div className="text-sm text-terracotta font-medium">
                - Sara T., Monthly Donor
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonatePage;
