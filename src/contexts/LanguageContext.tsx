import React, { useState, useContext, ReactNode } from 'react';
import { LanguageContext, Language, LanguageContextType } from './LanguageContextDefinition';
import { initialTranslations, Translations } from './translations';

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Set default language based on browser
  const browserLanguage = navigator.language.split('-')[0] as Language;
  const defaultLanguage: Language = browserLanguage === 'sv' ? 'sv' : 'en';

  const [language, setLanguage] = useState<Language>(
    // Try to get from localStorage first
    (localStorage.getItem('language') as Language) || defaultLanguage
  );
  const [translations, setTranslations] = useState<Translations>(initialTranslations);

  // Save language to localStorage when changed
  const changeLanguage = (newLanguage: Language) => {
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
  };

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language] || key;
  };

  // Add new translations
  const addTranslations = (newTranslations: Translations) => {
    setTranslations(prev => ({ ...prev, ...newTranslations }));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, translations, addTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
