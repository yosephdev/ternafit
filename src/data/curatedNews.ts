// src/data/curatedNews.ts

export interface NewsItem {
  id: number;
  title: { en: string; sv: string; };
  content: { en: string; sv: string; };
  date: string;
  category: string;
  imageUrl?: string;
  url: string;
  source: string; // To credit the source
  type: 'internal' | 'external' | 'partner'; // To style links differently
}

export const curatedNews: NewsItem[] = [
  {
    id: 1,
    title: {
      en: "The Unseen Crisis: Why Girls' Education in Tigray Cannot Wait",
      sv: "Den osynliga krisen: Varför flickors utbildning i Tigray inte kan vänta"
    },
    content: {
      en: "Over 80% of schools in Tigray have been damaged. For adolescent girls, this is not just a setback—it's a protection crisis. Our latest blog post breaks down the data from UNICEF and the UN, explaining why immediate action is critical.",
      sv: "Över 80% av skolorna i Tigray har skadats. För tonårsflickor är detta inte bara ett bakslag – det är en skyddskris. Vårt senaste blogginlägg analyserar data från UNICEF och FN och förklarar varför omedelbara åtgärder är avgörande."
    },
    date: "2025-08-15",
    category: "Education",
    imageUrl: "/images/projects/mission.webp",
    url: "/blog/the-unseen-crisis-why-girls-education-in-tigray-cannot-wait",
    source: "Ternafit Blog",
    type: "internal"
  },
  {
    id: 2,
    title: {
      en: "ADS Completes New Well in Adigrat, Serving 500+ Residents",
      sv: "ADS färdigställer ny brunn i Adigrat, förser över 500 invånare med vatten"
    },
    content: {
      en: "Our partner on the ground, Anenitigray Development Services, has successfully completed the construction of a new deep-water well in a rural community near Adigrat, providing clean and reliable water access for the first time.",
      sv: "Vår partner på plats, Anenitigray Development Services, har framgångsrikt slutfört byggandet av en ny djupvattenbrunn i ett landsbygdssamhälle nära Adigrat, vilket ger tillgång till rent och pålitligt vatten för första gången."
    },
    date: "2025-08-12",
    category: "Water & Sanitation",
    imageUrl: "/images/stories/tesfay-farmer.webp",
    url: "#", // No external link for this partner update
    source: "ADS Partner Update",
    type: "partner"
  },
   {
    id: 3,
    title: {
      en: "The First Mile: How Community Health Workers Are Saving Lives",
      sv: "Den första milen: Hur lokala hälsoarbetare räddar liv"
    },
    content: {
      en: "The WHO confirms a near-total collapse of the health system in Tigray. Our new analysis explores the data and shows how the simple, cost-effective model of Community Health Workers is bridging this deadly gap.",
      sv: "WHO bekräftar en nästan total kollaps av hälso- och sjukvårdssystemet i Tigray. Vår nya analys utforskar data och visar hur den enkla, kostnadseffektiva modellen med lokala hälsoarbetare överbryggar denna dödliga klyfta."
    },
    date: "2025-08-05",
    category: "Health",
    imageUrl: "/images/projects/healthcare.webp",
    url: "/blog/the-first-mile-how-community-health-workers-are-saving-lives-in-tigray",
    source: "Ternafit Blog",
    type: "internal"
  },
  {
    id: 4,
    title: {
      en: "World Bank Approves $300M Grant for Ethiopian Recovery",
      sv: "Världsbanken godkänner anslag på 300 miljoner dollar för etiopisk återhämtning"
    },
    content: {
      en: "The World Bank has approved a significant grant to support the reconstruction of essential services, including health and education, in conflict-affected regions of Ethiopia, with a major focus on Tigray.",
      sv: "Världsbanken har godkänt ett betydande anslag för att stödja återuppbyggnaden av grundläggande tjänster, inklusive hälsa och utbildning, i konfliktdrabbade regioner i Etiopien, med stort fokus på Tigray."
    },
    date: "2025-07-28",
    category: "Reconstruction",
    imageUrl: "/images/projects/terna-featured-4.webp",
    url: "https://www.worldbank.org/en/news/press-release/2024/03/21/world-bank-approves-300-million-grant-to-support-recovery-in-conflict-affected-areas-in-ethiopia",
    source: "The World Bank",
    type: "external"
  },
   {
    id: 5,
    title: {
      en: "More Than Food: The Link Between Resilience & Sustainable Agriculture",
      sv: "Mer än mat: Kopplingen mellan motståndskraft och hållbart jordbruk"
    },
    content: {
      en: "An estimated 4.5 million people in Tigray face food insecurity. The solution isn't just aid; it's empowering farmers with sustainable techniques that build long-term resilience. Learn more in our latest blog post.",
      sv: "Uppskattningsvis 4,5 miljoner människor i Tigray lider av matosäkerhet. Lösningen är inte bara bistånd; det handlar om att stärka bönder med hållbara tekniker som bygger långsiktig motståndskraft. Läs mer i vårt senaste blogginlägg."
    },
    date: "2025-07-18",
    category: "Agriculture",
    imageUrl: "/images/projects/agriculture.webp",
    url: "/blog/more-than-food-the-link-between-resilience-and-sustainable-agriculture",
    source: "Ternafit Blog",
    type: "internal"
  },
  {
    id: 6,
    title: {
      en: "UN OCHA Report Highlights Urgent Need for Farming Supplies",
      sv: "FN OCHA-rapport belyser akut behov av jordbruksförnödenheter"
    },
    content: {
      en: "A recent report from the UN Office for the Coordination of Humanitarian Affairs (OCHA) stresses the critical window to provide seeds and tools to farmers in Tigray before the peak planting season to avert further food crisis.",
      sv: "En färsk rapport från FN:s kontor för samordning av humanitära frågor (OCHA) betonar det kritiska fönstret för att förse bönder i Tigray med utsäde och verktyg innan högsäsongen för plantering för att avvärja ytterligare matkris."
    },
    date: "2025-07-15",
    category: "Humanitarian",
    imageUrl: "/images/projects/terna-featured-1.webp",
    url: "https://reports.unocha.org/en/country/ethiopia/",
    source: "UN OCHA",
    type: "external"
  },
];