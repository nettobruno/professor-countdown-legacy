export type Locale = "pt-BR" | "en";

export const retirementDate = "2026-12-31T23:59:59-03:00";

export const socialLinks = {
  youtube: "https://www.youtube.com/@fallen",
  instagram: "https://www.instagram.com/fallen/",
  twitter: "https://x.com/FalleNCS",
  twitch: "https://www.twitch.tv/gafallen",
  hltv: "https://www.hltv.org/player/2730/fallen",
};

type Tournament = {
  event: string;
  year: number;
  category: "Major" | "S-Tier" | "Tier 1" | "Outro";
  result: string;
  description?: string;
};

type IconicMoment = {
  youtubeId: string;
  title: string;
  description: string;
};

type SiteCopy = {
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
    siteName: string;
  };
  nav: {
    links: { href: string; label: string }[];
    switchLabel: string;
  };
  shareText: {
    whatsapp: string;
    twitter: string;
    reddit: string;
    redditTitle: string;
    ariaPrefix: string;
  };
  heroCopy: { eyebrow: string; headline: string; subhead: string; shareLabel: string; continueLabel: string };
  shareLines: string[];
  legacy: {
    eyebrow: string;
    title: string;
    intro: string;
    blocks: { title: string; body: string }[];
  };
  titles: {
    eyebrow: string;
    title: string;
    intro: string;
    footnote: string;
    tournaments: Tournament[];
  };
  moments: {
    eyebrow: string;
    title: string;
    intro: string;
    list: IconicMoment[];
  };
  social: {
    eyebrow: string;
    title: string;
  };
  finalCta: { titleLine1: string; titleHighlight: string; description: string };
  footer: { description: string; copyright: string };
  shareStripAria: string;
  countdown: {
    todayTitle: string;
    todayDescription: string;
    afterTitle: string;
    afterDescription: string;
    ariaLabel: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
};

const canonical = "https://fallen-tribute.example.com/";
const ogImage = "https://fallen-tribute.example.com/og-image.jpg";

