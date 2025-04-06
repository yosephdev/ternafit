
import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { Calendar, Clock, Play, Pause } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Mock podcast data - in a real implementation, this would come from an API
const podcastEpisodes = [
  {
    id: 1,
    title: {
      en: "Voices from Tigray: Stories of Resilience",
      sv: "Röster från Tigray: Berättelser om motståndskraft"
    },
    description: {
      en: "In this episode, we hear first-hand accounts from Tigrean citizens about their experiences during the conflict and how they are rebuilding their lives.",
      sv: "I det här avsnittet hör vi förstahandsberättelser från tigreanska medborgare om deras erfarenheter under konflikten och hur de bygger upp sina liv igen."
    },
    date: "2025-03-15",
    duration: "45:12",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    audioUrl: "#" // Would be a real audio URL in production
  },
  {
    id: 2,
    title: {
      en: "Education in Crisis: Rebuilding Schools in Tigray",
      sv: "Utbildning i kris: Återuppbyggnad av skolor i Tigray"
    },
    description: {
      en: "We discuss the challenges faced by educators and students in Tigray, and the efforts to restore educational opportunities.",
      sv: "Vi diskuterar de utmaningar som lärare och elever i Tigray står inför, och ansträngningarna för att återställa utbildningsmöjligheter."
    },
    date: "2025-03-01",
    duration: "39:45",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop",
    audioUrl: "#" // Would be a real audio URL in production
  },
  {
    id: 3,
    title: {
      en: "Healthcare on the Frontlines: Medical Workers in Tigray",
      sv: "Sjukvård på frontlinjen: Sjukvårdspersonal i Tigray"
    },
    description: {
      en: "An interview with healthcare workers providing essential medical services in conflict-affected areas of Tigray.",
      sv: "En intervju med sjukvårdspersonal som tillhandahåller nödvändiga medicinska tjänster i konfliktdrabbade områden i Tigray."
    },
    date: "2025-02-15",
    duration: "52:30",
    imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=500&auto=format&fit=crop",
    audioUrl: "#" // Would be a real audio URL in production
  },
  {
    id: 4,
    title: {
      en: "Water Security in Tigray: Challenges and Solutions",
      sv: "Vattensäkerhet i Tigray: Utmaningar och lösningar"
    },
    description: {
      en: "Experts discuss the importance of water access in Tigray and the innovative solutions being implemented to address water scarcity.",
      sv: "Experter diskuterar vikten av vattentillgång i Tigray och de innovativa lösningar som implementeras för att hantera vattenbrist."
    },
    date: "2025-02-01",
    duration: "41:18",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=500&auto=format&fit=crop",
    audioUrl: "#" // Would be a real audio URL in production
  },
];

