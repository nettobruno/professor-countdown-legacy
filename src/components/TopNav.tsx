import { useEffect, useState } from "react";
import { ShareButtons } from "./ShareButtons";

const links = [
  { href: "#historia", label: "História" },
  { href: "#conquistas", label: "Conquistas" },
  { href: "#momentos", label: "Momentos" },
];

export const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);
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
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-baseline gap-1.5 group">
          <span className="font-display text-2xl md:text-3xl tracking-wider">
            FalleN
          </span>
          <span className="text-accent-green text-xl md:text-2xl transition-transform group-hover:rotate-12">
            ∞
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <ShareButtons variant="compact" className="hidden sm:flex" />
      </div>
    </header>
  );
};
