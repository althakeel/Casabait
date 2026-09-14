import { MAP_EMBED_URL } from "@/lib/constants";

function buildEmbedUrl(query: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`;
}

interface GoogleMapEmbedProps {
  query?: string;
  title?: string;
  className?: string;
}

export function GoogleMapEmbed({
  query,
  title = "Location on Google Maps",
  className = "h-64 w-full",
}: GoogleMapEmbedProps) {
  const src = query ? buildEmbedUrl(query) : MAP_EMBED_URL;

  return (
    <div className={`overflow-hidden rounded-lg border border-gray-200 ${className}`}>
      <iframe
        src={src}
        title={title}
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
