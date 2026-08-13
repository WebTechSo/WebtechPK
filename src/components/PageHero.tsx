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
    <section className="relative overflow-hidden border-b border-line bg-ink pt-28 pb-16 text-white md:pt-36 md:pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 85% 20%, rgba(47,142,240,0.35), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua-bright">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
