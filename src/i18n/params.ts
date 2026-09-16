import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./config";

export function getLocaleParam(value: string): Locale {
  if (!isLocale(value)) notFound();
  return value;
}
