import { useLanguage } from "@/context/LanguageContext";
import { RevealOnScroll } from "./RevealOnScroll";
import { Trophy } from "lucide-react";

export const TitlesSection = () => {
  const { content } = useLanguage();

  // Sort: Majors first, then by year desc
  const sorted = [...content.titles.tournaments].sort((a, b) => {
    if (a.category === "Major" && b.category !== "Major") return -1;
    if (b.category === "Major" && a.category !== "Major") return 1;
    return b.year - a.year;
  });

  return (
    <section
      id="conquistas"
      className="relative py-24 md:py-36 bg-surface-elevated/30"
    >
      <div className="container">
        <RevealOnScroll className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-yellow">
            {content.titles.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            {content.titles.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {content.titles.intro}
          </p>
        </RevealOnScroll>

        <div className="mt-16 md:mt-20 grid gap-4 md:gap-5 max-w-5xl">
          {sorted.map((t, i) => {
            const isMajor = t.category === "Major";
            return (
              <RevealOnScroll key={`${t.event}-${t.year}`} delay={i * 60}>
                <div
                  className={`group relative overflow-hidden rounded-2xl glass p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent-green/40 ${
                    isMajor ? "border-accent-yellow/30" : ""
                  }`}
                >
                  {isMajor && (
                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-yellow to-transparent" />
                  )}

                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-xl shrink-0 ${
                        isMajor
                          ? "bg-accent-yellow/15 text-accent-yellow"
                          : "bg-accent-green/10 text-accent-green"
                      }`}
                    >
                      <Trophy className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full ${
                            isMajor
                              ? "bg-accent-yellow/15 text-accent-yellow"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {t.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {t.year}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl tracking-wide">
                        {t.event}
                      </h3>
                      {t.description && (
                        <p className="mt-2 text-sm md:text-base text-muted-foreground">
                          {t.description}
                        </p>
                      )}
                    </div>

                    <div className="md:text-right">
                      <span
                        className={`font-display text-2xl md:text-3xl ${
                          isMajor ? "text-accent-yellow" : "text-foreground"
                        }`}
                      >
                        {t.result}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {content.titles.footnote && (
          <p className="mt-10 text-center text-xs text-muted-foreground/70 italic max-w-xl mx-auto">
            {content.titles.footnote}
          </p>
        )}
      </div>
    </section>
  );
};
