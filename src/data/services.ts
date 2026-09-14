import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "buying",
    title: "Buying Property",
    shortDescription: "Expert buyer representation with geolocation-based search across Dubai's top communities.",
    description:
      "Finding the right property in Dubai requires more than browsing listings — it demands local market knowledge, negotiation skill, and a consultant who understands your lifestyle and investment goals. Casa Bait's buying service combines a geolocation property-mapping approach with personalised advisory to help you pinpoint your ideal home quickly and confidently.",
    benefits: [
      "Geolocation-based property search tailored to your preferences",
      "Access to off-market and pre-market listings",
      "Expert negotiation to secure the best price",
      "End-to-end support from search to title deed transfer",
      "Mortgage pre-qualification guidance",
      "Post-purchase move-in and utility setup assistance",
    ],
    process: [
      { step: 1, title: "Consultation", description: "We discuss your requirements, budget, preferred areas, and timeline." },
      { step: 2, title: "Curated Search", description: "Our consultants shortlist properties matching your criteria using our mapping tools." },
      { step: 3, title: "Viewings", description: "We arrange and accompany you on property viewings at your convenience." },
      { step: 4, title: "Offer & Close", description: "We negotiate on your behalf and manage all paperwork through to transfer." },
    ],
    faqs: [
      { question: "What fees are involved when buying property in Dubai?", answer: "Buyers typically pay a 4% Dubai Land Department transfer fee, plus agency commission (usually 2%) and minor administrative costs. We provide a full cost breakdown before you commit." },
      { question: "Can non-residents buy property in Dubai?", answer: "Yes. Non-residents can purchase freehold property in designated areas across Dubai. We guide international buyers through the entire process remotely if needed." },
      { question: "How long does the buying process take?", answer: "For ready properties, the process typically takes 2–4 weeks from offer acceptance to title deed transfer. Off-plan purchases follow the developer's payment and handover schedule." },
    ],
  },
  {
    slug: "selling",
    title: "Selling Property",
    shortDescription: "Professional marketing, accurate valuation, and skilled negotiation to maximise your sale price.",
    description:
      "Selling your property in Dubai requires strategic pricing, professional marketing, and experienced negotiation. Casa Bait provides comprehensive seller representation — from accurate market valuation and targeted marketing campaigns to managing viewings, offers, and the transfer process.",
    benefits: [
      "Data-driven property valuation",
      "Professional photography and listing optimisation",
      "Targeted marketing across digital and offline channels",
      "Qualified buyer screening and viewing management",
      "Skilled negotiation to achieve top market price",
      "Full transfer and NOC coordination",
    ],
    process: [
      { step: 1, title: "Valuation", description: "We assess your property's market value using comparable sales and current demand data." },
      { step: 2, title: "Marketing", description: "Professional listing creation with photography, descriptions, and multi-channel promotion." },
      { step: 3, title: "Viewings & Offers", description: "We manage enquiries, conduct viewings, and present offers for your review." },
      { step: 4, title: "Transfer", description: "We coordinate NOC, DLD transfer, and final handover to the buyer." },
    ],
    faqs: [
      { question: "How do you determine my property's value?", answer: "We analyse recent comparable sales in your community, current market conditions, property condition, and unique features to recommend a competitive listing price." },
      { question: "What is the typical timeline for selling?", answer: "Well-priced properties in active communities typically sell within 30–90 days. We provide regular market feedback and pricing recommendations throughout the listing period." },
      { question: "What documents do I need to sell?", answer: "You'll need your title deed, passport copy, and NOC from the developer (if applicable). We guide you through all documentation requirements." },
    ],
  },
  {
    slug: "renting",
    title: "Renting & Leasing",
    shortDescription: "Tenant placement, lease management, and rental search services for landlords and renters alike.",
    description:
      "Whether you're searching for your next rental home or looking to lease your property to quality tenants, Casa Bait's leasing team delivers efficient, transparent service. We handle everything from tenant sourcing and Ejari registration to lease renewals and maintenance coordination.",
    benefits: [
      "Extensive rental inventory across key Dubai communities",
      "Tenant screening and background verification for landlords",
      "Ejari registration and compliance management",
      "Competitive rental pricing based on market data",
      "Lease renewal and rent review advisory",
      "Maintenance coordination during tenancy",
    ],
    process: [
      { step: 1, title: "Requirements", description: "We understand your rental needs — budget, area, property type, and move-in date." },
      { step: 2, title: "Shortlist", description: "Curated property options matching your criteria are presented for review." },
      { step: 3, title: "Viewings", description: "We arrange viewings and provide honest assessments of each property." },
      { step: 4, title: "Lease & Move-In", description: "We handle offer submission, lease signing, Ejari, and key handover." },
    ],
    faqs: [
      { question: "What is the standard lease term in Dubai?", answer: "Most residential leases in Dubai are for one year, though shorter terms may be available. Cheques are typically paid annually, semi-annually, or quarterly." },
      { question: "What costs should tenants expect?", answer: "Tenants typically pay the annual rent (via cheques), a security deposit (5% of annual rent), agency commission (5% of annual rent), and DEWA connection fees." },
      { question: "How do you find tenants for my property?", answer: "We market your property across our platform and partner channels, screen applicants, conduct viewings, and manage the leasing process through Ejari registration." },
    ],
  },
  {
    slug: "off-plan-investment",
    title: "Off-Plan Investment",
    shortDescription: "Curated off-plan project advisory with developer vetting and payment plan analysis.",
    description:
      "Off-plan property investment in Dubai offers unique advantages — flexible payment plans, early-buyer pricing, and the potential for capital appreciation before handover. Casa Bait's off-plan advisory service helps investors identify the right projects, verify developer credentials, and structure purchases for optimal returns.",
    benefits: [
      "Curated selection of vetted off-plan projects",
      "Developer track record and escrow verification",
      "Payment plan analysis and cash flow modelling",
      "Early-buyer pricing and incentive negotiation",
      "Handover support and snagging inspection coordination",
      "Post-handover rental setup and management",
    ],
    process: [
      { step: 1, title: "Investment Goals", description: "We define your budget, target ROI, preferred areas, and investment timeline." },
      { step: 2, title: "Project Selection", description: "We present vetted off-plan projects matching your criteria with full due diligence." },
      { step: 3, title: "Purchase", description: "We manage booking, SPA review, payment schedule, and Oqood registration." },
      { step: 4, title: "Handover", description: "We coordinate snagging, final payments, title deed transfer, and rental setup." },
    ],
    faqs: [
      { question: "Is off-plan property safe to buy in Dubai?", answer: "Yes, when purchased from RERA-registered developers with escrow-protected payments. We verify every developer and project before recommending it to clients." },
      { question: "Can I sell my off-plan property before handover?", answer: "In most cases, yes — after meeting the developer's minimum payment threshold (typically 30–40%). We advise on resale timing and pricing strategy." },
      { question: "What happens if the project is delayed?", answer: "RERA regulations provide buyer protections for delayed projects. We monitor construction progress and advise on your options if delays occur." },
    ],
  },
  {
    slug: "property-management",
    title: "Property Management",
    shortDescription: "Hands-off property management for landlords — maintenance, tenant relations, and compliance.",
    description:
      "Owning rental property in Dubai shouldn't mean constant oversight. Casa Bait's property management service handles the day-to-day responsibilities — from tenant communication and maintenance coordination to rent collection and regulatory compliance — so you can enjoy passive returns with peace of mind.",
    benefits: [
      "Tenant communication and issue resolution",
      "Scheduled and emergency maintenance coordination",
      "Rent collection and financial reporting",
      "Ejari renewal and regulatory compliance",
      "Regular property inspections and condition reports",
      "Vacancy marketing and tenant replacement",
    ],
    process: [
      { step: 1, title: "Onboarding", description: "We assess your property, review existing tenancy agreements, and set up management protocols." },
      { step: 2, title: "Active Management", description: "Ongoing tenant relations, maintenance, rent collection, and compliance monitoring." },
      { step: 3, title: "Reporting", description: "Regular financial and condition reports keep you informed of your property's performance." },
      { step: 4, title: "Renewal & Optimisation", description: "Lease renewals, rent reviews, and improvement recommendations to maximise returns." },
    ],
    faqs: [
      { question: "What does property management cost?", answer: "Management fees typically range from 5–8% of annual rental income, depending on the level of service. We provide transparent pricing during onboarding." },
      { question: "Can you manage furnished and unfurnished properties?", answer: "Yes. We manage both furnished and unfurnished properties, including inventory checks and furnishing coordination for furnished units." },
      { question: "How do you handle maintenance emergencies?", answer: "We maintain a network of vetted contractors and respond to emergencies promptly, keeping you informed throughout the resolution process." },
    ],
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    shortDescription: "Data-driven ROI analysis, market trends, and portfolio strategy for property investors.",
    description:
      "Smart property investment in Dubai requires more than intuition — it demands data, market insight, and a clear strategy. Casa Bait's investment advisory service provides ROI modelling, area comparisons, market trend analysis, and portfolio guidance tailored to your financial objectives and risk profile.",
    benefits: [
      "ROI and cash flow modelling for individual properties",
      "Area comparison reports across Dubai communities",
      "Market trend analysis and quarterly updates",
      "Portfolio diversification strategy",
      "Off-plan vs ready property analysis",
      "Exit strategy and resale timing advisory",
    ],
    process: [
      { step: 1, title: "Discovery", description: "We understand your investment capital, target returns, timeline, and risk tolerance." },
      { step: 2, title: "Analysis", description: "We model ROI scenarios across communities and property types relevant to your goals." },
      { step: 3, title: "Recommendation", description: "A tailored investment strategy with specific property or project recommendations." },
      { step: 4, title: "Execution & Review", description: "We support acquisition and provide ongoing portfolio performance reviews." },
    ],
    faqs: [
      { question: "What ROI can I expect from Dubai property?", answer: "Gross rental yields typically range from 5–8% depending on community and property type. Capital appreciation varies by market cycle and location. We provide realistic projections based on current data." },
      { question: "Should I invest in off-plan or ready property?", answer: "It depends on your timeline and risk profile. Off-plan offers payment flexibility and potential pre-handover gains; ready properties provide immediate rental income. We help you weigh both options." },
      { question: "Do you advise on commercial property?", answer: "Our primary focus is residential property across Dubai's key communities. We can refer commercial specialists for office and retail investments." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
