/*
 * Replace with licensed/owned property photography before launch.
 */
import Image from "next/image";
import Link from "next/link";
import { PropertySearchBar } from "@/components/PropertySearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { AreaCard } from "@/components/AreaCard";
import { SectionHeading } from "@/components/SectionHeading";
import { IconSlot } from "@/components/Icon";
import { AnimatedSection } from "@/components/AnimatedSection";
import { JsonLd } from "@/components/JsonLd";
import { realEstateAgentSchema } from "@/lib/seo";
import { getFeaturedProperties } from "@/data/properties";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { STOCK_IMAGES } from "@/lib/images";

const valueProps = [
  { icon: "map-pin", title: "Deep Local Knowledge", description: "Expert insight across Dubai's fastest-growing communities including JVT, JVC, and Al Furjan." },
  { icon: "search", title: "Geolocation Search", description: "Our mapping approach helps you pinpoint the ideal home based on lifestyle and connectivity." },
  { icon: "handshake", title: "Direct Communication", description: "Deal with knowledgeable consultants who provide transparent, personalised guidance — not just listings." },
  { icon: "shield", title: "RERA Registered", description: "Fully compliant and registered with RERA (ORN 36486) for your peace of mind." },
  { icon: "key", title: "End-to-End Support", description: "From search and viewings to negotiation, paperwork, and post-sale guidance." },
  { icon: "trending-up", title: "Investment Advisory", description: "Data-driven ROI analysis and market trends to help investors make informed decisions." },
];

const processSteps = [
  { step: 1, title: "Consult", description: "Share your requirements, budget, and timeline with our expert consultants." },
  { step: 2, title: "Search", description: "We curate properties matching your criteria using our geolocation tools." },
  { step: 3, title: "Visit", description: "View shortlisted properties at your convenience with guided tours." },
  { step: 4, title: "Close", description: "We negotiate, manage paperwork, and support you through to completion." },
];

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      <JsonLd data={realEstateAgentSchema()} />

      {/* Hero */}
      <section className="relative flex min-h-[600px] items-center justify-center text-white lg:min-h-[700px]">
        <Image
          src={STOCK_IMAGES.heroSkyline}
          alt="Dubai skyline at dusk — Casa Bait Property Consultant"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 container-custom px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Your Trusted Dubai Property Consultant
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-200 sm:text-lg lg:text-xl">
            Exceptional, personalised property services for buyers, sellers, tenants, landlords, and investors across Dubai&apos;s top communities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* <Link href="/properties" className="btn-accent min-w-[200px]">
              Browse Properties
            </Link> */}
            <Link href="/contact" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-primary min-w-[200px]">
              Book a Free Consultation
            </Link>
          </div>
          {/* <PropertySearchBar /> */}
        </div>
      </section>

      {/* Why Casa Bait */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <SectionHeading
            title="Why Casa Bait"
            subtitle="A dynamic, forward-thinking real estate agency dedicated to your success in Dubai's property market."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((prop, i) => (
              <AnimatedSection key={prop.title} delay={i * 0.1}>
                <div className="flex gap-4 rounded-lg bg-white p-6 shadow-sm">
                  <IconSlot name={prop.icon} />
                  <div>
                    <h3 className="font-semibold text-neutral-dark">{prop.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{prop.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      {/* <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Featured Properties" subtitle="Handpicked listings across Dubai's most sought-after communities." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.slice(0, 6).map((property) => (
              <AnimatedSection key={property.id}>
                <PropertyCard property={property} />
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/properties" className="btn-primary">
              View All Properties
            </Link>
          </div>
        </div>
      </section> */}

      {/* Areas We Cover */}
      {/* <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <SectionHeading title="Areas We Cover" subtitle="Deep expertise across Dubai's fastest-growing residential communities." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <AnimatedSection key={area.slug}>
                <AreaCard area={area} />
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/areas" className="btn-secondary">
              Explore All Areas
            </Link>
          </div>
        </div>
      </section> */}

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Our Services" subtitle="Comprehensive property services tailored to your needs." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <AnimatedSection key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-neutral-dark">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{service.shortDescription}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-primary">Learn more →</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <SectionHeading
            light
            title="How It Works"
            subtitle="A simple, transparent process from first consultation to keys in hand."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <AnimatedSection key={step.step}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-xl font-bold text-neutral-dark">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="What Our Clients Say" subtitle="Trusted by buyers, sellers, tenants, and investors across Dubai." />
          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <AnimatedSection key={t.name} className="h-full">
                <blockquote className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="flex-1 text-sm italic text-gray-600">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 border-t border-gray-100 pt-4">
                    <p className="font-medium text-neutral-dark">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </footer>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-neutral-dark sm:text-3xl">Get a Free Property Valuation</h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-dark/80">
            Speak to a Casa Bait consultant today and discover what your property is worth in today&apos;s Dubai market.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Speak to a Consultant
            </Link>
            {/* <Link href="/properties" className="btn-secondary">
              Browse Properties
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
}
