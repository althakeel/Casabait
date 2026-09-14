import { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Icon } from "@/components/Icon";
import { services } from "@/data/services";

export const metadata: Metadata = createMetadata({
  title: "Property Services Dubai | Buy, Sell, Rent & Invest",
  description:
    "Casa Bait offers buying, selling, renting, off-plan investment, property management & investment advisory services across Dubai. RERA ORN 36486.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />

      <section className="bg-primary py-16 text-white lg:py-24">
        <div className="container-custom px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Comprehensive property services for buyers, sellers, tenants, landlords, and investors across Dubai.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-20">
          {services.map((service, index) => (
            <AnimatedSection key={service.slug} delay={index * 0.05}>
              <article id={service.slug} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-neutral-dark lg:text-3xl">{service.title}</h2>
                <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">{service.description}</p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark">Benefits</h3>
                    <ul className="mt-3 space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                          <Icon name="check" size={18} className="mt-0.5 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark">Our Process</h3>
                    <ol className="mt-3 space-y-3">
                      {service.process.map((step) => (
                        <li key={step.step} className="flex gap-3 text-sm">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                            {step.step}
                          </span>
                          <div>
                            <p className="font-medium text-neutral-dark">{step.title}</p>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-neutral-dark">Frequently Asked Questions</h3>
                  <div className="mt-3">
                    <FAQAccordion faqs={service.faqs} />
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">
                    Get Started with {service.title}
                  </Link>
                </div>

                {index < services.length - 1 && <hr className="mt-20 border-gray-200" />}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <SectionHeading title="Ready to Get Started?" subtitle="Speak to a Casa Bait consultant about your property needs." />
          <Link href="/contact" className="btn-primary">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
