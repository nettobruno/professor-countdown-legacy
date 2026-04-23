import { useEffect } from "react";
import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/Hero";
import { ShareStrip } from "@/components/ShareStrip";
import { LegacySection } from "@/components/LegacySection";
import { TeamsSection } from "@/components/TeamsSection";
import { TitlesSection } from "@/components/TitlesSection";
import { GallerySection } from "@/components/GallerySection";
import { MomentsSection } from "@/components/MomentsSection";
import { SocialSection } from "@/components/SocialSection";
import { FinalCTA } from "@/components/FinalCTA";
import { StickyShareBar } from "@/components/StickyShareBar";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { content, locale } = useLanguage();

  useEffect(() => {
    document.title = content.seo.title;

    const ensureMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        Object.entries(attrs).forEach(([k, v]) => {
          if (k !== "content") el!.setAttribute(k, v);
        });
        document.head.appendChild(el);
      }
      el.setAttribute("content", attrs.content);
    };

    ensureMeta('meta[name="description"]', {
      name: "description",
      content: content.seo.description,
    });
    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: content.seo.title,
    });
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: content.seo.description,
    });
    ensureMeta('meta[property="og:image"]', {
      property: "og:image",
      content: content.seo.ogImage,
    });
    ensureMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    ensureMeta('meta[property="og:url"]', {
      property: "og:url",
      content: content.seo.canonical,
    });
    ensureMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    ensureMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: content.seo.title,
    });
    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: content.seo.description,
    });
    ensureMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: content.seo.ogImage,
    });

    let canonical = document.head.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", content.seo.canonical);

    // JSON-LD Person schema
    const ldId = "ld-person-fallen";
    let ld = document.getElementById(ldId);
    if (!ld) {
      ld = document.createElement("script");
      ld.id = ldId;
      (ld as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Gabriel Toledo",
      alternateName: "FalleN",
      jobTitle: "Pro Counter-Strike Player",
      nationality: "Brazilian",
      knowsAbout:
        locale === "pt-BR"
          ? ["Counter-Strike", "Esports", "Liderança", "AWP"]
          : ["Counter-Strike", "Esports", "Leadership", "AWP"],
      sameAs: [
        "https://www.hltv.org/player/2730/fallen",
        "https://x.com/FalleNCS",
      ],
    });
  }, [content, locale]);

  return (
    <main className="relative">
      <TopNav />
      <Hero />
      <ShareStrip />
      <LegacySection />
      <TeamsSection />
      <TitlesSection />
      <GallerySection />
      <MomentsSection />
      <SocialSection />
      <FinalCTA />
      <SiteFooter />
      <StickyShareBar />
      {/* Bottom spacer for mobile sticky bar */}
      <div className="h-20 md:hidden" aria-hidden />
    </main>
  );
};

export default Index;
