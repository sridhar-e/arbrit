import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import {
  Anchor,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  Layers,
  Flame,
  HeartPulse,
  Award,
  HardHat,
  Forklift,
  Landmark,
  Car,
  Factory,
  UtensilsCrossed,
  Presentation,
  Building2,
  Fuel,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  WhatsappIcon,
  XIcon,
} from "@/components/icons/social-icons";

export type NavLink = {
  label: string;
  href: string;
};

export type MegaMenuGroup = {
  title: string;
  links: NavLink[];
};

export type CourseCategory = {
  slug: string;
  title: string;
  icon: LucideIcon;
  image: string;
  href: string;
  /** One-line summary of what the course covers, shown on the course card. */
  description?: string;
  duration?: string;
  location?: string;
  certification?: string;
};

export type Course = {
  slug: string;
  title: string;
  category: "International" | "General Safety";
  duration?: string;
  level: string;
  icon: LucideIcon;
  image: string;
  href: string;
  location?: string;
  certification?: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export type Accreditation = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type VideoTestimonial = {
  name: string;
  role: string;
  company?: string;
  /** Portrait photo. Falls back to an initials avatar when omitted. */
  photo?: string;
  /** Poster frame. Falls back to the first frame of the video when omitted. */
  thumbnail?: string;
  /** Local file under /public, e.g. "/testimonials/ravi.mp4". Use this OR youtubeId. */
  videoSrc?: string;
  /** YouTube video id, e.g. "dQw4w9WgXcQ". Use this OR videoSrc. */
  youtubeId?: string;
  /** Shown on the thumbnail, e.g. "0:45". Keep clips under ~60s. */
  duration?: string;
  headline?: string;
};

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  bulletList?: string[];
};

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  href: string;
  image: string;
  imageWide: string;
  /** Describes what the cover photo actually shows, rather than repeating the headline. */
  imageAlt?: string;
  content?: BlogSection[];
};

export type ClientLogo = {
  src: string;
  alt: string;
};

export type CourseSection = {
  heading: string;
  intro?: string;
  items?: string[];
  outro?: string;
};

