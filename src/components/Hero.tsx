import { Countdown } from "./Countdown";
import { ShareButtons } from "./ShareButtons";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { content } = useLanguage();
  const { heroCopy } = content;

  return (
    <section
      id="top"
      className="relative min-h-screen pt-24 md:pt-32 pb-20 flex flex-col items-center justify-center bg-hero overflow-hidden"
    >
      {/* Smoke / glow layers */}
      <div className="absolute inset-0 bg-smoke pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-green/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-yellow/5 blur-[100px] pointer-events-none" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            {heroCopy.eyebrow}
          </span>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.9] max-w-5xl animate-slide-up">
          {heroCopy.headline}
        </h1>

        <p
          className="mt-6 md:mt-8 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          {heroCopy.subhead}
        </p>

        <div
          className="mt-12 md:mt-16 w-full animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Countdown />
        </div>

        <div
          className="mt-10 md:mt-14 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {heroCopy.shareLabel}
          </p>
          <ShareButtons />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground/60">
        <span className="text-[10px] uppercase tracking-[0.3em]">
          {heroCopy.continueLabel}
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/60 to-transparent" />
      </div>
    </section>
  );
};
