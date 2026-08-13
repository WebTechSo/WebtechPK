import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { engagementModels } from "@/lib/data";

export function Engagement() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              How we engage
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Flexible models. Same delivery bar.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {engagementModels.map((model, index) => (
            <Reveal key={model.title} delay={index * 0.07}>
              <div className="h-full border-l-2 border-aqua pl-5">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {model.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Button href="/contact">Start a conversation</Button>
        </Reveal>
      </div>
    </section>
  );
}
