import Link from "next/link";
import { Icon } from "@/components/Icon";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProcessStep } from "@/components/home/ProcessStep";
import { localePath } from "@/i18n/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/messages/en";
import type { Service } from "@/lib/types";

const serviceIcons: Record<string, string> = {
  buying: "search",
  selling: "trending-up",
  renting: "key",
  "off-plan-investment": "building",
  "property-management": "wrench",
  "investment-advisory": "calculator",
};

interface ServiceSectionProps {
  service: Service;
  index: number;
  locale: Locale;
  dict: Dictionary;
}

export function ServiceSection({ service, index, locale, dict }: ServiceSectionProps) {
  const isIvory = index % 2 === 0;
  const iconName = serviceIcons[service.slug] ?? "home";

  return (
    <article
      id={service.slug}
      className={`scroll-mt-24 overflow-hidden ${isIvory ? "bg-ivory" : "bg-surface"}`}
    >
      <div className="container-custom section-padding-sm">
        <div className="mb-10 flex flex-col gap-6 border-b border-primary/10 pb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex items-start gap-5">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-secondary/40 bg-ivory shadow-gold"
              aria-hidden="true"
            >
              <Icon name={iconName} size={24} className="icon-gold" />
            </div>
            <div>
              <span className="font-serif text-3xl font-light text-secondary/80 lg:text-4xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-1 font-serif text-2xl font-semibold text-charcoal lg:text-3xl">{service.title}</h2>
            </div>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-dark/70 sm:text-base lg:pt-2">
            {service.description}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <span className="gold-rule w-8" aria-hidden="true" />
              {dict.common.benefits}
            </h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, benefitIndex) => (
                <li key={`${service.slug}-benefit-${benefitIndex}`} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-secondary/40 bg-secondary/10"
                    aria-hidden="true"
                  >
                    <Icon name="check" size={14} className="icon-gold" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm leading-relaxed text-neutral-dark/70 sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <span className="gold-rule w-8" aria-hidden="true" />
              {dict.common.ourProcess}
            </h3>
            <ol className="space-y-5">
              {service.process.map((step) => (
                <ProcessStep
                  key={`${service.slug}-process-${step.step}`}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  theme="light"
                  layout="row"
                />
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10 lg:mt-12">
          <h3 className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            <span className="gold-rule w-8" aria-hidden="true" />
            {dict.common.faq}
          </h3>
          <FAQAccordion faqs={service.faqs} idPrefix={service.slug} />
        </div>

        <div className="mt-10 border-t border-primary/10 pt-10 lg:mt-12">
          <Link href={localePath(locale, "/contact")} className="btn-primary">
            {dict.common.getStartedWith} {service.title}
          </Link>
        </div>
      </div>
    </article>
  );
}
