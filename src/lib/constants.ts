export const SITE_NAME = "Casa Bait Property Consultant";
export const SITE_SHORT_NAME = "Casa Bait Real Estate";
export const SITE_URL = "https://www.casabait.ae";
export const RERA_ORN = "36486";
export const PHONE = "+971549942554";
export const PHONE_LINK = "tel:+971549942554";
export const EMAIL = "info@casabait.ae";
export const WHATSAPP_LINK = "https://wa.me/971549942554";
export const ADDRESS = {
  street: "Al Saqr Business Tower - Second Floor - Sheikh Zayed Rd - DIFC",
  city: "Dubai",
  country: "United Arab Emirates",
  postalCode: "",
};

/** Full address string used for map search and directions */
export const MAP_ADDRESS = `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.country}`;

/** Google Maps iframe embed — no API key required for this embed format */
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_ADDRESS)}&z=15&output=embed`;

/** Direct link to open location in Google Maps app / browser */
export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_ADDRESS)}`;

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/casabait",
  instagram: "https://instagram.com/casabait",
  linkedin: "https://linkedin.com/company/casabait",
  youtube: "https://youtube.com/@casabait",
  tiktok: "https://tiktok.com/@casabait",
  pinterest: "https://pinterest.com/casabait",
  twitter: "https://x.com/casabait",
  whatsapp: WHATSAPP_LINK,
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/off-plan", label: "Off-Plan" },
  { href: "/areas", label: "Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const BUSINESS_HOURS = [
  { day: "Sunday – Thursday", hours: "9:30 AM – 7:00 PM" },
  { day: "Friday - Saturday", hours: "Closed" },
];
