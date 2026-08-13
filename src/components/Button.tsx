import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-teal text-white hover:bg-aqua focus-visible:ring-aqua-bright",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-teal/60 hover:text-teal focus-visible:ring-ink/30",
  ghost:
    "bg-transparent text-white border border-white/40 hover:bg-white/10 focus-visible:ring-white/40",
  light:
    "bg-white text-navy hover:bg-paper focus-visible:ring-white",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
