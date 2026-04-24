export type Locale = "pt-BR" | "en";
export type CountdownPreviewState = "auto" | "before" | "today" | "after";

export const retirementDate = "2026-12-20T23:59:59-03:00";

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

type GalleryPhoto = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  credit?: string;
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
  heroCopy: {
    eyebrow: string;
    headline: string;
    todayHeadline: string;
    afterHeadline: string;
    subhead: string;
    todaySubhead: string;
    afterSubhead: string;
    shareLabel: string;
    continueLabel: string;
  };
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
    footnote?: string;
    tournaments: Tournament[];
  };
  moments: {
    eyebrow: string;
    title: string;
    intro: string;
    list: IconicMoment[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    emptyHint: string;
    photos: GalleryPhoto[];
  };
  social: {
    eyebrow: string;
    title: string;
  };
  finalCta: {
    titleLine1: string;
    titleHighlight: string;
    todayDescription: string;
    afterDescription: string;
  };
  footer: { description: string; copyright: string };
  shareStripAria: string;
  countdown: {
    todayEyebrow: string;
    todayTitle: string;
    todayDescription: string;
    afterEyebrow: string;
    afterTitle: string;
    afterDescription: string;
    afterHighlights: string[];
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
      links: [],
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
      headline: "O fim de uma era no Counter-Strike",
      todayHeadline: "Hoje é dia de agradecer.",
      afterHeadline: "O legado do Professor continua.",
      subhead: "O cenário competitivo já vive a contagem regressiva para a despedida do Professor.",
      todaySubhead: "Hoje o competitivo se despede do Professor, e uma comunidade inteira agradece.",
      afterSubhead: "O competitivo ficou para a história. O legado do Professor segue vivo em cada servidor.",
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
        'Gabriel "FalleN" Toledo não é só um nome. É um capítulo inteiro do Counter-Strike brasileiro, escrito a base de suor, fé e AWP.',
      blocks: [
        {
          title: "Origens",
          body: "Antes dos Majors, antes das luzes da arena, antes do título de Professor, existia apenas um garoto do interior de São Paulo apaixonado por Counter-Strike. Gabriel Toledo construiu sua carreira com esforço bruto, treinando madrugadas inteiras em uma época em que ser pro player no Brasil parecia coisa de filme. Ele acreditou quando quase ninguém acreditava, e essa fé acabou contagiando um país inteiro.",
        },
        {
          title: "O Professor",
          body: "O apelido não veio por acaso. FalleN nunca foi apenas um AWPer preciso, foi um verdadeiro formador de talentos. Da Games Academy aos vídeos didáticos no YouTube, ele abriu portas que estavam fechadas há anos. Ensinou tática, postura e, principalmente, que era possível sonhar grande falando português. Cada jogador brasileiro que já pisou em um palco internacional carrega um pouco do que o Professor ajudou a construir.",
        },
        {
          title: "Liderança",
          body: "Como IGL da lendária era SK e Luminosity, FalleN liderou uma das maiores trajetórias da história do Counter-Strike. Foram dois Majors consecutivos, MLG Columbus 2016 e ESL One Cologne 2016, conquistas que mudaram para sempre a forma como o mundo enxerga o CS brasileiro. Mais do que os troféus, porém, ficou o exemplo: humildade nas vitórias, dignidade nas derrotas e a certeza de que liderar também é servir.",
        },
        {
          title: "Legado",
          body: "Falar de FalleN é falar de uma geração inteira. É lembrar do grito no clutch, do call preciso, da AWP que parecia enxergar além. É reconhecer que, em um cenário dominado por europeus e norte-americanos, um brasileiro chegou ao topo e ainda levou outros com ele. Quando o Professor finalmente pendurar o mouse competitivo, o cenário não ficará órfão, se tornará eterno. Porque cada novo talento que surge por aqui carrega, de alguma forma, a semente que ele plantou.",
        },
      ],
    },
    titles: {
      eyebrow: "03 — Conquistas",
      title: "Troféus que viraram história.",
      intro:
        "Lista curada por fãs com base em conquistas competitivas públicas. Cada linha aqui foi celebrada por um país inteiro.",
      footnote: "",
      tournaments: [
        { event: "MLG Major Championship: Columbus", year: 2016, category: "Major", result: "🏆 Campeão", description: "Primeiro título de Major de uma equipe brasileira na era CS:GO." },
        { event: "ESL One Cologne", year: 2016, category: "Major", result: "🏆 Campeão", description: "Bicampeonato de Majors consecutivos com a SK Gaming." },
        { event: "ESL Pro League Season 4 — Finals", year: 2016, category: "S-Tier", result: "🏆 Campeão" },
        { event: "DreamHack Masters Las Vegas", year: 2017, category: "S-Tier", result: "🏆 Campeão" },
        { event: "ESL One Belo Horizonte", year: 2018, category: "S-Tier", result: "🏆 Campeão", description: "Título em casa, diante da torcida brasileira." },
      ],
    },
    moments: {
      eyebrow: "04 — Momentos",
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
    gallery: {
      eyebrow: "05 — Galeria",
      title: "Fotos do FalleN.",
      intro:
        "Um mural visual para guardar fases, palcos e lembranças do Professor.",
      emptyHint:
        "Adicione uma foto em public/gallery com este nome para preencher o cartão.",
      photos: [
        {
          src: "/gallery/fallen-palco.jpg",
          alt: "FalleN em um palco competitivo de Counter-Strike",
          title: "No palco",
          caption: "A presença de quem carregou uma geração inteira.",
        },
        {
          src: "/gallery/fallen-torcida.jpg",
          alt: "FalleN com a torcida brasileira",
          title: "Com a torcida",
          caption: "O encontro entre o Professor e quem nunca parou de acreditar.",
        },
        {
          src: "/gallery/fallen-trofeu.jpg",
          alt: "FalleN celebrando uma conquista",
          title: "Dia de troféu",
          caption: "Quando o trabalho virou história para o CS brasileiro.",
        },
        {
          src: "/gallery/fallen-time.jpg",
          alt: "FalleN ao lado de companheiros de equipe",
          title: "Ao lado do time",
          caption: "Liderança também é fazer todo mundo jogar melhor.",
        },
        {
          src: "/gallery/fallen-awp.jpg",
          alt: "FalleN jogando com a AWP",
          title: "A AWP do Professor",
          caption: "O símbolo de tantos rounds impossíveis.",
        },
        {
          src: "/gallery/fallen-fans.jpg",
          alt: "FalleN em momento próximo aos fãs",
          title: "Perto dos fãs",
          caption: "Um legado que sempre foi maior que o servidor.",
        },
      ],
    },
    social: { eyebrow: "Acompanhe o Professor", title: "Canais oficiais" },
    finalCta: {
      titleLine1: "Marca aquele amigo",
      titleHighlight: "que aprendeu CS com o Professor.",
      todayDescription:
        "Hoje a homenagem é sobre agradecer. Envie para quem viveu essa história junto com você.",
      afterDescription:
        "Agora a homenagem é sobre legado. Envie para quem aprendeu, torceu ou começou no CS por causa do Professor.",
    },
    footer: {
      description: "Este não é um site oficial. Projeto criado por um fã em homenagem ao FalleN.",
      copyright: "Tributo independente. Todos os direitos de imagem pertencem a seus respectivos donos.",
    },
    shareStripAria: "Frases compartilháveis",
    countdown: {
      todayEyebrow: "O dia chegou",
      todayTitle: "Hoje é o dia da aposentadoria.",
      todayDescription: "Obrigado, Professor. Por tudo. O Brasil inteiro tá com você.",
      afterEyebrow: "Legado ativo",
      afterTitle: "O Professor se aposentou do competitivo.",
      afterDescription:
        "FalleNzão se aposentou do competitivo, mas segue fortalecendo a comunidade e deixando seu legado.",
      afterHighlights: ["O jogador virou referência.", "O professor segue ensinando.", "A comunidade carrega o legado."],
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
      links: [],
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
      headline: "The end of a Counter-Strike era.",
      todayHeadline: "Today is for gratitude.",
      afterHeadline: "The Professor's legacy lives on.",
      subhead: "The competitive scene is already counting down to the Professor’s farewell.",
      todaySubhead: "Today competitive CS says goodbye to The Professor, and a whole community says thank you.",
      afterSubhead: "Competition became history. The Professor's legacy keeps living on every server.",
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
        'Gabriel ‘FalleN’ Toledo isn’t just a name, he’s a whole chapter in Brazilian Counter-Strike, built on sweat, belief, and the AWP.',
      blocks: [
        { title: "Origins", body: "Before the Majors, before the arena lights, before the title of ‘Professor,’ there was just a boy from the countryside of São Paulo who was in love with Counter-Strike. Gabriel Toledo built his career through sheer hard work, training through entire nights at a time when being a pro player in Brazil felt like something out of a movie. He believed when almost no one else did, and that belief went on to inspire an entire country." },
        { title: "The Professor", body: "The nickname wasn’t given by chance. FalleN was never just a precise AWPer, he was a true builder of talent. From Games Academy to his educational YouTube videos, he opened doors that had been closed for years. He taught tactics, discipline, and, above all, that it was possible to dream big while speaking Portuguese. Every Brazilian player who has stepped onto an international stage carries a part of what the Professor helped build." },
        { title: "Leadership", body: "As the IGL of the legendary SK and Luminosity era, FalleN led one of the greatest runs in Counter-Strike history. Back-to-back Major titles, MLG Columbus 2016 and ESL One Cologne 2016, forever changed how the world sees Brazilian CS. More than the trophies, though, what remained was the example: humility in victory, dignity in defeat, and the understanding that to lead is also to serve." },
        { title: "Legacy", body: "To talk about FalleN is to talk about an entire generation. It’s remembering the roar after a clutch, the precise calls, the AWP that seemed to see beyond. It’s recognizing that, in a scene dominated by Europeans and North Americans, a Brazilian reached the top and brought others with him. When the Professor finally hangs up his competitive mouse, the scene won’t be left behind, it will become timeless. Because every new talent that rises carries, in some way, the seed he planted." },
      ],
    },
    titles: {
      eyebrow: "03 — Achievements",
      title: "Trophies that became history.",
      intro: "Fan-curated list based on public competitive wins. Every line here was celebrated by a whole country.",
      footnote: "",
      tournaments: [
        { event: "MLG Major Championship: Columbus", year: 2016, category: "Major", result: "🏆 Champion", description: "First CS:GO Major title for a Brazilian team." },
        { event: "ESL One Cologne", year: 2016, category: "Major", result: "🏆 Champion", description: "Back-to-back Majors with SK Gaming." },
        { event: "ESL Pro League Season 4 — Finals", year: 2016, category: "S-Tier", result: "🏆 Champion" },
        { event: "DreamHack Masters Las Vegas", year: 2017, category: "S-Tier", result: "🏆 Champion" },
        { event: "ESL One Belo Horizonte", year: 2018, category: "S-Tier", result: "🏆 Champion", description: "A title won at home in front of the Brazilian crowd." },
      ],
    },
    moments: {
      eyebrow: "04 — Moments",
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
    gallery: {
      eyebrow: "05 — Gallery",
      title: "Photos of FalleN.",
      intro:
        "A visual wall for the stages, eras, and memories of The Professor.",
      emptyHint:
        "Add a photo in public/gallery with this filename to fill the card.",
      photos: [
        {
          src: "/gallery/fallen-palco.jpg",
          alt: "FalleN on a competitive Counter-Strike stage",
          title: "On stage",
          caption: "The presence of someone who carried a whole generation.",
        },
        {
          src: "/gallery/fallen-torcida.jpg",
          alt: "FalleN with Brazilian fans",
          title: "With the crowd",
          caption: "The meeting between The Professor and those who never stopped believing.",
        },
        {
          src: "/gallery/fallen-trofeu.jpg",
          alt: "FalleN celebrating an achievement",
          title: "Trophy day",
          caption: "When the work became history for Brazilian CS.",
        },
        {
          src: "/gallery/fallen-time.jpg",
          alt: "FalleN next to teammates",
          title: "With the team",
          caption: "Leadership also means making everyone play better.",
        },
        {
          src: "/gallery/fallen-awp.jpg",
          alt: "FalleN playing with the AWP",
          title: "The Professor's AWP",
          caption: "The symbol of so many impossible rounds.",
        },
        {
          src: "/gallery/fallen-fans.jpg",
          alt: "FalleN in a moment close to fans",
          title: "Close to fans",
          caption: "A legacy that was always bigger than the server.",
        },
      ],
    },
    social: { eyebrow: "Follow The Professor", title: "Official channels" },
    finalCta: {
      titleLine1: "Tag that friend",
      titleHighlight: "who learned CS with The Professor.",
      todayDescription:
        "Today this tribute is about gratitude. Send it to someone who lived this story with you.",
      afterDescription:
        "Now this tribute is about legacy. Send it to someone who learned, cheered, or started playing because of The Professor.",
    },
    footer: {
      description: "This is not an official website. A fan-made tribute project for FalleN.",
      copyright: "Independent tribute. All image rights belong to their respective owners.",
    },
    shareStripAria: "Shareable lines",
    countdown: {
      todayEyebrow: "The day has come",
      todayTitle: "Today is the day.",
      todayDescription: "Today is FalleN's retirement day. Thank you, Professor. For everything.",
      afterEyebrow: "Legacy active",
      afterTitle: "The Professor has retired from competition.",
      afterDescription:
        "FalleN has retired from competition, but he keeps strengthening the community and leaving his legacy.",
      afterHighlights: ["The player became a reference.", "The teacher keeps teaching.", "The community carries the legacy."],
      ariaLabel: "Countdown to FalleN retirement",
      days: "Days",
      hours: "Hours",
      minutes: "Min",
      seconds: "Sec",
    },
  },
};
