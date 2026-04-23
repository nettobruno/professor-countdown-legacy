import { useEffect, useState } from "react";
import { ShareButtons } from "./ShareButtons";
import { useLanguage } from "@/context/LanguageContext";

export const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { content, locale, setLocale } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between gap-3 h-16 md:h-20">
        <a href="#top" className="flex shrink-0 items-center gap-1 group">
          <span className="font-display text-2xl md:text-3xl tracking-wider">FalleN</span>
          <img
            src="/bad-fallen.png"
            alt=""
            aria-hidden="true"
            className="h-8 w-8 object-contain transition-transform duration-300 group-hover:rotate-12 md:h-10 md:w-10"
          />
        </a>

        {content.nav.links.length > 0 && (
          <nav className="hidden md:flex items-center gap-8">
            {content.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === "pt-BR" ? "en" : "pt-BR")}
            aria-label={content.nav.switchLabel}
            className="px-2.5 py-2 text-xs md:px-3 md:text-sm rounded-full glass hover:border-accent-green/50 transition-colors"
          >
            {locale === "pt-BR" ? "EN" : "PT"}
          </button>
          <ShareButtons variant="compact" className="hidden sm:flex" />
        </div>
      </div>
    </header>
  );
};
