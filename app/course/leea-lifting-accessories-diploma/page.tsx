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
  title: "LEEA Lifting Accessories Diploma (LAC) in the UAE",
  description:
    "LEEA Lifting Accessories Diploma (LAC) for inspectors and competent persons, delivered by the first LEEA Licensed Training Partner in the UAE.",
  path: "/course/leea-lifting-accessories-diploma",
});

const highlights = [
  "LEEA Licensed Training Partner (LTP) in the UAE",
  "Internationally recognised certification (valid for 5 years)",
  "Practical + theoretical training by industry experts",
  "Designed for high-risk industries: oil & gas, construction, offshore",
];

const announcements = [
  "Arbrit Safety signs official contract with LEEA",
  "First LEEA Licensed Training Partner (LTP) in UAE",
  "Delivering LEEA Lifting Accessories Diploma (LAC)",
];

export default function LeeaLiftingAccessoriesDiplomaPage() {
  return (
    <>
      <LeeaHero
        title="LEEA Lifting Accessories Diploma (LAC) Training in UAE"
        lead="Train with a LEEA-approved provider in the UAE and earn a globally recognised certification in lifting accessories inspection."
        highlights={highlights}
      />
      <LeeaAnnouncementTicker items={announcements} />
      <LeeaCourseOverview course="lac" />
      <LeeaCompetenceExcellence />
      <LeeaTrainingRoadmap course="lac" />
      {/* Assessment and certification are one section on this page. */}
      <LeeaCertification course="lac" />
      <LeeaWhyArbrit />
      <LeeaGlobalTrust course="lac" />
      <LeeaHandsOnExperience />
      <LeeaGlobalStandards />
      <LeeaFaq course="lac" />
      <LeeaEnrollToday />
    </>
  );
}
