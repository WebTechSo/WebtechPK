import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI & data, product engineering, cloud & security, and advisory services from WebTech Solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end capabilities for AI-era delivery."
        description="Whether you need a focused AI pod, a modernization program, or a long-term engineering partner, we bring strategy and execution under one roof."
      >
        <Button href="/contact" variant="primary">
          Discuss your roadmap
        </Button>
      </PageHero>

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-16 px-5 md:px-8">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.04}>
              <article
                id={service.slug}
                className="scroll-mt-28 grid gap-8 border-t border-line pt-12 md:grid-cols-[1fr_1.2fr]"
              >
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {service.summary}
                  </p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-aqua bg-white px-4 py-3 text-sm font-medium text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
