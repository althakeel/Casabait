import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import { ContentBadge } from "@/components/ContentBadge";
import { splitIntoParagraphs } from "@/lib/splitParagraph";
import { localePath } from "@/i18n/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/messages/en";
import type { Area } from "@/lib/types";

interface AreaSectionProps {
  area: Area;
  index: number;
  locale: Locale;
  speakToLabel: string;
}

export function AreaSection({ area, index, locale, speakToLabel }: AreaSectionProps) {
  const imageOnRight = locale === "ar" ? index % 2 === 0 : index % 2 === 1;
  const isIvory = index % 2 === 0;
  const paragraphs = splitIntoParagraphs(area.longDescription);

  return (
    <article
      id={area.slug}
      className={`scroll-mt-24 overflow-hidden ${isIvory ? "bg-ivory" : "bg-surface"}`}
    >
      <div className="container-custom section-padding-sm">
        <div
          className={`rounded-lg border border-primary/10 p-6 shadow-card lg:p-10 ${
            isIvory ? "bg-surface" : "bg-ivory"
          }`}
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div
              className={`relative order-1 aspect-[4/3] overflow-hidden rounded-lg border border-primary/10 ${
                imageOnRight ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <SafeImage
                src={area.image}
                alt={`${area.name} residential community in Dubai`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className={`order-2 ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}>
              <span className="font-serif text-2xl font-light text-secondary/80 lg:text-3xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
                {area.shortName}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-charcoal lg:text-3xl">{area.name}</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {area.highlights.map((highlight) => (
                  <ContentBadge key={`${area.slug}-${highlight}`} label={highlight} />
                ))}
              </div>

              <div className="mt-5 max-w-prose space-y-4 text-sm leading-[1.8] text-neutral-dark/70 sm:text-base">
                {paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${area.slug}-p-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8">
                <Link href={localePath(locale, "/contact")} className="btn-secondary">
                  {speakToLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
