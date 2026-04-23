import { shareText, seo } from "@/config/site";
import { cn } from "@/lib/utils";

const url = typeof window !== "undefined" ? window.location.href : seo.canonical;

const links = {
  whatsapp: () =>
    `https://wa.me/?text=${encodeURIComponent(`${shareText.whatsapp} ${url}`)}`,
  twitter: () =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText.twitter,
    )}&url=${encodeURIComponent(url)}`,
  reddit: () =>
    `https://www.reddit.com/submit?url=${encodeURIComponent(
      url,
    )}&title=${encodeURIComponent(shareText.redditTitle)}`,
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 014.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 01.14-.197.35.35 0 01.238-.042l2.906.617a1.214 1.214 0 011.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 00-.231.094.33.33 0 000 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 00.029-.463.33.33 0 00-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 00-.232-.095z" />
  </svg>
);

interface ShareButtonsProps {
  variant?: "inline" | "sticky" | "compact";
  className?: string;
}

export const ShareButtons = ({
  variant = "inline",
  className,
}: ShareButtonsProps) => {
  const buttons = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      href: links.whatsapp(),
      icon: WhatsAppIcon,
      hover: "hover:bg-accent-green hover:text-primary-foreground",
    },
    {
      key: "twitter",
      label: "X / Twitter",
      href: links.twitter(),
      icon: XIcon,
      hover: "hover:bg-foreground hover:text-background",
    },
    {
      key: "reddit",
      label: "Reddit",
      href: links.reddit(),
      icon: RedditIcon,
      hover: "hover:bg-accent-yellow hover:text-secondary-foreground",
    },
  ];

  if (variant === "sticky") {
    return (
      <div className={cn("flex items-stretch gap-2", className)}>
        {buttons.map((b) => (
          <a
            key={b.key}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Compartilhar no ${b.label}`}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 rounded-lg glass text-sm font-medium transition-all duration-300",
              b.hover,
            )}
          >
            <b.icon className="w-4 h-4" />
            <span className="hidden xs:inline">{b.label}</span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        {buttons.map((b) => (
          <a
            key={b.key}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Compartilhar no ${b.label}`}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-full glass transition-all duration-300",
              b.hover,
            )}
          >
            <b.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-3",
        className,
      )}
    >
      {buttons.map((b) => (
        <a
          key={b.key}
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group flex items-center gap-2.5 px-5 py-3 rounded-full glass text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5",
            b.hover,
          )}
        >
          <b.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span>{b.label}</span>
        </a>
      ))}
    </div>
  );
};
