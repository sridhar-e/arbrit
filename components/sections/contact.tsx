import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { contactInfo } from "@/lib/data";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.005021211739!2d55.369079374853165!3d25.27041652873225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4359aaf3fcb3%3A0xd79a9fbb46a30a3d!2sArbrit%20Safety%20Training%20and%20Consultancy!5e0!3m2!1sen!2sin!4v1785752871035!5m2!1sen!2sin";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-muted py-14 sm:py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%230066b2' stroke-width='1.5'%3E%3Cpath d='M40 4 L74 22 V58 L40 76 L6 58 V22 Z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading variant="home"
          title={
            <>
              {/* Short, direct heading on small screens; the fuller pitch once there is room. */}
              <span className="lg:hidden">Contact Arbrit Safety</span>
              <span className="hidden lg:inline">Join the Community of HSE Professionals</span>
            </>
          }
          description="Send us your details and our team will get back to you with course and scheduling options."
        />

        {/*
          Small screens read straight down: offices & email → enquiry form → map & address.
          From `lg` the explicit row/column placement restores the original two-column layout
          (form on the left spanning both rows, details above the map on the right).
        */}
        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-6">
          <div className="rounded-3xl border border-navy/10 bg-white p-5 shadow-sm sm:p-8 lg:col-start-2 lg:row-start-1">
            <div className="grid gap-3 sm:grid-cols-3">
              {contactInfo.phones.map((phone) => (
                <a
                  key={phone.label}
                  href={`tel:${phone.number.replace(/\s+/g, "")}`}
                  className="group flex items-center gap-3 rounded-2xl border border-navy/10 bg-muted p-4 transition duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-md sm:flex-col sm:items-start sm:gap-2"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2] transition duration-300 group-hover:bg-[#0066b2] group-hover:text-white">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {/* `sm:contents` unwraps this on wider screens so the stacked card layout is unchanged. */}
                  <span className="min-w-0 sm:contents">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-navy-deep/75">
                      {phone.label}
                    </span>
                    <span className="block text-sm font-semibold text-[#000] group-hover:text-orange">
                      {phone.number}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-5 border-t border-navy/10 pt-5 sm:mt-6 sm:pt-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-3 text-sm text-[#000] hover:text-orange"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange transition duration-300 group-hover:bg-orange group-hover:text-white">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <ContactForm />
          </div>

          <div className="flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm lg:col-start-2 lg:row-start-2 lg:h-full">
            <div className="h-52 w-full shrink-0 bg-muted sm:h-64 lg:h-auto lg:min-h-[220px] lg:flex-1">
              <iframe
                src={MAP_EMBED}
                width="600"
                height="450"
                className="h-full w-full border-0"
                title="Arbrit Safety Training and Consultancy location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div className="flex items-start gap-3 border-t border-navy/10 p-5 text-sm text-[#000]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p>{contactInfo.address}</p>
                <p className="mt-1 text-navy-deep/75">{contactInfo.ksaEntity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
