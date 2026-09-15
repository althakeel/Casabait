import { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { InitialsAvatar } from "@/components/InitialsAvatar";
import { AnimatedSection } from "@/components/AnimatedSection";
import { teamMembers } from "@/data/team";
import { RERA_ORN } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "About Casa Bait | Dubai Real Estate Agency",
  description:
    "Learn about Casa Bait Property Consultant — a RERA-registered Dubai real estate agency offering personalised property services across JVT, JVC, Al Furjan & more.",
  path: "/about",
});

const values = [
  { title: "Integrity", description: "Transparent communication and honest advice in every client interaction." },
  { title: "Expertise", description: "Deep local market knowledge backed by data-driven insights and experience." },
  { title: "Personalisation", description: "Tailored solutions that match your unique lifestyle, budget, and goals." },
  { title: "Excellence", description: "Commitment to delivering exceptional service from first consultation to completion." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white lg:py-24">
        <div className="container-custom px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">About Casa Bait</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            A dynamic, forward-thinking real estate agency dedicated to providing exceptional, personalised property services across Dubai.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold text-neutral-dark">Our Story</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Casa Bait Property Consultant was founded with a clear vision: to redefine the property experience in Dubai through personalised service, deep local knowledge, and transparent communication. We believe that finding the right property whether to live in or invest in should be an empowering journey, not an overwhelming one.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Operating across Dubai&apos;s most dynamic communities including Jumeirah Village Triangle, Jumeirah Village Circle, Al Furjan, Dubai Production City, Motor City, and Dubailand, our team of experienced consultants brings together market expertise and a genuine commitment to client success.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-neutral-dark">Our Mission</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            To provide exceptional, end-to-end property services that help buyers, sellers, tenants, landlords, and investors achieve their goals with confidence backed by RERA compliance, data-driven advisory, and a geolocation-based approach to property search.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <SectionHeading title="Our Values" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <AnimatedSection key={value.title}>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-primary">{value.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Meet the Team" subtitle="Experienced consultants dedicated to your property success." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <AnimatedSection key={member.name}>
                <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <InitialsAvatar initials={member.initials} size="lg" />
                  <h3 className="mt-4 font-semibold text-neutral-dark">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-light">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-neutral-dark">RERA Registered & Compliant</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Casa Bait Property Consultant is registered with the Real Estate Regulatory Agency (RERA) under ORN {RERA_ORN}, ensuring full compliance with Dubai&apos;s real estate regulations.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
