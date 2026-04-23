import { socialLinks } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { RevealOnScroll } from "./RevealOnScroll";
import { Youtube, Instagram, Twitch, ExternalLink } from "lucide-react";

const items = [
  { key: "youtube", label: "YouTube", url: socialLinks.youtube, Icon: Youtube },
  {
    key: "instagram",
    label: "Instagram",
    url: socialLinks.instagram,
    Icon: Instagram,
  },
  { key: "twitter", label: "X / Twitter", url: socialLinks.twitter, Icon: ExternalLink },
  { key: "twitch", label: "Twitch", url: socialLinks.twitch, Icon: Twitch },
  { key: "hltv", label: "HLTV", url: socialLinks.hltv, Icon: ExternalLink },
];

export const SocialSection = () => {
  const { content } = useLanguage();

  return (
    <section className="relative py-20 md:py-28 bg-surface-elevated/30 border-y border-border/60">
      <div className="container">
        <RevealOnScroll className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {content.social.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            {content.social.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {items.map((s) => (
            <a
              key={s.key}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 md:px-6 py-3 md:py-3.5 rounded-full glass text-sm md:text-base font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-green/60 hover:text-accent-green"
            >
              <s.Icon className="w-4 h-4 md:w-5 md:h-5" />
              <span>{s.label}</span>
            </a>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
};
