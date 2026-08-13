"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-line/80 bg-paper/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Logo variant={solid ? "light" : "dark"} />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  solid
                    ? active
                      ? "text-teal"
                      : "text-ink-soft hover:text-teal"
                    : active
                      ? "text-aqua-bright"
                      : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
              solid
                ? "bg-teal text-white hover:bg-aqua"
                : "bg-white text-ink hover:bg-white/90"
            }`}
          >
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`md:hidden ${solid ? "text-ink" : "text-white"}`}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-5 w-6">
            <span
              className={`mb-1.5 block h-0.5 w-full transition ${
                solid ? "bg-ink" : "bg-white"
              } ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`mb-1.5 block h-0.5 w-full transition ${
                solid ? "bg-ink" : "bg-white"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-full transition ${
                solid ? "bg-ink" : "bg-white"
              } ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-teal px-4 py-3 text-sm font-semibold text-white"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
