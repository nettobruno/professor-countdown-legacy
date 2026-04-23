import { shareLines } from "@/config/site";

export const ShareStrip = () => {
  // Duplicate for seamless marquee
  const items = [...shareLines, ...shareLines];

  return (
    <section
      aria-label="Frases compartilháveis"
      className="relative py-10 md:py-14 border-y border-border/60 bg-surface-elevated/40 overflow-hidden"
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((line, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-8 font-display text-2xl md:text-4xl text-foreground/80"
          >
            {line}
            <span className="text-accent-green text-3xl md:text-5xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};
