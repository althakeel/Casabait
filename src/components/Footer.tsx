import Link from "next/link";
import { Logo } from "@/components/Logo";
import { NAV_LINKS, SOCIAL_LINKS, RERA_ORN, PHONE, EMAIL, ADDRESS } from "@/lib/constants";
import { areas } from "@/data/areas";
import { services } from "@/data/services";

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
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="mb-4 text-sm text-gray-300">
              A dynamic, forward-thinking real estate agency providing exceptional property services across Dubai.
            </p>
            <p className="text-sm text-gray-400">RERA ORN: {RERA_ORN}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services#${service.slug}`} className="text-sm text-gray-300 transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">Areas We Cover</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas#${area.slug}`} className="text-sm text-gray-300 transition-colors hover:text-white">
                    {area.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{ADDRESS.street}</li>
              <li>{ADDRESS.city}, {ADDRESS.country}</li>
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
            <div className="mt-4 flex flex-wrap gap-3">
              {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 transition-colors hover:text-secondary"
                  aria-label={socialLabels[key] || key}
                >
                  {socialLabels[key] || key}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Casa Bait Property Consultant. All rights reserved.
          </p>
          <nav className="flex gap-4" aria-label="Footer navigation">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
