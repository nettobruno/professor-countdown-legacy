import { ShareButtons } from "./ShareButtons";
import { RevealOnScroll } from "./RevealOnScroll";

export const FinalCTA = () => {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-smoke pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent-green/10 blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        <RevealOnScroll className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Marca aquele amigo
            <br />
            <span className="text-accent-green text-glow-green">
              que aprendeu CS com o Professor.
            </span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Essa contagem regressiva merece chegar em todo brasileiro que um dia
            sonhou de mouse na mão.
          </p>

          <div className="mt-12">
            <ShareButtons />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
