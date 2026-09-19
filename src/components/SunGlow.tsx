"use client";

import { applyTheme, getTheme } from "../lib/theme";

const RAYS = [0, 45, 90, 135, 180, 225, 270, 315];

export function SunGlow() {
  return (
    <button
      type="button"
      tabIndex={-1}
      aria-label="Switch to dark theme"
      title="Switch to dark theme"
      className="theme-sun pointer-events-auto absolute top-6 right-4 h-[150px] w-[150px] sm:right-10"
      onClick={() => {
        if (getTheme() === "light") {
          applyTheme("dark");
        }
      }}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 130 130">
        <defs>
          <radialGradient id="lernado-sun-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDE047" stopOpacity="0.65" />
            <stop offset="45%" stopColor="#F59E0B" stopOpacity="0.25" />
            <stop offset="75%" stopColor="#F59E0B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="65" cy="65" r="60" fill="url(#lernado-sun-glow)" />
      </svg>
      <svg
        className="theme-sun-rays absolute inset-0 h-full w-full origin-center motion-safe:animate-sun-spin"
        viewBox="0 0 130 130"
      >
        {RAYS.map((angle) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={angle}
              x1={65 + Math.cos(rad) * 33}
              y1={65 + Math.sin(rad) * 33}
              x2={65 + Math.cos(rad) * 44}
              y2={65 + Math.sin(rad) * 44}
              stroke="#F59E0B"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.45"
            />
          );
        })}
      </svg>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 130 130">
        <defs>
          <radialGradient id="lernado-sun-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.88" />
            <stop offset="65%" stopColor="#FBBF24" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.75" />
          </radialGradient>
        </defs>
        <circle cx="65" cy="65" r="25" fill="url(#lernado-sun-core)" />
      </svg>
    </button>
  );
}
