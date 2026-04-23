import { CountdownPreviewState, retirementDate } from "@/config/site";

export type CountdownState = "before" | "today" | "after";

export const getCountdownPreviewState = (): CountdownPreviewState => {
  if (typeof window === "undefined") return "auto";

  const value = new URLSearchParams(window.location.search).get("countdown");
  if (value === "before" || value === "today" || value === "after") return value;

  return "auto";
};

export const resolveCountdownState = (
  previewState = getCountdownPreviewState(),
): CountdownState => {
  if (previewState !== "auto") return previewState;

  const target = new Date(retirementDate);
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  const sameDay =
    now.getFullYear() === target.getFullYear() &&
    now.getMonth() === target.getMonth() &&
    now.getDate() === target.getDate();

  if (sameDay && diff > -86400000) return "today";
  if (diff <= 0) return "after";

  return "before";
};
