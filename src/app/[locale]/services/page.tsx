import { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ServiceSection } from "@/components/services/ServiceSection";
import { getServices } from "@/data/locale";
import { getDictionary } from "@/messages";
import { isLocale } from "@/i18n/config";
import { getLocaleParam } from "@/i18n/params";
import { localePath } from "@/i18n/navigation";

interface Props {
  params: { locale: string };
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: dict.servicesPage.hero.title,
    description: dict.servicesPage.hero.subtitle,
    path: "/services",
    locale: params.locale,
    siteName: dict.meta.siteName,
  });
}

export default function ServicesPage({ params }: Props) {
  const locale = getLocaleParam(params.locale);
  const dict = getDictionary(locale);
  const services = getServices(locale);
  const t = dict.servicesPage;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: dict.common.home, url: localePath(locale, "/") },
          { name: dict.nav.services, url: localePath(locale, "/services") },
        ])}
      />

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

      <div>
        {services.map((service, index) => (
          <ServiceSection
            key={service.slug}
            service={service}
            index={index}
            locale={locale}
            dict={dict}
          />
        ))}
      </div>

      <section className="section-padding-sm bg-primary">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-lg border border-secondary/40 bg-charcoal/40 px-6 py-12 text-center shadow-gold sm:px-10 sm:py-14">
            <div
              className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-50"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mb-4 flex justify-center">
                <span className="gold-rule" aria-hidden="true" />
              </div>
              <h2 className="section-title-light mx-auto max-w-2xl">{t.cta.title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                {t.cta.subtitle}
              </p>
              <div className="mt-8">
                <Link href={localePath(locale, "/contact")} className="btn-accent min-w-[260px]">
                  {dict.common.bookFreeConsultation}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
