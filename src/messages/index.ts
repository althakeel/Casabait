import type { Locale } from "@/i18n/config";
import { en, type Dictionary } from "./en";
import { ar } from "./ar";

export function getDictionary(locale: Locale): Dictionary {
  return locale === "ar" ? ar : en;
}

export type { Dictionary };
