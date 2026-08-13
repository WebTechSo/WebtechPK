import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function CtaBand() {
  return (
    <section className="bg-navy py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky">
                Next step
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Ready to make AI and software deliver?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                Share your goals—AI pilots, modernization, or a new product—and
                we’ll respond with a clear, practical path forward.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/contact" variant="light">
                Get in touch
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
