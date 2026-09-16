import { AnimatedSection } from "@/components/AnimatedSection";
import { ProcessStep } from "@/components/home/ProcessStep";
import { SectionHeader } from "@/components/home/SectionHeader";
import type { Dictionary } from "@/messages/en";

interface HowItWorksHomeSectionProps {
  dict: Dictionary;
}

export function HowItWorksHomeSection({ dict }: HowItWorksHomeSectionProps) {
  const t = dict.home.howItWorks;

  return (
    <section className="relative section-padding-sm overflow-hidden bg-primary">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-30"
        aria-hidden="true"
      />
      <div className="container-custom relative">
        <SectionHeader compact theme="dark" title={t.title} subtitle={t.subtitle} />
        <div className="relative">
          <div
            className="absolute start-[12.5%] end-[12.5%] top-8 hidden h-px bg-secondary/35 lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {t.steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <ProcessStep step={i + 1} title={step.title} description={step.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
