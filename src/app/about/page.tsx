import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { company, principles, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn how WebTech Solutions partners with growing businesses to ship intelligent software.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title={`Who we are at ${company.name}.`}
        description="We are a technology partner for teams that need more than a vendor—strategy, craft, and delivery that hold up in production."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
              Built for the messy middle between ambition and systems that work.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                Growing companies often stall between promising pilots and
                production reality. We close that gap—pairing product sense with
                engineering depth so AI, platforms, and customer experiences
                actually stick.
              </p>
              <p>
                Our teams span advisory, design, engineering, data, and cloud.
                You get senior attention without the agency theater: clear
                communication, measurable milestones, and systems your people
                can own.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-bold text-teal">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
              How we work
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.07}>
                <div className="border-t-2 border-teal pt-5">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Button href="/contact">Work with us</Button>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
