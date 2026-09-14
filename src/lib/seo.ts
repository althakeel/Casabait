import { Metadata } from "next";
import { SITE_NAME, SITE_URL, SOCIAL_LINKS, ADDRESS, PHONE, EMAIL, RERA_ORN } from "./constants";

interface PageSEO {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path,
  image = "/og-image.jpg",
  noIndex = false,
}: PageSEO): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "Casa Bait Real Estate",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      email: EMAIL,
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressCountry: ADDRESS.country,
    },
    sameAs: Object.values(SOCIAL_LINKS),
  };
}

export function realEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    areaServed: [
      "Jumeirah Village Triangle",
      "Jumeirah Village Circle",
      "Al Furjan",
      "Dubai Production City",
      "Motor City",
      "Dubailand",
    ],
    sameAs: Object.values(SOCIAL_LINKS),
    identifier: {
      "@type": "PropertyValue",
      name: "RERA ORN",
      value: RERA_ORN,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function propertyListingSchema(property: {
  title: string;
  description: string;
  slug: string;
  price: number;
  priceLabel: string;
  image: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: "sale" | "rent";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    url: `${SITE_URL}/properties/${property.slug}`,
    image: property.image,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
      businessFunction:
        property.type === "rent"
          ? "http://purl.org/goodrelations/v1#LeaseOut"
          : "http://purl.org/goodrelations/v1#Sell",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.area,
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.sqft,
      unitCode: "FTK",
    },
  };
}
