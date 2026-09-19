import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { leeaDisplayHeading, leeaLead, leeaOutlinePill } from "@/components/sections/leea-styles";

type Faq = { question: string; answer: string };

const faqs: Record<"fou" | "lac", Faq[]> = {
  fou: [
    {
      question: "What is the training duration?",
      answer: "The course spans 3 days, including structured training sessions and practical learning.",
    },
    {
      question: "Is the exam online?",
      answer:
        "Yes, a 50-minute online examination is conducted through the LEEA Learning Management System (LMS). Results are usually available shortly after completion.",
    },
    {
      question: "What is the certificate validity?",
      answer:
        "The LEEA Foundation Certificate does not have a fixed validity period and serves as an entry-level qualification toward advanced LEEA certifications.",
    },
    {
      question: "Who should attend this course?",
      answer:
        "This course is ideal for beginners, entry-level workers, and professionals looking to build a basic understanding of lifting equipment, safety practices, and operations.",
    },
  ],
  lac: [
    {
      question: "What is the training duration?",
      answer:
        "The LEEA Lifting Accessories Diploma (LAC) course is conducted over 5 days, combining both theoretical learning and practical assessment.",
    },
    {
      question: "Is the exam online?",
      answer:
        "Yes, the LAC exam is conducted online via the LEEA Learning Management System (LMS). Candidates must pass this assessment to receive their diploma.",
    },
    {
      question: "What is the certificate validity?",
      answer: "The LEEA Lifting Accessories Diploma (LAC) is globally recognised and remains valid for 5 years.",
    },
    {
      question: "Who should attend this course?",
      answer:
        "This course is designed for inspectors, technicians, engineers, lifting supervisors, and safety professionals involved in the inspection, testing, and compliance of lifting accessories.",
    },
  ],
};

/** FAQ: heading beside an accessible accordion (Radix: buttons with aria-expanded, keyboard support). */
export function LeeaFaq({ course }: { course: "fou" | "lac" }) {
  return (
    <section aria-labelledby="leea-faq-heading" className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="leea-faq-heading" className={`${leeaDisplayHeading} text-navy-deep`}>
            Frequently asked questions
          </h2>
          <p className={`mt-5 max-w-md text-navy-deep/80 ${leeaLead}`}>
            Duration, the exam, certificate validity and who the course is for.
          </p>
          <a href="tel:+971586695300" className={`mt-8 ${leeaOutlinePill}`}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            Ask an advisor: +971 58 669 5300
          </a>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs[course].map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`} className="rounded-[20px] border-0 bg-white px-5 md:px-6">
              <AccordionTrigger className="min-h-14 items-center py-5 text-left font-heading text-[17px] font-bold text-navy-deep hover:no-underline **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-[#0066b2]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-navy-deep/80">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
