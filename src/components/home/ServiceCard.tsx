import Link from "next/link";
import { Icon } from "@/components/Icon";
import { localePath } from "@/i18n/navigation";
import type { Locale } from "@/i18n/config";

interface ServiceCardProps {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  index: number;
  learnMoreLabel: string;
}

export function ServiceCard({
  locale,
  slug,
  title,
  description,
  index,
  learnMoreLabel,
}: ServiceCardProps) {
  return (
    <Link
      href={`${localePath(locale, "/services")}#${slug}`}
      className="group grid grid-cols-1 gap-4 border-b border-primary/10 py-6 transition-colors hover:bg-white/80 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-6 sm:py-7 lg:grid-cols-[5rem_1fr_auto] lg:gap-10"
    >
      <span className="font-serif text-3xl font-light text-secondary/70 transition-colors group-hover:text-secondary lg:text-4xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-serif text-xl font-semibold text-charcoal transition-colors group-hover:text-primary lg:text-2xl">
          {title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-dark/65 sm:text-base">
          {description}
        </p>
      </div>
      <span className="inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-colors group-hover:text-secondary sm:self-center">
        {learnMoreLabel}
        <Icon
          name="chevron-right"
          size={16}
          className="icon-gold transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
        />
      </span>
    </Link>
  );
}
