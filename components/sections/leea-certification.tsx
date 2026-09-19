import Image from "next/image";
import { ClipboardCheck, FileText } from "lucide-react";
import { leeaDisplayHeading, leeaLead } from "@/components/sections/leea-styles";

const certificationText = {
  fou: "Participants who successfully complete the course will receive a LEEA-Accredited Foundation Certificate, issued by the Lifting Equipment Engineers Association. This qualification serves as a pathway to advanced LEEA programmes and does not qualify participants to perform inspection or examination activities.",
  lac: "Participants who successfully demonstrate competence in both theoretical and practical assessments will receive the LEEA Lifting Accessories Diploma (LAC), a globally recognised qualification valid for 5 years. This programme supersedes the previous Lifting Equipment General (LEG) Advanced Programme and reflects current industry standards and best practices.",
};

/** LAC only: how the diploma is assessed. */
const lacAssessments = [
  {
    icon: FileText,
    title: "Written Examination",
    description: "Closed-book examination covering standards, legislation, inspection procedures, and safety practices.",
  },
  {
    icon: ClipboardCheck,
    title: "Practical Assessment",
    description: "Hands-on assessment involving thorough inspection, defect identification, and reporting accuracy.",
  },
];

/** Certification copy beside the LEEA mark; the LAC page adds its two assessments as hairline rows. */
export function LeeaCertification({ course }: { course: "fou" | "lac" }) {
  const isLac = course === "lac";

  return (
    <section aria-labelledby="leea-certification-heading" className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-16">
        <div>
          <h2 id="leea-certification-heading" className={`${leeaDisplayHeading} text-navy-deep`}>
            {isLac ? "Assessment & certification" : "Certification"}
          </h2>

          {isLac && (
            <ul className="mt-8 max-w-2xl divide-y divide-navy-deep/10 border-y border-navy-deep/10">
              {lacAssessments.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-4 py-5 md:gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg font-bold leading-snug text-navy-deep">{title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-navy-deep/80">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <p className={`max-w-2xl text-navy-deep/80 ${isLac ? "mt-8 text-base leading-relaxed" : `mt-5 ${leeaLead}`}`}>
            {certificationText[course]}
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 rounded-[20px] bg-white p-8 text-center shadow-[0_18px_40px_-28px_rgba(18,59,109,0.5)] md:p-10">
          <div className="relative h-28 w-24">
            <Image
              src="/LEEA-Logo-1.webp"
              alt="Lifting Equipment Engineers Association (LEEA) accreditation logo — Arbrit Safety is a LEEA Licensed Training Partner in the UAE"
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>
          <p className="max-w-xs font-heading text-lg font-bold leading-snug text-navy-deep">
            Arbrit – Authorised Provider of LEEA-Accredited Training in the UAE
          </p>
        </div>
      </div>
    </section>
  );
}
