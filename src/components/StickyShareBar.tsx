import { ShareButtons } from "./ShareButtons";

export const StickyShareBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/85 backdrop-blur-xl border-t border-border/60">
      <ShareButtons variant="sticky" />
    </div>
  );
};
