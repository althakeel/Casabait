import { Metadata } from "next";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PropertyFilters } from "@/components/PropertyFilters";
import { properties } from "@/data/properties";
import { isLocale } from "@/i18n/config";
import { getLocaleParam } from "@/i18n/params";
import { localePath } from "@/i18n/navigation";

interface Props {
  params: { locale: string };
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  return createMetadata({
    title: "Properties for Sale & Rent in Dubai",
    description:
      "Browse apartments, villas & townhouses for sale and rent in Dubai. Filter by area, type & budget across JVT, JVC, Al Furjan, Motor City & more.",
    path: "/properties",
    locale: params.locale,
  });
}

export default function PropertiesPage({ params }: Props) {
  const locale = getLocaleParam(params.locale);
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: localePath(locale, "/") },
          { name: "Properties", url: localePath(locale, "/properties") },
        ])}
      />

      <section className="bg-primary py-16 text-white lg:py-24">
        <div className="container-custom px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Properties in Dubai</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Explore our curated selection of apartments, villas, and townhouses for sale and rent across Dubai&apos;s top communities.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <PropertyFilters properties={properties} />
        </div>
      </section>
    </>
  );
}
