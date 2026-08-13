import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-24">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 80% 20%, rgba(47,142,240,0.55), transparent 55%), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(91,184,255,0.25), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Ready to power your next transformation?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              Tell us where you are stuck—AI pilots, legacy systems, or a new
              product bet—and we’ll map a practical path forward.
            </p>
            <div className="mt-8">
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
