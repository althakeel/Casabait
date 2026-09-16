/*
 * Replace with licensed/owned property photography before launch.
 */
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { offPlanProjects } from "@/data/off-plan";
import { isLocale } from "@/i18n/config";
import { getLocaleParam } from "@/i18n/params";
import { localePath } from "@/i18n/navigation";

interface Props {
  params: { locale: string };
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  return createMetadata({
    title: "Dubai Off-Plan Properties | Investment Projects",
    description:
      "Explore Dubai off-plan property investment opportunities with flexible payment plans, early-buyer pricing & strong ROI potential. Casa Bait off-plan advisory.",
    path: "/off-plan",
    locale: params.locale,
  });
}

const benefits = [
  { title: "Flexible Payment Plans", description: "Spread your investment across construction milestones with developer payment plans." },
  { title: "Early-Buyer Pricing", description: "Secure properties at launch prices before market appreciation at handover." },
  { title: "ROI Potential", description: "Capital appreciation during construction plus strong rental demand post-handover." },
  { title: "RERA Protection", description: "All payments held in escrow accounts regulated by RERA for buyer security." },
];

export default function OffPlanPage({ params }: Props) {
  const locale = getLocaleParam(params.locale);
  return (
    <>
      <section className="bg-primary py-16 text-white lg:py-24">
        <div className="container-custom px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Dubai Off-Plan Properties</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Invest in Dubai&apos;s future with curated off-plan projects offering payment plans, early-buyer pricing, and strong ROI potential.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold text-neutral-dark">Why Invest Off-Plan?</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Off-plan property investment in Dubai offers a unique entry point into the market. With construction-linked payment plans, buyers can secure premium properties at launch prices and benefit from capital appreciation before handover. Casa Bait&apos;s off-plan advisory team vets every developer and project, ensuring RERA compliance and escrow protection.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-primary">{b.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <SectionHeading title="Featured Off-Plan Projects" subtitle="Curated developments across Dubai's key growth corridors." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offPlanProjects.map((project) => (
              <AnimatedSection key={project.id}>
                <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.image}
                      alt={`${project.name} off-plan project in ${project.area}, Dubai`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-neutral-dark">{project.name}</h3>
                    <p className="text-sm text-gray-500">{project.developer} · {project.area}</p>
                    <p className="mt-2 text-lg font-semibold text-primary">
                      From AED {project.startingPrice.toLocaleString()}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">Handover: {project.handover}</p>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{project.description}</p>
                    <p className="mt-2 text-xs text-gray-500">{project.paymentPlan}</p>
                    <Link href={localePath(locale, "/contact")} className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-md border border-primary text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white">
                      Enquire Now
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-neutral-dark">Ready to Invest Off-Plan?</h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-dark/80">
            Speak to our off-plan specialists for personalised project recommendations and payment plan analysis.
          </p>
          <Link href={localePath(locale, "/contact")} className="btn-primary mt-8 inline-flex">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
