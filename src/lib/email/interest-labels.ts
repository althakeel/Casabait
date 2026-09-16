import type { Locale } from "@/i18n/config";

const INTEREST_LABELS: Record<string, Record<Locale, string>> = {
  buy: { en: "Buying Property", ar: "شراء عقار" },
  sell: { en: "Selling Property", ar: "بيع عقار" },
  rent: { en: "Renting / Leasing", ar: "إيجار / تأجير" },
  "off-plan": { en: "Off-Plan Investment", ar: "استثمار Off-Plan" },
  valuation: { en: "Property Valuation", ar: "تقييم عقاري" },
  other: { en: "Other", ar: "أخرى" },
};

export function getInterestLabel(value: string | undefined, locale: Locale): string {
  if (!value) {
    return locale === "ar" ? "غير محدد" : "Not specified";
  }
  return INTEREST_LABELS[value]?.[locale] ?? value;
}

export const VALID_INTERESTS = Object.keys(INTEREST_LABELS);
