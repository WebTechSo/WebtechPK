import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies from WebTech Solutions across AI, modernization, and product engineering.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Proof in production."
        description="A sample of engagements where WebTech Solutions helped teams turn ambitious ideas into systems that deliver measurable outcomes."
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-8 px-5 md:px-8">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.05}>
              <article className="grid gap-6 border border-line bg-white p-6 md:grid-cols-[0.8fr_1.4fr] md:gap-10 md:p-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                    {study.industry}
                  </p>
                  <p className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
                    {study.metric}
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    {study.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {study.summary}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex text-sm font-semibold text-teal transition hover:text-ink"
                  >
                    Start a similar project →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
