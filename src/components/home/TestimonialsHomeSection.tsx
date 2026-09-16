import { AnimatedSection } from "@/components/AnimatedSection";
import { TestimonialCard } from "@/components/home/TestimonialCard";
import { SectionHeader } from "@/components/home/SectionHeader";
import { getTestimonials } from "@/data/locale";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/messages/en";

interface TestimonialsHomeSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function TestimonialsHomeSection({ locale, dict }: TestimonialsHomeSectionProps) {
  const testimonials = getTestimonials(locale);
  const t = dict.home.testimonials;

  return (
    <section className="section-padding-sm bg-ivory bg-grid-pattern bg-grid">
      <div className="container-custom">
        <SectionHeader compact title={t.title} subtitle={t.subtitle} />
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {testimonials.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.08} className="h-full">
              <TestimonialCard quote={item.quote} name={item.name} role={item.role} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
