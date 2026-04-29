import { useLanguage } from "@/context/LanguageContext";
import { RevealOnScroll } from "./RevealOnScroll";
import { cn } from "@/lib/utils";

const teams = [
  {
    name: "KaBuM! e-Sports",
    logo: "/teams/team-1.png",
    url: "https://www.hltv.org/team/5822/kabum",
    sizeClass: "max-h-32 md:max-h-40",
  },
  {
    name: "Vivo Keyd",
    logo: "/teams/team-2.png",
    url: "https://www.hltv.org/team/6033/keyd-stars",
    sizeClass: "max-h-32 md:max-h-40",
  },
  {
    name: "Luminosity Gaming",
    logo: "/teams/team-3.svg",
    url: "https://luminosity.gg",
  },
  {
    name: "SK Gaming",
    logo: "/teams/team-4.webp",
    url: "https://www.sk-gaming.com",
  },
  {
    name: "MIBR",
    logo: "/teams/team-5.png",
    url: "https://mibr.gg",
    sizeClass: "max-h-32 md:max-h-40",
  },
  {
    name: "Team Liquid",
    logo: "/teams/team-6.svg",
    url: "https://www.teamliquid.com",
  },
  {
    name: "Imperial",
    logo: "/teams/team-8.png",
    url: "https://imperialesports.gg",
    sizeClass: "max-h-32 md:max-h-40",
  },
  {
    name: "FURIA",
    logo: "/teams/team-9.svg",
    url: "https://www.furia.gg",
  },
];

const marqueeTeams = [...teams, ...teams];

export const TeamsSection = () => {
  const { locale } = useLanguage();

  const copy =
    locale === "pt-BR"
      ? {
          eyebrow: "02 — Times",
          title: "As camisas que marcaram a carreira.",
          intro:
            "Dos primeiros projetos ao topo do mundo, cada escudo aqui conta um pedaço da trajetória do Professor.",
        }
      : {
          eyebrow: "02 — Teams",
          title: "The jerseys that shaped his career.",
          intro:
            "From early lineups to the top of the world, every badge here carries part of The Professor's story.",
        };

  return (
    <section
      id="times"
      className="relative overflow-hidden py-24 md:py-32 border-y border-border/60 bg-surface-elevated/30"
    >
      {/* Gradientes laterais */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="container relative">
        <RevealOnScroll className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-yellow">
            {copy.eyebrow}
          </span>

          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            {copy.title}
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {copy.intro}
          </p>
        </RevealOnScroll>
      </div>

      {/* Marquee */}
      <div className="group relative mt-14 md:mt-20">
        <div className="flex w-max animate-marquee-slow gap-10 md:gap-14 pr-10 md:pr-14">
          {marqueeTeams.map((team, index) => (
            <a
              key={`${team.name}-${index}`}
              href={team.url}
              target="_blank"
              rel="noopener noreferrer"
              className="team-logo-card relative flex h-40 w-44 shrink-0 items-center justify-center md:h-48 md:w-52 group"
            >
              <img
                src={team.logo}
                alt={team.name}
                className={cn(
                  "w-auto max-w-full object-contain opacity-65 grayscale transition duration-300 ease-out max-h-28 md:max-h-36 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105",
                  team.sizeClass
                )}
                loading="lazy"
                decoding="async"
              />

              {/* Nome no hover */}
              <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 translate-y-2 opacity-0 transition duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-1">
                <span className="block whitespace-nowrap text-center text-xs uppercase tracking-[0.18em] text-foreground md:text-sm">
                  {team.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
