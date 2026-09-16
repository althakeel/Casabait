/*
 * Replace with licensed/owned property photography before launch.
 */
import Image from "next/image";
import Link from "next/link";
import { RERA_ORN, PHONE } from "@/lib/constants";
import { STOCK_IMAGES } from "@/lib/images";
import type { Dictionary } from "@/messages/en";
import { localePath } from "@/i18n/navigation";
import type { Locale } from "@/i18n/config";

interface HomeHeroProps {
  locale: Locale;
  dict: Dictionary;
}

export function HomeHero({ locale, dict }: HomeHeroProps) {
  const t = dict.home.hero;
  const address = dict.contact.address;

  return (
    <section className="relative flex min-h-[78vh] flex-col justify-end overflow-hidden pt-20 lg:min-h-[85vh]">
      <Image
        src={STOCK_IMAGES.heroSkyline}
        alt="Dubai skyline at dusk — Casa Bait Property Consultant"
        fill
        priority
        className="object-cover object-[center_25%] scale-105"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-primary/80 to-primary/15 rtl:bg-gradient-to-l"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 container-custom w-full px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-4">
            <span className="gold-rule shrink-0" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-[2.5rem] font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            {t.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
            {t.subtitle}
          </p>
          <div className="mt-8">
            <Link href={localePath(locale, "/contact")} className="btn-hero">
              {t.cta}
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-charcoal/60 backdrop-blur-md">
        <div className="container-custom grid grid-cols-1 divide-y divide-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8 rtl:sm:divide-x-reverse">
          <div className="px-2 py-3 sm:px-6 sm:py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{t.reraOrn}</p>
            <p className="mt-1 text-sm font-medium text-white">{RERA_ORN}</p>
          </div>
          <div className="px-2 py-3 sm:px-6 sm:py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{t.phone}</p>
            <p className="mt-1 text-sm font-medium text-white">{PHONE}</p>
          </div>
          <div className="px-2 py-3 sm:px-6 sm:py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{t.location}</p>
            <p className="mt-1 text-sm font-medium text-white">
              {address.city}, {address.country}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
