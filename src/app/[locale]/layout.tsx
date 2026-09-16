import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/messages";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const dict = getDictionary(params.locale);

  return (
    <LocaleProvider locale={params.locale} dict={dict}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse items-center gap-3">
        <BackToTop />
        <WhatsAppFloat />
      </div>
    </LocaleProvider>
  );
}
