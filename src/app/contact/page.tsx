import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/ContactForm";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { PHONE, PHONE_LINK, EMAIL, WHATSAPP_LINK, ADDRESS, BUSINESS_HOURS, MAP_DIRECTIONS_URL } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Contact Casa Bait | Dubai Property Consultant",
  description:
    "Contact Casa Bait Property Consultant for buying, selling, renting & investment advice in Dubai. Book a free consultation or send us a message today.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white lg:py-24">
        <div className="container-custom px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Get in touch with our team for personalised property advice across Dubai.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-neutral-dark">Send Us a Message</h2>
              <p className="mt-2 text-gray-600">Fill out the form and a consultant will respond within 24 hours.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-dark">Office Details</h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <div>
                  <h3 className="font-medium text-neutral-dark">Address</h3>
                  <p>{ADDRESS.street}</p>
                  <p>{ADDRESS.city}, {ADDRESS.country}</p>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-dark">Phone</h3>
                  <a href={PHONE_LINK} className="text-primary hover:underline">{PHONE}</a>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-dark">Email</h3>
                  <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-dark">Business Hours</h3>
                  <ul className="mt-1 space-y-1">
                    {BUSINESS_HOURS.map((bh) => (
                      <li key={bh.day} className="text-sm">
                        <span className="font-medium">{bh.day}:</span> {bh.hours}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex mt-4"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-8">
                <h3 className="font-medium text-neutral-dark">Find Us</h3>
                <div className="mt-3">
                  <GoogleMapEmbed title="Casa Bait Property Consultant office — Al Saqr Business Tower, DIFC, Dubai" />
                </div>
                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Get directions on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
