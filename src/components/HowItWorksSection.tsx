import { Fragment } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Icon } from "@/components/Icon";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const steps = [
  {
    step: 1,
    icon: "users",
    title: "Consult",
    description:
      "Share your requirements, budget, and timeline with our expert consultants.",
  },
  {
    step: 2,
    icon: "search",
    title: "Search",
    description:
      "We curate properties matching your criteria using our geolocation tools.",
  },
  {
    step: 3,
    icon: "home",
    title: "Visit",
    description:
      "View shortlisted properties at your convenience with guided tours.",
  },
  {
    step: 4,
    icon: "file-text",
    title: "Close",
    description:
      "We negotiate, manage paperwork, and support you through to completion.",
  },
];

function StepConnector() {
  return (
    <div
      className="hidden shrink-0 items-center justify-center lg:flex"
      aria-hidden="true"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-secondary/70 bg-primary/60 shadow-[0_0_12px_rgba(201,162,75,0.25)]">
        <Icon name="chevron-right" size={16} className="how-it-works-icon" />
      </div>
    </div>
  );
}

function ProcessCard({
  step,
  icon,
  title,
  description,
}: (typeof steps)[number]) {
  return (
    <article className="relative flex min-h-[300px] flex-1 flex-col rounded-2xl border border-secondary/60 bg-primary/75 px-5 pb-6 pt-8 shadow-[0_0_24px_rgba(201,162,75,0.12)] backdrop-blur-sm sm:min-h-[320px] sm:px-6">
      {/* Step number badge */}
      <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-neutral-dark">
        {step}
      </span>

      {/* Icon */}
      <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-secondary/80 shadow-[0_0_16px_rgba(201,162,75,0.2)]">
        <Icon name={icon} size={30} className="how-it-works-icon" />
      </div>

      {/* Title */}
      <h3
        className={`${playfair.className} mt-6 text-center text-2xl font-semibold text-white sm:text-[26px]`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-[220px] flex-1 text-center text-sm leading-relaxed text-gray-300">
        {description}
      </p>

      {/* Bottom gold line */}
      <div className="mx-auto mt-6 h-px w-16 bg-secondary/80" aria-hidden="true" />
    </article>
  );
}

export function HowItWorksSection() {
  return (
    <section className="how-it-works-section relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Background image */}
      <Image
        src="/how-it-works-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-5 flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-10 bg-secondary/70 sm:w-16" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-secondary sm:text-xs">
              Your Journey, Our Expertise
            </span>
            <span className="h-px w-10 bg-secondary/70 sm:w-16" aria-hidden="true" />
          </div>
          <h2
            className={`${playfair.className} text-3xl font-semibold text-white sm:text-4xl lg:text-5xl`}
          >
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
            A simple, transparent process from first consultation to keys in hand.
          </p>
        </div>

        {/* Process cards with connectors */}
        <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-2 xl:gap-3">
          {steps.map((item, index) => (
            <Fragment key={item.step}>
              <div className="w-full lg:max-w-[240px] lg:flex-1 xl:max-w-[260px]">
                <ProcessCard {...item} />
              </div>
              {index < steps.length - 1 && <StepConnector />}
            </Fragment>
          ))}
        </div>

        {/* Footer tagline */}
        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary sm:text-xs">
            More Than Properties
          </span>
          <span className="hidden h-px w-24 bg-secondary/50 sm:block lg:w-40" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary sm:text-xs">
            A Brighter Tomorrow
          </span>
        </div>
      </div>
    </section>
  );
}
