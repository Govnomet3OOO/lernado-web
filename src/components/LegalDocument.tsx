import type { ReactNode } from "react";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalDocumentProps = {
  title: string;
  lastUpdated: string;
  intro?: ReactNode;
  sections: LegalSection[];
};

export function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium text-accent">{lastUpdated}</p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-[2.15rem]">
          {title}
        </h1>
        {intro ? (
          <div className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
            {intro}
          </div>
        ) : null}
      </header>

      <nav
        aria-label="On this page"
        className="mb-12 rounded-2xl border border-line bg-card px-5 py-4"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
          Contents
        </p>
        <ol className="grid gap-2 text-sm sm:grid-cols-2">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-muted transition-colors hover:text-accent"
              >
                {index + 1}. {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24"
          >
            <h2 className="mb-3 text-lg font-semibold tracking-tight text-foreground">
              {index + 1}. {section.title}
            </h2>
            <div className="space-y-3 text-[15px] leading-7 text-muted [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-foreground [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
