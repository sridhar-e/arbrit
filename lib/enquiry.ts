/**
 * Enquiry form rules shared by the browser forms and the /api/enquiries route, so a field that
 * passes in the browser always passes on the server (and the server never trusts the browser).
 */
import { allCourseNames } from "@/lib/course-catalog";

export const OTHER_OPTION = "Other";

export const trainingLocations = ["Dubai", "Abu Dhabi", "KSA", "On-site at our company"] as const;
export type TrainingLocation = (typeof trainingLocations)[number];

export type CourseEnquiry = {
  type: "course";
  name: string;
  email: string;
  phone: string;
  courses: string[];
  otherCourse: string;
  location: string;
  /** The course the visitor clicked in the menu, if any. Informational only. */
  clickedCourse?: string;
};

export type CorporateEnquiry = {
  type: "corporate";
  name: string;
  email: string;
  phone: string;
  teamSize: string;
  courses: string[];
  otherCourse: string;
};

export type Enquiry = CourseEnquiry | CorporateEnquiry;

export type EnquiryErrors = Partial<Record<"name" | "email" | "phone" | "teamSize" | "courses" | "otherCourse" | "location", string>>;

const LIMITS = { name: 100, email: 254, phone: 30, otherCourse: 200, teamSize: 6 };
const allowedCourses = new Set([...allCourseNames, OTHER_OPTION]);

export function checkContact(values: { name: string; email: string; phone: string }, errors: EnquiryErrors) {
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const digits = phone.replace(/\D/g, "");

  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Name should be at least 2 characters.";
  else if (name.length > LIMITS.name) errors.name = `Name should be under ${LIMITS.name} characters.`;

  if (!email) errors.email = "Please enter an email address.";
  else if (email.length > LIMITS.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "Enter a valid email, like name@company.com.";

  if (!phone) errors.phone = "Please enter a phone number.";
  else if (phone.length > LIMITS.phone || !/^\+?[\d\s()-]+$/.test(phone) || digits.length < 7 || digits.length > 15)
    errors.phone = "Enter a valid phone number, like +971 50 123 4567.";
}

function checkCourses(values: { courses: string[]; otherCourse: string }, errors: EnquiryErrors, noun: string) {
  if (values.courses.length === 0) errors.courses = `Select at least one ${noun}.`;
  else if (values.courses.some((course) => !allowedCourses.has(course))) errors.courses = `Choose ${noun}s from the list.`;

  if (values.courses.includes(OTHER_OPTION)) {
    const other = values.otherCourse.trim();
    if (!other) errors.otherCourse = `Tell us which other ${noun} you need.`;
    else if (other.length > LIMITS.otherCourse) errors.otherCourse = `Keep this under ${LIMITS.otherCourse} characters.`;
  }
}

export function validateCourseEnquiry(values: Omit<CourseEnquiry, "type">): EnquiryErrors {
  const errors: EnquiryErrors = {};
  checkContact(values, errors);
  checkCourses(values, errors, "course");
  if (!values.location) errors.location = "Choose where you would like to train.";
  else if (!(trainingLocations as readonly string[]).includes(values.location)) errors.location = "Choose a location from the list.";
  return errors;
}

export function validateCorporateEnquiry(values: Omit<CorporateEnquiry, "type">): EnquiryErrors {
  const errors: EnquiryErrors = {};
  checkContact(values, errors);
  const teamSize = values.teamSize.trim();
  if (!teamSize) errors.teamSize = "Please enter your team size.";
  else if (teamSize.length > LIMITS.teamSize || !/^\d+$/.test(teamSize) || Number(teamSize) < 1)
    errors.teamSize = "Team size must be a whole number of 1 or more.";
  checkCourses(values, errors, "certification");
  return errors;
}