export type CourseDetail = {
  slug: string;
  title: string;
  /** International (externally accredited) or General Safety (Arbrit certificate). */
  track?: "International" | "General Safety";
  /** Slug of the course this one sits under (e.g. IOSH Managing Safely under IOSH), for breadcrumbs. */
  parent?: string;
  /** Short headline that opens the overview, in place of "About this course". */
  tagline?: string;
  /** Duration / accreditation / audience facts for single-course pages. */
  outline?: { label: string; value: string }[];
  /** Ordered content blocks: modules, who should attend, outcomes, duration, benefits… */
  sections?: CourseSection[];
  faqs?: Faq[];
  duration?: string;
  image: string;
  aim?: string;
  topics?: string[];
  durationHeading?: string;
  targetDelegates?: string;
  certificationIntro?: string;
  certificationLinkUrl?: string;
  certificationHighlight?: string;
  courseInfoParagraphs?: string[];
  accreditationLogo?: string;
  accreditationLogos?: string[];
  courseOfferings?: { label: string; description: string; href?: string }[];
  courseTable?: { name: string; type: string; starts: string }[];
  clientLogos?: ClientLogo[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type Trainer = {
  slug: string;
  name: string;
  credentials: string;
  image: string;
  shortBio: string;
  quote: string;
  bio: string[];
  /** Full LinkedIn profile URL. Omit when the trainer has no public profile. */
  linkedin?: string;
};

export type PhoneNumber = {
  label: string;
  number: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type Office = {
  label: string;
  phones: string[];
  address: string;
  /**
   * Google Maps embed URL pinned to the verified business listing. Omit when we
   * have no confirmed listing for the office — consumers then fall back to an
   * address search, which is approximate. Replace the fallbacks with verified
   * embed URLs (Google Maps → Share → Embed a map) once the listings exist.
   */
  mapEmbed?: string;
};

export const navLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Consultancy", href: "/consultancy" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const coursesMegaMenu: MegaMenuGroup[] = [
  {
    title: "LEEA Lifting Courses",
    links: [
      { label: "LEEA Diploma", href: "/courses/leea-diploma" },
      { label: "LEEA Foundation Certificate (FOU)", href: "/course/leea-foundation-certificate" },
      { label: "LEEA Lifting Accessories Diploma (LAC)", href: "/course/leea-lifting-accessories-diploma" },
      { label: "LEEA Courses", href: "/courses/leea" },
      { label: "LEEA Appointed Person for Lifting Operations (APLO)", href: "/courses/leea-appointed-person" },
      { label: "LEEA Crane Lift Supervisor", href: "/courses/leea-crane-lift-supervisor" },
      { label: "LEEA Rigging and Lifting", href: "/courses/leea-rigging-and-lifting" },
    ],
  },
  {
    title: "IOSH & Highfield Courses",
    links: [
      { label: "IOSH Courses", href: "/courses/iosh" },
      { label: "IOSH Managing Safely", href: "/courses/iosh-managing-safely" },
      { label: "IOSH Working Safely", href: "/courses/iosh-working-safely" },
      { label: "Highfield Courses", href: "/courses/highfield" },
      { label: "Highfield First Aid (Levels 1–4)", href: "/courses/highfield-first-aid" },
      { label: "Highfield Fire Safety", href: "/courses/highfield-fire-safety" },
      { label: "Highfield Food Safety & HACCP", href: "/courses/highfield-food-safety-haccp" },
      { label: "Highfield Train the Trainer", href: "/courses/highfield-train-the-trainer" },
    ],
  },
  {
    title: "More International Courses",
    links: [
      { label: "HSE Training", href: "/courses/hse-training" },
      { label: "OHS Person In Charge (OHS PIC)", href: "/courses/ohs-pic" },
      { label: "STI – Scaffold Training Institute", href: "/courses/sti" },
      { label: "PASMA Mobile Access Towers", href: "/courses/pasma" },
      { label: "ISO Lead Auditor Courses", href: "/courses/iso-lead-auditor" },
      { label: "ISO 45001:2018 Lead Auditor", href: "/courses/iso-45001-lead-auditor" },
      { label: "RoSPA Defensive Driving", href: "/courses/rospa" },
      { label: "Qualifi Level 7 Diploma in OHSM", href: "/courses/qualifi-level-7-diploma-ohsm" },
      { label: "NFPA Training", href: "/courses/nfpa-training" },
    ],
  },
  {
    title: "Industry Safety Training",
    links: [
      { label: "Construction Industry", href: "/courses/construction-industry" },
      { label: "Manufacturing Industry", href: "/courses/manufacturing-industry" },
      { label: "Food Industry", href: "/courses/food-industry" },
      { label: "Healthcare / Hospital Sector", href: "/courses/healthcare-sector" },
      { label: "Oil & Gas Training", href: "/courses/oil-and-gas" },
      { label: "Seminars and Workshops", href: "/courses/seminars-and-workshops" },
    ],
  },
];

export const courseCategories: CourseCategory[] = [
  { slug: "leea-diploma", title: "LEEA Diploma", icon: Award, image: "/course/ksa/leea-diploma.webp", href: "/courses/leea-diploma", description: "LEEA Foundation Certificate (FOU) and Lifting Accessories Diploma (LAC), from lifting basics to accessory inspection.", duration: "3–5 Days", location: "Dubai · Abu Dhabi · KSA", certification: "LEEA Certified" },
  { slug: "leea", title: "LEEA", icon: Forklift, image: "/course/ksa/leea.webp", href: "/courses/leea", description: "Appointed Person for Lifting Operations, Crane Lift Supervisor, and Rigging and Lifting.", duration: "2–5 Days", location: "Dubai · Abu Dhabi · KSA", certification: "LEEA Certified" },
  { slug: "hse-training", title: "HSE Training", icon: HardHat, image: "/course/ksa/hse-training.webp", href: "/courses/hse-training", description: "Practical HSE programmes, including the Dubai OHS Person In Charge (OHS PIC) certification.", location: "Dubai · Abu Dhabi · KSA", certification: "IOSH, Qualifi, TSI and more" },
  { slug: "iosh", title: "IOSH", icon: ShieldCheck, image: "/course/ksa/iosh.webp", href: "/courses/iosh", description: "Working Safely for every employee and Managing Safely for supervisors and managers.", duration: "1–4 Days", location: "Dubai · Abu Dhabi · KSA", certification: "IOSH Certified" },
  { slug: "highfield", title: "Highfield", icon: GraduationCap, image: "/course/ksa/highfield.webp", href: "/courses/highfield", description: "First aid, fire safety, food safety and HACCP, and Train the Trainer qualifications.", duration: "1–4 Days", location: "Dubai · Abu Dhabi · KSA", certification: "Highfield Accredited" },
  { slug: "sti", title: "STI – Scaffold Training Institute", icon: Layers, image: "/course/ksa/sti.webp", href: "/courses/sti", description: "Scaffold Competent Person, Inspector and Erector courses to STI standards.", duration: "2–5 Days", location: "Dubai · Abu Dhabi · KSA", certification: "STI Certified" },
  { slug: "pasma", title: "PASMA", icon: Building2, image: "/course/ksa/pasma-mobile-tower.webp", href: "/courses/pasma", description: "Mobile access tower training from a PASMA Approved Training Centre.", location: "Dubai · Abu Dhabi · KSA", certification: "PASMA Certified" },
  { slug: "iso-lead-auditor", title: "ISO Lead Auditor", icon: ClipboardCheck, image: "/course/ksa/iso-lead-auditor.webp", href: "/courses/iso-lead-auditor", description: "Lead and internal auditor training for ISO 45001, 14001, 9001, 22000 and 27001.", duration: "2–5 Days", location: "Dubai · Abu Dhabi · KSA", certification: "Highfield Accredited" },
  { slug: "rospa", title: "RoSPA", icon: Car, image: "/course/ksa/rospa.webp", href: "/courses/rospa", description: "Level 2 International Award in Defensive Driving, including the ADNOC-approved version.", duration: "1–2 Days", location: "Dubai · Abu Dhabi · KSA", certification: "RoSPA Accredited" },
  { slug: "qualifi-level-7-diploma-ohsm", title: "Qualifi Level 7 Diploma in OHSM", icon: Landmark, image: "/course/ksa/qualifi-level-7-diploma-ohsm.webp", href: "/courses/qualifi-level-7-diploma-ohsm", description: "Postgraduate-level international diploma in occupational health and safety management.", duration: "Up to 18 Months", location: "Dubai · Abu Dhabi · KSA", certification: "Qualifi Level 7 (Ofqual)" },
  { slug: "nfpa-training", title: "NFPA Training", icon: Flame, image: "/course/ksa/nfpa-training.webp", href: "/courses/nfpa-training", description: "NFPA 10, 13, 25, 70, 70E, 72, 101 and more, from an NFPA-approved training provider.", duration: "1–3 Days", location: "Dubai · Abu Dhabi · KSA", certification: "NFPA Training Certificate" },
];

export const featuredCourses: Course[] = [
  { slug: "construction-industry", title: "Construction Industry", category: "General Safety", duration: "1–3 Days", level: "All Levels", icon: HardHat, image: "/course/ksa/construction-industry.webp", href: "/courses/construction-industry", location: "Dubai · Abu Dhabi · KSA", certification: "Arbrit Certificate" },
  { slug: "manufacturing-industry", title: "Manufacturing Industry", category: "General Safety", duration: "1–4 Days", level: "All Levels", icon: Factory, image: "/course/ksa/manufacturing-industry.webp", href: "/courses/manufacturing-industry", location: "Dubai · Abu Dhabi · KSA", certification: "Arbrit Certificate" },
  { slug: "food-industry", title: "Food Industry", category: "General Safety", duration: "1–3 Days", level: "All Levels", icon: UtensilsCrossed, image: "/course/ksa/food-industry.webp", href: "/courses/food-industry", location: "Dubai · Abu Dhabi · KSA", certification: "Arbrit Certificate" },
  { slug: "healthcare-sector", title: "Healthcare / Hospital Sector", category: "General Safety", duration: "1–3 Days", level: "All Levels", icon: HeartPulse, image: "/course/ksa/healthcare-sector.webp", href: "/courses/healthcare-sector", location: "Dubai · Abu Dhabi · KSA", certification: "Arbrit Certificate" },
  { slug: "oil-and-gas", title: "Oil & Gas Training", category: "General Safety", level: "All Levels", icon: Fuel, image: "/course/ksa/oil-and-gas-offshore.webp", href: "/courses/oil-and-gas", location: "Dubai · Abu Dhabi · KSA", certification: "Arbrit Certificate" },
  { slug: "seminars-and-workshops", title: "Seminars and Workshops", category: "General Safety", duration: "Half-day to 2 Days", level: "All Levels", icon: Presentation, image: "/course/ksa/seminars-and-workshops.webp", href: "/courses/seminars-and-workshops", location: "Dubai · Abu Dhabi · KSA", certification: "Arbrit Certificate" },
];

export const stats: Stat[] = [
  { label: "Years of Experience", value: 20, suffix: "+" },
  { label: "Students Trained", value: 15000, suffix: "+" },
  { label: "Course Pass Rate", value: 98, suffix: "%" },
  { label: "Accredited Courses", value: 50, suffix: "+" },
];

export const accreditations: Accreditation[] = [
  {
    name: "LEEA",
    description:
      "Official Licensed Training Partner (LTP) — the first in the UAE & KSA — delivering the LEEA Foundation Certificate (FOU) and LAC Diploma.",
    icon: Forklift,
  },
  {
    name: "IOSH",
    description:
      "Institution of Occupational Safety and Health recognized Managing Safely and Working Safely programs.",
    icon: ShieldCheck,
  },
  {
    name: "Highfield",
    description:
      "Highfield-endorsed qualifications, one of the world's largest awarding organizations for health & safety.",
    icon: GraduationCap,
  },
  {
    name: "NFPA",
    description:
      "Training aligned with National Fire Protection Association codes and standards for fire safety.",
    icon: Flame,
  },
  {
    name: "STI",
    description:
      "Safety Training International accredited rigging, lifting, and working-at-height programs.",
    icon: Anchor,
  },
  {
    name: "PASMA",
    description:
      "Prefabricated Access Suppliers' and Manufacturers' Association certified mobile access tower training.",
    icon: Layers,
  },
  {
    name: "RoSPA",
    description:
      "Royal Society for the Prevention of Accidents recognized health & safety training standards.",
    icon: Award,
  },
  {
    name: "OSHAD Aligned",
    description:
      "Training programs structured to meet Abu Dhabi OSHAD occupational health & safety compliance requirements.",
    icon: ClipboardCheck,
  },
  {
    name: "HABC",
    description:
      "Highfield Awarding Body for Compliance approved centre, delivering internationally recognised HABC qualifications.",
    icon: GraduationCap,
  },
  {
    name: "RAKEZ",
    description:
      "Ras Al Khaimah Economic Zone approved training provider for licensed workplace safety programs.",
    icon: Award,
  },
  {
    name: "Trakhees",
    description:
      "Trakhees (Ports, Customs & Free Zone Corporation, Dubai) approved health & safety training provider.",
    icon: Landmark,
  },
];

// Video testimonials. Drop the media in /public/testimonials/ and fill an entry per person.
// Each needs: a real name + role (+ company), a portrait photo, a thumbnail poster frame,
// and either videoSrc (local mp4) or youtubeId. Entries missing a video source are skipped.
// Example:
//   {
//     name: "Ravi Kumar",
//     role: "Site Supervisor",
//     company: "ALEC Engineering",
//     photo: "/testimonials/ravi-kumar.jpg",
//     thumbnail: "/testimonials/ravi-kumar-poster.jpg",
//     videoSrc: "/testimonials/ravi-kumar.mp4",
//     duration: "0:48",
//     headline: "The confined space training changed how our site works.",
//   },
export const videoTestimonials: VideoTestimonial[] = [
  {
    name: "Arbrit Safety Training",
    role: "Trainee stories",
    videoSrc: "/Testimonials.webm",
    headline: "Hear from the people who trained with us.",
  },
  {
    name: "Arbrit Safety Training",
    role: "Trainee stories",
    videoSrc: "/Testimonials.webm",
    headline: "Hear from the people who trained with us.",
  },
  {
    name: "Arbrit Safety Training",
    role: "Trainee stories",
    videoSrc: "/Testimonials.webm",
    headline: "Hear from the people who trained with us.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Malaakash",
    role: "Course Trainee",
    quote:
      "I fully appreciate and am satisfied with this training. It was very helpful — every topic advertised was covered thoroughly and clearly.",
    rating: 5,
  },
  {
    name: "Hamza Mahar",
    role: "LEEA Trainee",
    quote:
      "I completed my LEEA training at Arbrit Institute and it was a great experience. The instructor was knowledgeable and the institute's coordination was seamless.",
    rating: 5,
  },
  {
    name: "Nadir Khan",
    role: "Corporate Client",
    quote:
      "Arbrit Training & Safety Consultancy provides top-notch training with expert instructors and excellent coordination from start to finish.",
    rating: 5,
  },
  {
    name: "Fatima Al Suwaidi",
    role: "HSE Officer",
    quote:
      "The scaffolding course was well structured and practical. Trainers explained every step clearly and answered all our questions patiently.",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    role: "Site Supervisor",
    quote:
      "Booked a group of our site team for the confined space training. Scheduling was flexible and the trainers adapted the pace to the group well.",
    rating: 4,
  },
  {
    name: "Omar Sheikh",
    role: "Project Manager",
    quote:
      "Arranged corporate training for our project staff across multiple courses. Communication was smooth and certificates arrived on time.",
    rating: 5,
  },
];

export const faqs: Faq[] = [
  {
    question: "Are Arbrit's courses internationally accredited?",
    answer:
      "Yes. Arbrit is the first LEEA Licensed Training Partner in the UAE & KSA, and also delivers IOSH-recognized programs alongside courses aligned with OSHAD compliance requirements.",
  },
  {
    question: "How long is my certificate valid for?",
    answer:
      "Validity depends on the course — for example, LEEA Lifting Supervisor certification is valid for 3 years. Your certificate will state its exact validity period.",
  },
  {
    question: "Do you offer corporate or group training?",
    answer:
      "Yes. We deliver on-site corporate training for teams of any size, and can tailor course scheduling to your project timeline.",
  },
  {
    question: "Can Arbrit supply HSE officers for our project?",
    answer:
      "Yes. Alongside training, we supply qualified HSE officers for short-term and long-term project deployments.",
  },
  {
    question: "Do you deliver training outside Dubai?",
    answer:
      "Yes. We deliver training across Dubai, Abu Dhabi, and the Kingdom of Saudi Arabia.",
  },
  {
    question: "How soon will I receive my certificate after the course?",
    answer:
      "Certificates are typically issued shortly after successful completion and assessment — your trainer will confirm the exact timeline for your course.",
  },
];

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Consultancy", href: "/consultancy" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const contactInfo = {
  phones: [
    { label: "Dubai", number: "+971 58 669 5300" },
    { label: "Abu Dhabi", number: "+971 50 242 5436" },
    { label: "KSA", number: "+966 59 334 1476" },
  ] as PhoneNumber[],
  email: "info@arbritsafety.com",
  address: "F-12, 1st Floor, Union Coop Al Twar, Al Nahda St, Dubai",
  ksaEntity: "Arbrit Safety Training - Saudi Arabia",
};

export const offices: Office[] = [
  {
    label: "Dubai",
    phones: ["+971 4 881 8742", "+971 58 669 5300"],
    address: "F-12, 1st Floor, Union Coop Al Twar, Al Nahda St, Dubai",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.005021211739!2d55.369079374853165!3d25.27041652873225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4359aaf3fcb3%3A0xd79a9fbb46a30a3d!2sArbrit%20Safety%20Training%20and%20Consultancy!5e0!3m2!1sen!2sin!4v1785752871035!5m2!1sen!2sin",
  },
  {
    label: "Abu Dhabi",
    phones: ["+971 2 621 1715", "+971 50 242 5436"],
    address: "202, Al Silaymiyah St, Al Danah 4, Abu Dhabi 2215",
  },
  {
    label: "Kingdom of Saudi Arabia",
    phones: ["+966 11 516 0114", "+966 59 334 1476"],
    address: "Zayd ibn Thabt, 7406, Office No. 2, Al Malaz, Riyadh, KSA",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/arbritdubai", icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/arbritsafetytrainingdubai", icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/20386197", icon: LinkedinIcon },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCXFmosNtIuUbPff5nzL5Ydw", icon: YoutubeIcon },
  { label: "WhatsApp", href: "https://wa.me/971586695300", icon: WhatsappIcon },
  { label: "X (Twitter)", href: "https://twitter.com/ArbritD", icon: XIcon },
];

export const courseSelectOptions = [
  "LEEA",
  "IOSH",
  "Highfield",
  "STI Scaffold Training",
  "ISO Lead Auditor",
  "RoSPA Defensive Driving",
  "Qualifi Level 7 Diploma",
  "NFPA Training",
  "PASMA",
  "HSE Training / OHS PIC",
  "Oil & Gas Training",
  "Industry Safety Training",
  "Other",
];

export const locationSelectOptions = ["Dubai", "Abu Dhabi", "Saudi Arabia", "Other"];

/** Course choices in the Join Course form: every course in the Courses menu, once each. */
export const joinCourseOptions = [...new Set(coursesMegaMenu.flatMap((group) => group.links.map((link) => link.label)))];

export const careerJobOpenings = [
  "HSE Manager",
  "HSE Engineers",
  "Junior HSE Trainers",
  "Sales Coordinator",
  "Appointed person for lifting operations",
];

export const historyGallery = [
  { src: "/about/Arbirt-safety-2-300x225.webp", alt: "Arbrit Safety team at a training event" },
  { src: "/about/Arbirt-safety-3-300x200.webp", alt: "Arbrit Safety trainers with course delegates" },
  { src: "/about/Arbirt-safety-4-300x200.webp", alt: "Arbrit Safety team during a company gathering" },
  { src: "/about/Arbirt-safety-5-300x200.webp", alt: "Arbrit Safety staff at a certification ceremony" },
  { src: "/about/Arbirt-safety-6-300x200.webp", alt: "Arbrit Safety team on a training site visit" },
  { src: "/about/blood-donation-2-big-300x225.webp", alt: "Arbrit Safety staff donating blood at a community drive" },
  { src: "/about/blood-donation-3-big-300x225.webp", alt: "Arbrit Safety team volunteers at the blood donation camp" },
  { src: "/about/blood-donation-award-big-300x225.webp", alt: "Arbrit Safety receiving a blood donation appreciation award" },
  { src: "/about/confined-space-big-scaled-300x182.webp", alt: "Trainee entering a confined space under supervision" },
  { src: "/about/confined-space-training-big-scaled-300x186.webp", alt: "Confined space entry and rescue training session" },
  { src: "/about/fire-fighting-training-big-300x189.webp", alt: "Delegates using fire extinguishers in live fire fighting training" },
  { src: "/about/gitex-conference-big-1-scaled-300x225.webp", alt: "Arbrit Safety team at the GITEX conference in Dubai" },
  { src: "/about/iosh-event-big-scaled-300x225.webp", alt: "Arbrit Safety delegates at an IOSH networking event" },
  { src: "/about/Leea-big-300x225.png", alt: "Arbrit Safety at a LEEA lifting industry event" },
  { src: "/about/managing-safely-big-300x228.webp", alt: "IOSH Managing Safely classroom training in progress" },
  { src: "/about/women-luncheon-big-300x226.webp", alt: "Women in safety luncheon hosted by Arbrit Safety" },
  { src: "/about/women-luncheon-uae-big-300x225.webp", alt: "Women in safety luncheon attendees in the UAE" },
];

/**
 * Builds descriptive alt text for a course image from the course's own data, so
 * every card names the subject and where the course actually runs — "IOSH safety
 * training course by Arbrit Safety in Dubai, Abu Dhabi, Saudi Arabia" rather than
 * a bare filename or a repeated heading.
 */
export function courseImageAlt(course: { title: string; location?: string }) {
  const where = (course.location ?? "Dubai · Abu Dhabi · KSA")
    .replace(/\s*·\s*/g, ", ")
    .replace(/\bKSA\b/g, "Saudi Arabia");
  // Titles like "Construction Safety" already carry the word, so do not double it up.
  const subject = /safety/i.test(course.title)
    ? `${course.title} training course`
    : `${course.title} safety training course`;
  return `${subject} by Arbrit Safety in ${where}`;
}
