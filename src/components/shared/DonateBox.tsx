
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface DonateBoxProps {
  compact?: boolean;
  sticky?: boolean;
}

// Configurable donation amounts
const donationAmounts = [25, 50, 100, 250];

const DonateBox = ({ compact = false, sticky = false }: DonateBoxProps) => {
  const { t, language } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [recentDonors, setRecentDonors] = useState(3);
  const [currency, setCurrency] = useState(language === 'sv' ? 'SEK' : 'USD');
  
  // Update currency when language changes
  useEffect(() => {
    setCurrency(language === 'sv' ? 'SEK' : 'USD');
  }, [language]);
  
  // Handle amount selection
  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };
  
  // Handle custom amount input
  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(0);
  };
  
  // Calculate the actual amount to use
  const actualAmount = customAmount ? parseFloat(customAmount) : selectedAmount;
  
  // Different layout for compact mode vs full mode
  if (compact) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-4 ${sticky ? 'sticky top-20' : ''}`}>
        <h3 className="text-lg font-semibold mb-3">{t("donate.title")}</h3>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {donationAmounts.slice(0, 4).map((amount) => (
            <button
              key={amount}
              className={`py-1 px-2 rounded-md border transition-colors ${
                selectedAmount === amount && !customAmount
                  ? "bg-terracotta text-white border-terracotta"
                  : "border-gray-300 hover:border-terracotta"
              }`}
              onClick={() => handleAmountSelect(amount)}
            >
              {currency} {amount}
            </button>
          ))}
        </div>
        <Link to="/donate">
          <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-white">
            {t("donate.button")}
          </Button>
        </Link>
      </div>
    );
  }
  
  // Full donation box
  return (
    <div className={`donation-cta text-white rounded-xl p-6 md:p-8 ${sticky ? 'sticky top-20' : ''}`}>
      <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
        {t("donate.title")}
      </h2>
      
      <p className="mb-6 text-white/90">
        {t("donate.subtitle")}
      </p>
      
      <div className="mb-6">
        <label className="block mb-2 font-medium">{t("donate.amount")}</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
          {donationAmounts.map((amount) => (
            <button
              key={amount}
              className={`py-2 px-4 rounded-md border transition-colors ${
                selectedAmount === amount && !customAmount
                  ? "bg-white text-lightblue border-white"
                  : "border-white/40 hover:border-white hover:bg-white/10"
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
              className="w-full py-2 pl-12 pr-4 rounded-md bg-white text-gray-800 border-2 border-white focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="0.00"
              min="1"
            />
          </div>
        </div>
      </div>
      
      <Link to="/donate">
        <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-semibold py-6 text-lg">
          {t("donate.button")} {actualAmount > 0 ? `(${currency} ${actualAmount})` : ''}
        </Button>
      </Link>
      
      <div className="mt-4 text-sm text-center text-white/90">
        <p>{t("donate.secure")}</p>
        
        {/* Urgency message */}
        <p className="mt-4 font-medium">
          {recentDonors} {language === 'sv' ? 'personer har donerat idag' : 'people have donated today'}
        </p>
      </div>
    </div>
  );
};

export default DonateBox;
