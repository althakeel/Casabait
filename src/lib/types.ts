export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  priceLabel: string;
  type: "sale" | "rent";
  propertyType: "apartment" | "villa" | "townhouse" | "studio" | "penthouse";
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  area: string;
  areaSlug: string;
  image: string;
  images: string[];
  amenities: string[];
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export interface Area {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
}

export interface OffPlanProject {
  id: string;
  slug: string;
  name: string;
  developer: string;
  area: string;
  areaSlug: string;
  startingPrice: number;
  handover: string;
  paymentPlan: string;
  description: string;
  image: string;
  amenities: string[];
}

export interface TeamMember {
  name: string;
  title: string;
  initials: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
