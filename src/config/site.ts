// ============================================================================
// SITE CONFIG — Single source of truth for editable content
// Update values here to change the site without touching components.
// ============================================================================

// 🔧 Edit this date to set the countdown target (ISO 8601, local timezone-aware)
export const retirementDate = "2026-12-31T23:59:59-03:00";

export const seo = {
  title: "FalleN vai se aposentar? Veja a contagem regressiva (site de fã)",
  description:
    "Contagem regressiva para a aposentadoria de Gabriel 'FalleN' Toledo, o Professor do CS brasileiro. Tributo de fã com história, conquistas e momentos inesquecíveis.",
  canonical: "https://fallen-tribute.example.com/",
  ogImage: "https://fallen-tribute.example.com/og-image.jpg", // 🔧 Replace with real OG image URL
  siteName: "FalleN ∞ — Tributo de Fã",
};

export const shareText = {
  whatsapp:
    "Olha isso sobre o FalleN — a contagem regressiva pra aposentadoria do Professor já começou 🇧🇷💚",
  twitter:
    "A contagem regressiva do FalleN tá rolando… O dia que o CS vai parar.",
  reddit: "Fan-made countdown to FalleN's retirement — The Professor of CS",
  redditTitle: "FalleN retirement countdown — a tribute from a Brazilian fan",
};

export const socialLinks = {
  // 🔧 Replace with real official URLs
  youtube: "https://www.youtube.com/@fallen",
  instagram: "https://www.instagram.com/fallen/",
  twitter: "https://x.com/FalleNCS",
  twitch: "https://www.twitch.tv/gafallen",
  hltv: "https://www.hltv.org/player/2730/fallen",
};

export const heroCopy = {
  eyebrow: "TRIBUTO DE FÃ",
  headline: "O dia que o CS vai parar.",
  subhead:
    "A contagem regressiva para a aposentadoria do Professor já começou.",
};

export const shareLines = [
  "Se você já aprendeu algo com o Professor, compartilhe isso.",
  "Todo fã de CS precisa ver isso.",
  "Marque aquele amigo que começou no CS por causa do FalleN.",
  "Uma geração inteira de brasileiros pegou no mouse por causa dele.",
];

export const legacyBlocks = [
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
];

// 🔧 Add/edit verified tournament results here. Marked as fan-curated.
export type Tournament = {
  event: string;
  year: number;
  category: "Major" | "S-Tier" | "Tier 1" | "Outro";
  result: string;
  description?: string;
};

export const tournaments: Tournament[] = [
  {
    event: "MLG Major Championship: Columbus",
    year: 2016,
    category: "Major",
    result: "🏆 Campeão",
    description: "Primeiro título de Major de uma equipe brasileira na era CS:GO.",
  },
  {
    event: "ESL One Cologne",
    year: 2016,
    category: "Major",
    result: "🏆 Campeão",
    description: "Bicampeonato de Majors consecutivos com a SK Gaming.",
  },
  {
    event: "ESL Pro League Season 4 — Finals",
    year: 2016,
    category: "S-Tier",
    result: "🏆 Campeão",
  },
  {
    event: "DreamHack Masters Las Vegas",
    year: 2017,
    category: "S-Tier",
    result: "🏆 Campeão",
  },
  {
    event: "ESL One Belo Horizonte",
    year: 2018,
    category: "S-Tier",
    result: "🏆 Campeão",
    description: "Título em casa, diante da torcida brasileira.",
  },
  // 🔧 Adicione mais conquistas verificadas aqui
];

// 🔧 Add/edit YouTube video IDs (the part after v=)
export type IconicMoment = {
  youtubeId: string;
  title: string;
  description: string;
};

export const iconicMoments: IconicMoment[] = [
  {
    youtubeId: "dQw4w9WgXcQ", // 🔧 Substituir por ID real
    title: "A AWP que parou o mundo",
    description: "Um dos clutches mais marcantes da carreira do Professor.",
  },
  {
    youtubeId: "dQw4w9WgXcQ",
    title: "Columbus 2016 — O grito de campeão",
    description: "O momento em que o Brasil chegou ao topo do CS mundial.",
  },
  {
    youtubeId: "dQw4w9WgXcQ",
    title: "1v4 inesquecível",
    description: "Quando ninguém mais acreditava, ele acreditou.",
  },
  {
    youtubeId: "dQw4w9WgXcQ",
    title: "O call que virou a história",
    description: "Liderança em sua forma mais pura.",
  },
  {
    youtubeId: "dQw4w9WgXcQ",
    title: "Cologne 2016 — Bicampeonato",
    description: "A consagração de uma geração dourada.",
  },
  {
    youtubeId: "dQw4w9WgXcQ",
    title: "Belo Horizonte — Em casa",
    description: "Diante da torcida brasileira, o triunfo eterno.",
  },
];
