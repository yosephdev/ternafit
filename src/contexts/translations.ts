
// Translation type
export type Translations = {
  [key: string]: {
    en: string;
    sv: string;
  };
};

// Initial translations
export const initialTranslations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', sv: 'Hem' },
  'nav.about': { en: 'About', sv: 'Om oss' },
  'nav.work': { en: 'Our Work', sv: 'Vårt arbete' },
  'nav.blog': { en: 'Blog', sv: 'Blogg' },
  'nav.podcast': { en: 'Podcast', sv: 'Podd' },
  'nav.news': { en: 'News', sv: 'Nyheter' },
  'nav.donate': { en: 'Donate', sv: 'Donera' },

  // Homepage
  'home.hero.title': { en: 'Support Tigray', sv: 'Stöd Tigray' },
  'home.hero.subtitle': {
    en: 'Join our mission to provide humanitarian aid, education, and advocacy for the Tigrean community',
    sv: 'Anslut dig till vårt uppdrag att ge humanitärt bistånd, utbildning och försvar för det tigreanska samhället'
  },
  'home.cta.donate': { en: 'Donate Now', sv: 'Donera nu' },
  'home.cta.learn': { en: 'Learn More', sv: 'Läs mer' },
  'home.impact.title': { en: 'Our Impact', sv: 'Vår påverkan' },
  'home.impact.people': { en: 'People Helped', sv: 'Personer hjälpta' },
  'home.impact.projects': { en: 'Projects Completed', sv: 'Projekt slutförda' },

  // About
  'about.title': { en: 'About Ternafit', sv: 'Om Ternafit' },
  'about.mission.title': { en: 'Our Mission', sv: 'Vårt uppdrag' },
  'about.mission.text': {
    en: 'Ternafit is dedicated to supporting the Tigrean community through humanitarian aid, education, and advocacy.',
    sv: 'Ternafit är dedikerat till att stödja det tigreanska samhället genom humanitärt bistånd, utbildning och förespråkande.'
  },
  'about.vision.title': { en: 'Our Vision', sv: 'Vår vision' },
  'about.vision.text': {
    en: 'A world where the Tigrean community thrives with dignity, equality, and justice.',
    sv: 'En värld där det tigreanska samhället blomstrar med värdighet, jämlikhet och rättvisa.'
  },

  // Common
  'common.readMore': { en: 'Read More', sv: 'Läs mer' },
  'common.learnMore': { en: 'Learn More', sv: 'Läs mer' },
  'common.contact': { en: 'Contact Us', sv: 'Kontakta oss' },
  'common.subscribe': { en: 'Subscribe', sv: 'Prenumerera' },
  'common.email': { en: 'Email', sv: 'E-post' },
  'common.name': { en: 'Name', sv: 'Namn' },
  'common.submit': { en: 'Submit', sv: 'Skicka' },
  'common.loading': { en: 'Loading...', sv: 'Laddar...' },

  // Donation
  'donate.title': { en: 'Make a Donation', sv: 'Gör en donation' },
  'donate.subtitle': {
    en: 'Your contribution makes a real difference in the lives of the Tigrean community',
    sv: 'Ditt bidrag gör verklig skillnad i det tigreanska samhällets liv'
  },
  'donate.amount': { en: 'Amount', sv: 'Belopp' },
  'donate.custom': { en: 'Custom Amount', sv: 'Anpassat belopp' },
  'donate.monthly': { en: 'Monthly Donation', sv: 'Månatlig donation' },
  'donate.onetime': { en: 'One-time Donation', sv: 'Engångsdonation' },
  'donate.button': { en: 'Donate Now', sv: 'Donera nu' },
  'donate.secure': { en: 'Secure payment', sv: 'Säker betalning' },
  'donate.tax': {
    en: 'Your donation may be tax-deductible',
    sv: 'Din donation kan vara avdragsgill'
  },


  // News Page
  'news.title': { en: 'Latest News', sv: 'Senaste Nyheterna' },
  'news.description': { en: 'Stay updated with the latest articles and insights.', sv: 'Håll dig uppdaterad med de senaste artiklarna och insikterna.' },
  'news.featured': { en: 'Featured News', sv: 'Utvalda Nyheter' },
  'news.newsletterTitle': { en: 'Subscribe to our Newsletter', sv: 'Prenumerera på vårt nyhetsbrev' },
  'news.newsletterDescription': { en: 'Get the latest updates delivered to your inbox.', sv: 'Få de senaste uppdateringarna direkt till din inkorg.' },

  // Footer
  'footer.rights': {
    en: '© 2025 Ternafit. All rights reserved.',
    sv: '© 2025 Ternafit. Alla rättigheter förbehållna.'
  },
  'footer.privacy': { en: 'Privacy Policy', sv: 'Integritetspolicy' },
  'footer.terms': { en: 'Terms of Service', sv: 'Användarvillkor' },
  'footer.contact': { en: 'Contact', sv: 'Kontakt' },
};
