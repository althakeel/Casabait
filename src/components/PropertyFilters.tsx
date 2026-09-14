"use client";

import { useMemo, useState } from "react";
import { Property } from "@/lib/types";
import { PropertyCard } from "./PropertyCard";

interface PropertyFiltersProps {
  properties: Property[];
}

export function PropertyFilters({ properties }: PropertyFiltersProps) {
  const [type, setType] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [bedrooms, setBedrooms] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (type && p.type !== type) return false;
      if (area && p.areaSlug !== area) return false;
      if (propertyType && p.propertyType !== propertyType) return false;
      if (bedrooms) {
        const bed = parseInt(bedrooms, 10);
        if (bed === 0 && p.bedrooms !== 0) return false;
        if (bed > 0 && p.bedrooms !== bed) return false;
      }
      if (priceRange) {
        const [min, max] = priceRange.split("-").map(Number);
        if (p.type === "rent") {
          if (p.price < min || (max && p.price > max)) return false;
        } else {
          if (p.price < min || (max && p.price > max)) return false;
        }
      }
      return true;
    });
  }, [properties, type, area, propertyType, bedrooms, priceRange]);

  return (
    <>
      <div className="mb-8 grid gap-3 rounded-lg border border-gray-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-5">
        <select value={type} onChange={(e) => setType(e.target.value)} className="input-field text-sm" aria-label="Listing type">
          <option value="">Sale / Rent</option>
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
        <select value={area} onChange={(e) => setArea(e.target.value)} className="input-field text-sm" aria-label="Area">
          <option value="">All Areas</option>
          <option value="jvt">JVT</option>
          <option value="jvc">JVC</option>
          <option value="al-furjan">Al Furjan</option>
          <option value="impz">IMPZ</option>
          <option value="motor-city">Motor City</option>
          <option value="dubailand">Dubailand</option>
        </select>
        <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="input-field text-sm" aria-label="Property type">
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="townhouse">Townhouse</option>
          <option value="studio">Studio</option>
        </select>
        <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="input-field text-sm" aria-label="Bedrooms">
          <option value="">Bedrooms</option>
          <option value="0">Studio</option>
          <option value="1">1 Bed</option>
          <option value="2">2 Beds</option>
          <option value="3">3 Beds</option>
          <option value="4">4 Beds</option>
        </select>
        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="input-field text-sm" aria-label="Price range">
          <option value="">Price Range</option>
          <option value="0-500000">Up to AED 500K</option>
          <option value="500000-1000000">AED 500K – 1M</option>
          <option value="1000000-2000000">AED 1M – 2M</option>
          <option value="2000000-99999999">AED 2M+</option>
        </select>
      </div>

      <p className="mb-6 text-sm text-gray-600">{filtered.length} properties found</p>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No properties match your filters. Try adjusting your criteria.</p>
      )}
    </>
  );
}
