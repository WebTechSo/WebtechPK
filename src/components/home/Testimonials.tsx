"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const item = testimonials[index];

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Client voices
        </p>
        <div className="relative mt-8 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.name}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-x-0"
            >
              <p className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
                “{item.quote}”
              </p>
              <footer className="mt-8">
                <p className="text-sm font-semibold text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((entry, i) => (
            <button
              key={entry.name}
              type="button"
              aria-label={`Show testimonial from ${entry.name}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-teal" : "bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
