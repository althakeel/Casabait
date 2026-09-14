import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant: "header" | "footer";
  className?: string;
}

/** White-bg navy logo — readable on light (header) and dark (footer) backgrounds */
const LOGO = {
  src: "/logo-footer.jpg",
  width: 200,
  height: 56,
  alt: "Casa Bait Real Estate",
};

export function Logo({ variant, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 ${className}`}
      aria-label="Casa Bait Home"
    >
      <Image
        src={LOGO.src}
        alt={LOGO.alt}
        width={LOGO.width}
        height={LOGO.height}
        className={`h-auto w-auto object-contain ${
          variant === "header" ? "max-h-10 sm:max-h-12" : "max-h-14"
        } ${variant === "footer" ? "rounded-md bg-white px-3 py-2" : ""}`}
        priority={variant === "header"}
      />
    </Link>
  );
}
