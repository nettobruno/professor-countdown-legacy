import { useEffect, useState } from "react";
import { retirementDate } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type State = "before" | "today" | "after";

const calc = (target: Date): { state: State; t: TimeLeft } => {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  const sameDay =
    now.getFullYear() === target.getFullYear() &&
    now.getMonth() === target.getMonth() &&
    now.getDate() === target.getDate();

  if (sameDay && diff > -86400000) {
    return { state: "today", t: { days: 0, hours: 0, minutes: 0, seconds: 0 } };
  }
  if (diff <= 0) {
    return { state: "after", t: { days: 0, hours: 0, minutes: 0, seconds: 0 } };
  }
  return {
    state: "before",
    t: {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    },
  };
};

const Digit = ({ value, label }: { value: number; label: string }) => {
  const [prev, setPrev] = useState(value);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setAnimating(true);
      const id = setTimeout(() => {
        setPrev(value);
        setAnimating(false);
      }, 250);
      return () => clearTimeout(id);
    }
  }, [value, prev]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full">
        <div
          className={`glass rounded-xl md:rounded-2xl px-3 py-4 md:px-6 md:py-7 min-w-[72px] md:min-w-[120px] text-center ${
            animating ? "tick" : ""
          }`}
        >
          <span className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground tabular-nums leading-none">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
};

export const Countdown = () => {
  const { content } = useLanguage();
  const target = new Date(retirementDate);
  const [{ state, t }, setData] = useState(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setData(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (state === "today") {
    return (
      <div className="text-center max-w-2xl mx-auto py-8">
        <p className="font-display text-4xl md:text-6xl text-accent-green text-glow-green">
          {content.countdown.todayTitle}
        </p>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          {content.countdown.todayDescription}
        </p>
      </div>
    );
  }

  if (state === "after") {
    return (
      <div className="text-center max-w-2xl mx-auto py-8">
        <p className="font-display text-3xl md:text-5xl text-foreground">
          {content.countdown.afterTitle}
        </p>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {content.countdown.afterDescription}
        </p>
      </div>
    );
  }

  return (
    <time
      dateTime={retirementDate}
      className="grid grid-cols-4 gap-2 md:gap-4 max-w-3xl mx-auto"
      aria-label={content.countdown.ariaLabel}
    >
      <Digit value={t.days} label={content.countdown.days} />
      <Digit value={t.hours} label={content.countdown.hours} />
      <Digit value={t.minutes} label={content.countdown.minutes} />
      <Digit value={t.seconds} label={content.countdown.seconds} />
    </time>
  );
};
