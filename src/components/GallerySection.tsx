import { useState } from "react";
import { Camera } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RevealOnScroll } from "./RevealOnScroll";

type GalleryImageProps = {
  src: string;
  alt: string;
  emptyHint: string;
};

const GalleryImage = ({ src, alt, emptyHint }: GalleryImageProps) => {
  const [hasError, setHasError] = useState(false);
  const filename = src.split("/").pop();

  if (hasError) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_20%,hsl(var(--accent-green)/0.16),transparent_42%),linear-gradient(135deg,hsl(var(--muted)),hsl(var(--background)))] p-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-green/30 bg-background/50 text-accent-green">
          <Camera className="h-6 w-6" aria-hidden />
        </div>
        <p className="max-w-[18rem] text-sm leading-relaxed text-muted-foreground">
          {emptyHint}
        </p>
        <code className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-foreground/80">
          {filename}
        </code>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
};

export const GallerySection = () => {
  const { content } = useLanguage();

  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-surface-elevated/30 py-24 md:py-36"
    >
      <div className="container relative">
        <RevealOnScroll className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-yellow">
            {content.gallery.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">
            {content.gallery.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {content.gallery.intro}
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid auto-rows-[18rem] gap-5 md:mt-20 md:auto-rows-[22rem] md:grid-cols-6 md:gap-6">
          {content.gallery.photos.map((photo, i) => {
            const spanClass =
              i === 0 || i === 5
                ? "md:col-span-3"
                : i === 1 || i === 2
                  ? "md:col-span-3 lg:col-span-2"
                  : "md:col-span-3 lg:col-span-2";

            return (
              <RevealOnScroll
                key={`${photo.title}-${photo.src}`}
                className={spanClass}
                delay={i * 70}
              >
                <figure className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-muted shadow-card">
                  <GalleryImage
                    src={photo.src}
                    alt={photo.alt}
                    emptyHint={content.gallery.emptyHint}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/75 to-transparent p-5 pt-20 md:p-6 md:pt-24">
                    <h3 className="font-display text-2xl tracking-wide md:text-3xl">
                      {photo.title}
                    </h3>
                    <figcaption className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {photo.caption}
                    </figcaption>
                    {photo.credit && (
                      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-accent-green/80">
                        {photo.credit}
                      </p>
                    )}
                  </div>
                </figure>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
