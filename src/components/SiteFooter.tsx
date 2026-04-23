import { useLanguage } from "@/context/LanguageContext";

export const SiteFooter = () => {
  const { content } = useLanguage();

  return (
    <footer className="relative py-12 md:py-16 border-t border-border/60">
      <div className="container text-center">
        <div className="flex items-center justify-center gap-1 mb-6 group">
          <span className="font-display text-2xl tracking-wider">FalleN</span>
          <img
            src="/bad-fallen.png"
            alt=""
            aria-hidden="true"
            className="h-8 w-8 object-contain transition-transform duration-300 group-hover:rotate-12"
          />
        </div>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          {content.footer.description}
        </p>
        <p className="mt-6 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} — {content.footer.copyright}
        </p>
      </div>
    </footer>
  );
};
