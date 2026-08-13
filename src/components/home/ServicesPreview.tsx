import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/data";

export function ServicesPreview() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Our services
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Capabilities that move from strategy to shipped systems.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              One partner across AI, engineering, cloud, and advisory—so your
              roadmap stays coherent from idea to production.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <Link
                href={`/services#${service.slug}`}
                className="group grid gap-4 py-8 transition md:grid-cols-[0.9fr_1.4fr_auto] md:items-end md:gap-8"
              >
                <h3 className="font-display text-2xl font-semibold text-ink transition group-hover:text-teal">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  {service.summary}
                </p>
                <span className="text-sm font-semibold text-teal">
                  View details →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
