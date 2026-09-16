import Link from "next/link";
import type { Dictionary } from "@/messages/en";
import { localePath } from "@/i18n/navigation";
import type { Locale } from "@/i18n/config";

interface ValuationCTAProps {
  locale: Locale;
  dict: Dictionary;
}

export function ValuationCTA({ locale, dict }: ValuationCTAProps) {
  const t = dict.home.valuation;

  return (
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
            <h2 className="section-title-light mx-auto max-w-2xl">{t.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {t.subtitle}
            </p>
            <div className="mt-8">
              <Link href={localePath(locale, "/contact")} className="btn-accent min-w-[260px]">
                {dict.common.speakToConsultant}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
