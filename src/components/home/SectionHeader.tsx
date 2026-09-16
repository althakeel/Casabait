interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
  align?: "center" | "left";
  compact?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  theme = "light",
  align = "center",
  compact = false,
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const isLeft = align === "left";

  const marginClass = compact
    ? isLeft
      ? "mb-5"
      : "mb-10 lg:mb-12"
    : isLeft
      ? "mb-0"
      : "mb-16 lg:mb-20";

  return (
    <div className={`${isLeft ? "max-w-xl text-left" : "mx-auto max-w-3xl text-center"} ${marginClass}`}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-4 ${isLeft ? "" : "justify-center"}`}>
          <span className="gold-rule shrink-0" aria-hidden="true" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className={isDark ? "section-title-light" : "section-title"}>{title}</h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-white/70" : "text-neutral-dark/65"
          } ${isLeft ? "" : "mx-auto max-w-2xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
