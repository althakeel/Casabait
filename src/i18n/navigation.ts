import { defaultLocale, type Locale } from "./config";

/** Strip /ar prefix and return locale + path without locale prefix */
export function parsePathname(pathname: string): { locale: Locale; pathname: string } {
  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    const rest = pathname.slice(3) || "/";
    return { locale: "ar", pathname: rest.startsWith("/") ? rest : `/${rest}` };
  }
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3) || "/";
    return { locale: "en", pathname: rest.startsWith("/") ? rest : `/${rest}` };
  }
  return { locale: defaultLocale, pathname: pathname || "/" };
}

/** Public URL for a locale — English has no prefix */
export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "ar") {
    return normalized === "/" ? "/ar" : `/ar${normalized}`;
  }
  return normalized;
}

/** Switch locale while preserving current page */
export function switchLocalePath(currentPathname: string, targetLocale: Locale): string {
  const { pathname } = parsePathname(currentPathname);
  return localePath(targetLocale, pathname);
}

export function localizeHref(href: string, locale: Locale): string {
  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return href;
  }
  const [path, hash] = href.split("#");
  const localized = localePath(locale, path);
  return hash ? `${localized}#${hash}` : localized;
}
