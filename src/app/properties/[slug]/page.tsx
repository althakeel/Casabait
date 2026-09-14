/*
 * Replace with licensed/owned property photography before launch.
 */
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata, breadcrumbSchema, propertyListingSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { PropertyCard } from "@/components/PropertyCard";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { properties, getPropertyBySlug } from "@/data/properties";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const property = getPropertyBySlug(params.slug);
  if (!property) return { title: "Property Not Found" };

  return createMetadata({
    title: `${property.title} | Dubai Property`,
    description: `${property.description} ${property.priceLabel}. ${property.bedrooms > 0 ? `${property.bedrooms} bed` : "Studio"}, ${property.bathrooms} bath, ${property.sqft} sqft in ${property.area}.`,
    path: `/properties/${property.slug}`,
    image: property.image,
  });
}

export default function PropertyDetailPage({ params }: Props) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();

  const related = properties
    .filter((p) => p.slug !== property.slug && p.areaSlug === property.areaSlug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Properties", url: "/properties" },
            { name: property.title, url: `/properties/${property.slug}` },
          ]),
          propertyListingSchema(property),
        ]}
      />

      <section className="bg-neutral-light py-8">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary">Home</Link>
            {" / "}
            <Link href="/properties" className="hover:text-primary">Properties</Link>
            {" / "}
            <span className="text-neutral-dark">{property.title}</span>
          </nav>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src={property.image}
                  alt={`${property.title} — ${property.area}, Dubai`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
              {property.images.length > 1 && (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {property.images.slice(1, 4).map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={img}
                        alt={`${property.title} interior view ${i + 2}, ${property.area}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 33vw, 22vw"
                      />
                    </div>
                  ))}
                </div>
              )}

              <h1 className="mt-8 text-2xl font-bold text-neutral-dark lg:text-3xl">{property.title}</h1>
              <p className="mt-2 text-2xl font-semibold text-primary">{property.priceLabel}</p>
              <p className="mt-1 text-gray-500">{property.area}, Dubai</p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                {property.bedrooms > 0 && (
                  <span className="flex items-center gap-1"><Icon name="bed" size={18} /> {property.bedrooms} Bedrooms</span>
                )}
                <span className="flex items-center gap-1"><Icon name="bath" size={18} /> {property.bathrooms} Bathrooms</span>
                <span className="flex items-center gap-1"><Icon name="maximize" size={18} /> {property.sqft.toLocaleString()} sqft</span>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-neutral-dark">Description</h2>
                <p className="mt-3 text-gray-600 leading-relaxed">{property.longDescription}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-neutral-dark">Amenities</h2>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {property.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="check" size={16} /> {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-neutral-dark">Location</h2>
                <div className="mt-3">
                  <GoogleMapEmbed
                    query={`${property.area}, Dubai, UAE`}
                    title={`${property.title} — ${property.area}, Dubai`}
                    className="h-64 w-full"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Explore more in{" "}
                  <Link href={`/areas#${property.areaSlug}`} className="text-primary hover:underline">
                    {property.area}
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-neutral-dark">Request Info</h2>
                <p className="mt-1 text-sm text-gray-500">Interested in this property? Get in touch.</p>
                <div className="mt-4">
                  <ContactForm showPropertyInterest={false} submitLabel="Request Info" />
                </div>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-semibold text-neutral-dark">Similar Properties in {property.area}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
