import { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/home/SectionHeader";
import { InitialsAvatar } from "@/components/InitialsAvatar";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getTeamMembers } from "@/data/locale";
import { getDictionary } from "@/messages";
import { isLocale } from "@/i18n/config";
import { getLocaleParam } from "@/i18n/params";
import { localePath } from "@/i18n/navigation";
import { RERA_ORN } from "@/lib/constants";

interface Props {
  params: { locale: string };
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: dict.about.hero.title,
    description: dict.about.hero.subtitle,
    path: "/about",
    locale: params.locale,
    siteName: dict.meta.siteName,
  });
}

export default function AboutPage({ params }: Props) {
  const locale = getLocaleParam(params.locale);
  const dict = getDictionary(locale);
  const teamMembers = getTeamMembers(locale);
  const t = dict.about;

  return (
    <>
      <section className="relative overflow-hidden bg-primary pb-10 pt-24 lg:pb-14 lg:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-30"
          aria-hidden="true"
        />
        <div className="container-custom relative px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex justify-center">
            <span className="gold-rule" aria-hidden="true" />
          </div>
          <h1 className="section-title-light mx-auto max-w-3xl">{t.hero.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="section-padding-sm bg-ivory">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <AnimatedSection>
              <div className="max-w-xl">
                <SectionHeader align="left" compact title={t.story.title} />
                <div className="space-y-3 text-sm leading-relaxed text-neutral-dark/70 sm:text-base">
                  <p>{t.story.p1}</p>
                  <p>{t.story.p2}</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="max-w-xl lg:ms-auto">
                <SectionHeader align="left" compact title={t.mission.title} />
                <p className="text-sm leading-relaxed text-neutral-dark/70 sm:text-base">{t.mission.body}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-surface">
        <div className="container-custom">
          <SectionHeader compact title={t.values.title} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {t.values.items.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.06} className="h-full">
                <article className="group flex h-full flex-col border border-primary/10 bg-ivory p-6 transition-all duration-300 hover:border-secondary/50 hover:shadow-card-hover">
                  <span className="font-serif text-3xl font-light text-secondary/70" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-charcoal">{value.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-dark/65">{value.description}</p>
                  <div
                    className="mt-4 h-px w-0 bg-secondary transition-all duration-500 group-hover:w-12"
                    aria-hidden="true"
                  />
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-ivory bg-grid-pattern bg-grid">
        <div className="container-custom">
          <SectionHeader compact title={t.team.title} subtitle={t.team.subtitle} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.06} className="h-full">
                <article className="flex h-full flex-col items-center border border-primary/10 bg-surface p-6 text-center shadow-card transition-all duration-300 hover:border-secondary/40 hover:shadow-card-hover">
                  <InitialsAvatar initials={member.initials} size="lg" />
                  <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal">{member.name}</h3>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-secondary">
                    {member.title}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-primary">
        <div className="container-custom">
          <div className="relative overflow-hidden border border-secondary/40 bg-charcoal/40 px-6 py-12 text-center shadow-gold sm:px-10 sm:py-14">
            <div
              className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-50"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mb-4 flex justify-center">
                <span className="gold-rule" aria-hidden="true" />
              </div>
              <h2 className="section-title-light mx-auto max-w-2xl">{t.rera.title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                {t.rera.body.replace("{orn}", RERA_ORN)}
              </p>
              <div className="mt-8">
                <Link href={localePath(locale, "/contact")} className="btn-accent min-w-[200px]">
                  {dict.common.getInTouch}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
