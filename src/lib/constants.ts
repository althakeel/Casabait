export const SITE_NAME = "Casa Bait Property Consultant";
export const SITE_SHORT_NAME = "Casa Bait Real Estate";
export const SITE_URL = "https://www.casabait.ae";
export const RERA_ORN = "36486";
export const PHONE = "+971549942554";
export const PHONE_LINK = "tel:+971549942554";
export const EMAIL = "info@casabait.com";
export const WHATSAPP_LINK = "https://wa.me/971503057267";
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
  facebook: "https://www.facebook.com/photo.php?fbid=122098802060647988&set=a.122098800314647988&type=3",
  instagram: "https://www.instagram.com/casabait.uae/",
  linkedin: "https://www.linkedin.com/in/casa-bait-87493a2b2",
  tiktok: "https://www.tiktok.com/@casabait4",
  whatsapp: WHATSAPP_LINK,
};

export const NAV_ROUTES = [
  { href: "/", navKey: "home" as const },
  { href: "/about", navKey: "about" as const },
  { href: "/services", navKey: "services" as const },
  { href: "/areas", navKey: "areas" as const },
  { href: "/blog", navKey: "blog" as const },
  { href: "/contact", navKey: "contact" as const },
];

/** @deprecated Use NAV_ROUTES with dictionary labels */
export const NAV_LINKS = NAV_ROUTES.map(({ href, navKey }) => ({
  href,
  label: navKey.charAt(0).toUpperCase() + navKey.slice(1),
}));

export const BUSINESS_HOURS = [
  { day: "Sunday – Thursday", hours: "9:30 AM – 7:00 PM" },
  { day: "Friday - Saturday", hours: "Closed" },
];
