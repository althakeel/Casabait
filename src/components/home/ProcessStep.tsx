interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  theme?: "dark" | "light";
  layout?: "column" | "row";
}

export function ProcessStep({
  step,
  title,
  description,
  theme = "dark",
  layout = "column",
}: ProcessStepProps) {
  const isDark = theme === "dark";

  const circle = (
    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-secondary bg-secondary shadow-gold lg:h-14 lg:w-14">
      <span className="font-serif text-lg font-bold text-charcoal lg:text-xl">{step}</span>
    </div>
  );

  if (layout === "row") {
    return (
      <li className="flex gap-4">
        {circle}
        <div className="min-w-0 pt-0.5">
          <p className={`font-semibold ${isDark ? "text-white" : "text-charcoal"}`}>{title}</p>
          <p className={`mt-1 text-sm leading-relaxed ${isDark ? "text-white/65" : "text-neutral-dark/65"}`}>
            {description}
          </p>
        </div>
      </li>
    );
  }

  return (
    <article className="relative flex flex-col items-center text-center">
      <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-secondary bg-secondary shadow-gold">
        <span className="font-serif text-2xl font-bold text-charcoal">{step}</span>
      </div>
      <h3 className={`mt-5 font-serif text-xl font-semibold ${isDark ? "text-white" : "text-charcoal"}`}>
        {title}
      </h3>
      <p
        className={`mt-2 max-w-[220px] text-sm leading-relaxed ${isDark ? "text-white/65" : "text-neutral-dark/65"}`}
      >
        {description}
      </p>
    </article>
  );
}
