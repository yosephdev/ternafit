import { Play, Pause, Volume2, Download, Share2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

type Episode = {
  id: number;
  title: { en: string; sv: string; };
  imageUrl: string;
  audioUrl: string;
  duration: string;
};

type PodcastPlayerProps = {
  episode: Episode;
  compact?: boolean;
};

const PodcastPlayer = ({ episode, compact = false }: PodcastPlayerProps) => {
  const { t, language } = useLanguage();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.error("Audio play error:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(audio.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.min(newTime, duration);
      setCurrentTime(audio.currentTime);
    }
  };

  const shareEpisode = () => {
    const title = episode.title;
    if (navigator.share) {
      navigator.share({
        title,
        text: t("podcast.shareMessage"),
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t("podcast.copyShareMessage"));
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  

  return (
    <div className={`bg-white rounded-lg shadow-sm ${compact ? "p-4" : "p-6"} w-full`}>
      <audio ref={audioRef} src={episode.audioUrl} preload="metadata" />

      {!compact && (
        <div className="flex items-center gap-4 mb-4">
          <img
            src={episode.imageUrl}
            alt={episode.title[language]}
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="min-w-0">
            <h3 className="font-serif font-bold line-clamp-2">{episode.title[language]}</h3>
            <p className="text-sm text-muted-foreground">{episode.duration}</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {!compact && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1 accent-terracotta cursor-pointer"
              aria-label={t("podcast.seek")}
            />
            <span className="text-muted-foreground w-10 text-left">
              {formatTime(duration)}
            </span>
          </div>
        )}

        <div className="flex gap-2 flex-wrap">
          <Button
            size={compact ? "sm" : "default"}
            onClick={togglePlay}
            className="gap-2 flex-1"
            aria-label={isPlaying ? t("podcast.pause") : t("podcast.play")}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isPlaying ? t("podcast.pause") : t("podcast.play")}
          </Button>

          {!compact && (
            <>
              <Button
                variant="outline"
                size="default"
                className="gap-2"
                onClick={shareEpisode}
                aria-label={t("podcast.share")}
              >
                <Share2 className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="default"
                className="gap-2"
                asChild
                aria-label={t("podcast.download")}
              >
                <a href={episode.audioUrl} download>
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PodcastPlayer;
