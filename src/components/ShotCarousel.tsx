"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";

const shots = [
  {
    src: "/lernado/learning-modes.png",
    alt: "Lernado learning modes, with a Small Talk dictionary, new words, review, and a weekly streak.",
    title: "Start the day",
    body: "New words, a review, or both. The streak is the days you came back.",
  },
  {
    src: "/lernado/dictionaries.png",
    alt: "Lernado dictionaries, with a personal list and built-in verb lists.",
    title: "The words you keep",
    body: "Start from a built-in list, then grow a dictionary of the words you chose.",
  },
  {
    src: "/lernado/word-card.png",
    alt: "A Lernado word card for cover, with pronunciation, forms, a definition, and an example.",
    title: "Meet the word",
    body: "Sound, forms, and a sentence to lean on — before you have to use it yourself.",
  },
  {
    src: "/lernado/sentence.png",
    alt: "Feedback on a sentence that uses cover, with a note on wording and XP earned.",
    title: "Write it yourself",
    body: "Your sentence gets checked. You see what landed, and what to say instead.",
  },
  {
    src: "/lernado/dialogue.png",
    alt: "A Lernado dialogue that asks you to use notify in your own reply.",
    title: "Then use it",
    body: "A short conversation puts the word in a real situation. You answer in your own sentence.",
  },
] as const;

export function ShotCarousel() {
  const [index, setIndex] = useState(0);
  const dragX = useRef<number | null>(null);
  const swiped = useRef(false);
  const shot = shots[index];
  const previous = shots[(index + shots.length - 1) % shots.length];
  const next = shots[(index + 1) % shots.length];

  function go(nextIndex: number) {
    setIndex((nextIndex + shots.length) % shots.length);
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="App screens"
      className="mt-14 sm:mt-16"
    >
      <div
        className="relative py-12 sm:py-14"
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          dragX.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (dragX.current === null) return;
          const delta = event.clientX - dragX.current;
          dragX.current = null;
          if (Math.abs(delta) < 48) return;
          if ((event.target as HTMLElement).closest("[data-wing]")) {
            swiped.current = true;
          }
          go(index + (delta < 0 ? 1 : -1));
        }}
        onPointerCancel={() => {
          dragX.current = null;
        }}
      >
        <WingShot
          shot={previous}
          side="left"
          swiped={swiped}
          onSelect={() => go(index - 1)}
        />
        <div className="relative z-10 mx-auto w-[15rem] sm:w-[17rem]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-6 bottom-6 -z-10 rounded-full bg-accent/25 blur-2xl"
          />
          <Image
            src={shot.src}
            alt={shot.alt}
            width={545}
            height={1024}
            priority
            draggable={false}
            className="phone-shot relative h-auto w-full"
          />
        </div>
        <WingShot
          shot={next}
          side="right"
          swiped={swiped}
          onSelect={() => go(index + 1)}
        />
      </div>

      <div aria-live="polite" className="mx-auto mt-6 max-w-sm text-center">
        <h2 className="text-xl font-bold tracking-[-0.03em] text-foreground">
          {shot.title}
        </h2>
        <p className="mt-3 min-h-12 text-sm leading-6 text-muted">{shot.body}</p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <CarouselButton label="Previous screen" onClick={() => go(index - 1)}>
          <Chevron direction="left" />
        </CarouselButton>
        <div className="flex items-center gap-2">
          {shots.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              aria-label={item.title}
              aria-current={itemIndex === index ? "true" : undefined}
              onClick={() => go(itemIndex)}
              className={
                itemIndex === index
                  ? "h-1.5 w-6 rounded-full bg-accent"
                  : "size-1.5 rounded-full bg-muted/40 transition-colors hover:bg-muted"
              }
            />
          ))}
        </div>
        <CarouselButton label="Next screen" onClick={() => go(index + 1)}>
          <Chevron direction="right" />
        </CarouselButton>
      </div>
    </section>
  );
}

function WingShot({
  shot,
  side,
  swiped,
  onSelect,
}: {
  shot: (typeof shots)[number];
  side: "left" | "right";
  swiped: { current: boolean };
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      data-wing={side}
      aria-label={shot.title}
      onClick={() => {
        if (swiped.current) {
          swiped.current = false;
          return;
        }
        onSelect();
      }}
      className={
        side === "left"
          ? "absolute top-1/2 left-1/2 z-0 w-[11rem] -translate-x-[calc(100%+0.35rem)] -translate-y-1/2 scale-[0.82] sm:w-[13.25rem] sm:-translate-x-[calc(100%+0.15rem)] sm:scale-[0.84]"
          : "absolute top-1/2 left-1/2 z-0 w-[11rem] -translate-y-1/2 translate-x-[0.35rem] scale-[0.82] sm:w-[13.25rem] sm:translate-x-[0.15rem] sm:scale-[0.84]"
      }
    >
      <Image
        src={shot.src}
        alt=""
        width={545}
        height={1024}
        draggable={false}
        className="phone-shot-side pointer-events-none h-auto w-full"
      />
    </button>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-foreground"
    >
      {children}
    </button>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path
        d={direction === "left" ? "m14 6-6 6 6 6" : "m10 6 6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
