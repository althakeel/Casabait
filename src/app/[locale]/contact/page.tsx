import { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/ContactForm";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { getDictionary } from "@/messages";
import { isLocale } from "@/i18n/config";
import { getLocaleParam } from "@/i18n/params";
import { PHONE, PHONE_LINK, EMAIL, WHATSAPP_LINK, MAP_DIRECTIONS_URL } from "@/lib/constants";

interface Props {
  params: { locale: string };
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: dict.contact.hero.title,
    description: dict.contact.hero.subtitle,
    path: "/contact",
    locale: params.locale,
    siteName: dict.meta.siteName,
  });
}

function PanelHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="gold-rule w-10 shrink-0" aria-hidden="true" />
        <h2 className="font-serif text-2xl font-semibold text-charcoal lg:text-3xl">{title}</h2>
      </div>
      {subtitle && <p className="text-sm leading-relaxed text-neutral-dark/70 sm:text-base">{subtitle}</p>}
    </div>
  );
}

function DetailBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-secondary">{label}</h3>
      <div className="mt-2 text-sm leading-relaxed text-neutral-dark/70 sm:text-base">{children}</div>
    </div>
  );
}

export default function ContactPage({ params }: Props) {
  const locale = getLocaleParam(params.locale);
  const dict = getDictionary(locale);
  const t = dict.contact;
  const address = t.address;

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
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="premium-card order-1">
              <PanelHeading title={t.form.title} subtitle={t.form.subtitle} />
              <ContactForm />
            </div>

            <div className="order-2 space-y-8">
              <div className="premium-card">
                <PanelHeading title={t.office.title} />
                <div className="space-y-6">
                  <DetailBlock label={t.office.address}>
                    <p>{address.street}</p>
                    <p>
                      {address.city}, {address.country}
                    </p>
                  </DetailBlock>
                  <DetailBlock label={t.office.phone}>
                    <a
                      href={PHONE_LINK}
                      className="font-medium text-primary transition-colors hover:text-secondary"
                      dir="ltr"
                    >
                      {PHONE}
                    </a>
                  </DetailBlock>
                  <DetailBlock label={t.office.email}>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-medium text-primary transition-colors hover:text-secondary"
                      dir="ltr"
                    >
                      {EMAIL}
                    </a>
                  </DetailBlock>
                  <DetailBlock label={t.office.businessHours}>
                    <ul className="space-y-1.5">
                      {t.hours.map((bh) => (
                        <li key={bh.day}>
                          <span className="font-medium text-charcoal">{bh.day}:</span> {bh.hours}
                        </li>
                      ))}
                    </ul>
                  </DetailBlock>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    {dict.common.chatWhatsApp}
                  </a>
                </div>
              </div>

              <div className="premium-card">
                <PanelHeading title={t.office.findUs} />
                <GoogleMapEmbed
                  title="Casa Bait Property Consultant office — Al Saqr Business Tower, DIFC, Dubai"
                  className="h-64 w-full lg:h-72"
                />
                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-secondary"
                >
                  {dict.common.getDirections}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
