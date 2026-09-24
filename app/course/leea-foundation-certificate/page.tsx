import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LeeaHero } from "@/components/sections/leea-hero";
import { LeeaAnnouncementTicker } from "@/components/sections/leea-announcement-ticker";
import { LeeaCourseOverview } from "@/components/sections/leea-course-overview";
import { LeeaCompetenceExcellence } from "@/components/sections/leea-competence-excellence";
import { LeeaTrainingRoadmap } from "@/components/sections/leea-training-roadmap";
import { LeeaCertification } from "@/components/sections/leea-certification";
import { LeeaWhyArbrit } from "@/components/sections/leea-why-arbrit";
import { LeeaGlobalTrust } from "@/components/sections/leea-global-trust";
import { LeeaHandsOnExperience } from "@/components/sections/leea-hands-on-experience";
import { LeeaGlobalStandards } from "@/components/sections/leea-global-standards";
import { LeeaFaq } from "@/components/sections/leea-faq";
import { LeeaEnrollToday } from "@/components/sections/leea-enroll-today";

export const metadata: Metadata = pageMetadata({
  title: "LEEA Foundation Certificate (FOU) Training in the UAE & Saudi Arabia",
  description:
    "LEEA Foundation Certificate (FOU) from the first LEEA Licensed Training Partner in the UAE and KSA. Globally recognised lifting certification in Dubai, Abu Dhabi and Saudi Arabia.",
  path: "/course/leea-foundation-certificate",
});

const highlights = [
  "LEEA Licensed Training Partner (LTP) in the UAE & Saudi Arabia",
  "Internationally recognised certification",
  "Practical + theoretical training by industry experts",
  "Designed for high-risk industries: oil & gas, construction",
];

const announcements = [
  "Arbrit Safety signs official contract with LEEA",
  "First LEEA Licensed Training Partner (LTP) in UAE & KSA",
  "Delivering LEEA Foundation Certificate (FOU)",
];

export default function LeeaFoundationCertificatePage() {
  return (
    <>
      <LeeaHero
        title="LEEA Foundation Certificate (FOU) Training in the UAE & Saudi Arabia"
        lead="Arbrit Safety is the first LEEA Licensed Training Partner (LTP) in the UAE and KSA. Get certified with globally recognised LEEA accreditation."
        highlights={highlights}
      />
      <LeeaAnnouncementTicker items={announcements} />
      <LeeaCourseOverview course="fou" />
      <LeeaCompetenceExcellence />
      <LeeaTrainingRoadmap course="fou" />
      <LeeaCertification course="fou" />
      <LeeaWhyArbrit />
      <LeeaGlobalTrust course="fou" />
      <LeeaHandsOnExperience />
      <LeeaGlobalStandards />
      <LeeaFaq course="fou" />
      <LeeaEnrollToday />
    </>
  );
}
