import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PodcastPlayer from "@/components/shared/PodcastPlayer";

type Episode = {
  id: number;
  title: { en: string; sv: string };
  date: string;
  duration: string;
  imageUrl: string;
  audioUrl: string;
  category: string[];
};

const podcastEpisodes: Episode[] = [
  {
    id: 6,
    title: {
      en: "Tigray in Focus: Stories of Recovery, Challenges, and Hope",
      sv: "Tigray i fokus: Berättelser om återhämtning, utmaningar och hopp"
    },
    date: "2025-03-15",
    duration: "45:12",
    imageUrl: "/images/podcast/episode6.jpg",
    audioUrl: "https://ternafit.org/media/audiopodcast-episode8.wav",
    category: ["Stories", "Recovery"]
  },
  {
    id: 5,
    title: {
      en: "Beyond Repair: Reflections of a Tigrean",
      sv: "Utanför reparationsområdet: Reflektioner från en Tigrean"
    },
    date: "2025-03-01",
    duration: "39:45",
    imageUrl: "/images/podcast/episode5.jpg",
    audioUrl: "https://ternafit.org/media/beyond-repair-reflections.mp3",
    category: ["Stories", "Recovery"]
  },
  {
    id: 4,
    title: {
      en: "Why the Referendum Matters",
      sv: "Varför folkomröstningen är viktig"
    },
    date: "2025-02-15",
    duration: "52:30",
    imageUrl: "/images/podcast/episode4.png",
    audioUrl: "https://ternafit.org/media/audiopodcast-episode6.wav",
    category: ["Updates", "Politics"]
  },
  {
    id: 3,
    title: {
      en: "Collaborating for Change",
      sv: "Samarbete för förändring"
    },
    date: "2025-02-01",
    duration: "41:18",
    imageUrl: "/images/podcast/episode3.jpg",
    audioUrl: "https://ternafit.org/media/audiopodcast-episode3.mp4",
    category: ["Stories", "Partnerships"]
  },
  {
    id: 2,
    title: {
      en: "Inside Tigray: The Battle for Voice and Freedom",
      sv: "Inuti Tigray: Kampen för röst och frihet"
    },
    date: "2024-12-15",
    duration: "47:22",
    imageUrl: "/images/podcast/episode2.jpg",
    audioUrl: "https://ternafit.org/media/audiopodcast-episode.mp4",
    category: ["Stories", "Politics"]
  },
  {
    id: 1,
    title: {
      en: "Our Journey So Far",
      sv: "Vår resa hittills"
    },
    date: "2024-11-01",
    duration: "38:50",
    imageUrl: "/images/podcast/episode1.png",
    audioUrl: "https://ternafit.org/media/audiopodcast-episode.mp3",
    category: ["Stories", "Updates"]
  }
];

const categories = [
  "All Episodes",
  "Stories",
  "Interviews",
  "Recovery",
  "Updates",
  "Behind the Scenes"
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
  const [currentCategory, setCurrentCategory] = useState("All Episodes");
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);

  const filteredEpisodes =
    currentCategory === "All Episodes"
      ? podcastEpisodes
      : podcastEpisodes.filter((ep) => ep.category.includes(currentCategory));

  const getTitle = (episode: Episode, lang: string) =>
    lang === "sv" ? episode.title.sv : episode.title.en;

  return (
    <div className="podcast-page">
      {/* Category Filter */}
      <section className="py-6 bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={currentCategory === category ? "default" : "outline"}
                onClick={() => setCurrentCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      {podcastEpisodes[0] && (
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
                    <span>
                      {formatDate(podcastEpisodes[0].date, language)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{podcastEpisodes[0].duration}</span>
                  </div>
                </div>
                <PodcastPlayer
                  episode={podcastEpisodes[0]}
                  onPlay={() => setCurrentEpisode(podcastEpisodes[0])}
                />
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
      )}

      {/* Episode List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.map((episode) => (
              <div
                key={episode.id}
                className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border ${
                  currentEpisode?.id === episode.id ? "ring-2 ring-primary" : ""
                }`}
              >
                <img
                  src={episode.imageUrl}
                  alt={getTitle(episode, language)}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {episode.category.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs bg-muted px-2 py-1 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-serif font-bold">
                    {getTitle(episode, language)}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(episode.date, language)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                  <PodcastPlayer
                    episode={episode}
                    onPlay={() => setCurrentEpisode(episode)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Donate Box */}
       <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">{t('donate.title')}</h2>
              <p className="text-lg mb-6">
                Your generosity allows Ternafit to deliver urgent relief and lasting hope. Every contribution goes directly to families and communities working to rebuild and thrive.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-terracotta rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Deliver meals and medicine to families in urgent need</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-terracotta rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Fund safe spaces and resources for children's education</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-terracotta rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Expand healthcare and recovery programs in remote areas</span>
                </li>
              </ul>
            </div>
            <div>
              <DonateBox />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;
