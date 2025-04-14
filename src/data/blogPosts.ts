
// Blog post data type
export interface BlogPost {
  id: number;
  title: {
    en: string;
    sv: string;
  };
  excerpt: {
    en: string;
    sv: string;
  };
  author: string;
  date: string;
  tags: string[];
  imageUrl: string;
}

// Mock blog data - in a real implementation, this would come from an API
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: {
      en: "Education Initiatives Making a Difference in Tigray",
      sv: "Utbildningsinitiativ som gör skillnad i Tigray"
    },
    excerpt: {
      en: "Learn about our latest educational programs helping children continue their learning despite the challenges.",
      sv: "Läs om våra senaste utbildningsprogram som hjälper barn att fortsätta sitt lärande trots utmaningarna."
    },
    author: "Yoseph Berhane",
    date: "2025-03-15",
    tags: ["Education", "Children"],
    imageUrl: "/images/projects/education.jpg"
  },
  {
    id: 2,
    title: {
      en: "Healthcare Access in Remote Communities",
      sv: "Tillgång till sjukvård i avlägsna samhällen"
    },
    excerpt: {
      en: "Our mobile healthcare teams are reaching communities that have been cut off from regular medical services.",
      sv: "Våra mobila sjukvårdsteam når samhällen som har varit avskurna från vanliga sjukvårdstjänster."
    },
    author: "Dr. Michael Tesfaye",
    date: "2025-03-02",
    tags: ["Healthcare", "Rural"],
    imageUrl: "/images/projects/healthcare.jpg"
  },
  {
    id: 3,
    title: {
      en: "Stories of Resilience: Women Leading Community Recovery",
      sv: "Berättelser om motståndskraft: Kvinnor leder samhällets återhämtning"
    },
    excerpt: {
      en: "Meet the women who are taking charge of rebuilding their communities after the conflict.",
      sv: "Möt kvinnorna som tar ansvar för att återuppbygga sina samhällen efter konflikten."
    },
    author: "Marta Abebe",
    date: "2025-02-20",
    tags: ["Women", "Recovery"],
    imageUrl: "/public/images/projects/weyniabraha.jpg"
  },
  {
    id: 4,
    title: {
      en: "Sustainable Agriculture Projects Launch in Eastern Tigray",
      sv: "Hållbara jordbruksprojekt startar i östra Tigray"
    },
    excerpt: {
      en: "New initiatives are helping farmers adapt to climate challenges while improving food security.",
      sv: "Nya initiativ hjälper bönder att anpassa sig till klimatutmaningar samtidigt som livsmedelssäkerheten förbättras."
    },
    author: "Daniel Haile",
    date: "2025-02-12",
    tags: ["Agriculture", "Sustainability"],
    imageUrl: "/images/projects/agriculture.jpg"
  },
];
