import { useEffect, useState } from "react";
import { CountdownPreviewState, retirementDate } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { getCountdownPreviewState } from "@/lib/countdown-state";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type State = "before" | "today" | "after";

const calc = (target: Date, previewState: CountdownPreviewState): { state: State; t: TimeLeft } => {
  const emptyTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (previewState === "today" || previewState === "after") {
    return { state: previewState, t: emptyTime };
  }

  const now = new Date();
  let diff = target.getTime() - now.getTime();
  if (previewState === "before" && diff <= 0) {
    diff = 30 * 86400000;
  }

  const sameDay =
    now.getFullYear() === target.getFullYear() &&
    now.getMonth() === target.getMonth() &&
    now.getDate() === target.getDate();

  if (previewState !== "before" && sameDay && diff > -86400000) {
    return { state: "today", t: emptyTime };
  }
  if (diff <= 0) {
    return { state: "after", t: emptyTime };
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
          <span className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground tabular-nums leading-none">
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
  const [previewState] = useState(getCountdownPreviewState);
  const [{ state, t }, setData] = useState(() => calc(target, previewState));

  useEffect(() => {
    const id = setInterval(() => setData(calc(target, previewState)), 1000);
    return () => clearInterval(id);
  }, [previewState, target]);

  if (state === "today") {
    return (
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl glass px-6 py-8 md:px-10 md:py-10 text-center border-accent-green/50 shadow-[0_0_70px_-28px_hsl(var(--accent-green)/0.85)]">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent-green to-transparent" />
        <p className="text-xs uppercase tracking-[0.35em] text-accent-green">
          {content.countdown.todayEyebrow}
        </p>
        <p className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl leading-none text-accent-green text-glow-green">
          {content.countdown.todayTitle}
        </p>
        <p className="mt-5 text-base md:text-xl text-foreground/90 leading-relaxed max-w-2xl mx-auto">
          {content.countdown.todayDescription}
        </p>
      </div>
    );
  }

  if (state === "after") {
    return (
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl glass px-6 py-8 md:px-10 md:py-10 text-center border-accent-yellow/50 shadow-[0_0_70px_-30px_hsl(var(--accent-yellow)/0.7)]">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent-yellow to-transparent" />
        <p className="text-xs uppercase tracking-[0.35em] text-accent-yellow">
          {content.countdown.afterEyebrow}
        </p>
        <p className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl leading-none text-foreground">
          {content.countdown.afterTitle}
        </p>
        <p className="mt-5 text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
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
