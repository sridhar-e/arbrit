/**
 * The site's simpler lead forms (contact, quick enquiry, join course, careers, consultancy, LEEA),
 * described in one place so the browser and /api/enquiries apply exactly the same rules.
 */
import { checkContact, type EnquiryErrors } from "@/lib/enquiry";
import { careerJobOpenings, courseSelectOptions, locationSelectOptions } from "@/lib/data";

export type LeadField =
  | "name"
  | "email"
  | "phone"
  | "company"
  | "course"
  | "service"
  | "location"
  | "message"
  | "position"
  | "experience"
  | "currentLocation"
  | "noticePeriod"
  | "certifications"
  | "cvLink";
export type LeadValues = Partial<Record<LeadField, string>>;
export type LeadErrors = Partial<Record<LeadField, string>>;

export const consultancyServiceOptions = [
  "Project HSE support",
  "Safety audit / gap assessment",
  "HAZOP & SIL studies",
  "Risk assessment & HIRA",
  "HSE management system (ISO 45001)",
  "HSE manpower & competency",
  "Not sure yet — advise me",
];

export const GENERAL_APPLICATION = "General application (any suitable role)";
export const careerPositionOptions = [...careerJobOpenings, GENERAL_APPLICATION];
export const careerExperienceOptions = ["Less than 1 year", "1–3 years", "3–5 years", "5–10 years", "10+ years"];
export const careerCurrentLocationOptions = ["Dubai", "Abu Dhabi", "Sharjah", "Other UAE emirate", "Saudi Arabia", "Outside UAE / KSA"];
export const careerNoticePeriodOptions = ["Immediately", "Within 1 month", "1–2 months", "More than 2 months"];

export const leeaCourseOptions = ["LEEA Foundation Certificate (FOU)", "LEEA Lifting Accessories Diploma (LAC)"];

type LeadFormSpec = {
  /** What the Sheet's "Form" column and the email subject call this form. */
  label: string;
  /** Fields in the order they appear on the form (focus moves to the first invalid one). */
  fields: LeadField[];
  /** Fields the visitor may leave empty. Every other field is required. */
  optional?: LeadField[];
  /** Fixed choice lists: a submitted value must be one of these. */
  options?: Partial<Record<LeadField, readonly string[]>>;
};

export const leadForms = {
  contact: {
    label: "Contact form",
    fields: ["name", "email", "phone", "course", "message"],
    optional: ["message"],
    options: { course: courseSelectOptions },
  },
  "quick-enquiry": {
    label: "Quick enquiry (Courses page)",
    fields: ["name", "email", "phone", "course", "message"],
    optional: ["message"],
    options: { course: courseSelectOptions },
  },
  // The course list here also includes the current page's course, so it is not a fixed list.
  "join-course": {
    label: "Join course",
    fields: ["name", "email", "phone", "course", "message"],
    optional: ["message"],
  },
  // Job applications from the Careers page.
  career: {
    label: "Job application",
    fields: ["name", "email", "phone", "position", "experience", "currentLocation", "noticePeriod", "certifications", "cvLink", "message"],
    optional: ["certifications", "cvLink", "message"],
    options: {
      position: careerPositionOptions,
      experience: careerExperienceOptions,
      currentLocation: careerCurrentLocationOptions,
      noticePeriod: careerNoticePeriodOptions,
    },
  },
  consultancy: {
    label: "Consultancy enquiry",
    fields: ["company", "name", "email", "phone", "service", "location", "message"],
    options: { service: consultancyServiceOptions, location: locationSelectOptions },
  },
  "leea-enroll": {
    label: "LEEA enrolment",
    fields: ["name", "email", "phone", "company", "course"],
    options: { course: leeaCourseOptions },
  },
  "leea-foundation": {
    label: "LEEA course enquiry",
    fields: ["name", "email", "phone", "company", "course"],
    options: { course: leeaCourseOptions },
  },
} satisfies Record<string, LeadFormSpec>;

export type LeadFormKey = keyof typeof leadForms;

export const isLeadFormKey = (value: unknown): value is LeadFormKey =>
  typeof value === "string" && Object.prototype.hasOwnProperty.call(leadForms, value);

const MAX: Partial<Record<LeadField, number>> = { company: 120, course: 150, service: 120, location: 60, message: 2000, certifications: 300, cvLink: 500 };

const requiredMessage: Record<LeadField, string> = {
  name: "Please enter your name.",
  email: "Please enter an email address.",
  phone: "Please enter a phone number.",
  company: "Please enter your company name.",
  course: "Please choose a course.",
  service: "Please choose a service.",
  location: "Please choose a location.",
  message: "Please enter a message.",
  position: "Please choose the position you are applying for.",
  experience: "Please choose your years of experience.",
  currentLocation: "Please choose where you are based.",
  noticePeriod: "Please choose when you could start.",
  certifications: "Please list your certifications.",
  cvLink: "Please add a link to your CV.",
};

export function validateLead(form: LeadFormKey, values: LeadValues): LeadErrors {
  const spec: LeadFormSpec = leadForms[form];
  const errors: LeadErrors = {};
  const contactErrors: EnquiryErrors = {};
  checkContact({ name: values.name ?? "", email: values.email ?? "", phone: values.phone ?? "" }, contactErrors);

  for (const field of spec.fields) {
    const value = (values[field] ?? "").trim();
    if (field === "name" || field === "email" || field === "phone") {
      if (contactErrors[field]) errors[field] = contactErrors[field];
      continue;
    }
    if (!value) {
      if (!spec.optional?.includes(field)) errors[field] = requiredMessage[field];
      continue;
    }
    const allowed = spec.options?.[field];
    const max = MAX[field];
    if (allowed && !allowed.includes(value)) errors[field] = "Choose an option from the list.";
    else if (max && value.length > max) errors[field] = `Keep this under ${max} characters.`;
    else if (field === "cvLink" && !isWebLink(value))
      errors[field] = "Enter a full link starting with https://, e.g. a Google Drive, Dropbox or LinkedIn link.";
  }
  return errors;
}

function isWebLink(value: string) {
  try {
    const url = new URL(value);
    return (url.protocol === "https:" || url.protocol === "http:") && url.hostname.includes(".");
  } catch {
    return false;
  }
}

/** Where the thank-you page offers to send people back to: an internal path only. */
export function safeReturnPath(value: unknown) {
  return typeof value === "string" && /^\/[a-z0-9\-/]*$/i.test(value) && !value.startsWith("//") ? value : "/";
}
