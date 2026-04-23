import { useLanguage } from "@/context/LanguageContext";

export const SiteFooter = () => {
  const { content } = useLanguage();

  return (
    <footer className="relative py-12 md:py-16 border-t border-border/60">
      <div className="container text-center">
        <div className="flex items-baseline justify-center gap-1.5 mb-6">
          <span className="font-display text-2xl tracking-wider">FalleN</span>
          <span className="text-accent-green text-xl">∞</span>
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
