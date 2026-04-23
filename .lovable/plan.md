
# FalleN Tribute — Fan Countdown Landing Page

A cinematic, emotionally-charged Brazilian Portuguese tribute site to Gabriel "FalleN" Toledo, built around a retirement countdown designed to go viral on WhatsApp, X and Reddit.

## Visual direction
- **Theme**: Premium dark — near-black background (`#0a0a0a`), refined off-white typography, restrained CS-inspired green (`#a3e635`) and yellow (`#facc15`) accents
- **Mood**: Editorial sports magazine meets cinematic tribute — smoke-like radial gradients, soft glow halos, generous whitespace, dramatic type
- **Typography**: Bold display headings (Bebas Neue / Anton vibe) paired with clean humanist body text (Inter)
- **Motion**: Soft fade-in + scroll reveals, animated countdown digits, subtle parallax on hero, polished hover states — nothing noisy

## Page structure

1. **Sticky top bar** — minimal logo wordmark "FalleN ∞", anchor links (História, Conquistas, Momentos), share icon
2. **Hero**
   - Headline: *"O dia que o CS vai parar."*
   - Subhead: *"A contagem regressiva para a aposentadoria do Professor já começou."*
   - Massive central countdown (Dias / Horas / Minutos / Segundos) with animated tick
   - Inline share buttons (WhatsApp, X, Reddit)
   - Cinematic backdrop: layered radial glows + subtle smoke texture
3. **Emotional share strip** — rotating shareable lines ("Marque aquele amigo que começou no CS por causa do FalleN")
4. **Legacy / story section** — 300+ words of human, proud Brazilian Portuguese copy split into readable blocks (Origens, O Professor, Liderança, Legado)
5. **Career titles** — premium card/timeline grid driven by an editable `tournaments` data array; majors visually prioritized; clearly marked as fan-curated
6. **Iconic moments** — responsive grid of lazy-loaded YouTube embeds with hover lift; titles + short descriptions
7. **Official links** — YouTube, Instagram, X, Twitch, HLTV — editable URL constants
8. **Final CTA / share block** — large emotional callout + primary share buttons
9. **Sticky mobile share bar** — floating bottom bar (WhatsApp / X / Reddit) on mobile
10. **Footer** — disclaimer: *"Este não é um site oficial. Projeto criado por um fã em homenagem ao FalleN."*

## Countdown logic (3 states)
- **Before date** → live ticking countdown
- **On the day** → emotional tribute message
- **After date** → *"FalleN se aposentou do competitivo, mas sua história continua viva em cada player que ele inspirou."*

## Editable content model — `src/config/site.ts`
Single source of truth:
- `retirementDate` (ISO string)
- `seo` (title, description, OG image, canonical, share copy)
- `shareText` (WhatsApp, X, Reddit variants)
- `socialLinks` (YouTube, Instagram, X, Twitch, HLTV)
- `tournaments` array (event, year, category, result, description)
- `iconicMoments` array (YouTube ID, title, description)
- `heroCopy`, `legacyBlocks`

## SEO
- `index.html` updated with: title *"FalleN vai se aposentar? Veja a contagem regressiva (site de fã)"*, meta description, canonical, Open Graph + Twitter Card tags, OG image placeholder
- Semantic HTML: single `<h1>`, structured `<h2>`/`<h3>`, `<article>`, `<section>`, `<time>` for countdown
- 300+ word legacy section targeting: FalleN aposentadoria, FalleN CS, FalleN carreira, Gabriel Toledo CS, Fallen countdown
- JSON-LD `Person` schema for Gabriel Toledo

## Component breakdown (`src/components/`)
- `Countdown.tsx` — handles all 3 states, animated digits
- `ShareButtons.tsx` — WhatsApp / X / Reddit, reusable inline + sticky variants
- `Hero.tsx`, `LegacySection.tsx`, `TitlesSection.tsx`, `MomentsSection.tsx`, `SocialSection.tsx`, `StickyShareBar.tsx`, `SiteFooter.tsx`, `TopNav.tsx`
- `YouTubeEmbed.tsx` — lazy-loaded (click-to-play thumbnail) for performance
- `RevealOnScroll.tsx` — lightweight IntersectionObserver wrapper for fade/slide reveals

## Design system updates
- `index.css`: dark tokens (background, foreground, accent-green, accent-yellow, muted), glow utility classes, smoke gradient backgrounds
- `tailwind.config.ts`: extended colors, fade-in / slide-up / pulse-glow keyframes, display font family

## Data integrity
Tournament achievements and any non-trivial facts live in editable arrays with placeholder entries clearly marked — no fabricated results hardcoded as truth. Real URLs and YouTube IDs left as obvious placeholders for the owner to fill in.

## Performance
- Lazy YouTube facades (no iframe until click)
- CSS-driven animations, no heavy JS libs
- Single-page, no extra routes
- Optimized fonts via `<link rel="preconnect">`
