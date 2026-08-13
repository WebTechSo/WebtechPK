import Link from "next/link";
import { company } from "@/lib/data";

type LogoProps = {
  className?: string;
  size?: "nav" | "hero" | "footer";
  variant?: "light" | "dark";
};

const sizes = {
  nav: {
    mark: 30,
    text: "text-[1.2rem] md:text-[1.35rem]",
    gap: "gap-2.5",
  },
  hero: {
    mark: 42,
    text: "text-3xl sm:text-4xl",
    gap: "gap-3",
  },
  footer: {
    mark: 32,
    text: "text-xl",
    gap: "gap-2.5",
  },
};

export function Logo({
  className = "",
  size = "nav",
  variant = "light",
}: LogoProps) {
  const dims = sizes[size];
  const isDark = variant === "dark";
  const ink = isDark ? "#ffffff" : "#0f172a";
  const accent = isDark ? "#93c5fd" : "#1d4ed8";
  const muted = isDark ? "rgba(255,255,255,0.65)" : "#64748b";

  return (
    <Link
      href="/"
      aria-label={company.name}
      className={`inline-flex items-center ${dims.gap} ${className}`}
    >
      <svg
        width={dims.mark}
        height={dims.mark}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M8 12.5L20 6l12 6.5V27.5L20 34 8 27.5V12.5Z"
          stroke={accent}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M20 6v28M8 12.5l12 6.5 12-6.5M8 27.5l12-6.5 12 6.5"
          stroke={accent}
          strokeWidth="1.15"
          strokeLinejoin="round"
          opacity="0.45"
        />
        <circle cx="20" cy="19" r="3" fill={accent} />
      </svg>

      <span className="leading-none">
        <span
          className={`font-display font-semibold tracking-[-0.03em] ${dims.text}`}
          style={{ color: ink }}
        >
          WebTech
        </span>
        <span
          className={`ml-1.5 font-display font-medium tracking-[-0.02em] ${dims.text}`}
          style={{ color: muted }}
        >
          Solutions
        </span>
      </span>
    </Link>
  );
}
