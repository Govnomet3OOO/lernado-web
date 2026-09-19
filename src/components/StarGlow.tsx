"use client";

import type { CSSProperties } from "react";

import { applyTheme, getTheme } from "../lib/theme";

const STARS = [
  { top: "10%", left: "82%", size: 18, type: "cross" as const, delay: "0s", duration: "10s" },
  { top: "22%", left: "90%", size: 8, type: "dot" as const, delay: "1.2s", duration: "8.5s" },
  { top: "8%", left: "70%", size: 7, type: "dot" as const, delay: "2.8s", duration: "11s" },
  { top: "32%", left: "86%", size: 16, type: "cross" as const, delay: "0.6s", duration: "9.5s" },
  { top: "18%", left: "74%", size: 6, type: "dot" as const, delay: "2s", duration: "12s" },
  { top: "14%", left: "94%", size: 20, type: "cross" as const, delay: "0.9s", duration: "10.5s" },
  { top: "40%", left: "78%", size: 8, type: "dot" as const, delay: "2.4s", duration: "9s" },
];

export function StarGlow() {
  return (
    <div className="theme-stars pointer-events-none absolute inset-0">
      {STARS.map((star, index) => (
        <button
          key={index}
          type="button"
          tabIndex={-1}
          aria-label="Switch to light theme"
          title="Switch to light theme"
          className="theme-star pointer-events-auto absolute"
          style={
            {
              top: star.top,
              left: star.left,
              "--star-index": index,
              "--star-delay": star.delay,
              "--star-duration": star.duration,
            } as CSSProperties
          }
          onClick={() => {
            if (getTheme() === "dark") {
              applyTheme("light");
            }
          }}
        >
          <span
            className="theme-star-glyph"
            style={{ width: star.size, height: star.size }}
          >
            {star.type === "cross" ? (
              <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
              </svg>
            ) : (
              <span className="block h-full w-full rounded-full bg-current" />
            )}
          </span>
        </button>
      ))}
    </div>
  );
}
