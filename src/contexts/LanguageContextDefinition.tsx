import { createContext } from 'react';
import { Translations } from '../contexts/translations';

// Language type
export type Language = 'en' | 'sv';

// Context type
export type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  translations: Translations;
  addTranslations: (newTranslations: Translations) => void;
};

// Create context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
