"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0b0f16] text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero-ai-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover object-[72%_center] md:object-[80%_center] ${
            reduceMotion ? "" : "animate-drift"
          }`}
        />
        {/* Soft left veil for readability — keeps the right-side AI visual clear */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0b0f16] via-[#0b0f16]/80 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0b0f16]/70 via-transparent to-[#0b0f16]/35"
          aria-hidden
        />
        <div className="absolute inset-0 hero-sheen" aria-hidden />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <Logo size="hero" variant="dark" />
          <h1 className="mt-8 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            Reimagine your business with intelligent software.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
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
