export const SiteFooter = () => {
  return (
    <footer className="relative py-12 md:py-16 border-t border-border/60">
      <div className="container text-center">
        <div className="flex items-baseline justify-center gap-1.5 mb-6">
          <span className="font-display text-2xl tracking-wider">FalleN</span>
          <span className="text-accent-green text-xl">∞</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Este não é um site oficial. Projeto criado por um fã em homenagem ao
          FalleN.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} — Tributo independente. Todos os direitos
          de imagem pertencem a seus respectivos donos.
        </p>
      </div>
    </footer>
  );
};
