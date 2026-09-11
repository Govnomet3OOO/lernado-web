"use client";

import { applyTheme, getTheme } from "../lib/theme";

export function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Switch theme"
      title="Switch theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-card hover:text-foreground"
      onClick={() => {
        applyTheme(getTheme() === "light" ? "dark" : "light");
      }}
    >
      <span className="relative h-[18px] w-[18px]">
        <svg
          className="theme-icon-sun absolute inset-0 h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v1.5M12 19.5V21M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3 12h1.5M19.5 12H21M4.9 19.1 6 18M18 6l1.1-1.1" />
        </svg>
        <svg
          className="theme-icon-moon absolute inset-0 h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5Z" />
        </svg>
      </span>
    </button>
  );
}
