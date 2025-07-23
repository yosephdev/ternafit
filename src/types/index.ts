// Global type definitions
export interface NewsItem {
  id: number;
  title: { en: string; sv: string };
  content: { en: string; sv: string };
  date: string;
  category: string;
  imageUrl?: string;
  url: string;
}

export interface GNewsArticle {
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  image?: string;
  source: { name: string };
}

export interface LanguageContextType {
  language: 'en' | 'sv';
  setLanguage: (lang: 'en' | 'sv') => void;
  t: (key: string, fallback?: string) => string;
  addTranslations: (translations: Record<string, { en: string; sv: string }>) => void;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface DonationData {
  amount: number;
  currency: string;
  donationType: 'one-time' | 'monthly';
  success_url: string;
  cancel_url: string;
}