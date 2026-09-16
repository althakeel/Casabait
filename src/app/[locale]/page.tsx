import { JsonLd } from "@/components/JsonLd";
import { HomeHero } from "@/components/home/HomeHero";
import { WhyCasaBaitHomeSection } from "@/components/home/WhyCasaBaitHomeSection";
import { ServicesHomeSection } from "@/components/home/ServicesHomeSection";
import { HowItWorksHomeSection } from "@/components/home/HowItWorksHomeSection";
import { TestimonialsHomeSection } from "@/components/home/TestimonialsHomeSection";
import { ValuationCTA } from "@/components/home/ValuationCTA";
import { realEstateAgentSchema } from "@/lib/seo";
import { getDictionary } from "@/messages";
import { getLocaleParam } from "@/i18n/params";

interface Props {
  params: { locale: string };
}

export default function HomePage({ params }: Props) {
  const locale = getLocaleParam(params.locale);
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd data={realEstateAgentSchema()} />
      <HomeHero locale={locale} dict={dict} />
      <WhyCasaBaitHomeSection dict={dict} />
      <ServicesHomeSection locale={locale} dict={dict} />
      <HowItWorksHomeSection dict={dict} />
      <TestimonialsHomeSection locale={locale} dict={dict} />
      <ValuationCTA locale={locale} dict={dict} />
    </>
  );
}
