interface SectionEyebrowHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionEyebrowHeading({ eyebrow, title, subtitle }: SectionEyebrowHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <div className="mb-5 flex items-center justify-center gap-3 sm:gap-4">
        <span className="h-px w-10 bg-gray-300 sm:w-16" aria-hidden="true" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
        <span className="h-px w-10 bg-gray-300 sm:w-16" aria-hidden="true" />
      </div>
      <h2 className="text-3xl font-bold text-neutral-dark sm:text-4xl lg:text-[2.5rem]">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
