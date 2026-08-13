import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/data";

type LogoProps = {
  className?: string;
  priority?: boolean;
  size?: "nav" | "hero" | "footer";
  /** Use lightened navy ink for dark backgrounds */
  variant?: "light" | "dark";
};

const sizes = {
  nav: { width: 200, height: 56, className: "h-10 w-auto md:h-12" },
  hero: { width: 420, height: 118, className: "h-16 w-auto sm:h-20 md:h-24" },
  footer: { width: 240, height: 68, className: "h-12 w-auto" },
};

export function Logo({
  className = "",
  priority = false,
  size = "nav",
  variant = "light",
}: LogoProps) {
  const dims = sizes[size];
  const src = variant === "dark" ? "/logo-on-dark.png" : "/logo.png";

  return (
    <Link
      href="/"
      aria-label={company.name}
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={src}
        alt={company.name}
        width={dims.width}
        height={dims.height}
        priority={priority}
        className={`${dims.className} object-contain object-left`}
      />
    </Link>
  );
}
