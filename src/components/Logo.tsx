import Link from "next/link";
import { company } from "@/lib/data";

type LogoProps = {
  className?: string;
  size?: "nav" | "hero" | "footer";
  variant?: "light" | "dark";
};

const sizes = {
  nav: {
    mark: 28,
    text: "text-[1.15rem] md:text-[1.35rem]",
    gap: "gap-2.5",
  },
  hero: {
    mark: 40,
    text: "text-3xl sm:text-4xl md:text-[2.75rem]",
    gap: "gap-3.5",
  },
  footer: {
    mark: 30,
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
  const ink = isDark ? "#ffffff" : "#12151c";
  const accent = isDark ? "#8eb4ff" : "#1f4fd8";
  const muted = isDark ? "rgba(255,255,255,0.62)" : "#6a7280";

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
        {/* Abstract node-network monogram — corporate mark, not app icon */}
        <path
          d="M8 12.5L20 6l12 6.5V27.5L20 34 8 27.5V12.5Z"
          stroke={accent}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M20 6v28M8 12.5l12 6.5 12-6.5M8 27.5l12-6.5 12 6.5"
          stroke={accent}
          strokeWidth="1.2"
          strokeLinejoin="round"
          opacity="0.55"
        />
        <circle cx="20" cy="19" r="3.2" fill={accent} />
        <circle cx="20" cy="6" r="1.6" fill={ink} />
        <circle cx="8" cy="12.5" r="1.6" fill={ink} />
        <circle cx="32" cy="12.5" r="1.6" fill={ink} />
        <circle cx="8" cy="27.5" r="1.6" fill={ink} />
        <circle cx="32" cy="27.5" r="1.6" fill={ink} />
        <circle cx="20" cy="34" r="1.6" fill={ink} />
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
