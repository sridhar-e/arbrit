import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/sections/home-hero";
import { TrainingDay } from "@/components/sections/training-day";
import { GeneralSafetyCourses, InternationalCourses } from "@/components/sections/home-courses";
import { AccreditationCarousel } from "@/components/sections/accreditation-carousel";
import { CorporateTraining } from "@/components/sections/corporate-training";
import { AboutUs } from "@/components/sections/about-us";
import { Testimonials } from "@/components/sections/testimonials";
import { LatestBlogs } from "@/components/sections/latest-blogs";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { contactInfo, socialLinks } from "@/lib/data";
import { trainers } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Arbrit Safety Training & Consultancy | HSE Courses in Dubai, Abu Dhabi & KSA",
  absoluteTitle: true,
  description:
    "Accredited HSE training in Dubai, Abu Dhabi & KSA: LEEA lifting, IOSH, STI scaffolding, rope access, fire safety and first aid. First LEEA Licensed Training Partner.",
  path: "/",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Arbrit Safety Training & Consultancy LLC",
  url: siteUrl,
  logo: `${siteUrl}/arbritsafety-logo.png`,
  description:
    "Accredited health & safety, lifting, scaffolding and fire safety training in Dubai, Abu Dhabi and KSA.",
  areaServed: ["Dubai", "Abu Dhabi", "Saudi Arabia"],
  email: contactInfo.email,
  telephone: contactInfo.phones[0].number,
  address: {
    "@type": "PostalAddress",
    streetAddress: contactInfo.address,
    addressCountry: "AE",
  },
  sameAs: socialLinks.map((link) => link.href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero />
      <TrainingDay />
      <InternationalCourses />
      <GeneralSafetyCourses />
      <AccreditationCarousel />
      <CorporateTraining />
      <AboutUs trainers={trainers.map(({ slug, name, credentials, image }) => ({ slug, name, credentials, image }))} />
      <Testimonials />
      <LatestBlogs />
      <Faq />
      <Contact />
    </>
  );
}
