import { ShareButtons } from "./ShareButtons";
import { RevealOnScroll } from "./RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";

export const FinalCTA = () => {
  const { content } = useLanguage();

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-smoke pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent-green/10 blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        <RevealOnScroll className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            {content.finalCta.titleLine1}
            <br />
            <span className="text-accent-green text-glow-green">
              {content.finalCta.titleHighlight}
            </span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            {content.finalCta.description}
          </p>

          <div className="mt-12">
            <ShareButtons />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
