"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

function NeuralBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#2563eb" strokeOpacity="0.22" strokeWidth="1">
        <path d="M520 80L620 160L700 120" />
        <path d="M620 160L680 260L740 220" />
        <path d="M520 80L480 200L560 280" />
        <path d="M560 280L680 260" />
        <path d="M480 200L420 320L540 380" />
        <path d="M560 280L540 380L640 420" />
        <path d="M700 120L740 220L780 300" />
        <path d="M640 420L720 360L780 300" />
        <path d="M420 320L380 440L500 500" />
        <path d="M540 380L500 500" />
      </g>
      <g className="animate-node-pulse" fill="#3b82f6">
        <circle cx="520" cy="80" r="4" fillOpacity="0.7" />
        <circle cx="620" cy="160" r="5" />
        <circle cx="700" cy="120" r="3.5" fillOpacity="0.6" />
        <circle cx="680" cy="260" r="4.5" />
        <circle cx="560" cy="280" r="5.5" />
        <circle cx="480" cy="200" r="3.5" fillOpacity="0.65" />
        <circle cx="740" cy="220" r="3" fillOpacity="0.55" />
        <circle cx="540" cy="380" r="4" />
        <circle cx="640" cy="420" r="3.5" fillOpacity="0.7" />
        <circle cx="420" cy="320" r="4" fillOpacity="0.6" />
        <circle cx="500" cy="500" r="3.5" />
        <circle cx="780" cy="300" r="3" fillOpacity="0.5" />
      </g>
      <g fill="#14b8a6" fillOpacity="0.45">
        <circle cx="720" cy="360" r="3" />
        <circle cx="380" cy="440" r="2.5" />
      </g>
    </svg>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 hero-atmosphere" aria-hidden />
      <div className="absolute inset-0 hero-grid-light" aria-hidden />
      <div className="absolute inset-y-0 right-0 w-full md:w-[58%]" aria-hidden>
        <NeuralBackdrop />
      </div>

      <div className="relative mx-auto grid min-h-[92svh] max-w-6xl items-center gap-12 px-5 pb-16 pt-28 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:px-8 md:pb-20 md:pt-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <Logo size="hero" variant="light" />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            AI · Agents · Engineering
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-[3.25rem]">
            We don’t just talk AI.
            <span className="block text-ink-soft">We ship systems that work.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            WebTech Solutions connects models, agents, and modern software to
            real workflows—so intelligence shows up in production, not only in
            demos.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/services" variant="primary">
              Explore AI services
            </Button>
            <Button href="/contact" variant="secondary">
              Talk to an expert
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`relative ${reduceMotion ? "" : "animate-rise-soft"}`}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-sky/25 via-teal/10 to-transparent blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-sky/25 bg-white/85 shadow-[0_28px_90px_-28px_rgba(37,99,235,0.35)] backdrop-blur-sm">
            <div className="border-b border-line bg-gradient-to-r from-[#e8f0fe] to-[#eef2f7] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-sky/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="ml-3 text-xs font-medium text-muted">
                  ai.orchestration · live
                </span>
              </div>
            </div>
            <div className="space-y-4 px-5 py-6 md:px-6 md:py-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                Agent pipeline
              </p>
              <ul className="space-y-3 text-sm text-ink-soft">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                  Retrieval + reasoning agents on your data
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  Workflow automation with human-in-the-loop
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Guardrails, evals, and production monitoring
                </li>
              </ul>
              <div className="grid grid-cols-3 gap-3 border-t border-line pt-5">
                <div>
                  <p className="font-display text-2xl font-bold text-ink">95%</p>
                  <p className="mt-1 text-[11px] text-muted">Client retention</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-teal">40+</p>
                  <p className="mt-1 text-[11px] text-muted">AI projects</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-ink">12+</p>
                  <p className="mt-1 text-[11px] text-muted">Years shipping</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
