"use client";

/*
 * Replace with licensed/owned property photography before launch.
 */
import Link from "next/link";
import { Property } from "@/lib/types";
import { Icon } from "./Icon";
import { PropertyImage } from "./PropertyImage";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <PropertyImage
          src={property.image}
          alt={`${property.propertyType} in ${property.area}, Dubai — ${property.title}`}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-md bg-primary px-2 py-1 text-xs font-medium uppercase text-white">
          {property.type === "sale" ? "For Sale" : "For Rent"}
        </span>
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold text-primary">{property.priceLabel}</p>
        <h3 className="mt-1 text-base font-medium text-neutral-dark line-clamp-2">{property.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{property.area}</p>
        <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1">
              <Icon name="bed" size={16} /> {property.bedrooms} Bed
            </span>
          )}
          <span className="flex items-center gap-1">
            <Icon name="bath" size={16} /> {property.bathrooms} Bath
          </span>
          <span className="flex items-center gap-1">
            <Icon name="maximize" size={16} /> {property.sqft.toLocaleString()} sqft
          </span>
        </div>
        <Link
          href={`/properties/${property.slug}`}
          className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-md border border-primary text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
