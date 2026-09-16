import Link from "next/link";
import { Logo } from "@/components/Logo";
import { NAV_ROUTES, SOCIAL_LINKS, RERA_ORN, PHONE, EMAIL } from "@/lib/constants";
import { getServices, getAreas } from "@/data/locale";
import { getDictionary } from "@/messages";
import { localePath } from "@/i18n/navigation";
import { defaultLocale, isLocale } from "@/i18n/config";
import { headers } from "next/headers";

const socialLabels: Record<string, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  tiktok: "TikTok",
  pinterest: "Pinterest",
  twitter: "X (Twitter)",
  whatsapp: "WhatsApp",
};

export function Footer() {
  const localeHeader = headers().get("x-locale");
  const locale = localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;
  const dict = getDictionary(locale);
  const services = getServices(locale);
  const areas = getAreas(locale);
  const address = dict.contact.address;

  const href = (path: string) => localePath(locale, path);

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom section-padding pb-12">
        <div className="mb-12 flex justify-center lg:justify-start">
          <span className="gold-rule w-24" aria-hidden="true" />
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <div className="mb-5">
              <Logo variant="footer" />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-white/60">{dict.footer.tagline}</p>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">
              {dict.footer.reraOrn}: {RERA_ORN}
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              {dict.footer.services}
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`${href("/services")}#${service.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              {dict.footer.areasWeCover}
            </h3>
            <ul className="space-y-2.5">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`${href("/areas")}#${area.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {area.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              {dict.footer.contact}
            </h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>{address.street}</li>
              <li>
                {address.city}, {address.country}
              </li>
              <li>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold uppercase tracking-wider text-white/40 transition-colors hover:text-secondary"
                  aria-label={socialLabels[key] || key}
                >
                  {socialLabels[key] || key}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {dict.footer.copyright}
          </p>
          <nav className="flex flex-wrap justify-center gap-5" aria-label={dict.footer.footerNav}>
            {NAV_ROUTES.slice(0, 4).map((route) => (
              <Link
                key={route.href}
                href={href(route.href)}
                className="text-xs uppercase tracking-wider text-white/40 transition-colors hover:text-white"
              >
                {dict.nav[route.navKey]}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
