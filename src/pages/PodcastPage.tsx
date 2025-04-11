import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { Calendar, Clock, Play, Pause } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Updated podcast data
const podcastEpisodes = [
  {
    id: 6,
    title: {
      en: "Tigray in Focus: Stories of Recovery, Challenges, and Hope",
      sv: "Tigray i fokus: Berättelser om återhämtning, utmaningar och hopp"
    },
    description: {
      en: "In this episode, we shine a spotlight on Tigray’s journey through recovery, examining the challenges faced and the hope that keeps its people moving forward.",
      sv: "I det här avsnittet belyser vi Tigrays resa genom återhämtning, undersöker de utmaningar som mötts och det hopp som får dess folk att fortsätta framåt."
    },
    date: "2025-03-15",
    duration: "45:12",
    imageUrl: "/images/podcast/episode6.jpg",
    audioUrl: "https://ternafit.org/media/audiopodcast-episode8.wav" // Placeholder for audio URL
  },
  {
    id: 5,
    title: {
      en: "Beyond Repair: Reflections of a Tigrean",
      sv: "Utanför reparationsområdet: Reflektioner från en Tigrean"
    },
    description: {
      en: "In this heartfelt episode, we delve into the personal reflections of a Tigrean and explore the resilience of a community navigating through hardship and recovery.",
      sv: "I det här hjärtliga avsnittet fördjupar vi oss i de personliga reflektionerna hos en Tigrean och utforskar motståndskraften hos en samhällen som navigerar genom svårigheter och återhämtning."
    },
    date: "2025-03-01",
    duration: "39:45",
    imageUrl: "/images/podcast/episode5.jpg",
    audioUrl: "https://ternafit.org/media/beyond-repair-reflections.mp3" // Placeholder for audio URL
  },
  {
    id: 4,
    title: {
      en: "Why the Referendum Matters",
      sv: "Varför folkomröstningen är viktig"
    },
    description: {
      en: "In this episode, we explore the significance of the referendum for Tigray and its implications for the future of the region.",
      sv: "I det här avsnittet utforskar vi betydelsen av folkomröstningen för Tigray och dess implikationer för regionens framtid."
    },
    date: "2025-02-15",
    duration: "52:30",
    imageUrl: "/images/podcast/episode4.png",
    audioUrl: "https://ternafit.org/media/audiopodcast-episode6.wav" // Placeholder for audio URL
  },
  {
    id: 3,
    title: {
      en: "Collaborating for Change",
      sv: "Samarbete för förändring"
    },
    description: {
      en: "Discover how Anenitigray Development Services (ADS) and Ternafit are making a difference in Tigray.",
      sv: "Upptäck hur Anenitigray Development Services (ADS) och Ternafit gör skillnad i Tigray."
    },
    date: "2025-02-01",
    duration: "41:18",
    imageUrl: "/images/podcast/episode3.jpg",
    audioUrl: "https://ternafit.org/media/audiopodcast-episode3.mp4" // Placeholder for audio URL
  },
  {
    id: 2,
    title: {
      en: "Inside Tigray: The Battle for Voice and Freedom",
      sv: "Inuti Tigray: Kampen för röst och frihet"
    },
    description: {
      en: "We delve into the complex and often misunderstood dynamics of silence and power in Tigray.",
      sv: "Vi fördjupar oss i de komplexa och ofta missförstådda dynamikerna av tystnad och makt i Tigray."
    },
    date: "2024-12-15",
    duration: "47:22",
    imageUrl: "/images/podcast/episode2.jpg",
    audioUrl: "https://ternafit.org/media/audiopodcast-episode.mp4" // Placeholder for audio URL
  },
  {
    id: 1,
    title: {
      en: "Our Journey So Far",
      sv: "Vår resa hittills"
    },
    description: {
      en: "In our first episode, we discuss our journey, the challenges faced, and the successes we’ve achieved.",
      sv: "I vårt första avsnitt diskuterar vi vår resa, de utmaningar vi stött på och de framgångar vi har uppnått."
    },
    date: "2024-11-01",
    duration: "38:50",
    imageUrl: "/images/podcast/episode1.png",
    audioUrl: "https://ternafit.org/media/audiopodcast-episode.mp3" // Placeholder for audio URL
  }
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

  // Helper functions to safely access nested properties
  const getTitle = (episode: typeof podcastEpisodes[0], lang: string) => {
    return lang === 'sv' ? episode.title.sv : episode.title.en;
  };

  const getDescription = (episode: typeof podcastEpisodes[0], lang: string) => {
    return lang === 'sv' ? episode.description.sv : episode.description.en;
  };

  return (
    <div className="podcast-page">
      {/* Page Header */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">
            Voices of Ternafit Podcast
          </h1>
          <p className="text-lg text-center mt-4">
            {language === 'sv'
              ? "Välkommen till poddsändningsserien Voices of Ternafit, där vi delar berättelser, insikter och uppdateringar om våra initiativ och den påverkan vi har i Tigray."
              : "Welcome to the Voices of Ternafit podcast series, where we share stories, insights, and updates about our initiatives and the impact we are making in Tigray."}
          </p>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-16 bg-gradient-to-r from-terracotta/90 to-ochre/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">
                {getTitle(podcastEpisodes[0], language)}
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
              <p className="mb-6">{getDescription(podcastEpisodes[0], language)}</p>
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
                alt={getTitle(podcastEpisodes[0], language)}
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
                          alt={getTitle(episode, language)}
                          className="w-full h-32 md:h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-serif font-bold mb-2">
                          {getTitle(episode, language)}
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
                          {getDescription(episode, language)}
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
                      <img src="/images/podcast/apple-podcast.svg" alt="Apple Podcasts" className="h-6" />
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
                      <img src="https://overcast.fm/img/logo.svg" alt="Overcast" className="h-6" />
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