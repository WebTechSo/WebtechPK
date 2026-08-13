import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0 hero-atmosphere" aria-hidden />
      <div className="absolute inset-0 hero-grid-light opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
