/*
 * Replace with licensed/owned property photography before launch.
 */
"use client";

import Link from "next/link";
import { Area } from "@/lib/types";
import { SafeImage } from "./SafeImage";

interface AreaCardProps {
  area: Area;
}

export function AreaCard({ area }: AreaCardProps) {
  return (
    <Link
      href={`/areas#${area.slug}`}
      className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <SafeImage
          src={area.image}
          alt={`${area.name} community in Dubai — residential area`}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral-dark">{area.shortName}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{area.description}</p>
      </div>
    </Link>
  );
}
