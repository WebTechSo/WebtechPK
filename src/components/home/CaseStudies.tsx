import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section className="bg-ink text-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua-bright">
                Featured work
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Results our clients can measure.
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm font-semibold text-aqua-bright transition hover:text-white"
            >
              All case studies →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.08}>
              <article className="flex h-full flex-col border-t border-white/20 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky">
                  {study.industry}
                </p>
                <p className="mt-4 font-display text-3xl font-bold text-aqua-bright">
                  {study.metric}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
                  {study.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                  {study.summary}
                </p>
                <Link
                  href="/work"
                  className="mt-6 text-sm font-semibold text-white transition hover:text-aqua-bright"
                >
                  View case study →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
