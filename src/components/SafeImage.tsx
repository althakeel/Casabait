"use client";

import { useState } from "react";
import Image from "next/image";
import { FALLBACK_IMAGE } from "@/lib/images";

interface SafeImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export function SafeImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className = "object-cover",
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      priority={priority}
      className={className}
      sizes={sizes}
      onError={() => setImgSrc(FALLBACK_IMAGE)}
    />
  );
}
