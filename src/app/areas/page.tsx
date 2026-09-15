/*
 * Replace with licensed/owned property photography before launch.
 */
import { Metadata } from "next";
import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { areas } from "@/data/areas";

export const metadata: Metadata = createMetadata({
  title: "Areas We Cover | Dubai Communities Guide",
  description:
    "Explore Dubai communities served by Casa Bait — JVT, JVC, Al Furjan, IMPZ, Motor City & Dubailand. Area guides, lifestyle info & property insights.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Areas", url: "/areas" },
        ])}
      />

      <section className="bg-primary py-16 text-white lg:py-24">
        <div className="container-custom px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Areas We Cover</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Deep local expertise across Dubai&apos;s fastest-growing residential communities.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-16">
          {areas.map((area, index) => (
            <AnimatedSection key={area.slug} delay={index * 0.05}>
              <article id={area.slug} className="scroll-mt-24">
                <div className={`grid gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                  <div className={`relative aspect-[16/10] overflow-hidden rounded-lg ${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                    <SafeImage
                      src={area.image}
                      alt={`${area.name} residential community in Dubai`}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <h2 className="text-2xl font-bold text-neutral-dark lg:text-3xl">{area.name}</h2>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {area.highlights.map((h) => (
                        <span key={h} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-gray-600 leading-relaxed">{area.longDescription}</p>
                    <div className="mt-6 flex gap-4">
                      {/* <Link href={`/properties?area=${area.slug}`} className="btn-primary text-sm">
                        View Properties
                      </Link> */}
                      <Link href="/contact" className="btn-secondary text-sm">
                        Speak to a Consultant
                      </Link>
                    </div>
                  </div>
                </div>
                {index < areas.length - 1 && <hr className="mt-16 border-gray-200" />}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-padding bg-neutral-light">
        <div className="container-custom text-center">
          <SectionHeading title="Not Sure Which Area Suits You?" subtitle="Our consultants can help you find the perfect community based on your lifestyle and budget." />
          <Link href="/contact" className="btn-primary">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
