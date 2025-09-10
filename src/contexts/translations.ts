
// Translation type
export type Translations = {
    [key: string]: {
        en: string;
        sv: string;
    };
};

// Initial translations
export const initialTranslations: Translations = {
    'nav.ourWork': { en: 'Our Work', sv: 'Vårt arbete' }, // NEW: Main dropdown label
    'nav.ourApproach': { en: 'Our Approach', sv: 'Vårt tillvägagångssätt' }, // NEW: Replaces old "Our Work" link
    'nav.impactAndStories': { en: 'Impact & Stories', sv: 'Påverkan & Berättelser' }, // NEW: Combines two previous links
    'nav.newsAndUpdates': { en: 'News & Updates', sv: 'Nyheter & Uppdateringar' }, // NEW: Merges "Blog" and "News"
    'footer.contactUs': { en: 'Contact Us', sv: 'Kontakta oss' },
    'nav.scholarshipProgram': { en: 'Scholarship Program', sv: 'Stipendieprogram' },
    'nav.stories': { en: 'Stories', sv: 'Berättelser' },
    'nav.impact': { en: 'Impact', sv: 'Påverkan' },
    'path.scholarshipProgram': { en: '/scholarship-program', sv: '/scholarship-program' },
    // Custom paths for new pages
    'path.stories': { en: '/stories', sv: '/stories' },
    'path.impact': { en: '/impact', sv: '/impact' },
    // Navigation
    'nav.home': { en: 'Home', sv: 'Hem' },
    'nav.about': { en: 'About', sv: 'Om oss' },
    'nav.work': { en: 'Work', sv: 'Vårt arbete' },
    'nav.blog': { en: 'Blog', sv: 'Blogg' },
    'nav.podcast': { en: 'Podcast', sv: 'Podd' },
    'nav.news': { en: 'News', sv: 'Nyheter' },
    'nav.getInvolved': { en: 'Get Involved', sv: 'Engagera dig' },
    'nav.donate': { en: 'Donate', sv: 'Donera' },
    'nav.contact': { en: 'Contact', sv: 'Kontakt' },

    // Work page translations
    'work.title': { en: 'Our Work', sv: 'Vårt arbete' },
    'work.hero.subtitle': { en: 'At Ternafit, our work goes beyond physical aid. We empower, inform, connect, and advocate for Tigray — online and in real life — to build lasting hope and opportunities.', sv: 'På Ternafit sträcker sig vårt arbete bortom fysiskt bistånd. Vi stärker, informerar, kopplar samman och förespråkar för Tigray – online och i verkliga livet – för att bygga varaktigt hopp och möjligheter.' },
    'work.whatWeDo.title': { en: 'What We Do', sv: 'Vad vi gör' },
    'work.whatWeDo.infoSharing.title': { en: 'Sharing Reliable Information', sv: 'Delar pålitlig information' },
    'work.whatWeDo.infoSharing.desc': { en: 'We curate and share resources from trusted voices, ensuring our community stays updated on Tigray.', sv: 'Vi sammanställer och delar resurser från betrodda källor, vilket säkerställer att vårt samhälle håller sig uppdaterat om Tigray.' },
    'work.whatWeDo.awareness.title': { en: 'Raising Awareness', sv: 'Ökar medvetenheten' },
    'work.whatWeDo.awareness.desc': { en: 'We advocate for the Tigrean people, leading discussions and running campaigns to keep their story heard.', sv: 'Vi förespråkar för det tigreanska folket, leder diskussioner och driver kampanjer för att deras berättelse ska höras.' },
    'work.whatWeDo.alliances.title': { en: 'Building Alliances', sv: 'Bygger allianser' },
    'work.whatWeDo.alliances.desc': { en: 'Connected Swedish Tigreans with aid organizations and fostered partnerships for sustainable, positive change.', sv: 'Kopplar samman svenska tigreanier med biståndsorganisationer och främjar partnerskap för hållbar, positiv förändring.' },
    'work.whatWeDo.innovativeSupport.title': { en: 'Innovative Support', sv: 'Innovativt stöd' },
    'work.whatWeDo.innovativeSupport.desc': { en: 'We develop and implement innovative solutions to meet Tigray\'s unique needs, from digital platforms to creative fundraising initiatives.', sv: 'Vi utvecklar och implementerar innovativa lösningar för att möta Tigrays unika behov, från digitala plattformar till kreativa insamlingsinitiativ.' },
    
    'work.approach.title': { en: 'Our Approach', sv: 'Vårt tillvägagångssätt' },
    'work.approach.community.title': { en: 'Community-Led', sv: 'Samhällslett' },
    'work.approach.community.desc': { en: 'We involve local communities in all stages of our work, from planning to implementation and evaluation.', sv: 'Vi involverar lokala samhällen i alla stadier av vårt arbete, från planering till implementering och utvärdering.' },
    'work.approach.sustainable.title': { en: 'Sustainable', sv: 'Hållbar' },
    'work.approach.sustainable.desc': { en: 'We develop solutions that can be maintained and built upon by local communities over time.', sv: 'Vi utvecklar lösningar som kan underhållas och byggas vidare på av lokala samhällen över tid.' },
    'work.approach.inclusive.title': { en: 'Inclusive', sv: 'Inkluderande' },
    'work.approach.inclusive.desc': { en: 'We ensure that our programs are accessible to all members of the community, regardless of age, gender, or ability.', sv: 'Vi säkerställer att våra program är tillgängliga för alla medlemmar i samhället, oavsett ålder, kön eller förmåga.' },
    'work.approach.transparent.title': { en: 'Transparent', sv: 'Transparent' },
    'work.approach.transparent.desc': { en: 'We maintain open communication with our donors and partners about how resources are used and the impact they create.', sv: 'Vi upprätthåller öppen kommunikation med våra givare och partners om hur resurser används och vilken påverkan de skapar.' },

    'work.focusAreas.title': { en: 'Focus Areas', sv: 'Fokusområden' },
    'work.focusAreas.emergencyRelief.title': { en: 'Emergency Relief', sv: 'Akut nödhjälp' },
    'work.focusAreas.emergencyRelief.desc': { en: 'Immediate aid distribution, medical supplies, and crisis response coordination to address urgent humanitarian needs.', sv: 'Omedelbar biståndsfördelning, medicinska förnödenheter och krishanteringskoordinering för att möta akuta humanitära behov.' },
    'work.focusAreas.education.title': { en: 'Education Initiatives', sv: 'Utbildningsinitiativ' },
    'work.focusAreas.education.desc': { en: 'Support for school reopening drives, supplies for children, and digital learning outreach to keep students engaged.', sv: 'Stöd för skolöppningskampanjer, förnödenheter till barn och digitalt lärande för att hålla elever engagerade.' },
    'work.focusAreas.healthcare.title': { en: 'Healthcare Advocacy', sv: 'Hälsovårdsförespråkande' },
    'work.focusAreas.healthcare.desc': { en: 'Community health events, healthcare worker training, and partnerships for mobile clinics and medical donations.', sv: 'Samhällshälsoevenemang, utbildning av hälsovårdspersonal och partnerskap för mobila kliniker och medicinska donationer.' },
    'work.focusAreas.advocacyRights.title': { en: 'Advocacy & Rights', sv: 'Påverkansarbete & Rättigheter' },
    'work.focusAreas.advocacyRights.desc': { en: 'Amplifying Tigrayan voices, documenting experiences, and advocating for justice and human rights protection.', sv: 'Förstärker tigreanska röster, dokumenterar upplevelser och förespråkar rättvisa och skydd av mänskliga rättigheter.' },

    // Crisis Update translations
    'crisis.title': { en: 'Tigray Crisis: The Situation Today', sv: 'Tigray-krisen: Situationen idag' },
    'crisis.updated': { en: 'Updated', sv: 'Uppdaterad' },
    'crisis.peopleNeedAid': { en: 'People Need Aid', sv: 'Människor behöver hjälp' },
    'crisis.childrenAtRisk': { en: 'Children at Risk', sv: 'Barn i riskzonen' },
    'crisis.lackBasicServices': { en: 'Lack Basic Services', sv: 'Saknar grundläggande tjänster' },
    'crisis.actionNeeded': { en: 'Action Needed', sv: 'Åtgärder behövs' },
    'crisis.urgent': { en: 'URGENT', sv: 'BRÅDSKANDE' },
    'crisis.currentChallenges': { en: 'Current Challenges:', sv: 'Aktuella utmaningar:' },
    'crisis.challenge1': { en: 'Limited access to healthcare and medical supplies', sv: 'Begränsad tillgång till hälsovård och medicinska förnödenheter' },
    'crisis.challenge2': { en: 'Disrupted education for over 1.7 million children', sv: 'Störd utbildning för över 1,7 miljoner barn' },
    'crisis.challenge3': { en: 'Food insecurity affecting 89% of the population', sv: 'Matosäkerhet som påverkar 89% av befolkningen' },
    'crisis.challenge4': { en: 'Damaged infrastructure limiting aid delivery', sv: 'Skadad infrastruktur som begränsar biståndsfördelning' },
    'crisis.challenge5': { en: 'Ongoing need for psychosocial support', sv: 'Pågående behov av psykosocialt stöd' },
    'crisis.displaced.number': { en: '2.1M', sv: '2,1M' },
    'crisis.displaced.label': { en: 'People Displaced', sv: 'Människor fördrivna' },
    'crisis.needAid.number': { en: '4.5M', sv: '4,5M' },
    'crisis.needAid.label': { en: 'Need Humanitarian Aid', sv: 'Behöver humanitärt bistånd' },
    'crisis.children.number': { en: '1.4M', sv: '1,4M' },
    'crisis.children.label': { en: 'Children Affected', sv: 'Barn påverkade' },
    'crisis.recovery.number': { en: '65%', sv: '65%' },
    'crisis.recovery.label': { en: 'Recovery Progress', sv: 'Återhämtningsframsteg' },

    // Blog translations
    'blog.title': { en: 'Our Blog', sv: 'Vår blogg' },
    'blog.hero.title': { en: 'Stories from Tigray', sv: 'Berättelser från Tigray' },
    'blog.readMore': { en: 'Read More', sv: 'Läs mer' },
    'blog.author': { en: 'By', sv: 'Av' },
    'blog.publishedOn': { en: 'Published on', sv: 'Publicerad den' },
    'blog.backToBlog': { en: '← Back to blog', sv: '← Tillbaka till bloggen' },
    'blog.sharePost': { en: 'Share this post', sv: 'Dela detta inlägg' },
    'blog.relatedPosts': { en: 'Related Posts', sv: 'Relaterade inlägg' },
    'blog.notFound': { en: 'Blog post not found', sv: 'Bloggpost hittades inte' },
    'blog.minRead': { en: 'min read', sv: 'min läsning' },

    // Author bio translations
    'authorBio.title': { en: 'About the Author', sv: 'Om författaren' },
    'authorBio.founderRole': { en: 'Founder & CEO of Ternafit', sv: 'Grundare & VD för Ternafit' },
    'authorBio.fieldCoordinatorRole': { en: 'Progams Director of Ternafit', sv: 'Programdirektör för Ternafit' },
    'authorBio.yosephBio': { en: 'Yoseph is the founder of Ternafit, dedicated to supporting the Tigrayan community through advocacy, information sharing, and building connections between the diaspora and homeland.', sv: 'Yoseph är grundaren av Ternafit, dedikerad till att stödja det tigrayanska samhället genom opinionsbildning, informationsdelning och att bygga kopplingar mellan diasporan och hemlandet.' },
    'authorBio.genericBio': { en: 'A dedicated member of our team working to support and empower the Tigrayan community.', sv: 'En engagerad medlem av vårt team som arbetar för att stödja och stärka det tigrayanska samhället.' },

    // Podcast translations
    'podcast.title': { en: 'Tigray Impact Podcast', sv: 'Tigray Impact Podd' },
    'podcast.hero.title': { en: 'Voices from Tigray', sv: 'Röster från Tigray' },
    'podcast.hero.subtitle': { en: 'Listen to stories of resilience, hope, and recovery from the Tigrean community and those supporting them.', sv: 'Lyssna på berättelser om motståndskraft, hopp och återhämtning från det tigreanska samhället och de som stödjer dem.' },
    'podcast.episode': { en: 'Episode', sv: 'Avsnitt' },
    'podcast.duration': { en: 'Duration', sv: 'Längd' },
    'podcast.category': { en: 'Category', sv: 'Kategori' },
    'podcast.allCategories': { en: 'All Categories', sv: 'Alla kategorier' },
    'podcast.noEpisodes': { en: 'No episodes found for this category.', sv: 'Inga avsnitt hittades för denna kategori.' },

    // News translations
    'news.title': { en: 'Latest News', sv: 'Senaste Nyheterna' },
    'news.hero.title': { en: 'Stay Informed', sv: 'Håll dig informerad' },
    'news.hero.subtitle': { en: 'Get the latest updates on Tigray, humanitarian efforts, and recovery progress from trusted sources.', sv: 'Få de senaste uppdateringarna om Tigray, humanitära insatser och återhämtningsframsteg från betrodda källor.' },
    'news.description': { en: 'Stay updated with the latest articles and insights.', sv: 'Håll dig uppdaterad med de senaste artiklarna och insikterna.' },
    'news.featured': { en: 'Featured News', sv: 'Utvalda Nyheter' },
    'news.newsletterTitle': { en: 'Subscribe to our Newsletter', sv: 'Prenumerera på vårt nyhetsbrev' },
    'news.newsletterDescription': { en: 'Get the latest updates delivered to your inbox.', sv: 'Få de senaste uppdateringarna direkt till din inkorg.' },
    'news.loadError': { en: 'Failed to load news. Please try again later.', sv: 'Kunde inte ladda nyheter. Försök igen senare.' },
    'news.loading': { en: 'Loading news...', sv: 'Laddar nyheter...' },
    'news.readFull': { en: 'Read Full Article', sv: 'Läs hela artikeln' },
    'news.source': { en: 'Source', sv: 'Källa' },
    'news.partnerUpdate': { en: 'Partner Field Update', sv: 'Partnerfältuppdatering' },
    'news.categories.all': { en: 'All', sv: 'Alla' },
    'news.categories.health': { en: 'Health', sv: 'Hälsa' },
    'news.categories.education': { en: 'Education', sv: 'Utbildning' },
    'news.categories.humanitarian': { en: 'Humanitarian', sv: 'Humanitärt' },
    'news.categories.women': { en: 'Women & Gender', sv: 'Kvinnor & Kön' },
    'news.categories.children': { en: 'Children & Youth', sv: 'Barn & Ungdom' },
    'news.categories.agriculture': { en: 'Agriculture', sv: 'Jordbruk' },
    'news.categories.reconstruction': { en: 'Reconstruction', sv: 'Återuppbyggnad' },
    'news.categories.peace': { en: 'Peace & Reconciliation', sv: 'Fred & Försoning' },
    'news.categories.water_sanitation': { en: 'Water & Sanitation', sv: 'Vatten & Sanitet' },
    'news.categories.general': { en: 'General', sv: 'Allmänt' },

    // Pagination
    'pagination.previous': { en: 'Previous', sv: 'Föregående' },
    'pagination.next': { en: 'Next', sv: 'Nästa' },
    'pagination.page': { en: 'Page', sv: 'Sida' },
    'pagination.of': { en: 'of', sv: 'av' },

    // Paths
    'path.home': { en: '/', sv: '/' },
    'path.about': { en: '/about', sv: '/om-oss' },
    'path.work': { en: '/work', sv: '/vårt-arbete' },
    'path.blog': { en: '/blog', sv: '/blogg' },
    'path.blogPost': { en: '/blog/', sv: '/blogg/' },
    'path.podcast': { en: '/podcast', sv: '/podd' },
    'path.news': { en: '/news', sv: '/nyheter' },
    'path.donate': { en: '/donate', sv: '/donera' },
    'path.donationSuccess': { en: '/donation-success', sv: '/donation-framgång' },
    'path.donationCancel': { en: '/donation-cancel', sv: '/donation-avbruten' },
    'path.privacyPolicy': { en: '/privacy-policy', sv: '/integritetspolicy' },
    'path.termsOfService': { en: '/terms-of-service', sv: '/användarvillkor' },
    'path.contact': { en: '/contact', sv: '/kontakt' },
    'path.getInvolved': { en: '/get-involved', sv: '/engagera-dig' },
    'path.notFound': { en: '*' , sv: '*' },

    // Get Involved
    'getInvolved.title': { en: 'Get Involved', sv: 'Engagera dig' },
    'getInvolved.hero.title': { en: 'Join Our Mission', sv: 'Anslut dig till vårt uppdrag' },
    'getInvolved.hero.subtitle': { en: 'There are many ways you can support Ternafit and the Tigrean community. Choose the one that\'s right for you.', sv: 'Det finns många sätt du kan stödja Ternafit och det tigreanska samhället på. Välj det som passar dig bäst.' },
    'getInvolved.card.donate.title': { en: 'Donate', sv: 'Donera' },
    'getInvolved.card.donate.description': { en: 'Your financial support helps us provide essential resources to the Tigrean community.', sv: 'Ditt ekonomiska stöd hjälper oss att tillhandahålla viktiga resurser till det tigreanska samhället.' },
    'getInvolved.card.donate.cta': { en: 'Donate Now', sv: 'Donera nu' },
    'getInvolved.card.volunteer.title': { en: 'Volunteer', sv: 'Volontärarbeta' },
    'getInvolved.card.volunteer.description': { en: 'Join our team of dedicated volunteers and contribute your skills to our mission.', sv: 'Gå med i vårt team av engagerade volontärer och bidra med dina färdigheter till vårt uppdrag.' },
    'getInvolved.card.volunteer.cta': { en: 'Learn More', sv: 'Läs mer' },
    'getInvolved.card.spreadWord.title': { en: 'Spread the Word', sv: 'Sprid ordet' },
    'getInvolved.card.spreadWord.description': { en: 'Follow us on social media and share our content to raise awareness about the situation in Tigray.', sv: 'Följ oss på sociala medier och dela vårt innehåll för att öka medvetenheten om situationen i Tigray.' },
    'getInvolved.card.spreadWord.cta': { en: 'Follow Us', sv: 'Följ oss' },

    // Homepage
    'home.hero.title': { en: 'Support Tigray', sv: 'Stöd Tigray' },
    'home.hero.subtitle': {
        en: 'Join our mission to provide humanitarian aid, education, and advocacy for the Tigrean community',
        sv: 'Anslut dig till vårt uppdrag att ge humanitärt bistånd, utbildning och försvar för det tigreanska samhället'
    },
    'home.hero.cta': { en: 'Get Involved', sv: 'Engagera dig' },
    'home.hero.learnMore': { en: 'Learn More', sv: 'Läs mer' },

    // About
    'about.title': { en: 'About Ternafit', sv: 'Om Ternafit' },
    'about.hero.title': { en: 'About Us', sv: 'Om oss' },
    'about.hero.subtitle': { en: 'Learn about our mission, values, and the work we do to support the Tigrean community.', sv: 'Lär dig om vårt uppdrag, våra värderingar och det arbete vi gör för att stödja det tigreanska samhället.' },
    'about.welcome': { en: 'Welcome to Ternafit!', sv: 'Välkommen till Ternafit!' },
    'about.intro': { en: 'Ternafit is a Sweden-based NGO with a mission to empower the Tigrean people through initiatives in information sharing, raising awareness, and building connections for aid.', sv: 'Ternafit är en Sverige-baserad NGO med uppdrag att stärka det tigreanska folket genom initiativ inom informationsdelning, medvetandehöjning och att bygga kontakter för bistånd.' },
    'about.mission.title': { en: 'Our Mission', sv: 'Vårt uppdrag' },
    'about.mission.text1': { en: 'To empower the Tigrean people through comprehensive support initiatives.', sv: 'Att stärka det tigreanska folket genom omfattande stödinitiativ.' },
    'about.mission.text2': { en: 'To raise awareness about the situation in Tigray and advocate for the rights of the Tigrean community.', sv: 'Att öka medvetenheten om situationen i Tigray och förespråka för det tigreanska samhällets rättigheter.' },
    'about.mission.text3': { en: 'Supporting Tigray by sharing accurate and timely information, amplifying voices, and connecting passionate supporters to effective aid opportunities.', sv: 'Att stödja Tigray genom att dela korrekt och aktuell information, förstärka röster och koppla samman engagerade supportrar med effektiva biståndsmöjligheter.' },
    'about.howWeSupport.title': { en: 'How We Support Tigray', sv: 'Hur vi stödjer Tigray' },
    'about.howWeSupport.infoSharing.title': { en: 'Sharing Reliable Information', sv: 'Delar pålitlig information' },
    'about.howWeSupport.infoSharing.desc': { en: 'We curate and share resources from trusted voices, ensuring our community stays updated on Tigray.', sv: 'Vi sammanställer och delar resurser från betrodda källor, vilket säkerställer att vårt samhälle håller sig uppdaterat om Tigray.' },
    'about.howWeSupport.awareness.title': { en: 'Raising Awareness', sv: 'Ökar medvetenheten' },
    'about.howWeSupport.awareness.desc': { en: 'We advocate for the Tigrean people, leading discussions and running campaigns to keep their story heard.', sv: 'Vi förespråkar för det tigreanska folket, leder diskussioner och driver kampanjer för att deras berättelse ska höras.' },
    'about.howWeSupport.connections.title': { en: 'Building Connections', sv: 'Bygger kontakter' },
    'about.howWeSupport.connections.desc': { en: 'We connect supporters with effective aid opportunities and facilitate partnerships for sustainable impact.', sv: 'Vi kopplar samman supportrar med effektiva biståndsmöjligheter och underlättar partnerskap för hållbar påverkan.' },
    'about.howWeSupport.adsPartnership.title': { en: 'Partnership with Anenitigray Development Services (ADS)', sv: 'Partnerskap med Anenitigray Development Services (ADS)' },
    'about.howWeSupport.adsPartnership.desc': { en: 'Ternafit is helping ADS in fundraising, website development and management, digital marketing and other areas.', sv: 'Ternafit hjälper ADS med insamling, webbutveckling och hantering, digital marknadsföring och andra områden.' },

    // Common
    'common.lastUpdated': { en: 'Last Updated', sv: 'Senast uppdaterad' },
    'common.readMore': { en: 'Read More', sv: 'Läs mer' },
    'common.learnMore': { en: 'Learn More', sv: 'Läs mer' },
    'common.contact': { en: 'Contact Us', sv: 'Kontakta oss' },
    // 'common.subscribe': { en: 'Subscribe', sv: 'Prenumerera' },
    'common.email': { en: 'Email', sv: 'E-post' },
    'common.name': { en: 'Name', sv: 'Namn' },
    'common.subject': { en: 'Subject', sv: 'Ämne' },
    'common.message': { en: 'Message', sv: 'Meddelande' },
    'common.submit': { en: 'Send Message', sv: 'Skicka meddelande' },
    // 'common.loading': { en: 'Sending...', sv: 'Skickar...' },
    // 'common.success': { en: 'Success!', sv: 'Framgång!' },
    // 'common.error': { en: 'Error', sv: 'Fel' },
    // 'common.close': { en: 'Close', sv: 'Stäng' }, // Duplicate removed
    'common.save': { en: 'Save', sv: 'Spara' },
    'common.edit': { en: 'Edit', sv: 'Redigera' },
    'common.delete': { en: 'Delete', sv: 'Ta bort' },
    'common.confirm': { en: 'Confirm', sv: 'Bekräfta' },
    'common.yes': { en: 'Yes', sv: 'Ja' },
    'common.no': { en: 'No', sv: 'Nej' },

    // Contact Page
    'contact.title': { en: 'Contact Us', sv: 'Kontakta oss' },
    'contact.subtitle': { en: 'Get in touch with our team', sv: 'Kontakta vårt team' },
    'contact.hero.title': { en: 'Get in Touch', sv: 'Kontakta oss' },
    'contact.hero.subtitle': { en: "We'd love to hear from you! Whether you have a question about our mission, activities, or how you can get involved, feel free to reach out.", sv: 'Vi vill gärna höra från dig! Oavsett om du har en fråga om vårt uppdrag, våra aktiviteter eller hur du kan engagera dig, tveka inte att höra av dig.' },
    
    // Contact Address Information
    'contact.address.title': { en: 'Address', sv: 'Adress' },
    'contact.address.line1': { en: 'Ternafit', sv: 'Ternafit' },
    'contact.address.line2': { en: 'Jungfrugatan 1F, 641 31 Katrineholm, Sweden', sv: 'Jungfrugatan 1F, 641 31 Katrineholm, Sverige' },
    'contact.address.line3': { en: 'Registered in Sweden', sv: 'Registrerad i Sverige' },
    
    // Contact Email Information
    'contact.email.title': { en: 'Email', sv: 'E-post' },
        // Footer translations
        'footer.tagline': {
            en: 'A Swedish-based non-profit organization dedicated to empowering communities in Tigray through partnership and support.',
            sv: 'En svensk ideell organisation som arbetar för att stärka samhällen i Tigray genom partnerskap och stöd.'
        },
        'footer.orgNumber': {
            en: 'Org.nr',
            sv: 'Org.nr'
        },
        'footer.country': {
            en: 'Sweden',
            sv: 'Sverige'
        },
        'footer.explore': {
            en: 'Explore',
            sv: 'Utforska'
        },
        'footer.getInvolved': {
            en: 'Get Involved',
            sv: 'Engagera dig'
        },
        'footer.ourImpact': {
            en: 'Our Impact',
            sv: 'Vår påverkan'
        },
        'footer.impactStories': {
            en: 'Impact Stories',
            sv: 'Berättelser om påverkan'
        },
        'footer.volunteer': {
            en: 'Volunteer With Us',
            sv: 'Volontärarbeta med oss'
        },
        'footer.annualReport': {
            en: 'Annual Report 2024',
            sv: 'Årsrapport 2024'
        },
        'footer.knowledgeBase': {
            en: 'Tigray Knowledge Base',
            sv: 'Tigray Kunskapsbas'
        },
        'footer.newsletterDescription': {
            en: 'Stay updated with our work and the latest stories of impact from the field.',
            sv: 'Håll dig uppdaterad om vårt arbete och de senaste berättelserna om påverkan från fältet.'
        },
        'footer.rights': {
            en: 'All Rights Reserved.',
            sv: 'Alla rättigheter förbehållna.'
        },
        'footer.privacy': {
            en: 'Privacy Policy',
            sv: 'Integritetspolicy'
        },
        'footer.terms': {
            en: 'Terms of Service',
            sv: 'Användarvillkor'
        },
    
    // Contact Office Hours
    'contact.officeHours.title': { en: 'Office Hours', sv: 'Kontorstider' },
    'contact.officeHours.desc': { en: 'Monday - Friday: 9:00 AM - 5:00 PM (CET)', sv: 'Måndag - Fredag: 09:00 - 17:00 (CET)' },
    
    // Contact Form
    'contact.form.intro': { en: 'Send us a message and we\'ll get back to you as soon as possible.', sv: 'Skicka oss ett meddelande så återkommer vi så snart som möjligt.' },
    'contact.form.fullName': { en: 'Full Name', sv: 'Fullständigt namn' },
    'contact.form.placeholder.fullName': { en: 'Your full name', sv: 'Ditt fullständiga namn' },
    'contact.form.emailAddress': { en: 'Email Address', sv: 'E-postadress' },
    
    'contact.form.success': { en: 'Message sent successfully!', sv: 'Meddelandet har skickats!' },
    'contact.form.error': { en: 'Failed to send message. Please try again.', sv: 'Kunde inte skicka meddelandet. Försök igen.' },
    'contact.form.name': { en: 'Full Name', sv: 'Fullständigt namn' },
    'contact.form.email': { en: 'Email Address', sv: 'E-postadress' },
    'contact.form.subject': { en: 'Subject', sv: 'Ämne' },
    'contact.form.message': { en: 'Message', sv: 'Meddelande' },
    'contact.form.placeholder.name': { en: 'Your full name', sv: 'Ditt fullständiga namn' },
    'contact.form.placeholder.email': { en: 'your.email@example.com', sv: 'din.email@example.com' },
    'contact.form.placeholder.subject': { en: 'Regarding...', sv: 'Angående...' },
    'contact.form.placeholder.message': { en: 'Your message here...', sv: 'Ditt meddelande här...' },
    'contact.form.submitSuccess': { en: 'Thank you for your message! We will get back to you soon.', sv: 'Tack för ditt meddelande! Vi återkommer snart.' },
    'contact.form.submitError': { en: 'An unexpected error occurred. Please try again.', sv: 'Ett oväntat fel uppstod. Försök igen.' },
    'contact.location.title': { en: 'Our Location', sv: 'Vår plats' },
    'contact.location.address': { en: 'Stockholm, Sweden', sv: 'Stockholm, Sverige' },
    'contact.location.email': { en: 'info@ternafit.org', sv: 'info@ternafit.org' },

    // Terms of Service Page Hero
    'terms.hero.title': { en: 'Terms of Service', sv: 'Användarvillkor' },
    'terms.hero.subtitle': { en: 'Please read these terms carefully before using our services.', sv: 'Vänligen läs dessa villkor noggrant innan du använder våra tjänster.' },

    // Privacy Policy Page Hero
    'privacy.hero.title': { en: 'Privacy Policy', sv: 'Integritetspolicy' },
    'privacy.hero.subtitle': { en: 'Learn how we collect, use, and protect your personal information.', sv: 'Lär dig hur vi samlar in, använder och skyddar din personliga information.' },

    // Footer

    // Homepage Donation Section
    'home.donate.title': { en: 'Make a Difference Today', sv: 'Gör skillnad idag' },
    'home.donate.intro': { en: 'Your generosity allows Ternafit to deliver urgent relief and lasting hope. Every contribution goes directly to families and communities working to rebuild and thrive.', sv: 'Din generositet gör det möjligt för Ternafit att leverera akut hjälp och varaktigt hopp. Varje bidrag går direkt till familjer och samhällen som arbetar för att återuppbygga och blomstra.' },
    'home.donate.benefit1': { en: 'Deliver meals and medicine to families in urgent need', sv: 'Leverera måltider och medicin till familjer i akut behov' },
    'home.donate.benefit2': { en: 'Fund safe spaces and resources for children\'s education', sv: 'Finansiera trygga platser och resurser för barns utbildning' },
    'home.donate.benefit3': { en: 'Support women\'s cooperatives and income-generating projects', sv: 'Stöd kvinnors kooperativ och inkomstgenererande projekt' },
    'home.donate.benefit4': { en: 'Provide medical supplies and training for healthcare workers', sv: 'Tillhandahålla medicinska förnödenheter och utbildning för vårdpersonal' },
    'home.donate.cta': { en: 'Donate Now', sv: 'Donera nu' },

    // Homepage Impact Section
    'home.impact.sectionTitle': { en: 'Our Impact', sv: 'Vår påverkan' },
    'home.impact.familiesHelped': { en: 'Families Helped', sv: 'Familjer hjälpta' },
    'home.impact.schoolsSupported': { en: 'Schools Supported', sv: 'Skolor stödda' },
    'home.impact.healthWorkersTrained': { en: 'Health Workers Trained', sv: 'Vårdpersonal utbildad' },
    'home.impact.villagesReached': { en: 'Villages Reached', sv: 'Byar nådda' },

    // Homepage Award Section
    'home.award.title': { en: 'Best Tigrean Community Support Initiative 2025 – Sweden', sv: 'Bästa Tigreanska Gemenskapsstödsinitiativ 2025 – Sverige' },
    'home.award.description1': { en: 'We’re proud to announce that Ternafit has been recognized by Acquisition International Magazine as the:', sv: 'Vi är stolta över att meddela att Ternafit har uppmärksammats av Acquisition International Magazine som:' },
    'home.award.description2': { en: 'This honor belongs to everyone who has supported, contributed to, and believed in our mission to connect, inform, and empower the Tigrayan diaspora around the world.', sv: 'Denna ära tillhör alla som har stöttat, bidragit till och trott på vårt uppdrag att ansluta, informera och stärka den tigrayanska diasporan runt om i världen.' },
    'home.award.readMore': { en: 'Read more here', sv: 'Läs mer här' },

    // Newsletter
    'newsletter.title': { en: 'Stay Connected', sv: 'Håll kontakten' },
    'newsletter.description': { en: 'Get updates on our work and the latest news from Tigray', sv: 'Få uppdateringar om vårt arbete och de senaste nyheterna från Tigray' },
    'newsletter.placeholder': { en: 'Enter your email', sv: 'Ange din e-post' },
    'newsletter.button': { en: 'Subscribe', sv: 'Prenumerera' },
    'newsletter.success': { en: 'Thank you for subscribing!', sv: 'Tack för att du prenumererar!' },
    'newsletter.error': { en: 'Please enter a valid email address', sv: 'Vänligen ange en giltig e-postadress' },

    // Donation page
    'donate.title': { en: 'Support Our Mission', sv: 'Stöd vårt uppdrag' },
    'donate.hero.title': { en: 'Make a Difference', sv: 'Gör skillnad' },
    'donate.hero.subtitle': { en: 'Your donation helps us provide essential support to the Tigrean community', sv: 'Din donation hjälper oss att ge viktigt stöd till det tigreanska samhället' },
    'donate.amount.title': { en: 'Choose Amount', sv: 'Välj belopp' },
    'donate.amount.custom': { en: 'Custom Amount', sv: 'Anpassat belopp' },
    'donate.frequency.title': { en: 'Donation Frequency', sv: 'Donationsfrekvens' },
    'donate.frequency.oneTime': { en: 'One-time', sv: 'Engångs' },
    'donate.frequency.monthly': { en: 'Monthly', sv: 'Månadsvis' },
    'donate.button': { en: 'Donate Now', sv: 'Donera nu' },
    'donate.secure': { en: 'Secure payment powered by Stripe', sv: 'Säker betalning med Stripe' },

    // Donation Success Page
    'donate.success.title': { en: 'Thank You for Your Donation!', sv: 'Tack för din donation!' },
    'donate.success.description': { en: 'Your generosity is greatly appreciated.', sv: 'Din generositet uppskattas mycket.' },
    'donate.success.returnHome': { en: 'Return to Home', sv: 'Återgå till startsidan' },

    // Donation Cancel Page
    'donate.cancel.title': { en: 'Donation Cancelled', sv: 'Donation avbruten' },
    'donate.cancel.description': { en: 'Your donation process was cancelled. You have not been charged.', sv: 'Din donationsprocess avbröts. Du har inte debiterats.' },
    'donate.cancel.contactText': { en: 'If you encountered any issues or have questions, please feel free to contact us.', sv: 'Om du stötte på problem eller har frågor, tveka inte att kontakta oss.' },
    'donate.cancel.tryAgain': { en: 'Try Donating Again', sv: 'Försök donera igen' },
    'donate.cancel.returnHome': { en: 'Return to Home', sv: 'Återgå till startsidan' },

    // Error Pages
    'error.404.title': { en: 'Page Not Found', sv: 'Sidan hittades inte' },
    'error.404.message': { en: 'The page you are looking for does not exist.', sv: 'Sidan du letar efter finns inte.' },
    'error.404.button': { en: 'Go Home', sv: 'Gå hem' },
    'error.500.title': { en: 'Server Error', sv: 'Serverfel' },
    'error.500.message': { en: 'Something went wrong on our end.', sv: 'Något gick fel på vår sida.' },

    // Privacy Policy Content
    'privacy.lastUpdated': { en: 'Last updated: December 2024', sv: 'Senast uppdaterad: December 2024' },
    'privacy.introduction.title': { en: 'Introduction', sv: 'Introduktion' },
    'privacy.introduction.text': { en: 'This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.', sv: 'Denna integritetspolicy beskriver våra policyer och procedurer för insamling, användning och avslöjande av din information när du använder tjänsten och berättar om dina integritetsrättigheter och hur lagen skyddar dig.' },
    'privacy.informationCollection.title': { en: 'Information We Collect', sv: 'Information vi samlar in' },
    'privacy.informationCollection.text': { en: 'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us.', sv: 'Vi samlar in information som du ger direkt till oss, till exempel när du skapar ett konto, prenumererar på vårt nyhetsbrev eller kontaktar oss.' },
    'privacy.informationUse.title': { en: 'How We Use Your Information', sv: 'Hur vi använder din information' },
    'privacy.informationUse.text': { en: 'We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.', sv: 'Vi använder informationen vi samlar in för att tillhandahålla, underhålla och förbättra våra tjänster, kommunicera med dig och följa juridiska skyldigheter.' },
    'privacy.trackingTechnologies.title': { en: 'Tracking Technologies and Cookies', sv: 'Spårningsteknologier och cookies' },
    'privacy.trackingTechnologies.text1': { en: 'We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.', sv: 'Vi använder cookies och liknande spårningsteknologier för att spåra aktiviteten på vår tjänst och lagra viss information. Spårningsteknologier som används är fyrar, taggar och skript för att samla in och spåra information och för att förbättra och analysera vår tjänst.' },
    'privacy.trackingTechnologies.webBeacons.desc': { en: 'Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Organization, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).', sv: 'Vissa delar av vår tjänst och våra e-postmeddelanden kan innehålla små elektroniska filer som kallas webbfyrar (även kallade clear gifs, pixeltaggar och enpixel-gifs) som tillåter organisationen, till exempel, att räkna användare som har besökt dessa sidor eller öppnat ett e-postmeddelande och för annan relaterad webbplatsstatistik (till exempel registrering av populariteten för en viss sektion och verifiering av system- och serverintegritet).' },
    'privacy.trackingTechnologies.text2': { en: 'Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser.', sv: 'Cookies kan vara "beständiga" eller "sessionscookies". Beständiga cookies finns kvar på din personliga dator eller mobila enhet när du går offline, medan sessionscookies raderas så snart du stänger din webbläsare.' },
    'privacy.trackingTechnologies.text3': { en: 'We use both Session and Persistent Cookies for the purposes set out below:', sv: 'Vi använder både sessions- och beständiga cookies för de ändamål som anges nedan:' },
    'privacy.trackingTechnologies.necessaryCookies.title': { en: 'Necessary / Essential Cookies', sv: 'Nödvändiga / Essentiella cookies' },
    'privacy.trackingTechnologies.necessaryCookies.type': { en: 'Type: Session Cookies', sv: 'Typ: Sessionscookies' },
    'privacy.trackingTechnologies.necessaryCookies.administeredBy': { en: 'Administered by: Us', sv: 'Administreras av: Oss' },
    'privacy.trackingTechnologies.necessaryCookies.purpose': { en: 'Purpose: These Cookies are essential to provide you with services available through the Website and to enable you to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that you have asked for cannot be provided, and we only use these Cookies to provide you with those services.', sv: 'Syfte: Dessa cookies är nödvändiga för att tillhandahålla tjänster som är tillgängliga via webbplatsen och för att du ska kunna använda vissa av dess funktioner. De hjälper till att autentisera användare och förhindra bedräglig användning av användarkonton. Utan dessa cookies kan de tjänster du har begärt inte tillhandahållas, och vi använder endast dessa cookies för att tillhandahålla dig dessa tjänster.' },
    'privacy.trackingTechnologies.policyAcceptanceCookies.title': { en: 'Cookies Policy / Notice Acceptance Cookies', sv: 'Cookiepolicy / Meddelande om godkännande av cookies' },
    'privacy.trackingTechnologies.policyAcceptanceCookies.type': { en: 'Type: Persistent Cookies', sv: 'Typ: Beständiga cookies' },
    'privacy.trackingTechnologies.policyAcceptanceCookies.administeredBy': { en: 'Administered by: Us', sv: 'Administreras av: Oss' },
    'privacy.trackingTechnologies.policyAcceptanceCookies.purpose': { en: 'Purpose: These Cookies identify if users have accepted the use of cookies on the Website.', sv: 'Syfte: Dessa cookies identifierar om användare har accepterat användningen av cookies på webbplatsen.' },
    'privacy.trackingTechnologies.functionalityCookies.title': { en: 'Functionality Cookies', sv: 'Funktionscookies' },
    'privacy.trackingTechnologies.functionalityCookies.type': { en: 'Type: Persistent Cookies', sv: 'Typ: Beständiga cookies' },
    'privacy.trackingTechnologies.functionalityCookies.administeredBy': { en: 'Administered by: Us', sv: 'Administreras av: Oss' },
    'privacy.trackingTechnologies.functionalityCookies.purpose': { en: 'Purpose: These Cookies allow us to remember choices you make when you use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you use the Website.', sv: 'Syfte: Dessa cookies gör det möjligt för oss att komma ihåg val du gör när du använder webbplatsen, till exempel att komma ihåg dina inloggningsuppgifter eller språkpreferenser. Syftet med dessa cookies är att ge dig en mer personlig upplevelse och att undvika att du behöver ange dina preferenser varje gång du använder webbplatsen.' },
    'privacy.useOfPersonalData.title': { en: 'Use of Your Personal Data', sv: 'Användning av dina personuppgifter' },
    'privacy.useOfPersonalData.text1': { en: 'The Organization may use Personal Data for the following purposes:', sv: 'Organisationen kan använda personuppgifter för följande ändamål:' },
    'privacy.useOfPersonalData.purpose1': { en: 'To provide and maintain our Service, including to monitor the usage of our Service.', sv: 'Att tillhandahålla och underhålla vår tjänst, inklusive att övervaka användningen av vår tjänst.' },
    'privacy.useOfPersonalData.purpose2': { en: 'To manage Your Account: to manage your registration as a user of the Service. The Personal Data you provide can give you access to different functionalities of the Service that are available to you as a registered user.', sv: 'Att hantera ditt konto: att hantera din registrering som användare av tjänsten. De personuppgifter du tillhandahåller kan ge dig tillgång till olika funktioner i tjänsten som är tillgängliga för dig som registrerad användare.' },
    'privacy.useOfPersonalData.purpose3': { en: 'For the performance of a contract: the development, compliance, and undertaking of the purchase contract for the products, items, or services you have purchased or any other contract with Us through the Service.', sv: 'För utförande av ett kontrakt: utveckling, efterlevnad och genomförande av köpeavtalet för de produkter, varor eller tjänster du har köpt eller något annat kontrakt med oss genom tjänsten.' },
    'privacy.useOfPersonalData.purpose4': { en: 'To contact you: To contact you by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application’s push notifications regarding updates or informative communications related to the functionalities, products, or contracted services, including security updates when necessary or reasonable for their implementation.', sv: 'Att kontakta dig: Att kontakta dig via e-post, telefonsamtal, SMS eller andra likvärdiga former av elektronisk kommunikation, såsom push-meddelanden från en mobilapplikation angående uppdateringar eller informativ kommunikation relaterad till funktioner, produkter eller avtalade tjänster, inklusive säkerhetsuppdateringar när det är nödvändigt eller rimligt för deras implementering.' },
    'privacy.useOfPersonalData.purpose5': { en: 'To provide you with news, special offers, and general information about other goods, services, and events we offer that are similar to those that you have already purchased or inquired about unless you have opted not to receive such information.', sv: 'Att förse dig med nyheter, specialerbjudanden och allmän information om andra varor, tjänster och evenemang vi erbjuder som liknar dem du redan har köpt eller frågat om, såvida du inte har valt att inte ta emot sådan information.' },
    'privacy.useOfPersonalData.purpose6': { en: 'To manage Your requests: To attend to and manage your requests to us.', sv: 'Att hantera dina förfrågningar: Att hantera dina förfrågningar till oss.' },
    'privacy.useOfPersonalData.purpose7': { en: 'For business transfers: We may use your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by us about our Service users is among the assets transferred.', sv: 'För företagsöverföringar: Vi kan använda din information för att utvärdera eller genomföra en fusion, avyttring, omstrukturering, omorganisation, upplösning eller annan försäljning eller överföring av vissa eller alla våra tillgångar, antingen som en fortgående verksamhet eller som en del av konkurs, likvidation eller liknande förfarande, där personuppgifter som innehas av oss om våra tjänstanvändare ingår bland de överförda tillgångarna.' },
    'privacy.useOfPersonalData.purpose8': { en: 'For other purposes: We may use your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and evaluating and improving our Service, products, services, marketing, and your experience.', sv: 'För andra ändamål: Vi kan använda din information för andra ändamål, såsom dataanalys, identifiering av användningstrender, bestämning av effektiviteten av våra marknadsföringskampanjer och utvärdering och förbättring av vår tjänst, produkter, tjänster, marknadsföring och din upplevelse.' },
    'privacy.useOfPersonalData.shareInfo.text1': { en: 'We may share your personal information in the following situations:', sv: 'Vi kan dela dina personuppgifter i följande situationer:' },
    'privacy.useOfPersonalData.shareInfo.situation1': { en: 'With Service Providers: We may share your personal information with Service Providers to monitor and analyze the use of our Service and to contact you.', sv: 'Med tjänsteleverantörer: Vi kan dela dina personuppgifter med tjänsteleverantörer för att övervaka och analysera användningen av vår tjänst och för att kontakta dig.' },
    'privacy.useOfPersonalData.shareInfo.situation2': { en: 'For business transfers: We may share or transfer your personal information in connection with, or during negotiations of, any merger, sale of Organization assets, financing, or acquisition of all or a portion of our business to another company.', sv: 'För företagsöverföringar: Vi kan dela eller överföra dina personuppgifter i samband med, eller under förhandlingar om, en fusion, försäljning av organisationens tillgångar, finansiering eller förvärv av hela eller delar av vår verksamhet till ett annat företag.' },
    'privacy.useOfPersonalData.shareInfo.situation3': { en: 'With Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent organization and any other subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.', sv: 'Med dotterbolag: Vi kan dela din information med våra dotterbolag, i vilket fall vi kommer att kräva att dessa dotterbolag följer denna integritetspolicy. Dotterbolag inkluderar vår moderorganisation och alla andra dotterbolag, joint venture-partners eller andra företag som vi kontrollerar eller som står under gemensam kontroll med oss.' },
    'privacy.useOfPersonalData.shareInfo.situation4': { en: 'With business partners: We may share your information with our business partners to offer you certain products, services, or promotions.', sv: 'Med affärspartners: Vi kan dela din information med våra affärspartners för att erbjuda dig vissa produkter, tjänster eller kampanjer.' },
    'privacy.useOfPersonalData.shareInfo.situation5': { en: 'With other users: When you share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.', sv: 'Med andra användare: När du delar personlig information eller på annat sätt interagerar i de offentliga områdena med andra användare, kan sådan information ses av alla användare och kan distribueras offentligt utanför.' },
    'privacy.dataRetention.title': { en: 'Retention of Your Personal Data', sv: 'Lagring av dina personuppgifter' },
    'privacy.dataRetention.text1': { en: 'The Organization will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.', sv: 'Organisationen kommer att behålla dina personuppgifter endast så länge som det är nödvändigt för de ändamål som anges i denna integritetspolicy. Vi kommer att behålla och använda dina personuppgifter i den utsträckning det är nödvändigt för att uppfylla våra lagliga skyldigheter (till exempel om vi är skyldiga att behålla dina uppgifter för att följa tillämpliga lagar), lösa tvister och upprätthålla våra lagliga avtal och policyer.' },
    'privacy.dataTransfer.title': { en: 'Transfer of Your Personal Data', sv: 'Överföring av dina personuppgifter' },
    'privacy.dataTransfer.text1': { en: 'Your information, including Personal Data, is processed at the Organization’s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of Your jurisdiction.', sv: 'Din information, inklusive personuppgifter, behandlas vid organisationens verksamhetsställen och på alla andra platser där de parter som är involverade i behandlingen befinner sig. Det innebär att denna information kan överföras till – och underhålls på – datorer som är belägna utanför din stat, provins, land eller annan statlig jurisdiktion där dataskyddslagarna kan skilja sig från dem i din jurisdiktion.' },
    'privacy.dataTransfer.text2': { en: 'Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.', sv: 'Ditt samtycke till denna integritetspolicy följt av din inlämning av sådan information utgör ditt godkännande av den överföringen.' },
    'privacy.deleteData.title': { en: 'Delete Your Personal Data', sv: 'Radera dina personuppgifter' },
    'privacy.deleteData.text1': { en: 'You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.', sv: 'Du har rätt att radera eller begära att vi hjälper till att radera de personuppgifter som vi har samlat in om dig.' },
    'privacy.deleteData.text2': { en: 'Our Service may give You the ability to delete certain information about You from within the Service.', sv: 'Vår tjänst kan ge dig möjlighet att radera viss information om dig från tjänsten.' },
    'privacy.deleteData.text3': { en: 'You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.', sv: 'Du kan uppdatera, ändra eller radera din information när som helst genom att logga in på ditt konto, om du har ett sådant, och besöka avsnittet för kontoinställningar som låter dig hantera din personliga information. Du kan också kontakta oss för att begära tillgång till, korrigera eller radera personlig information som du har lämnat till oss.' },
    'privacy.deleteData.text4': { en: 'Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.', sv: 'Observera dock att vi kan behöva behålla viss information när vi har en laglig skyldighet eller laglig grund att göra det.' },
    'privacy.definitions.definitions.website': { en: 'Website: Refers to Ternafit, accessible from https://www.ternafit.org', sv: 'Webbplats: Avser Ternafit, tillgänglig från https://www.ternafit.org' },
    'privacy.dataCollection.title': { en: 'Collecting and Using Your Personal Data', sv: 'Insamling och användning av dina personuppgifter' },
    'privacy.dataCollection.types.title': { en: 'Types of Data Collected', sv: 'Typer av insamlade uppgifter' },
    'privacy.dataCollection.personalData.title': { en: 'Personal Data', sv: 'Personuppgifter' },
    'privacy.dataCollection.personalData.text': { en: 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:', sv: 'När du använder vår tjänst kan vi be dig att förse oss med viss personligt identifierbar information som kan användas för att kontakta eller identifiera dig. Personligt identifierbar information kan inkludera, men är inte begränsad till:' },
    'privacy.dataCollection.personalData.email': { en: 'Email address', sv: 'E-postadress' },
    'privacy.dataCollection.personalData.usageData': { en: 'Usage Data', sv: 'Användningsdata' },
    'privacy.dataCollection.usageData.title': { en: 'Usage Data', sv: 'Användningsdata' },
    'privacy.dataCollection.usageData.text1': { en: 'Usage Data is collected automatically when using the Service.', sv: 'Användningsdata samlas in automatiskt när tjänsten används.' },
    'privacy.dataCollection.usageData.text2': { en: 'Usage Data may include information such as your Device’s Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.', sv: 'Användningsdata kan inkludera information som din enhets IP-adress (t.ex. IP-adress), webbläsartyp, webbläsarversion, sidorna i vår tjänst som du besöker, tid och datum för ditt besök, tid som spenderats på dessa sidor, unika enhetsidentifierare och annan diagnostisk data.' },
    'privacy.dataCollection.usageData.text3': { en: 'When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers, and other diagnostic data.', sv: 'När du får tillgång till tjänsten via en mobil enhet kan vi automatiskt samla in viss information, inklusive, men inte begränsat till, typen av mobil enhet du använder, din mobila enhets unika ID, IP-adressen för din mobila enhet, ditt mobila operativsystem, typen av mobil webbläsare du använder, unika enhetsidentifierare och annan diagnostisk data.' },
    'privacy.dataCollection.usageData.text4': { en: 'We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device.', sv: 'Vi kan också samla in information som din webbläsare skickar när du besöker vår tjänst eller när du får tillgång till tjänsten via en mobil enhet.' },


    // Footer

    // Homepage Donation Section
    // (Duplicate keys removed above. This section can be deleted.)

    // Podcast Categories
    'podcast.category.allEpisodes': { en: 'All Episodes', sv: 'Alla avsnitt' },
    'podcast.category.stories': { en: 'Stories', sv: 'Berättelser' },
    'podcast.category.interviews': { en: 'Intervjuer', sv: 'Interviews' },
    'podcast.category.recovery': { en: 'Recovery', sv: 'Återhämtning' },
    'podcast.category.updates': { en: 'Updates', sv: 'Uppdateringar' },
    'podcast.category.behindTheScenes': { en: 'Behind the Scenes', sv: 'Bakom kulisserna' },
    'podcast.category.health': { en: 'Health', sv: 'Hälsa' },
    'podcast.category.education': { en: 'Education', sv: 'Utbildning' },
    'podcast.category.women': { en: 'Women', sv: 'Kvinnor' },
    'podcast.category.youth': { en: 'Youth', sv: 'Ungdom' },
    'podcast.category.diaspora': { en: 'Diaspora', sv: 'Diaspora' },
    'podcast.category.culture': { en: 'Culture', sv: 'Kultur' },
    'podcast.category.agriculture': { en: 'Agriculture', sv: 'Jordbruk' },
    'podcast.category.children': { en: 'Children', sv: 'Barn' },
    'podcast.category.innovation': { en: 'Innovation', sv: 'Innovation' },
    'podcast.category.community': { en: 'Community', sv: 'Gemenskap' },
    'podcast.category.ternafit': { en: 'Ternafit', sv: 'Ternafit' },

    // Blog Page
    'blog.hero.subtitle': { en: 'Stories of resilience, hope, and progress. Real stories by Ternafit and the Tigrayan community—read, share, and join the voice for Tigray.', sv: 'Berättelser om motståndskraft, hopp och framsteg. Verkliga berättelser av Ternafit och det tigreanska samhället – läs, dela och anslut dig till rösten för Tigray.' },

    // Blog Sidebar
    'blog.sidebar.recentPosts': { en: 'Recent Posts', sv: 'Senaste inlägg' },
    'blog.sidebar.categories': { en: 'Categories', sv: 'Kategorier' },
    'blog.sidebar.tags': { en: 'Tags', sv: 'Taggar' },
    'blog.sidebar.newsletter': { en: 'Newsletter', sv: 'Nyhetsbrev' },
    'blog.sidebar.newsletterDesc': { en: 'Subscribe to get the latest updates', sv: 'Prenumerera för att få de senaste uppdateringarna' },

    // Terms of Service Content
    'terms.lastUpdated': { en: 'Last updated: December 2024', sv: 'Senast uppdaterad: December 2024' },
    'terms.acceptance.title': { en: 'Acceptance of Terms', sv: 'Acceptans av villkor' },
    'terms.acceptance.text': { en: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.', sv: 'Genom att komma åt och använda denna webbplats accepterar och samtycker du till att vara bunden av villkoren och bestämmelserna i detta avtal.' },
    'terms.useOfSite.title': { en: 'Use of the Site', sv: 'Användning av webbplatsen' },
    'terms.useOfSite.text': { en: 'You may use our website for lawful purposes only. You agree not to use the site in any way that violates any applicable federal, state, local, or international law or regulation.', sv: 'Du får endast använda vår webbplats för lagliga ändamål. Du samtycker till att inte använda webbplatsen på något sätt som bryter mot någon tillämplig federal, statlig, lokal eller internationell lag eller förordning.' },
    'terms.intellectualProperty.title': { en: 'Intellectual Property Rights', sv: 'Immateriella rättigheter' },
    'terms.intellectualProperty.text': { en: 'The service and its original content, features and functionality are and will remain the exclusive property of Ternafit and its licensors.', sv: 'Tjänsten och dess ursprungliga innehåll, funktioner och funktionalitet är och kommer att förbli exklusiv egendom för Ternafit och dess licensgivare.' },

    // Search functionality
    'search.placeholder': { en: 'Search...', sv: 'Sök...' },
    'search.results': { en: 'Search Results', sv: 'Sökresultat' },
    'search.noResults': { en: 'No results found', sv: 'Inga resultat hittades' },
    'search.clear': { en: 'Clear', sv: 'Rensa' },

    // Home Programs section
    'home.programs.advocacyAwareness.title': { en: 'Advocacy & Awareness', sv: 'Påverkansarbete & Medvetenhet' },
    'home.programs.advocacyAwareness.description': { en: 'Raising global awareness, informing policy, and partnering with communities and media to protect rights and amplify Tigrayan voices.', sv: 'Ökar global medvetenhet, informerar policy och samarbetar med samhällen och media för att skydda rättigheter och förstärka tigreanska röster.' },

    // Homepage Latest Posts
    'home.latestPosts.title': { en: 'From the Blog', sv: 'Från bloggen' },
    'home.latestPosts.viewAll': { en: 'View All Posts', sv: 'Visa alla inlägg' },

    // Homepage Featured Video
    'home.featuredVideo.title': { en: 'Featured Video', sv: 'Utvald video' },

    // Blog Sidebar
    'blog.sidebar.categories.title': { en: 'Categories', sv: 'Kategorier' },
    'blog.sidebar.categories.education': { en: 'Education', sv: 'Utbildning' },
    'blog.sidebar.categories.healthcare': { en: 'Healthcare', sv: 'Sjukvård' },
    'blog.sidebar.categories.emergencyRelief': { en: 'Emergency Relief', sv: 'Nödhjälp' },
    'blog.sidebar.categories.communityDevelopment': { en: 'Community Development', sv: 'Samhällsutveckling' },
    'blog.sidebar.categories.advocacy': { en: 'Advocacy', sv: 'Påverkansarbete' },
    'blog.sidebar.tags.title': { en: 'Tags', sv: 'Taggar' },
    'blog.sidebar.tags.education': { en: 'Education', sv: 'Utbildning' },
    'blog.sidebar.tags.healthcare': { en: 'Healthcare', sv: 'Sjukvård' },
    'blog.sidebar.tags.children': { en: 'Children', sv: 'Barn' },
    'blog.sidebar.tags.women': { en: 'Women', sv: 'Kvinnor' },
    'blog.sidebar.tags.water': { en: 'Water', sv: 'Vatten' },
    'blog.sidebar.tags.food': { en: 'Food', sv: 'Mat' },
    'blog.sidebar.tags.sustainability': { en: 'Sustainability', sv: 'Hållbarhet' },
    'blog.sidebar.tags.community': { en: 'Community', sv: 'Samhälle' },

    // Podcast Player
    'podcast.seek': { en: 'Seek', sv: 'Sök' },
    'podcast.play': { en: 'Play', sv: 'Spela' },
    'podcast.pause': { en: 'Pause', sv: 'Pausa' },
    'podcast.share': { en: 'Share', sv: 'Dela' },
    'podcast.download': { en: 'Download', sv: 'Ladda ner' },

    // Work page volunteer section
    'work.volunteer.title': { en: 'Volunteer with ADS', sv: 'Volontärarbeta med ADS' },
    'work.volunteer.desc': { en: 'Volunteer with ADS, a grassroots organization, and contribute your skills to make a real difference in the Tigrean community. We welcome people from all backgrounds and skill levels.', sv: 'Volontärarbeta med ADS, en gräsrotsorganisation, och bidra med dina färdigheter för att göra verklig skillnad i det tigreanska samhället. Vi välkomnar människor från alla bakgrunder och färdighetsnivåer.' },
    'work.volunteer.button': { en: 'Contact ADS', sv: 'Kontakta ADS' },

    // Work page active campaigns
    'work.activeCampaigns.title': { en: 'Active Campaigns', sv: 'Aktiva kampanjer' },
    'work.activeCampaigns.standWithTigray.title': { en: 'Stand With Tigray', sv: 'Stå med Tigray' },
    'work.activeCampaigns.standWithTigray.desc': { en: 'Ongoing advocacy campaign to raise global awareness', sv: 'Pågående påverkansarbetskampanj för att öka global medvetenhet' },
    'work.activeCampaigns.partnerships.title': { en: 'Building Partnerships', sv: 'Bygger partnerskap' },
    'work.activeCampaigns.partnerships.desc': { en: 'Connecting with aid organizations for maximum impact', sv: 'Kopplar samman med biståndsorganisationer för maximal påverkan' },
    'work.activeCampaigns.mediaOutreach.title': { en: 'Media Outreach', sv: 'Medieuppmärksamhet' },
    'work.activeCampaigns.mediaOutreach.desc': { en: 'Amplifying Tigrean voices through strategic media engagement', sv: 'Förstärker tigreanska röster genom strategiskt medieengagemang' },
    'work.activeCampaigns.adsPartnership.title': { en: 'Partnership with Anenitigray Development Services (ADS)', sv: 'Partnerskap med Anenitigray Development Services (ADS)' },
    'work.activeCampaigns.adsPartnership.desc': { en: 'Ternafit is helping ADS in fundraising, website development and management, digital marketing and other areas.', sv: 'Ternafit hjälper ADS med insamling, webbutveckling och hantering, digital marknadsföring och andra områden.' },
    'work.activeCampaigns.callToAction': { en: 'Want to get involved? Contact us to learn how you can contribute.', sv: 'Vill du engagera dig? Kontakta oss för att lära dig hur du kan bidra.' },

    // About page impact so far section
    'about.impactSoFar.title': { en: 'Our Impact So Far', sv: 'Vår påverkan hittills' },
    'about.impactSoFar.infoShared.title': { en: '500+ Information Pieces Shared', sv: '500+ Informationsstycken delade' },
    'about.impactSoFar.infoShared.desc': { en: 'Reliable updates and resources shared with our community', sv: 'Pålitliga uppdateringar och resurser delade med vårt samhälle' },
    'about.impactSoFar.awarenessCampaigns.title': { en: '5 Awareness Campaigns', sv: '5 Medvetenhetskampanjer' },
    'about.impactSoFar.awarenessCampaigns.desc': { en: 'Major campaigns launched to raise global awareness', sv: 'Stora kampanjer lanserade för att öka global medvetenhet' },
    'about.impactSoFar.communityConnections.title': { en: '5+ Community Connections', sv: '5+ Samhällskontakter' },
    'about.impactSoFar.communityConnections.desc': { en: 'Partnerships and connections built with organizations', sv: 'Partnerskap och kontakter byggda med organisationer' },
    'about.impactSoFar.newsletterSubscribers.title': { en: '200+ Newsletter Subscribers', sv: '200+ Nyhetsbrevsprenumeranter' },
    'about.impactSoFar.newsletterSubscribers.desc': { en: 'Active subscribers staying informed about Tigray', sv: 'Aktiva prenumeranter som håller sig informerade om Tigray' },
    'about.impactSoFar.callToAction1': { en: 'These numbers represent real impact, but there\'s still much work to be done.', sv: 'Dessa siffror representerar verklig påverkan, men det finns fortfarande mycket arbete att göra.' },
    'about.impactSoFar.callToAction2': { en: 'Join us in making an even greater difference.', sv: 'Gå med oss för att göra en ännu större skillnad.' },

    // About page values section
    'about.values.title': { en: 'Our Values', sv: 'Våra värderingar' },
    'about.values.compassion.title': { en: 'Compassion', sv: 'Medkänsla' },
    'about.values.compassion.desc': { en: 'We approach every situation with empathy and understanding, recognizing the human dignity in all we serve.', sv: 'Vi närmar oss varje situation med empati och förståelse, och erkänner den mänskliga värdigheten i alla vi tjänar.' },
    'about.values.integrity.title': { en: 'Integrity', sv: 'Integritet' },
    'about.values.integrity.desc': { en: 'We maintain transparency in our actions and accountability in our commitments to the community.', sv: 'Vi upprätthåller transparens i våra handlingar och ansvarsskyldighet i våra åtaganden gentemot samhället.' },
    'about.values.collaboration.title': { en: 'Collaboration', sv: 'Samarbete' },
    'about.values.collaboration.desc': { en: 'We work together with local communities, partners, and stakeholders to achieve sustainable impact.', sv: 'Vi arbetar tillsammans med lokala samhällen, partners och intressenter för att uppnå hållbar påverkan.' },
    'about.values.innovation.title': { en: 'Innovation', sv: 'Innovation' },
    'about.values.innovation.desc': { en: 'We embrace creative solutions and new approaches to address complex challenges facing the Tigrean community.', sv: 'Vi omfamnar kreativa lösningar och nya tillvägagångssätt för att hantera komplexa utmaningar som det tigreanska samhället står inför.' },

    // About page join cause section
    'about.joinCause.title': { en: 'Join Our Cause', sv: 'Anslut dig till vårt uppdrag' },
    'about.joinCause.stayInformed.title': { en: 'Stay Informed:', sv: 'Håll dig informerad:' },
    'about.joinCause.stayInformed.desc': { en: 'Follow our updates and learn about the latest developments in Tigray.', sv: 'Följ våra uppdateringar och lär dig om de senaste utvecklingarna i Tigray.' },
    'about.joinCause.raiseAwareness.title': { en: 'Raise Awareness:', sv: 'Öka medvetenheten:' },
    'about.joinCause.raiseAwareness.desc': { en: 'Share our content and help amplify Tigrean voices in your community.', sv: 'Dela vårt innehåll och hjälp till att förstärka tigreanska röster i ditt samhälle.' },
    'about.joinCause.collaborate.title': { en: 'Collaborate:', sv: 'Samarbeta:' },
    'about.joinCause.collaborate.desc': { en: 'Partner with us on initiatives that support the Tigrean community.', sv: 'Samarbeta med oss på initiativ som stödjer det tigreanska samhället.' },
    'about.joinCause.subscribeButton': { en: 'Subscribe to Newsletter', sv: 'Prenumerera på nyhetsbrev' },

    // About page impact section
    'about.impact.infoShared': { en: 'Information Pieces Shared', sv: 'Informationsstycken delade' },
    'about.impact.awarenessCampaigns': { en: 'Awareness Campaigns', sv: 'Medvetenhetskampanjer' },
    'about.impact.communityConnections': { en: 'Community Connections', sv: 'Samhällskontakter' },
    'about.impact.newsletterSubscribers': { en: 'Newsletter Subscribers', sv: 'Nyhetsbrevsprenumeranter' },
    // Home page missing translations
    'home.cta.donate': { en: 'Donate Now', sv: 'Donera nu' },
    'home.cta.learn': { en: 'Learn More', sv: 'Läs mer' },
    'home.donations.people': { en: 'people', sv: 'personer' },
    'home.donations.donatedToday': { en: 'donated today', sv: 'donerade idag' },
    
    // Home impact section
    'home.impact.title': { en: 'Our Impact', sv: 'Vår påverkan' },
    'home.impact.peopleReached': { en: 'People Reached', sv: 'Personer nådda' },
    'home.impact.advocacyCampaigns': { en: 'Advocacy Campaigns', sv: 'Påverkansarbetskampanjer' },
    'home.impact.strategicPartnerships': { en: 'Strategic Partnerships', sv: 'Strategiska partnerskap' },
    'home.impact.description': { en: 'Through our comprehensive approach, we have made significant strides in supporting the Tigrean community through information sharing, advocacy, and building vital connections.', sv: 'Genom vårt omfattande tillvägagångssätt har vi gjort betydande framsteg i att stödja det tigreanska samhället genom informationsdelning, påverkansarbete och att bygga viktiga kontakter.' },
    'home.impact.stat1': { en: 'people reached through our information campaigns', sv: 'personer nådda genom våra informationskampanjer' },
    'home.impact.stat2': { en: 'major advocacy campaigns launched', sv: 'stora påverkansarbetskampanjer lanserade' },
    'home.impact.stat3': { en: 'strategic partnerships established', sv: 'strategiska partnerskap etablerade' },
    
    // Home programs section
    'home.programs.title': { en: 'Our Programs', sv: 'Våra program' },
    
    // 'about.impactSoFar.callToAction2': { en: 'Join us in making an even greater difference.', sv: 'Gå med oss för att göra en ännu större skillnad.' }
    // Home programs missing translations
    'home.programs.emergencyRelief.title': { en: 'Emergency Relief', sv: 'Akut nödhjälp' },
    'home.programs.emergencyRelief.description': { en: 'Providing immediate assistance to communities affected by conflict and crisis, including food, water, shelter, and medical aid.', sv: 'Tillhandahåller omedelbar hjälp till samhällen som påverkas av konflikt och kris, inklusive mat, vatten, skydd och medicinsk hjälp.' },
    'home.programs.educationYouth.title': { en: 'Education & Youth', sv: 'Utbildning & Ungdom' },
    'home.programs.educationYouth.description': { en: 'Supporting educational initiatives and youth development programs to build a stronger future for Tigrean communities.', sv: 'Stödjer utbildningsinitiativ och ungdomsutvecklingsprogram för att bygga en starkare framtid för tigreanska samhällen.' },

    // Donate page missing translations
    'donate.subtitle': { en: 'Your support makes a real difference in the lives of Tigrean families', sv: 'Ditt stöd gör verklig skillnad i livet för tigreanska familjer' },
    'donate.amount': { en: 'Donation Amount', sv: 'Donationsbelopp' },
    'donate.custom': { en: 'Custom Amount', sv: 'Anpassat belopp' },

    // Common missing translations
    'common.subscribe': { en: 'Subscribe', sv: 'Prenumerera' },
    'common.downloadAnnualReport': { en: 'Download Annual Report', sv: 'Ladda ner årsrapport' },

    // Blog page missing translations
    'blog.featuredStories': { en: 'Featured Ternafit Stories', sv: 'Utvalda Ternafit-berättelser' },
    'blog.latestArticles': { en: 'Latest Articles', sv: 'Senaste artiklarna' },

    // Get Involved page missing translations
    'getInvolved.volunteer.title': { en: 'Learn How to Volunteer', sv: 'Lär dig hur du volontärarbetar' },
    'getInvolved.volunteer.description': { en: 'Even if opportunities are limited, your time and skills can make a difference. Contact us to learn more about volunteering with Ternafit.', sv: 'Även om möjligheterna är begränsade kan din tid och dina färdigheter göra skillnad. Kontakta oss för att lära dig mer om volontärarbete med Ternafit.' },
    'getInvolved.volunteer.cta': { en: 'Contact Us to Volunteer', sv: 'Kontakta oss för volontärarbete' },

    // Scholarship program missing translations
    'scholarship.memorial.title': { en: 'Memorial & Named Scholarships', sv: 'Minnesstipendier & Namngivna stipendier' },
    'scholarship.memorial.description': { en: 'To honor the enduring legacy of Tigray\'s great leaders and thinkers, we offer these named scholarships. Your contribution to these funds creates a living tribute that empowers the next generation to build upon their work.', sv: 'För att hedra det bestående arvet från Tigrays stora ledare och tänkare erbjuder vi dessa namngivna stipendier. Ditt bidrag till dessa fonder skapar en levande hyllning som ger nästa generation möjlighet att bygga vidare på deras arbete.' },
    'scholarship.memorial.contribute': { en: 'Contribute to this Fund', sv: 'Bidra till denna fond' },

    // 'about.impactSoFar.callToAction2': { en: 'Join us in making an even greater difference.', sv: 'Gå med oss för att göra en ännu större skillnad.' }
};
