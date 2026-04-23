import { iconicMoments } from "@/config/site";
import { RevealOnScroll } from "./RevealOnScroll";
import { YouTubeEmbed } from "./YouTubeEmbed";

export const MomentsSection = () => {
  return (
    <section id="momentos" className="relative py-24 md:py-36">
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-accent-yellow/5 blur-[120px] pointer-events-none" />

      <div className="container">
        <RevealOnScroll className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-green">
            03 — Momentos
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            Cenas que ficaram pra sempre.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Os clutches, os calls, os gritos. A coletânea que arrepia toda vez.
          </p>
        </RevealOnScroll>

        <div className="mt-16 md:mt-20 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {iconicMoments.map((m, i) => (
            <RevealOnScroll key={`${m.title}-${i}`} delay={i * 80}>
              <article className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-green/40">
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <YouTubeEmbed id={m.youtubeId} title={m.title} />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-display text-xl md:text-2xl tracking-wide">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
