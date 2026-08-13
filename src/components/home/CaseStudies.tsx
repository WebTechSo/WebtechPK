import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section className="bg-paper-warm py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                Featured work
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Results our clients can measure.
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm font-semibold text-teal transition hover:text-ink"
            >
              All case studies →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.08}>
              <article className="flex h-full flex-col border border-line bg-white p-6 transition hover:border-teal/40 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {study.industry}
                </p>
                <p className="mt-4 font-display text-3xl font-bold text-teal">
                  {study.metric}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
                  {study.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {study.summary}
                </p>
                <Link
                  href="/work"
                  className="mt-6 text-sm font-semibold text-teal transition hover:text-ink"
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
