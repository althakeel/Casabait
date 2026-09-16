import { AnimatedSection } from "@/components/AnimatedSection";
import { FeatureCard } from "@/components/home/FeatureCard";
import { SectionHeader } from "@/components/home/SectionHeader";
import type { Dictionary } from "@/messages/en";

const advantageIcons = ["map-pin", "search", "message-circle", "shield", "wrench", "trending-up"];

interface WhyCasaBaitHomeSectionProps {
  dict: Dictionary;
}

export function WhyCasaBaitHomeSection({ dict }: WhyCasaBaitHomeSectionProps) {
  const t = dict.home.why;

  return (
    <section className="section-padding-sm bg-ivory">
      <div className="container-custom">
        <SectionHeader compact eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {t.advantages.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.06} className="h-full">
              <FeatureCard
                icon={advantageIcons[i]}
                title={item.title}
                description={item.description}
                index={i}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
