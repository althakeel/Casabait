import { AnimatedSection } from "@/components/AnimatedSection";
import { Icon } from "@/components/Icon";

const advantages = [
  {
    icon: "map-pin",
    title: "Deep Local Knowledge",
    description:
      "Expert insight across Dubai's fastest-growing communities including JVT, JVC, and Al Furjan.",
  },
  {
    icon: "search",
    title: "Geolocation Search",
    description:
      "Our mapping approach helps you pinpoint the ideal home based on lifestyle and connectivity.",
  },
  {
    icon: "message-circle",
    title: "Direct Communication",
    description:
      "Deal with knowledgeable consultants who provide transparent, personalised guidance — not just listings.",
  },
  {
    icon: "shield",
    title: "RERA Registered",
    description: "Fully compliant and registered with RERA (ORN 36486) for your peace of mind.",
  },
  {
    icon: "wrench",
    title: "End-to-End Support",
    description:
      "From search and viewings to negotiation, paperwork, and post-sale guidance.",
  },
  {
    icon: "trending-up",
    title: "Investment Advisory",
    description:
      "Data-driven ROI analysis and market trends to help investors make informed decisions.",
  },
];

export function WhyCasaBaitSection() {
  return (
    <section className="bg-[#f7f6f3] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="block h-[1px] w-16 bg-gray-300 sm:w-24" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">
              Our Advantages
            </span>
            <span className="block h-[1px] w-16 bg-gray-300 sm:w-24" />
          </div>
          <h2 className="text-3xl font-bold text-[#1a1a1a] sm:text-4xl lg:text-[42px] lg:leading-tight">
            Why Casa Bait
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            A dynamic, forward-thinking real estate agency dedicated to your success in
            Dubai&apos;s property market.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08} className="h-full">
              <article className="flex h-full min-h-[140px] gap-5 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.07)] sm:p-7">
                <div
                  data-icon-slot={item.icon}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10"
                  aria-hidden="true"
                >
                  <Icon name={item.icon} size={26} />
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
