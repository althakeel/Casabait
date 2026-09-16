import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/home/ServiceCard";
import { SectionHeader } from "@/components/home/SectionHeader";
import { getServices } from "@/data/locale";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/messages/en";

interface ServicesHomeSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function ServicesHomeSection({ locale, dict }: ServicesHomeSectionProps) {
  const services = getServices(locale);
  const t = dict.home.services;

  return (
    <section className="section-padding-sm bg-surface">
      <div className="container-custom">
        <SectionHeader compact title={t.title} subtitle={t.subtitle} />
        <div className="mx-auto max-w-4xl border-t border-primary/10">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.05}>
              <ServiceCard
                locale={locale}
                slug={service.slug}
                title={service.title}
                description={service.shortDescription}
                index={i}
                learnMoreLabel={dict.common.learnMore}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
