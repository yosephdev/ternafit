import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PodcastPlayer from "@/components/shared/PodcastPlayer";

type Episode = {
  id: number;
  title: string;
  date: string;
  duration: string;
  imageUrl: string;
  audioUrl: string;
  category: string[];
};

const podcastEpisodes: Episode[] = [
  {
    id: 9,
    title: "Tigray in Focus: Stories of Recovery, Challenges, and Hope",
    date: "2025-03-15",
    duration: "45:12",
    imageUrl: "/images/podcast/episode6.jpg",
    audioUrl: "https://tigray-impact-podcasts.s3.eu-central-1.amazonaws.com/audiopodcast-episode8.wav",
    category: ["Stories", "Recovery"]
  },
  {
    id: 8,
    title: "ADS and Ternafit in Action",
    date: "2025-03-1",
    duration: "45:30",
    imageUrl: "/images/podcast/episode5.jpg",
    audioUrl: "https://tigray-impact-podcasts.s3.eu-central-1.amazonaws.com/ADS+and+Ternafit+in+Action.wav",
    category: ["Stories", "Updates"]
  },
  {
    id: 7,
    title: "Fear or Support: Understanding Tigray's Quiet Resistance",
    date: "2025-04-15",
    duration: "50:20",
    imageUrl: "/images/podcast/episode8.jpg",
    audioUrl: "https://tigray-impact-podcasts.s3.eu-central-1.amazonaws.com/Fear+or+Support_+Understanding+Tigray%E2%80%99s+Quiet+Resistance.wav",
    category: ["Stories", "Politics"]
  },
  {
    id: 6,
    title: "Beyond Repair: Reflections of a Tigrean",
    date: "2025-03-01",
    duration: "39:45",
    imageUrl: "/images/podcast/episode1.png",
    audioUrl: "https://tigray-impact-podcasts.s3.eu-central-1.amazonaws.com/Beyond+Repair_+Reflections+of+a+Tigrean.wav",
    category: ["Stories", "Recovery"]
  },
  {
    id: 5,
    title: "Tigray's Future: Why a Referendum Matters",
    date: "2025-02-28",
    duration: "46:15",
    imageUrl: "/images/podcast/episode4.png",
    audioUrl: "https://tigray-impact-podcasts.s3.eu-central-1.amazonaws.com/Tigray%E2%80%99s+Future_+Why+a+Referendum+Matters.wav",
    category: ["Politics", "Updates"]
  },
  {
    id: 4,
    title: "The Integrative Voice",
    date: "2025-02-15",
    duration: "45:30",
    imageUrl: "/images/podcast/episode3.jpg",
    audioUrl: "https://tigray-impact-podcasts.s3.eu-central-1.amazonaws.com/The+Integrative+Voice.wav",
    category: ["Stories", "Interviews"]
  },
  {
    id: 3,
    title: "Inside Tigray: The Battle for Voice and Freedom",
    date: "2024-12-15",
    duration: "47:22",
    imageUrl: "/images/podcast/episode2.jpg",
    audioUrl: "https://tigray-impact-podcasts.s3.eu-central-1.amazonaws.com/Inside+Tigray_+The+Battle+for+Voice+and+Freedom.mp3",
    category: ["Stories", "Politics"]
  },
  {
    id: 2,
    title: "The Heart of Our Work",
    date: "2024-11-15",
    duration: "40:15",
    imageUrl: "/images/podcast/episode9.webp",
    audioUrl: "https://tigray-impact-podcasts.s3.eu-central-1.amazonaws.com/audiopodcast-episode.wav",
    category: ["Stories", "Updates"]
  },
  {
    id: 1,
    title: "Our Journey So Far",
    date: "2024-11-01",
    duration: "38:50",
    imageUrl: "/images/podcast/overcast.png",
    audioUrl: "https://tigray-impact-podcasts.s3.eu-central-1.amazonaws.com/audiopodcast-episode.mp3",
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
                  {podcastEpisodes[0].title}
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
                  alt={podcastEpisodes[0].title}
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
                  alt={episode.title}
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
                    {episode.title}
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
