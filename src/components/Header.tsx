"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { NAV_ROUTES, PHONE, PHONE_LINK } from "@/lib/constants";
import { useLocale } from "@/i18n/LocaleProvider";
import { parsePathname, switchLocalePath } from "@/i18n/navigation";

function isActivePath(cleanPath: string, href: string): boolean {
  if (href === "/") return cleanPath === "/";
  return cleanPath === href || cleanPath.startsWith(`${href}/`);
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { locale, dict, localizeHref } = useLocale();
  const { pathname: cleanPath } = parsePathname(pathname);
  const isHome = cleanPath === "/";
  const isTransparent = isHome && !scrolled;

  const switchHref = switchLocalePath(pathname, locale === "en" ? "ar" : "en");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinkClass = (isActive: boolean) => {
    const base =
      "rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors";
    if (isTransparent) {
      return isActive
        ? `${base} bg-secondary/15 text-secondary`
        : `${base} text-white/90 hover:bg-white/10 hover:text-white`;
    }
    return isActive
      ? `${base} bg-secondary/15 text-secondary`
      : `${base} text-neutral-dark/80 hover:bg-primary/5 hover:text-primary`;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "border-b border-white/10 bg-transparent"
          : "border-b border-primary/10 bg-ivory/95 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo variant="header" />

        <nav className="hidden items-center gap-2 lg:flex" aria-label={dict.nav.mainNav}>
          {NAV_ROUTES.map((route) => {
            const href = localizeHref(route.href);
            const isActive = isActivePath(cleanPath, route.href);
            const label = dict.nav[route.navKey];
            return (
              <Link
                key={route.href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={navLinkClass(isActive)}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div
            className={`flex items-center rounded-lg border p-0.5 ${
              isTransparent ? "border-white/20 bg-white/5" : "border-primary/15 bg-surface"
            }`}
            role="group"
            aria-label={locale === "en" ? dict.nav.switchToArabic : dict.nav.switchToEnglish}
          >
            <Link
              href={locale === "en" ? pathname : switchLocalePath(pathname, "en")}
              className={`rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                locale === "en"
                  ? isTransparent
                    ? "bg-secondary/20 text-secondary"
                    : "bg-secondary/15 text-secondary"
                  : isTransparent
                    ? "text-white/70 hover:text-white"
                    : "text-neutral-dark/60 hover:text-primary"
              }`}
              aria-current={locale === "en" ? "true" : undefined}
            >
              {dict.nav.languageEn}
            </Link>
            <Link
              href={locale === "ar" ? pathname : switchHref}
              className={`rounded-md px-2.5 py-1 text-[11px] font-bold transition-colors ${
                locale === "ar"
                  ? isTransparent
                    ? "bg-secondary/20 text-secondary"
                    : "bg-secondary/15 text-secondary"
                  : isTransparent
                    ? "text-white/70 hover:text-white"
                    : "text-neutral-dark/60 hover:text-primary"
              }`}
              aria-current={locale === "ar" ? "true" : undefined}
            >
              {dict.nav.languageAr}
            </Link>
          </div>

          <a
            href={PHONE_LINK}
            className={`text-sm font-medium transition-colors ${
              isTransparent ? "text-white/90 hover:text-white" : "text-primary"
            }`}
            aria-label={`${dict.nav.callUs} ${PHONE}`}
          >
            {PHONE}
          </a>

          <Link
            href={localizeHref("/contact")}
            className={isTransparent ? "btn-hero text-xs" : "btn-primary text-xs"}
          >
            {dict.nav.bookConsultation}
          </Link>
        </div>

        <button
          type="button"
          className={`flex min-h-[44px] min-w-[44px] items-center justify-center lg:hidden ${
            isTransparent ? "text-white" : "text-charcoal"
          }`}
          onClick={() => setMobileOpen(true)}
          aria-label={dict.nav.openMenu}
          aria-expanded={mobileOpen}
        >
          <Icon name="menu" size={24} className={isTransparent ? "icon-white" : ""} />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={dict.nav.mobileNav}
        >
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <div className="fixed end-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-ivory shadow-xl">
            <div className="flex items-center justify-between border-b border-primary/10 px-4 py-4">
              <Logo variant="header" />
              <button
                type="button"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center"
                onClick={() => setMobileOpen(false)}
                aria-label={dict.nav.closeMenu}
              >
                <Icon name="x" size={24} />
              </button>
            </div>

            <div className="border-b border-primary/10 px-4 py-3">
              <div className="flex items-center rounded-lg border border-primary/15 bg-surface p-0.5">
                <Link
                  href={locale === "en" ? pathname : switchLocalePath(pathname, "en")}
                  className={`flex-1 rounded-md py-2 text-center text-[11px] font-bold uppercase tracking-wider ${
                    locale === "en" ? "bg-secondary/15 text-secondary" : "text-neutral-dark/60"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {dict.nav.languageEn}
                </Link>
                <Link
                  href={locale === "ar" ? pathname : switchHref}
                  className={`flex-1 rounded-md py-2 text-center text-[11px] font-bold ${
                    locale === "ar" ? "bg-secondary/15 text-secondary" : "text-neutral-dark/60"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {dict.nav.languageAr}
                </Link>
              </div>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label={dict.nav.mobileNav}>
              {NAV_ROUTES.map((route) => {
                const href = localizeHref(route.href);
                const isActive = isActivePath(cleanPath, route.href);
                const label = dict.nav[route.navKey];
                return (
                  <Link
                    key={route.href}
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`min-h-[44px] rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-secondary/15 text-secondary"
                        : "text-neutral-dark hover:bg-primary/5 hover:text-primary"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-primary/10 p-4">
              <a href={PHONE_LINK} className="mb-3 block text-sm font-medium text-primary">
                {PHONE}
              </a>
              <Link
                href={localizeHref("/contact")}
                className="btn-primary w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                {dict.nav.bookConsultation}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
