export const THEME_STORAGE_KEY = "lernado-theme";
export const THEME_ANIMATION_MS = 1400;

export type ThemeName = "light" | "dark";

export function getTheme(): ThemeName {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

let animationTimer: number | undefined;

export function applyTheme(next: ThemeName) {
  const root = document.documentElement;
  if (getTheme() === next) {
    return;
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  root.classList.remove("theme-to-dark", "theme-to-light");
  if (!reduced) {
    void root.offsetWidth;
    root.classList.add(next === "dark" ? "theme-to-dark" : "theme-to-light");
  }

  root.setAttribute("data-theme", next);

  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Ignore write errors (private mode, disabled storage).
  }

  window.clearTimeout(animationTimer);
  animationTimer = window.setTimeout(() => {
    root.classList.remove("theme-to-dark", "theme-to-light");
  }, reduced ? 0 : THEME_ANIMATION_MS);
}
