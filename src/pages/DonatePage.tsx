
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, CreditCard, DollarSign } from "lucide-react";

const DonatePage = () => {
  const { t, language } = useLanguage();
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("onetime");
  const [currency, setCurrency] = useState(language === 'sv' ? 'SEK' : 'USD');
  
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
  const actualAmount = customAmount ? parseFloat(customAmount) : donationAmount;
  
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
                
                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block mb-2 font-medium">{t("donate.amount")}</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        className={`py-2 px-4 rounded-md border transition-colors ${
                          donationAmount === amount && !customAmount
                            ? "bg-terracotta text-white border-terracotta"
                            : "border-gray-300 hover:border-terracotta"
                        }`}
                        onClick={() => handleAmountSelect(amount)}
                      >
                        {currency} {amount}
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-3">
                    <label className="block mb-2 text-sm">{t("donate.custom")}</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        {currency}
                      </span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        className="w-full py-2 pl-12 pr-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
                        placeholder="0.00"
                        min="1"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Donation Type Selection */}
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Donation Type</label>
                  <div className="flex space-x-2">
                    <button
                      className={`flex-1 py-2 px-4 rounded-md border transition-colors flex justify-center items-center gap-2 ${
                        donationType === "onetime"
                          ? "bg-terracotta text-white border-terracotta"
                          : "border-gray-300 hover:border-terracotta"
                      }`}
                      onClick={() => setDonationType("onetime")}
                    >
                      <DollarSign className="h-4 w-4" />
                      {t("donate.onetime")}
                    </button>
                    <button
                      className={`flex-1 py-2 px-4 rounded-md border transition-colors flex justify-center items-center gap-2 ${
                        donationType === "monthly"
                          ? "bg-terracotta text-white border-terracotta"
                          : "border-gray-300 hover:border-terracotta"
                      }`}
                      onClick={() => setDonationType("monthly")}
                    >
                      <CreditCard className="h-4 w-4" />
                      {t("donate.monthly")}
                    </button>
                  </div>
                </div>
                
                {/* Payment Button */}
                <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-semibold py-6 text-lg mt-4">
                  {t("donate.button")} {actualAmount > 0 ? `(${currency} ${actualAmount})` : ''}
                </Button>
                
                {/* Payment Options */}
                <div className="mt-4 flex justify-center gap-4">
                  <img src="https://cdn.worldvectorlogo.com/logos/paypal-2.svg" alt="PayPal" className="h-8" />
                  <img src="https://cdn.worldvectorlogo.com/logos/swish-1.svg" alt="Swish" className="h-8" />
                  <img src="https://cdn.worldvectorlogo.com/logos/visa-2021-1.svg" alt="Visa" className="h-8" />
                  <img src="https://cdn.worldvectorlogo.com/logos/mastercard-6.svg" alt="Mastercard" className="h-8" />
                </div>
                
                <div className="mt-4 text-sm text-center text-gray-500">
                  <p>{t("donate.secure")} • {t("donate.tax")}</p>
                </div>
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
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=50&auto=format&fit=crop" 
                    alt="Testimonial" 
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
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&auto=format&fit=crop" 
                    alt="Testimonial" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Marta Abebe</h4>
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
                    src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=50&auto=format&fit=crop" 
                    alt="Testimonial" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Johan Andersson</h4>
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
