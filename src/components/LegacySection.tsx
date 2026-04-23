import { legacyBlocks } from "@/config/site";
import { RevealOnScroll } from "./RevealOnScroll";

export const LegacySection = () => {
  return (
    <section
      id="historia"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-accent-green/5 blur-[120px] pointer-events-none" />

      <div className="container relative">
        <RevealOnScroll className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-green">
            01 — Legado
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            A história do Professor.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Gabriel "FalleN" Toledo não é só um nome. É um capítulo inteiro do
            Counter-Strike brasileiro — escrito a base de suor, fé e AWP.
          </p>
        </RevealOnScroll>

        <article className="mt-16 md:mt-24 grid gap-10 md:gap-14 md:grid-cols-2 max-w-5xl">
          {legacyBlocks.map((block, i) => (
            <RevealOnScroll key={block.title} delay={i * 100}>
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-3xl text-accent-green/80">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl tracking-wide">
                    {block.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {block.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </article>
      </div>
    </section>
  );
};
