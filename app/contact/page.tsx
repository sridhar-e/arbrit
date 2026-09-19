import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ArrowDown, ArrowRight, Mail, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { pageHeaderImages } from "@/lib/page-images";
import { ContactPageForm } from "@/components/sections/contact-page-form";
import { OfficesContactBlock } from "@/components/sections/offices-contact-block";
import { NavyBandTexture } from "@/components/ui/navy-band-texture";
import { contactInfo } from "@/lib/data";

const whatsappHref = "https://wa.me/971586695300";
const dubaiMobile = contactInfo.phones[0].number;

const quickLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: dubaiMobile,
    href: whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    external: false,
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Contact Arbrit Safety | Training Centres in Dubai, Abu Dhabi & KSA",
  description:
    "Call, WhatsApp or email Arbrit Safety. Training centres in Dubai and Abu Dhabi, plus Arbrit Safety Training in Saudi Arabia. Ask us for course dates and fees.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        eyebrow="We'd Love to Hear From You"
        description="Get in touch with Arbrit Safety Training & Consultancy in Dubai, Abu Dhabi and the Kingdom of Saudi Arabia."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        {...pageHeaderImages.contact}
      />

      <section aria-labelledby="contact-offices-heading" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div>
              <h2
                id="contact-offices-heading"
                className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
              >
                Call, message or visit us
              </h2>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
                Reach our Dubai, Abu Dhabi, or Kingdom of Saudi Arabia office directly, or send us a message
                below.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:shrink-0">
              <a
                href="#contact-enquiry"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0066b2] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#00589a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
              >
                Send an enquiry <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[#0066b2] px-6 text-sm font-semibold text-[#0066b2] transition-colors hover:bg-[#0066b2]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="mt-10 md:mt-12">
            <OfficesContactBlock showMaps />
          </div>
        </div>
      </section>

      <section
        id="contact-enquiry"
        aria-labelledby="contact-enquiry-heading"
        className="relative isolate scroll-mt-24 overflow-hidden bg-navy-deep py-16 text-white md:py-24"
      >
        <NavyBandTexture gridAt="20% 40%" />
        {/* Phones read heading, form, then the quick links; from 1024px the form sits beside both. */}
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-16 lg:gap-y-8">
          <div className="lg:self-end">
            <h2
              id="contact-enquiry-heading"
              className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-balance"
            >
              Send us an enquiry
            </h2>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/85 md:text-lg">
              Tell us which course you are interested in and how to reach you. Ask us for course dates and fees,
              for yourself or for your team.
            </p>
          </div>

          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <ContactPageForm />
          </div>

          <ul className="grid max-w-lg gap-3 lg:self-start">
            {quickLinks.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex min-h-14 items-center gap-4 rounded-2xl bg-white/[0.07] px-4 py-3 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] text-white/75">{label}</span>
                    <span className="block break-all font-semibold tracking-wide">{value}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-white/75" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
