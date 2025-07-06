
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
    'nav.work': { en: 'Work', sv: 'Vårt arbete' },
    'work.title': { en: 'Our Work', sv: 'Vårt arbete' },
    'work.hero.subtitle': { en: 'At Ternafit, our work goes beyond physical aid. We empower, inform, connect, and advocate for Tigray — online and in real life — to build lasting hope and opportunities.', sv: 'På Ternafit sträcker sig vårt arbete bortom fysiskt bistånd. Vi stärker, informerar, kopplar samman och förespråkar för Tigray – online och i verkliga livet – för att bygga varaktigt hopp och möjligheter.' },
    'work.whatWeDo.title': { en: 'What We Do', sv: 'Vad vi gör' },
    'work.whatWeDo.infoSharing.title': { en: 'Information Sharing', sv: 'Informationsdelning' },
    'work.whatWeDo.infoSharing.desc': { en: 'Curated reliable updates and resources about Tigray, making critical information accessible for the global community.', sv: 'Sammanställer pålitliga uppdateringar och resurser om Tigray, vilket gör kritisk information tillgänglig för det globala samhället.' },
    'work.whatWeDo.awareness.title': { en: 'Raising Awareness', sv: 'Ökar medvetenheten' },
    'work.whatWeDo.awareness.desc': { en: 'Spearheaded online campaigns, webinars, and social media discussions to amplify the voices of the Tigrean people.', sv: 'Leder onlinekampanjer, webbinarier och diskussioner i sociala medier för att förstärka det tigreanska folkets röster.' },
    'work.whatWeDo.alliances.title': { en: 'Building Alliances', sv: 'Bygger allianser' },
    'work.whatWeDo.alliances.desc': { en: 'Connected Swedish Tigreans with aid organizations and fostered partnerships for sustainable, positive change.', sv: 'Kopplar samman svenska tigreanier med biståndsorganisationer och främjar partnerskap för hållbar, positiv förändring.' },
    'work.whatWeDo.innovativeSupport.title': { en: 'Innovative Support', sv: 'Innovativt stöd' },
    'work.whatWeDo.innovativeSupport.desc': { en: 'We develop and implement innovative solutions to meet Tigray\'s unique needs, from digital platforms to creative fundraising initiatives.', sv: 'Vi utvecklar och implementerar innovativa lösningar för att möta Tigrays unika behov, från digitala plattformar till kreativa insamlingsinitiativ.' },
    'work.approach.title': { en: 'Our Approach', sv: 'Vårt tillvägagångssätt' },
    'work.approach.community.title': { en: 'Community-Led', sv: 'Samhällslett' },
    'work.approach.community.desc': { en: 'We work hand-in-hand with local communities and diaspora groups to ensure lasting impact and mutual trust.', sv: 'Vi arbetar hand i hand med lokala samhällen och diasporagrupper för att säkerställa varaktig påverkan och ömsesidigt förtroende.' },
    'work.approach.sustainable.title': { en: 'Sustainable', sv: 'Hållbart' },
    'work.approach.sustainable.desc': { en: 'We invest in education, healthcare, and capacity-building for outcomes that last far beyond short-term aid.', sv: 'Vi investerar i utbildning, hälsovård och kapacitetsuppbyggnad för resultat som varar långt bortom kortsiktigt bistånd.' },
    'work.approach.inclusive.title': { en: 'Inclusive', sv: 'Inkluderande' },
    'work.approach.inclusive.desc': { en: 'We strive to reach every group regardless of age, gender, or background—leaving no one behind.', sv: 'Vi strävar efter att nå varje grupp oavsett ålder, kön eller bakgrund – och lämnar ingen utanför.' },
    'work.approach.transparent.title': { en: 'Transparent', sv: 'Transparent' },
    'work.approach.transparent.desc': { en: 'We are committed to full transparency in all our operations, which ensures every contribution and every action is accounted for.', sv: 'Vi är engagerade i fullständig transparens i alla våra operationer, vilket säkerställer att varje bidrag och varje åtgärd redovisas.' },
    'work.focusAreas.title': { en: 'Our Current Focus', sv: 'Vårt nuvarande fokus' },
    'work.focusAreas.education.title': { en: 'Education Initiatives', sv: 'Utbildningsinitiativ' },
    'work.focusAreas.education.desc': { en: 'Support for school reopening drives, supplies for children, and digital learning outreach to keep students engaged.', sv: 'Stöd för skolöppningskampanjer, förnödenheter till barn och digitalt lärande för att hålla elever engagerade.' },
    'work.focusAreas.healthcare.title': { en: 'Healthcare Advocacy', sv: 'Hälsovårdsförespråkande' },
    'work.focusAreas.healthcare.desc': { en: 'Community health events, healthcare worker training, and partnerships for mobile clinics and medical donations.', sv: 'Samhällshälsoevenemang, utbildning av hälsovårdspersonal och partnerskap för mobila kliniker och medicinska donationer.' },
    'work.focusAreas.emergencyRelief.title': { en: 'Emergency Relief', sv: 'Nödhjälp' },
    'work.focusAreas.emergencyRelief.desc': { en: 'Responding to critical developments by connecting the community with credible aid organizations and material support.', sv: 'Svarar på kritiska utvecklingar genom att koppla samman samhället med trovärdiga biståndsorganisationer och materiellt stöd.' },
    'work.focusAreas.advocacyRights.title': { en: 'Advocacy & Rights', sv: 'Förespråkande & Rättigheter' },
    'work.focusAreas.advocacyRights.desc': { en: 'We work to protect and promote human rights in Tigray, advocating for justice and accountability on a global level.', sv: 'Vi arbetar för att skydda och främja mänskliga rättigheter i Tigray, genom att förespråka rättvisa och ansvarsskyldighet på global nivå.' },
    'work.volunteer.title': { en: 'Volunteer With Us', sv: 'Volontärarbeta med oss' },
    'work.volunteer.desc': { en: 'We\'re always looking for dedicated volunteers and fresh ideas—whether you\'re in Sweden, the diaspora, or following our mission online.', sv: 'Vi söker alltid engagerade volontärer och nya idéer – oavsett om du befinner dig i Sverige, diasporan eller följer vårt uppdrag online.' },
    'work.volunteer.button': { en: 'Join Us', sv: 'Gå med oss' },
    'work.activeCampaigns.title': { en: 'Active Campaigns & Impact', sv: 'Aktiva kampanjer & påverkan' },
    'work.activeCampaigns.standWithTigray.title': { en: '#StandWithTigray Campaigns', sv: '#StandWithTigray-kampanjer' },
    'work.activeCampaigns.standWithTigray.desc': { en: 'Engaging hundreds via social and virtual events raising global awareness.', sv: 'Engagerar hundratals via sociala och virtuella evenemang som ökar den globala medvetenheten.' },
    'work.activeCampaigns.partnerships.title': { en: 'Partnerships Established', sv: 'Etablerade partnerskap' },
    'work.activeCampaigns.partnerships.desc': { en: 'Multiple collaborations with NGOs and community groups for skilled volunteering and advocacy.', sv: 'Flera samarbeten med NGO:er och samhällsgrupper för kvalificerad volontärarbete och påverkansarbete.' },
    'work.activeCampaigns.mediaOutreach.title': { en: 'Media Outreach', sv: 'Medieuppsökande verksamhet' },
    'work.activeCampaigns.mediaOutreach.desc': { en: 'Featured in diaspora newsletters and regional radio broadcasts to spread our message.', sv: 'Visas i diasporanyhetsbrev och regionala radiosändningar för att sprida vårt budskap.' },
    'work.activeCampaigns.callToAction': { en: 'Every action (big or small) moves Tigray forward.', sv: 'Varje handling (stor som liten) för Tigray framåt.' },
    'nav.blog': { en: 'Blog', sv: 'Blogg' },
    'nav.podcast': { en: 'Podcast', sv: 'Podd' },
    'nav.news': { en: 'News', sv: 'Nyheter' },
    'nav.donate': { en: 'Donate', sv: 'Donera' },
    'nav.getInvolved': { en: 'Get Involved', sv: 'Engagera dig' },

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

    // Get Involved Page
    'getInvolved.hero.title': { en: 'Get Involved', sv: 'Engagera dig' },
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
    'home.cta.donate': { en: 'Donate Now', sv: 'Donera nu' },
    'home.cta.learn': { en: 'Learn More', sv: 'Läs mer' },
    'home.donations.people': { en: 'people', sv: 'personer' },
    'home.donations.donatedToday': { en: 'have donated today', sv: 'har donerat idag' },
    'home.impact.title': { en: 'Our Impact', sv: 'Vår påverkan' },
    'home.impact.people': { en: 'People Helped', sv: 'Personer hjälpta' },
    'home.impact.projects': { en: 'Projects Completed', sv: 'Projekt slutförda' },
    'home.impact.peopleReached': { en: 'People Reached', sv: 'Personer Nådda' },
    'home.impact.advocacyCampaigns': { en: 'Advocacy Campaigns', sv: 'Påverkanskampanjer' },
    'home.impact.strategicPartnerships': { en: 'Strategic Partnerships', sv: 'Strategiska Partnerskap' },

    // About
    'about.title': { en: 'About Ternafit', sv: 'Om Ternafit' },
    'about.welcome': { en: 'Welcome to Ternafit!', sv: 'Välkommen till Ternafit!' },
    'about.intro': { en: 'Ternafit is a Sweden-based NGO with a mission to empower the Tigrean people through initiatives in information sharing, raising awareness, and building connections for aid.', sv: 'Ternafit är en Sverige-baserad NGO med uppdrag att stärka det tigreanska folket genom initiativ inom informationsdelning, medvetandehöjning och att bygga kontakter för bistånd.' },
    'about.mission.title': { en: 'Our Mission', sv: 'Vårt uppdrag' },
    'about.mission.text1': { en: 'Empowering the Tigrean people through various initiatives is not just our commitment, it\'s our calling.', sv: 'Att stärka det tigreanska folket genom olika initiativ är inte bara vårt åtagande, det är vår kallelse.' },
    'about.mission.text2': { en: 'Standing with the people of Tigray for dignity, justice, and opportunity.', sv: 'Att stå med folket i Tigray för värdighet, rättvisa och möjligheter.' },
    'about.mission.text3': { en: 'Supporting Tigray by sharing accurate and timely information, amplifying voices, and connecting passionate supporters to effective aid opportunities.', sv: 'Att stödja Tigray genom att dela korrekt och aktuell information, förstärka röster och koppla samman engagerade supportrar med effektiva biståndsmöjligheter.' },
    'about.howWeSupport.title': { en: 'How We Support Tigray', sv: 'Hur vi stödjer Tigray' },
    'about.howWeSupport.infoSharing.title': { en: 'Sharing Reliable Information', sv: 'Delar pålitlig information' },
    'about.howWeSupport.infoSharing.desc': { en: 'We curate and share resources from trusted voices, ensuring our community stays updated on Tigray.', sv: 'Vi sammanställer och delar resurser från betrodda källor, vilket säkerställer att vårt samhälle håller sig uppdaterat om Tigray.' },
    'about.howWeSupport.awareness.title': { en: 'Raising Awareness', sv: 'Ökar medvetenheten' },
    'about.howWeSupport.awareness.desc': { en: 'We advocate for the Tigrean people, leading discussions and running campaigns to keep their story heard.', sv: 'Vi förespråkar för det tigreanska folket, leder diskussioner och driver kampanjer för att deras berättelse ska höras.' },
    'about.howWeSupport.connections.title': { en: 'Connecting with Aid Organizations', sv: 'Kopplar samman med biståndsorganisationer' },
    'about.howWeSupport.connections.desc': { en: 'We bridge Swedish Tigreans and reputable aid organizations, helping facilitate volunteer and donation opportunities.', sv: 'Vi bygger broar mellan svenska tigreanier och ansedda biståndsorganisationer, vilket underlättar volontär- och donationsmöjligheter.' },
    'about.values.title': { en: 'Our Values', sv: 'Våra värderingar' },
    'about.values.compassion.title': { en: 'Compassion', sv: 'Medkänsla' },
    'about.values.compassion.desc': { en: 'We approach our work with empathy and respect for the dignity of those we serve.', sv: 'Vi närmar oss vårt arbete med empati och respekt för värdigheten hos dem vi tjänar.' },
    'about.values.integrity.title': { en: 'Integrity', sv: 'Integritet' },
    'about.values.integrity.desc': { en: 'We are committed to transparency and accountability in all our operations.', sv: 'Vi är engagerade i transparens och ansvarsskyldighet i all vår verksamhet.' },
    'about.values.collaboration.title': { en: 'Collaboration', sv: 'Samarbete' },
    'about.values.collaboration.desc': { en: 'We work together with local communities and organizations to achieve our goals.', sv: 'Vi samarbetar med lokala samhällen och organisationer för att uppnå våra mål.' },
    'about.values.innovation.title': { en: 'Innovation', sv: 'Innovation' },
    'about.values.innovation.desc': { en: 'We continuously seek creative solutions to complex challenges.', sv: 'Vi söker ständigt kreativa lösningar på komplexa utmaningar.' },
    'about.joinCause.title': { en: 'Join Our Cause', sv: 'Gå med i vår sak' },
    'about.joinCause.stayInformed.title': { en: 'Stay Informed:', sv: 'Håll dig informerad:' },
    'about.joinCause.stayInformed.desc': { en: 'Subscribe to our newsletter for news, resources, and ways to make a difference.', sv: 'Prenumerera på vårt nyhetsbrev för nyheter, resurser och sätt att göra skillnad.' },
    'about.joinCause.raiseAwareness.title': { en: 'Raise Awareness:', sv: 'Öka medvetenheten:' },
    'about.joinCause.raiseAwareness.desc': { en: 'Share and discuss the situation in Tigray on your social media, network, and beyond.', sv: 'Dela och diskutera situationen i Tigray på dina sociala medier, nätverk och bortom.' },
    'about.joinCause.collaborate.title': { en: 'Collaborate with Us:', sv: 'Samarbeta med oss:' },
    'about.joinCause.collaborate.desc': { en: 'Contribute your ideas, time, or resources. All support helps strengthen our impact!', sv: 'Bidra med dina idéer, tid eller resurser. Allt stöd hjälper till att stärka vår påverkan!' },
    'about.joinCause.subscribeButton': { en: 'Subscribe to Newsletter', sv: 'Prenumerera på nyhetsbrev' },
    'about.impactSoFar.title': { en: 'Our Impact So Far', sv: 'Vår påverkan hittills' },
    'about.impactSoFar.infoShared.title': { en: 'Reliable Information Shared', sv: 'Pålitlig information delad' },
    'about.impactSoFar.infoShared.desc': { en: 'Curated hundreds of news updates and resources to keep our audience informed about the situation in Tigray.', sv: 'Sammanställt hundratals nyhetsuppdateringar och resurser för att hålla vår publik informerad om situationen i Tigray.' },
    'about.impactSoFar.awarenessCampaigns.title': { en: 'Awareness Campaigns', sv: 'Medvetenhetskampanjer' },
    'about.impactSoFar.awarenessCampaigns.desc': { en: 'Launched multiple social media campaigns and online discussions, amplifying the Tigrayan voice worldwide.', sv: 'Lanserat flera sociala mediekampanjer och onlinediskussioner, vilket förstärker den tigreanska rösten globalt.' },
    'about.impactSoFar.communityConnections.title': { en: 'Community Connections', sv: 'Samhällsanslutningar' },
    'about.impactSoFar.communityConnections.desc': { en: 'Fostered collaborations between Swedish Tigreans and established aid organizations for support and volunteering.', sv: 'Främjat samarbeten mellan svenska tigreanier och etablerade biståndsorganisationer för stöd och volontärarbete.' },
    'about.impactSoFar.newsletterSubscribers.title': { en: 'Newsletter Subscribers', sv: 'Nyhetsbrevsprenumeranter' },
    'about.impactSoFar.newsletterSubscribers.desc': { en: 'Built an engaged community who receives regular updates, opportunities, and ways to get involved.', sv: 'Byggt en engagerad gemenskap som får regelbundna uppdateringar, möjligheter och sätt att engagera sig.' },
    'about.impactSoFar.callToAction1': { en: 'Every action, big or small, makes a difference.', sv: 'Varje handling, stor som liten, gör skillnad.' },
    'about.impactSoFar.callToAction2': { en: 'Together, we stand with Tigray!', sv: 'Tillsammans står vi med Tigray!' },

    // Common
    'common.lastUpdated': { en: 'Last Updated', sv: 'Senast uppdaterad' },
    'common.readMore': { en: 'Read More', sv: 'Läs mer' },
    'common.learnMore': { en: 'Learn More', sv: 'Läs mer' },
    'common.contact': { en: 'Contact Us', sv: 'Kontakta oss' },
    'common.subscribe': { en: 'Subscribe', sv: 'Prenumerera' },
    'common.email': { en: 'Email', sv: 'E-post' },
    'common.name': { en: 'Name', sv: 'Namn' },
    'common.submit': { en: 'Send Message', sv: 'Skicka meddelande' },
    'common.loading': { en: 'Sending...', sv: 'Skickar...' },

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

    // News Page
    'news.title': { en: 'Latest News', sv: 'Senaste Nyheterna' },
    'news.description': { en: 'Stay updated with the latest articles and insights.', sv: 'Håll dig uppdaterad med de senaste artiklarna och insikterna.' },
    'news.featured': { en: 'Featured News', sv: 'Utvalda Nyheter' },
    'news.newsletterTitle': { en: 'Subscribe to our Newsletter', sv: 'Prenumerera på vårt nyhetsbrev' },
    'news.newsletterDescription': { en: 'Get the latest updates delivered to your inbox.', sv: 'Få de senaste uppdateringarna direkt till din inkorg.' },
    'news.loadError': { en: 'Failed to load news. Please try again later.', sv: 'Kunde inte ladda nyheter. Försök igen senare.' },
    'news.noTigrayNews': { en: 'No Tigray-related news found at the moment.', sv: 'Inga Tigray-relaterade nyheter hittades för tillfället.' },
    'news.loading': { en: 'Loading news...', sv: 'Laddar nyheter...' },

    'blog.sharePost': { en: 'Share this post:', sv: 'Dela detta inlägg:' },

    // Author Bio
    'authorBio.title': { en: 'About the Author', sv: 'Om författaren' },
    'authorBio.founderRole': { en: 'Founder & Program Director', sv: 'Grundare & Programdirektör' },
    'authorBio.fieldCoordinatorRole': { en: 'Field Coordinator', sv: 'Fältkoordinator' },
    'authorBio.yosephBio': {
        en: 'Yoseph has worked in humanitarian response in Tigray for over a decade and leads Ternafit\'s education and advocacy programs.',
        sv: 'Yoseph har arbetat med humanitära insatser i Tigray i över ett decennium och leder Ternafit\'s program för utbildning och påverkansarbete.'
    },
    'authorBio.genericBio': {
        en: 'With experience in local and international NGOs, the author is dedicated to documenting real stories from communities affected by the conflict.',
        sv: 'Med erfarenhet från lokala och internationella NGOs, är författaren dedikerad till att dokumentera verkliga berättelser från samhällen påverkade av konflikten.'
    },

    // Contact Page

    'contact.title': {
        en: 'Contact Us',
        sv: 'Kontakta oss'
    },
    'contact.subtitle': {
        en: 'Get in touch with our team',
        sv: 'Kontakta vårt team'
    },
    'contact.hero.title': {
        en: 'Get in Touch',
        sv: 'Kontakta oss'
    },
    'contact.hero.subtitle': {
        en: "We'd love to hear from you! Whether you have a question about our mission, activities, or how you can get involved, feel free to reach out.",
        sv: 'Vi vill gärna höra från dig! Oavsett om du har en fråga om vårt uppdrag, våra aktiviteter eller hur du kan engagera dig, tveka inte att höra av dig.'
    },
    'contact.form.success': {
        en: 'Message sent successfully!',
        sv: 'Meddelandet har skickats!'
    },
    'contact.address.title': { en: 'Address', sv: 'Adress' },
    'contact.address.line1': { en: 'Jungfrugatan 1F', sv: 'Jungfrugatan 1F' },
    'contact.address.line2': { en: '641 31 Katrineholm', sv: '641 31 Katrineholm' },
    'contact.address.line3': { en: 'Sweden', sv: 'Sverige' },
    'contact.email.title': { en: 'Email', sv: 'E-post' },
    'contact.officeHours.title': { en: 'Office Hours', sv: 'Kontorstider' },
    'contact.officeHours.desc': { en: 'Monday - Friday: 9:00 AM - 5:00 PM (CET)', sv: 'Måndag - Fredag: 9:00 - 17:00 (CET)' },
    'contact.form.intro': { en: 'Use the form to send us a message directly, or use the contact details provided. We aim to respond within 24-48 business hours.', sv: 'Använd formuläret för att skicka ett meddelande direkt till oss, eller använd de angivna kontaktuppgifterna. Vi strävar efter att svara inom 24-48 arbetstimmar.' },
    'contact.form.fullName': { en: 'Full Name', sv: 'Fullständigt namn' },
    'contact.form.emailAddress': { en: 'Email Address', sv: 'E-postadress' },
    'contact.form.subject': { en: 'Subject', sv: 'Ämne' },
    'contact.form.message': { en: 'Message', sv: 'Meddelande' },
    'contact.form.placeholder.fullName': { en: 'Your Full Name', sv: 'Ditt fullständiga namn' },
    'contact.form.placeholder.email': { en: 'your.email@example.com', sv: 'din.email@example.com' },
    'contact.form.placeholder.subject': { en: 'Regarding...', sv: 'Angående...' },
    'contact.form.placeholder.message': { en: 'Your message here...', sv: 'Ditt meddelande här...' },
    'contact.form.submitSuccess': { en: 'Thank you for your message! We will get back to you soon.', sv: 'Tack för ditt meddelande! Vi återkommer snart.' },
    'contact.form.submitError': { en: 'An unexpected error occurred. Please try again.', sv: 'Ett oväntat fel uppstod. Försök igen.' },
    'contact.location.title': { en: 'Our Location', sv: 'Vår plats' },

    // Terms of Service Page Hero
    'terms.hero.title': {
        en: 'Terms of Service',
        sv: 'Användarvillkor'
    },
    'terms.hero.subtitle': {
        en: 'Please read these terms of service carefully before using Our Service.',
        sv: 'Vänligen läs dessa användarvillkor noggrant innan du använder vår tjänst.'
    },

    // Privacy Policy Page Hero
    'privacy.hero.title': {
        en: 'Privacy Policy',
        sv: 'Integritetspolicy'
    },
    'privacy.hero.subtitle': {
        en: 'Your privacy is important to us. This privacy statement explains the personal data Ternafit processes, how Ternafit processes it, and for what purposes.',
        sv: 'Din integritet är viktig för oss. Denna integritetspolicy förklarar vilka personuppgifter Ternafit behandlar, hur Ternafit behandlar dem och för vilka ändamål.'
    },
    'privacy.intro.title': { en: 'Introduction', sv: 'Introduktion' },
    'privacy.intro.text1': { en: 'At Ternafit, we don’t just respect your privacy; we cherish it. Our Privacy Policy outlines our steadfast commitment to protecting your personal information.', sv: 'På Ternafit respekterar vi inte bara din integritet; vi värnar om den. Vår integritetspolicy beskriver vårt orubbliga engagemang för att skydda din personliga information.' },
    'privacy.intro.text2': { en: 'This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and informs you of your privacy rights and how the law protects you.', sv: 'Denna integritetspolicy beskriver våra policyer och förfaranden för insamling, användning och utlämnande av din information när du använder tjänsten och informerar dig om dina integritetsrättigheter och hur lagen skyddar dig.' },
    'privacy.definitions.title': { en: 'Interpretation and Definitions', sv: 'Tolkning och definitioner' },
    'privacy.definitions.interpretation.title': { en: 'Interpretation', sv: 'Tolkning' },
    'privacy.definitions.interpretation.text': { en: 'The words in which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural form.', sv: 'Orden där den första bokstaven är versal har betydelser definierade under följande villkor. Följande definitioner ska ha samma betydelse oavsett om de förekommer i singular eller plural form.' },
    'privacy.definitions.definitions.title': { en: 'Definitions', sv: 'Definitioner' },
    'privacy.definitions.definitions.intro': { en: 'For the purposes of this Privacy Policy:', sv: 'I denna integritetspolicy avses:' },
    'privacy.definitions.definitions.account': { en: 'Account: A unique account created for you to access our Service or parts of our Service.', sv: 'Konto: Ett unikt konto skapat för dig för att få tillgång till vår tjänst eller delar av vår tjänst.' },
    'privacy.definitions.definitions.affiliate': { en: 'Affiliate: An entity that controls, is controlled by, or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.', sv: 'Dotterbolag: En enhet som kontrollerar, kontrolleras av, eller står under gemensam kontroll med en part, där ”kontroll” innebär ägande av 50 % eller mer av aktierna, eget kapital eller andra värdepapper som ger rätt att rösta för val av styrelseledamöter eller annan ledande myndighet.' },
    'privacy.definitions.definitions.organization': { en: 'Organization: (referred to as either “the Organization”, “We”, “Us”, or “Our” in this Agreement) refers to Ternafit, Jungfrugatan 1F, 64131, Katrineholm, Sweden.', sv: 'Organisation: (hänvisas till som antingen ”Organisationen”, ”Vi”, ”Oss” eller ”Vår” i detta avtal) avser Ternafit, Jungfrugatan 1F, 64131, Katrineholm, Sverige.' },
    'privacy.definitions.definitions.cookies': { en: 'Cookies: Small files that are placed on your computer, mobile device, or any other device by a website, containing the details of your browsing history on that website among its many uses.', sv: 'Cookies: Små filer som placeras på din dator, mobila enhet eller någon annan enhet av en webbplats, innehållande detaljer om din webbhistorik på den webbplatsen bland dess många användningsområden.' },
    'privacy.definitions.definitions.country': { en: 'Country: Refers to Sweden.', sv: 'Land: Avser Sverige.' },
    'privacy.definitions.definitions.device': { en: 'Device: Any device that can access the Service, such as a computer, cellphone, or digital tablet.', sv: 'Enhet: Varje enhet som kan komma åt tjänsten, såsom en dator, mobiltelefon eller digital surfplatta.' },
    'privacy.definitions.definitions.personalData': { en: 'Personal Data: Any information that relates to an identified or identifiable individual.', sv: 'Personuppgifter: All information som rör en identifierad eller identifierbar individ.' },
    'privacy.definitions.definitions.service': { en: 'Service: Refers to the Website.', sv: 'Tjänst: Avser webbplatsen.' },
    'privacy.definitions.definitions.serviceProvider': { en: 'Service Provider: Any natural or legal person who processes data on behalf of the Organization. This refers to third-party companies or individuals employed by the Organization to facilitate the Service, provide the Service on behalf of the Organization, perform services related to the Service, or assist the Organization in analyzing how the Service is used.', sv: 'Tjänsteleverantör: Varje fysisk eller juridisk person som behandlar data på uppdrag av organisationen. Detta avser tredjepartsföretag eller individer som anställts av organisationen för att underlätta tjänsten, tillhandahålla tjänsten på uppdrag av organisationen, utföra tjänster relaterade till tjänsten eller hjälpa organisationen att analysera hur tjänsten används.' },
    'privacy.trackingTechnologies.title': { en: 'Tracking Technologies and Cookies', sv: 'Spårningstekniker och cookies' },
    'privacy.trackingTechnologies.text1': { en: 'We use Cookies and similar tracking technologies to track the activity on our Service and store certain information. Tracking technologies used may include beacons, tags, and scripts to collect and track information and to improve and analyze our Service. The technologies we use may include:', sv: 'Vi använder cookies och liknande spårningstekniker för att spåra aktiviteten på vår tjänst och lagra viss information. Spårningstekniker som används kan inkludera webbfyrar, taggar och skript för att samla in och spåra information samt för att förbättra och analysera vår tjänst. De tekniker vi använder kan inkludera:' },
    'privacy.trackingTechnologies.cookies.title': { en: 'Cookies or Browser Cookies:', sv: 'Cookies eller webbläsarcookies:' },
    'privacy.trackingTechnologies.cookies.desc': { en: 'A cookie is a small file placed on your Device. You can instruct your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if you do not accept Cookies, you may not be able to use some parts of our Service. Unless you have adjusted your browser setting so that it will refuse Cookies, our Service may use Cookies.', sv: 'En cookie är en liten fil som placeras på din enhet. Du kan instruera din webbläsare att vägra alla cookies eller att indikera när en cookie skickas. Om du inte accepterar cookies kanske du dock inte kan använda vissa delar av vår tjänst. Om du inte har justerat din webbläsarinställning så att den vägrar cookies, kan vår tjänst använda cookies.' },
    'privacy.trackingTechnologies.webBeacons.title': { en: 'Web Beacons:', sv: 'Webbfyrar:' },
    'privacy.trackingTechnologies.webBeacons.desc': { en: 'Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Organization, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).', sv: 'Vissa delar av vår tjänst och våra e-postmeddelanden kan innehålla små elektroniska filer som kallas webbfyrar (även kallade clear gifs, pixeltaggar och enpixel-gifs) som tillåter organisationen, till exempel, att räkna användare som har besökt dessa sidor eller öppnat ett e-postmeddelande och för annan relaterad webbplatsstatistik (till exempel registrering av populariteten för en viss sektion och verifiering av system- och serverintegritet).' },
    'privacy.trackingTechnologies.text2': { en: 'Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies remain on your personal computer or mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser.', sv: 'Cookies kan vara ”beständiga” eller ”sessionscookies”. Beständiga cookies finns kvar på din personliga dator eller mobila enhet när du går offline, medan sessionscookies raderas så snart du stänger din webbläsare.' },
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
    'privacy.dataTransfer.text1': { en: 'Your information, including Personal Data, is processed at the Organization’s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of Your jurisdiction.', sv: 'Din information, inklusive personuppgifter, behandlas vid organisationens verksamhetsställen och på alla andra platser där de parter som är involverade i behandlingen befinner sig. Det innebär att denna information kan överföras till – och underhållas på – datorer som är belägna utanför din stat, provins, land eller annan statlig jurisdiktion där dataskyddslagarna kan skilja sig från dem i din jurisdiktion.' },
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
    'footer.rights': {
        en: ' 2025 Ternafit. All rights reserved.',
        sv: ' 2025 Ternafit. Alla rättigheter förbehållna.'
    },
    'footer.privacy': { en: 'Privacy Policy', sv: 'Integritetspolicy' },
    'footer.terms': { en: 'Terms of Service', sv: 'Användarvillkor' },
    'footer.contact': { en: 'Contact', sv: 'Kontakt' },
    'footer.quickLinks': { en: 'Quick Links', sv: 'Snabblänkar' },
    'footer.supportUs': { en: 'Support Us', sv: 'Stöd oss' },
    'footer.country': { en: 'Sweden', sv: 'Sverige' },
    'footer.newsletterDescription': { en: 'Stay updated with our latest news and events.', sv: 'Håll dig uppdaterad med våra senaste nyheter och evenemang.' },

    // Footer
    'footer.tagline': { en: 'Supporting the Tigrean community through humanitarian aid, education, and advocacy.', sv: 'Stödjer det tigreanska samhället genom humanitärt bistånd, utbildning och påverkansarbete.' },

    // Homepage Donation Section
    'home.donate.intro': { en: 'Your generosity allows Ternafit to deliver urgent relief and lasting hope. Every contribution goes directly to families and communities working to rebuild and thrive.', sv: 'Din generositet gör det möjligt för Ternafit att leverera akut hjälp och varaktigt hopp. Varje bidrag går direkt till familjer och samhällen som arbetar för att återuppbygga och blomstra.' },
    'home.donate.benefit1': { en: 'Deliver meals and medicine to families in urgent need', sv: 'Leverera måltider och medicin till familjer i akut behov' },
    'home.donate.benefit2': { en: 'Fund safe spaces and resources for children\'s education', sv: 'Finansiera trygga platser och resurser för barns utbildning' },
    'home.donate.benefit3': { en: 'Expand healthcare and recovery programs in remote areas', sv: 'Utöka hälsovårds- och återhämtningsprogram i avlägsna områden' },

    // Podcast Categories
    'podcast.category.allEpisodes': { en: 'All Episodes', sv: 'Alla avsnitt' },
    'podcast.category.stories': { en: 'Stories', sv: 'Berättelser' },
    'podcast.category.interviews': { en: 'Intervjuer', sv: 'Interviews' },
    'podcast.category.recovery': { en: 'Recovery', sv: 'Återhämtning' },
    'podcast.category.updates': { en: 'Updates', sv: 'Uppdateringar' },
    'podcast.category.behindTheScenes': { en: 'Behind the Scenes', sv: 'Bakom kulisserna' },

    // Blog Page
    'blog.hero.subtitle': { en: 'Stories of resilience, hope, and progress. Real stories by Ternafit and the Tigrayan community—read, share, and join the voice for Tigray.', sv: 'Berättelser om motståndskraft, hopp och framsteg. Verkliga berättelser av Ternafit och det tigreanska samhället – läs, dela och anslut dig till rösten för Tigray.' },

    // Blog Sidebar
    // (Duplicate block removed; only one definition of each key is allowed)

    // Homepage Sections
    'home.impact.sectionTitle': { en: 'Our Impact', sv: 'Vår påverkan' },
    'home.impact.description': { en: 'Since our founding in 2023, Ternafit has focused on advocacy and raising awareness for the Tigrayan crisis from Sweden. We collaborate with partner NGOs to help deliver essential resources and support to Tigrayan families and hard-to-reach villages. Our efforts in advocacy and building strong partnerships continue to expand—thanks to people like you.', sv: 'Sedan vår grundande 2023 har Ternafit fokuserat på påverkansarbete och att öka medvetenheten om Tigray-krisen från Sverige. Vi samarbetar med partnerorganisationer för att leverera viktiga resurser och stöd till tigreanska familjer och svåråtkomliga byar. Våra ansträngningar inom påverkansarbete och att bygga starka partnerskap fortsätter att expandera – tack vare människor som du.' },
    'home.impact.stat1': { en: 'People reached through awareness events and campaigns held in Katrineholm, Eskilstuna, Oslo, and Örebro, raising visibility around the crisis in Tigray and mobilizing community support.', sv: 'Personer nådda genom medvetenhetsevenemang och kampanjer hållna i Katrineholm, Eskilstuna, Oslo och Örebro, vilket ökar synligheten kring krisen i Tigray och mobiliserar samhällsstöd.' },
    'home.impact.stat2': { en: 'Advocacy campaigns launched successfully to influence diaspora engagement, humanitarian response, and digital awareness on social platforms and in local communities.', sv: 'Påverkanskampanjer lanserade framgångsrikt för att påverka diasporans engagemang, humanitära insatser och digital medvetenhet på sociala plattformar och i lokala samhällen.' },
    'home.impact.stat3': { en: 'Strategic partnerships formed, including collaboration with Anenitigray Development Services (ADS) and other grassroots initiatives, strengthening our collective impact and outreach.', sv: 'Strategiska partnerskap bildade, inklusive samarbete med Anenitigray Development Services (ADS) och andra gräsrotsinitiativ, vilket stärker vår kollektiva påverkan och räckvidd.' },
    'home.award.title': { en: 'Ternafit Honored in the Non-Profit Organisation Awards 2025', sv: 'Ternafit hedras i Non-Profit Organisation Awards 2025' },
    'home.award.description1': { en: 'We are proud to announce that Ternafit has been named <span className="font-semibold">Best Tigrean Community Support Initiative 2025 – Sweden</span> by Acquisition International. This recognition celebrates our dedication to advocacy, awareness, and supporting the Tigrean community.', sv: 'Vi är stolta över att meddela att Ternafit har utnämnts till <span className="font-semibold">Bästa Tigreanska Samhällsstödsinitiativ 2025 – Sverige</span> av Acquisition International. Detta erkännande firar vårt engagemang för påverkansarbete, medvetenhet och stöd till det tigreanska samhället.' },
    'home.award.description2': { en: 'Thank you to our community, volunteers, and supporters. Together, we make a difference. Stay tuned for the official announcement in June!', sv: 'Tack till vårt samhälle, våra volontärer och supportrar. Tillsammans gör vi skillnad. Håll utkik efter det officiella tillkännagivandet i juni!' },
    'home.programs.title': { en: 'Our Programs', sv: 'Våra program' },
    'home.programs.emergencyRelief.title': { en: 'Emergency Relief', sv: 'Nödhjälp' },
    'home.programs.emergencyRelief.description': { en: 'Delivering food, safe water, shelter, and medical care to Tigrayan families affected by war, displacement, and disaster.', sv: 'Levererar mat, säkert vatten, skydd och medicinsk vård till tigreanska familjer som drabbats av krig, fördrivning och katastrofer.' },
    'home.programs.educationYouth.title': { en: 'Education & Youth', sv: 'Utbildning & Ungdom' },
    'home.programs.educationYouth.description': { en: 'Offering scholarships, supplies, and mentorship opportunities—helping Tigrayan children and youth rebuild their futures through learning.', sv: 'Erbjuder stipendier, förnödenheter och mentorskap – hjälper tigreanska barn och ungdomar att återuppbygga sin framtid genom lärande.' },
    'home.programs.advocacyAwareness.title': { en: 'Advocacy & Awareness', sv: 'Påverkansarbete & Medvetenhet' },
    'home.programs.advocacyAwareness.description': { en: 'Raising global awareness, informing policy, and partnering with communities and media to protect rights and amplify Tigrayan voices.', sv: 'Ökar global medvetenhet, informerar policy och samarbetar med samhällen och media för att skydda rättigheter och förstärka tigreanska röster.' },

    // Homepage Latest Posts
    'home.latestPosts.title': { en: 'From the Blog', sv: 'Från bloggen' },

    // Homepage Latest Posts
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
};
