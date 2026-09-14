interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** Use on dark backgrounds (e.g. bg-primary) */
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-2xl font-bold sm:text-3xl lg:text-4xl ${
          light ? "text-white" : "text-neutral-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg ${light ? "text-gray-200" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