export const localizedSiteContent: Record<Locale, SiteCopy> = {
  "pt-BR": {
    seo: {
      title: "FalleN vai se aposentar? Veja a contagem regressiva (site de fã)",
      description:
        "Contagem regressiva para a aposentadoria de Gabriel 'FalleN' Toledo, o Professor do CS brasileiro. Tributo de fã com história, conquistas e momentos inesquecíveis.",
      canonical,
      ogImage,
      siteName: "FalleN ∞ — Tributo de Fã",
    },
    nav: {
      links: [
        { href: "#historia", label: "História" },
        { href: "#conquistas", label: "Conquistas" },
        { href: "#momentos", label: "Momentos" },
      ],
      switchLabel: "Idioma",
    },
    shareText: {
      whatsapp:
        "Olha isso sobre o FalleN — a contagem regressiva pra aposentadoria do Professor já começou 🇧🇷💚",
      twitter: "A contagem regressiva do FalleN tá rolando… O dia que o CS vai parar.",
      reddit: "Fan-made countdown to FalleN's retirement — The Professor of CS",
      redditTitle: "FalleN retirement countdown — a tribute from a Brazilian fan",
      ariaPrefix: "Compartilhar no",
    },
    heroCopy: {
      eyebrow: "TRIBUTO DE FÃ",
      headline: "O dia que o CS vai parar.",
      subhead: "A contagem regressiva para a aposentadoria do Professor já começou.",
      shareLabel: "Compartilhe esta homenagem",
      continueLabel: "Continue",
    },
    shareLines: [
      "Se você já aprendeu algo com o Professor, compartilhe isso.",
      "Todo fã de CS precisa ver isso.",
      "Marque aquele amigo que começou no CS por causa do FalleN.",
      "Uma geração inteira de brasileiros pegou no mouse por causa dele.",
    ],
    legacy: {
      eyebrow: "01 — Legado",
      title: "A história do Professor.",
      intro:
        'Gabriel "FalleN" Toledo não é só um nome. É um capítulo inteiro do Counter-Strike brasileiro — escrito a base de suor, fé e AWP.',
      blocks: [
        {
          title: "Origens",
          body: "Antes dos majors, antes das luzes da arena, antes do título de Professor, existia apenas um garoto de São Paulo apaixonado por Counter-Strike. Gabriel Toledo construiu sua carreira na base do esforço bruto, treinando madrugadas inteiras numa época em que ser pro player no Brasil parecia coisa de filme. Ele acreditou quando quase ninguém acreditava — e essa fé contagiou um país inteiro.",
        },
        {
          title: "O Professor",
          body: "O apelido não veio à toa. FalleN nunca foi apenas um AWPer cirúrgico — ele foi um educador. Da Games Academy aos vídeos didáticos no YouTube, ele abriu portas que estavam trancadas há anos. Ensinou táticas, ensinou postura, ensinou que dava pra sonhar grande falando português. Cada player brasileiro que pisou num palco internacional carrega uma parte do que o Professor plantou.",
        },
        {
          title: "Liderança",
          body: "Como IGL da lendária era SK/Luminosity, FalleN comandou uma das maiores caminhadas da história do Counter-Strike. Foram dois Majors consecutivos — MLG Columbus 2016 e ESL One Cologne 2016 — que mudaram para sempre a forma como o mundo enxerga o CS brasileiro. Mas mais do que troféus, ficou a postura: humildade nas vitórias, dignidade nas derrotas, e a certeza de que liderar é também servir.",
        },
        {
          title: "Legado",
          body: "Falar de FalleN é falar de uma geração inteira. É lembrar do grito no clutch, do call certeiro, da AWP que parecia ter olhos. É lembrar que, num esporte dominado por europeus e americanos, um brasileiro chegou ao topo e ainda puxou outros junto. Quando o Professor finalmente pendurar o mouse competitivo, o cenário não fica órfão — fica eterno. Porque cada novo talento que surge daqui nasce, de alguma forma, da semente que ele plantou.",
        },
      ],
    },
    titles: {
      eyebrow: "02 — Conquistas",
      title: "Troféus que viraram história.",
      intro:
        "Lista curada por fãs com base em conquistas competitivas públicas. Cada linha aqui foi celebrada por um país inteiro.",
      footnote: "* Lista curada por fãs. Edite em src/config/site.ts para adicionar conquistas verificadas.",
      tournaments: [
        { event: "MLG Major Championship: Columbus", year: 2016, category: "Major", result: "🏆 Campeão", description: "Primeiro título de Major de uma equipe brasileira na era CS:GO." },
        { event: "ESL One Cologne", year: 2016, category: "Major", result: "🏆 Campeão", description: "Bicampeonato de Majors consecutivos com a SK Gaming." },
        { event: "ESL Pro League Season 4 — Finals", year: 2016, category: "S-Tier", result: "🏆 Campeão" },
        { event: "DreamHack Masters Las Vegas", year: 2017, category: "S-Tier", result: "🏆 Campeão" },
        { event: "ESL One Belo Horizonte", year: 2018, category: "S-Tier", result: "🏆 Campeão", description: "Título em casa, diante da torcida brasileira." },
      ],
    },
    moments: {
      eyebrow: "03 — Momentos",
      title: "Cenas que ficaram pra sempre.",
      intro: "Os clutches, os calls, os gritos. A coletânea que arrepia toda vez.",
      list: [
        { youtubeId: "dQw4w9WgXcQ", title: "A AWP que parou o mundo", description: "Um dos clutches mais marcantes da carreira do Professor." },
        { youtubeId: "dQw4w9WgXcQ", title: "Columbus 2016 — O grito de campeão", description: "O momento em que o Brasil chegou ao topo do CS mundial." },
        { youtubeId: "dQw4w9WgXcQ", title: "1v4 inesquecível", description: "Quando ninguém mais acreditava, ele acreditou." },
        { youtubeId: "dQw4w9WgXcQ", title: "O call que virou a história", description: "Liderança em sua forma mais pura." },
        { youtubeId: "dQw4w9WgXcQ", title: "Cologne 2016 — Bicampeonato", description: "A consagração de uma geração dourada." },
        { youtubeId: "dQw4w9WgXcQ", title: "Belo Horizonte — Em casa", description: "Diante da torcida brasileira, o triunfo eterno." },
      ],
    },
    social: { eyebrow: "Acompanhe o Professor", title: "Canais oficiais" },
    finalCta: {
      titleLine1: "Marca aquele amigo",
      titleHighlight: "que aprendeu CS com o Professor.",
      description: "Essa contagem regressiva merece chegar em todo brasileiro que um dia sonhou de mouse na mão.",
    },
    footer: {
      description: "Este não é um site oficial. Projeto criado por um fã em homenagem ao FalleN.",
      copyright: "Tributo independente. Todos os direitos de imagem pertencem a seus respectivos donos.",
    },
    shareStripAria: "Frases compartilháveis",
    countdown: {
      todayTitle: "Hoje é o dia.",
      todayDescription: "Obrigado, Professor. Por tudo. O Brasil inteiro tá com você.",
      afterTitle: "O Professor pendurou o mouse.",
      afterDescription: "FalleN se aposentou do competitivo, mas sua história continua viva em cada player que ele inspirou.",
      ariaLabel: "Contagem regressiva para a aposentadoria do FalleN",
      days: "Dias",
      hours: "Horas",
      minutes: "Min",
      seconds: "Seg",
    },
  },
  en: {
    seo: {
      title: "Is FalleN retiring? Check the countdown (fan site)",
      description:
        "Countdown to Gabriel 'FalleN' Toledo's retirement, the Professor of Brazilian CS. A fan tribute with story, achievements, and iconic moments.",
      canonical,
      ogImage,
      siteName: "FalleN ∞ — Fan Tribute",
    },
    nav: {
      links: [
        { href: "#historia", label: "Story" },
        { href: "#conquistas", label: "Titles" },
        { href: "#momentos", label: "Moments" },
      ],
      switchLabel: "Language",
    },
    shareText: {
      whatsapp:
        "Check this out about FalleN — the countdown to The Professor's retirement has started 💚",
      twitter: "FalleN's countdown is live… the day CS stops.",
      reddit: "Fan-made countdown to FalleN's retirement — The Professor of CS",
      redditTitle: "FalleN retirement countdown — a tribute from a Brazilian fan",
      ariaPrefix: "Share on",
    },
    heroCopy: {
      eyebrow: "FAN TRIBUTE",
      headline: "The day CS will stop.",
      subhead: "The countdown to The Professor's retirement has already begun.",
      shareLabel: "Share this tribute",
      continueLabel: "Scroll",
    },
    shareLines: [
      "If you've ever learned from The Professor, share this.",
      "Every CS fan should see this.",
      "Tag that friend who started CS because of FalleN.",
      "A whole generation started playing because of him.",
    ],
    legacy: {
      eyebrow: "01 — Legacy",
      title: "The Professor's story.",
      intro:
        'Gabriel "FalleN" Toledo is more than a name. He is a full chapter of Brazilian Counter-Strike — written with sweat, faith, and AWP.',
      blocks: [
        { title: "Origins", body: "Before majors, before arena lights, before being called The Professor, there was a kid from São Paulo in love with Counter-Strike. Gabriel Toledo built his career through pure effort, grinding through the night when becoming a pro in Brazil felt impossible. He believed when almost no one did — and that belief inspired an entire country." },
        { title: "The Professor", body: "The nickname was earned. FalleN was never only a clinical AWPer — he was an educator. From Games Academy to educational YouTube videos, he opened doors that had been closed for years. He taught tactics, mindset, and that you could dream big in Portuguese. Every Brazilian player on an international stage carries part of what he planted." },
        { title: "Leadership", body: "As IGL in the legendary SK/Luminosity era, FalleN led one of Counter-Strike's greatest runs. Two consecutive Majors — MLG Columbus 2016 and ESL One Cologne 2016 — changed forever how the world sees Brazilian CS. More than trophies, he left an example: humility in victory, dignity in defeat, and the certainty that leadership is also service." },
        { title: "Legacy", body: "Talking about FalleN means talking about a whole generation. The clutch screams, the perfect calls, the AWP that looked alive. In a scene dominated by Europeans and North Americans, a Brazilian reached the top and brought others with him. When The Professor finally retires from competition, the scene won't be orphaned — it will be eternal." },
      ],
    },
    titles: {
      eyebrow: "02 — Achievements",
      title: "Trophies that became history.",
      intro: "Fan-curated list based on public competitive wins. Every line here was celebrated by a whole country.",
      footnote: "* Fan-curated list. Edit src/config/site.ts to add verified achievements.",
      tournaments: [
        { event: "MLG Major Championship: Columbus", year: 2016, category: "Major", result: "🏆 Champion", description: "First CS:GO Major title for a Brazilian team." },
        { event: "ESL One Cologne", year: 2016, category: "Major", result: "🏆 Champion", description: "Back-to-back Majors with SK Gaming." },
        { event: "ESL Pro League Season 4 — Finals", year: 2016, category: "S-Tier", result: "🏆 Champion" },
        { event: "DreamHack Masters Las Vegas", year: 2017, category: "S-Tier", result: "🏆 Champion" },
        { event: "ESL One Belo Horizonte", year: 2018, category: "S-Tier", result: "🏆 Champion", description: "A title won at home in front of the Brazilian crowd." },
      ],
    },
    moments: {
      eyebrow: "03 — Moments",
      title: "Scenes that lasted forever.",
      intro: "The clutches, the calls, the screams. A compilation that gives chills every time.",
      list: [
        { youtubeId: "dQw4w9WgXcQ", title: "The AWP that stopped the world", description: "One of The Professor's most iconic clutches." },
        { youtubeId: "dQw4w9WgXcQ", title: "Columbus 2016 — Champion roar", description: "The moment Brazil reached the top of world CS." },
        { youtubeId: "dQw4w9WgXcQ", title: "Unforgettable 1v4", description: "When no one else believed, he did." },
        { youtubeId: "dQw4w9WgXcQ", title: "The call that changed history", description: "Leadership in its purest form." },
        { youtubeId: "dQw4w9WgXcQ", title: "Cologne 2016 — Back-to-back", description: "The coronation of a golden generation." },
        { youtubeId: "dQw4w9WgXcQ", title: "Belo Horizonte — At home", description: "In front of the Brazilian crowd, an eternal triumph." },
      ],
    },
    social: { eyebrow: "Follow The Professor", title: "Official channels" },
    finalCta: {
      titleLine1: "Tag that friend",
      titleHighlight: "who learned CS with The Professor.",
      description: "This countdown deserves to reach everyone who once dreamed with a mouse in hand.",
    },
    footer: {
      description: "This is not an official website. A fan-made tribute project for FalleN.",
      copyright: "Independent tribute. All image rights belong to their respective owners.",
    },
    shareStripAria: "Shareable lines",
    countdown: {
      todayTitle: "Today is the day.",
      todayDescription: "Thank you, Professor. For everything.",
      afterTitle: "The Professor has retired his mouse.",
      afterDescription: "FalleN retired from competition, but his story lives on in every player he inspired.",
      ariaLabel: "Countdown to FalleN retirement",
      days: "Days",
      hours: "Hours",
      minutes: "Min",
      seconds: "Sec",
    },
  },
};
