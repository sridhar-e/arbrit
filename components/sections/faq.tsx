import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { contactInfo, faqs as siteFaqs, type Faq as FaqItem } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Site FAQs by default; course pages pass their own questions, a lead line and the Mist tone. */
export function Faq({
  items = siteFaqs,
  description = "Accreditation, certificate validity, group bookings and where we train.",
  tone = "white",
}: {
  items?: FaqItem[];
  description?: string;
  tone?: "white" | "mist";
} = {}) {
  return (
    <section aria-labelledby="faq-heading" className={`${tone === "mist" ? "bg-[#f5f7fa]" : "bg-white"} py-16 md:py-24`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2
            id="faq-heading"
            className="font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-deep text-balance"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-navy-deep/80 md:text-lg">
            {description}
          </p>

          <div className="mt-8 hidden rounded-[20px] bg-navy-deep p-6 text-white lg:block">
            <p className="font-heading text-xl font-extrabold tracking-[-0.01em]">Still have a question?</p>
            <p className="mt-1 text-[15px] text-white/75">Talk to an advisor at your nearest office.</p>
            <ul className="mt-5 space-y-2">
              {contactInfo.phones.map((phone) => (
                <li key={phone.label}>
                  <a
                    href={`tel:${phone.number.replace(/\s+/g, "")}`}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span className="flex items-center gap-2 text-sm text-white/75">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {phone.label}
                    </span>
                    <span className="font-semibold">{phone.number}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-navy-deep transition-colors hover:bg-[#f5f7fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Send an enquiry <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`item-${i}`}
              className={`rounded-[20px] border-0 px-6 ${tone === "mist" ? "bg-white" : "bg-[#f5f7fa]"}`}
            >
              <AccordionTrigger className="py-5 text-left font-heading text-[17px] font-bold text-navy-deep hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-navy-deep/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
