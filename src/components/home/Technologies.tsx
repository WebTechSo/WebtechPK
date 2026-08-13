import { Reveal } from "@/components/Reveal";
import { technologies } from "@/lib/data";

export function Technologies() {
  return (
    <section className="border-y border-line bg-paper-warm py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Technologies
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Tools we use to ship reliable systems.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="text-sm font-medium text-ink-soft md:text-base"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
