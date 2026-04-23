import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  id: string;
  title: string;
}

export const YouTubeEmbed = ({ id, title }: YouTubeEmbedProps) => {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  if (active) {
    return (
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Reproduzir vídeo: ${title}`}
      className="absolute inset-0 w-full h-full group"
    >
      <img
        src={thumb}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/10 transition-opacity duration-300 group-hover:from-background/70" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent-green text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_hsl(var(--accent-green)/0.6)]">
          <Play className="w-7 h-7 md:w-8 md:h-8 fill-current ml-1" />
        </div>
      </div>
    </button>
  );
};
