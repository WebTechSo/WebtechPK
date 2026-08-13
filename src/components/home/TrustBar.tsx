import { Reveal } from "@/components/Reveal";

const pillars = [
  "Production AI systems",
  "Senior engineering pods",
  "Cloud & platform modernization",
  "Measurable delivery outcomes",
];

export function TrustBar() {
  return (
    <section className="border-b border-line bg-[#eef2f7]">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Built for decision-makers who need delivery
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {pillars.map((item) => (
                <li key={item} className="text-sm font-medium text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
