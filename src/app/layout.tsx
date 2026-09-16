import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Playfair_Display, IBM_Plex_Sans_Arabic, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, createMetadata } from "@/lib/seo";
import { defaultLocale, getDirection, isLocale } from "@/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-arabic-sans",
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-arabic-serif",
});

export const metadata: Metadata = createMetadata({
  title: "Casa Bait Property Consultant | Dubai Real Estate Agency",
  description:
    "Casa Bait is a RERA-registered Dubai property consultant offering buying, selling, renting & off-plan investment advisory across JVT, JVC, Al Furjan & more.",
  path: "/",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localeHeader = headers().get("x-locale");
  const locale = localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;
  const dir = getDirection(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${playfair.variable} ${ibmPlexArabic.variable} ${notoNaskhArabic.variable} ${locale === "ar" ? "locale-ar" : ""}`}
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={organizationSchema()} />
        {children}
      </body>
    </html>
  );
}