const formatDate = (dateString: string, language: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const PodcastPage = () => {
  const { t, language } = useLanguage();
  const [playingEpisode, setPlayingEpisode] = useState<number | null>(null);
  
  // Toggle play/pause for an episode
  const togglePlay = (episodeId: number) => {
    if (playingEpisode === episodeId) {
      setPlayingEpisode(null);
    } else {
      setPlayingEpisode(episodeId);
    }
  };

  return (
    <div className="podcast-page">
      {/* Page Header */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">{t("nav.podcast")}</h1>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-16 bg-gradient-to-r from-terracotta/90 to-ochre/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">
                {podcastEpisodes[0].title[language as keyof typeof podcastEpisodes[0].title] || podcastEpisodes[0].title.en}
              </h2>
              <div className="flex items-center space-x-4 mb-4 text-white/80">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(podcastEpisodes[0].date, language)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{podcastEpisodes[0].duration}</span>
                </div>
              </div>
              <p className="mb-6">
                {podcastEpisodes[0].description[language as keyof typeof podcastEpisodes[0].description] || podcastEpisodes[0].description.en}
              </p>
              <button 
                className="inline-flex items-center bg-white text-terracotta font-semibold py-2 px-4 rounded hover:bg-white/90 transition-colors"
                onClick={() => togglePlay(podcastEpisodes[0].id)}
              >
                {playingEpisode === podcastEpisodes[0].id ? (
                  <>
                    <Pause className="h-4 w-4 mr-2" />
                    {language === 'sv' ? 'Pausa' : 'Pause'}
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    {language === 'sv' ? 'Lyssna nu' : 'Listen Now'}
                  </>
                )}
              </button>
            </div>
            <div className="hidden md:block">
              <img 
                src={podcastEpisodes[0].imageUrl}
                alt={podcastEpisodes[0].title[language as keyof typeof podcastEpisodes[0].title] || podcastEpisodes[0].title.en}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Episode List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif font-bold mb-6">
                {language === 'sv' ? 'Senaste avsnitt' : 'Latest Episodes'}
              </h2>
              
              <div className="space-y-6">
                {podcastEpisodes.slice(1).map((episode) => (
                  <div key={episode.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                    <div className="md:flex gap-4">
                      <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
                        <img 
                          src={episode.imageUrl}
                          alt={episode.title[language as keyof typeof episode.title] || episode.title.en}
                          className="w-full h-32 md:h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-serif font-bold mb-2">
                          {episode.title[language as keyof typeof episode.title] || episode.title.en}
                        </h3>
                        <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{formatDate(episode.date, language)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{episode.duration}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                          {episode.description[language as keyof typeof episode.description] || episode.description.en}
                        </p>
                        <button 
                          className={`inline-flex items-center py-2 px-4 rounded transition-colors ${
                            playingEpisode === episode.id 
                              ? "bg-terracotta/10 text-terracotta" 
                              : "bg-muted text-foreground hover:bg-terracotta/10 hover:text-terracotta"
                          }`}
                          onClick={() => togglePlay(episode.id)}
                        >
                          {playingEpisode === episode.id ? (
                            <>
                              <Pause className="h-4 w-4 mr-2" />
                              {language === 'sv' ? 'Pausa' : 'Pause'}
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              {language === 'sv' ? 'Lyssna' : 'Listen'}
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* View More Button */}
              <div className="mt-8 text-center">
                <button className="bg-muted px-6 py-2 rounded-md hover:bg-muted-foreground hover:text-white transition-colors">
                  {language === 'sv' ? 'Visa fler avsnitt' : 'View More Episodes'}
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="space-y-6">
                <DonateBox compact sticky />

                {/* Subscribe */}
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h3 className="text-lg font-serif font-semibold mb-4">
                    {language === 'sv' ? 'Prenumerera' : 'Subscribe'}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'sv' 
                      ? 'Lyssna på vår podcast på din favoritplattform och missa aldrig ett avsnitt.' 
                      : 'Listen to our podcast on your favorite platform and never miss an episode.'}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="#" 
                      className="flex items-center justify-center p-2 border border-muted rounded-md hover:bg-muted transition-colors"
                    >
                      <img src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" alt="Spotify" className="h-6" />
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center justify-center p-2 border border-muted rounded-md hover:bg-muted transition-colors"
                    >
                      <img src="https://cdn.worldvectorlogo.com/logos/apple-podcast.svg" alt="Apple Podcasts" className="h-6" />
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center justify-center p-2 border border-muted rounded-md hover:bg-muted transition-colors"
                    >
                      <img src="https://cdn.worldvectorlogo.com/logos/google-podcasts.svg" alt="Google Podcasts" className="h-6" />
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center justify-center p-2 border border-muted rounded-md hover:bg-muted transition-colors"
                    >
                      <img src="https://cdn.worldvectorlogo.com/logos/overcast.svg" alt="Overcast" className="h-6" />
                    </a>
                  </div>
                </div>
                
                {/* Topics */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-serif font-semibold mb-4">
                    {language === 'sv' ? 'Ämnen' : 'Topics'}
                  </h3>
                  <div className="space-y-2">
                    <a href="#" className="block p-2 rounded hover:bg-muted transition-colors">
                      {language === 'sv' ? 'Humanitärt bistånd' : 'Humanitarian Aid'}
                    </a>
                    <a href="#" className="block p-2 rounded hover:bg-muted transition-colors">
                      {language === 'sv' ? 'Utbildning' : 'Education'}
                    </a>
                    <a href="#" className="block p-2 rounded hover:bg-muted transition-colors">
                      {language === 'sv' ? 'Sjukvård' : 'Healthcare'}
                    </a>
                    <a href="#" className="block p-2 rounded hover:bg-muted transition-colors">
                      {language === 'sv' ? 'Berättelser från samhället' : 'Community Stories'}
                    </a>
                    <a href="#" className="block p-2 rounded hover:bg-muted transition-colors">
                      {language === 'sv' ? 'Påverkansarbete' : 'Advocacy'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;
