import Image from "next/image";
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
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0f16] pt-28 pb-16 text-white md:pt-36 md:pb-20">
      <div className="absolute inset-0">
        <Image
          src="/page-dev-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0b0f16] via-[#0b0f16]/85 to-[#0b0f16]/45"
          aria-hidden
        />
        <div className="absolute inset-0 hero-sheen" aria-hidden />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
