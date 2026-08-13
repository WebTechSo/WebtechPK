"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 hero-glow animate-drift" aria-hidden />
      <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
      <div
        className="absolute inset-y-0 right-0 w-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-30 md:w-[58%]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-navy/40"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <Logo size="hero" priority variant="dark" className="mb-2" />
          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            Reimagine your business with intelligent software.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            We connect AI to real workflows and build products that learn,
            adapt, and scale with your team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/services" variant="primary">
              Explore services
            </Button>
            <Button href="/contact" variant="ghost">
              Talk to us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
