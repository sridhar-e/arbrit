import { emailConfig, sendAdminNotification } from "@/lib/mailer";
import { appendEnquiryRow, sheetsConfig, type SheetLinks, type SheetRow } from "@/lib/sheets";
import { driveConfig, uploadToDrive } from "@/lib/drive";
import { CV_MAX_BYTES, cvFileError, cvKindFromBytes, cvMimeTypes } from "@/lib/cv-file";
import {
  OTHER_OPTION,
  validateCorporateEnquiry,
  validateCourseEnquiry,
  type CorporateEnquiry,
  type CourseEnquiry,
  type Enquiry,
} from "@/lib/enquiry";
import { isLeadFormKey, leadForms, validateLead, type LeadField, type LeadFormKey, type LeadValues } from "@/lib/lead-forms";
import { siteUrl } from "@/lib/site";

// Best-effort abuse limit: 5 enquiries per visitor address per 10 minutes. It lives in this server
// instance's memory, so on serverless hosting it only limits bursts that hit the same instance.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (hits.length >= MAX_PER_WINDOW) {
    recent.set(ip, hits);
    return true;
  }
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return false;
}

const str = (value: unknown) => (typeof value === "string" ? value : "");
const strList = (value: unknown) => (Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : []);

type Lead = { type: "lead"; form: LeadFormKey; values: LeadValues };
type Submission = Enquiry | Lead;

function parse(body: Record<string, unknown>): Submission | null {
  if (body.type === "lead") {
    if (!isLeadFormKey(body.form)) return null;
    const fields: LeadField[] = leadForms[body.form].fields;
    return { type: "lead", form: body.form, values: Object.fromEntries(fields.map((field) => [field, str(body[field])])) };
  }
  const base = {
    name: str(body.name),
    email: str(body.email),
    phone: str(body.phone),
    courses: [...new Set(strList(body.courses))].slice(0, 80),
    otherCourse: str(body.otherCourse),
  };
  if (body.type === "course") return { type: "course", ...base, location: str(body.location), clickedCourse: str(body.clickedCourse) || undefined };
  if (body.type === "corporate") return { type: "corporate", ...base, teamSize: str(body.teamSize) };
  return null;
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);

const dubaiTime = (options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", { ...options, timeZone: "Asia/Dubai" }).format(new Date());

/** Admin email body from labelled rows; empty values are left out. */
function renderEmail(title: string, subject: string, rows: [string, string][]) {
  const filled = [...rows.filter(([, value]) => value.trim()), ["Submitted", `${dubaiTime({ dateStyle: "medium", timeStyle: "short" })} (Dubai time)`] as [string, string]];
  const site = siteUrl;
  const text = [title, "", ...filled.map(([label, value]) => `${label}: ${value.replace(/\n/g, "\n  - ")}`), "", site ? `Sent from ${site}` : ""]
    .join("\n")
    .trim();

  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f5f7fa;font-family:Arial,Helvetica,sans-serif;color:#123b6d">
<table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;padding:24px">
<tr><td style="font-size:20px;font-weight:800;padding-bottom:16px">${escapeHtml(title)}</td></tr>
${filled
  .map(
    ([label, value]) =>
      `<tr><td style="padding:8px 0;border-top:1px solid #e6ebf2"><div style="font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:#5b7291">${escapeHtml(label)}</div><div style="font-size:15px;padding-top:4px">${escapeHtml(value).replace(/\n/g, "<br>")}</div></td></tr>`,
  )
  .join("\n")}
${site ? `<tr><td style="padding-top:16px;font-size:12px;color:#5b7291">Sent from <a href="${escapeHtml(site)}" style="color:#0066b2">${escapeHtml(site)}</a>. Reply to this email to answer the enquirer directly.</td></tr>` : ""}
</table></body></html>`;

  return { subject, text, html };
}

const sheetTime = () => dubaiTime({ year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false });

/** Email and Sheet row for the course popup and the corporate quote form. */
function prepareEnquiry(enquiry: Enquiry, page: string) {
  const courses = enquiry.courses.map((course) => (course === OTHER_OPTION ? `Other: ${enquiry.otherCourse.trim()}` : course));
  const first = courses[0] ?? "";
  const more = courses.length > 1 ? ` (+${courses.length - 1} more)` : "";
  const isCourse = enquiry.type === "course";
  const course = enquiry as CourseEnquiry;
  const corporate = enquiry as CorporateEnquiry;

  const email = renderEmail(
    isCourse ? "New course enquiry" : "New corporate training quote request",
    isCourse ? `New course enquiry: ${first}${more}` : `Corporate training quote: ${corporate.teamSize} people, ${first}${more}`,
    [
      ["Name", enquiry.name.trim()],
      ["Email", enquiry.email.trim()],
      ["Phone / WhatsApp", enquiry.phone.trim()],
      isCourse ? ["Preferred location", course.location] : ["Team size", corporate.teamSize.trim()],
      [isCourse ? "Courses of interest" : "Required certifications", courses.join("\n")],
      ["Clicked from menu", isCourse ? (course.clickedCourse ?? "") : ""],
      ["Page", page],
    ],
  );

  // Only this form's fields; every other column in the shared Sheet is left blank.
  const row: SheetRow = {
    "Submitted (Dubai time)": sheetTime(),
    Form: isCourse ? "Course enquiry" : "Corporate training quote",
    Page: page,
    Name: enquiry.name.trim(),
    Email: enquiry.email.trim(),
    "Phone / WhatsApp": enquiry.phone.trim(),
    "Courses / Certifications": enquiry.courses.filter((item) => item !== OTHER_OPTION).join(", "),
    "Other (typed)": enquiry.courses.includes(OTHER_OPTION) ? enquiry.otherCourse.trim() : "",
    ...(isCourse
      ? { "Preferred Location": course.location, "Clicked From Menu": course.clickedCourse }
      : { "Team Size": corporate.teamSize.trim() }),
  };

  return { email, row, links: {} as SheetLinks, replyTo: enquiry.email.trim(), attachments: undefined };
}

const leadLabels: Record<LeadField, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone / WhatsApp",
  company: "Company",
  course: "Course",
  service: "Service required",
  location: "Location",
  message: "Message",
  position: "Position applied for",
  experience: "Experience",
  currentLocation: "Current location",
  noticePeriod: "Notice period",
  certifications: "Certifications held",
  cvLink: "CV link",
};

const leadColumns: Record<LeadField, keyof SheetRow> = {
  name: "Name",
  email: "Email",
  phone: "Phone / WhatsApp",
  company: "Company",
  course: "Courses / Certifications",
  service: "Service Required",
  location: "Preferred Location",
  message: "Message",
  position: "Position Applied For",
  experience: "Experience",
  currentLocation: "Current Location",
  noticePeriod: "Notice Period",
  certifications: "Certifications Held",
  cvLink: "CV Link",
};

type StoredCv = { fileName: string; link?: string; note?: string; bytes: Buffer };

/** Email and Sheet row for the simpler lead forms (contact, careers, consultancy, LEEA...). */
function prepareLead(lead: Lead, page: string, cv?: StoredCv) {
  const spec = leadForms[lead.form];
  const fields: LeadField[] = spec.fields;
  const value = (field: LeadField) => (lead.values[field] ?? "").trim();
  const topic = value("position") || value("course") || value("service");

  const email = renderEmail(
    `New enquiry: ${spec.label}`,
    `${spec.label}: ${value("name")}${topic ? `, ${topic}` : ""}`,
    [...fields.map((field) => [leadLabels[field], value(field)] as [string, string]), ["Page", page]],
  );

  const row: SheetRow = { "Submitted (Dubai time)": sheetTime(), Form: spec.label, Page: page };
  for (const field of fields) row[leadColumns[field]] = value(field);

  const links: SheetLinks = {};
  if (cv) {
    row["CV File"] = cv.note ? `${cv.note}: ${cv.fileName}` : cv.fileName;
    if (cv.link) links["CV File"] = cv.link;
    email.text += `

CV file: ${cv.fileName}${cv.link ? `
${cv.link}` : ` (${cv.note ?? "attached"})`}`;
    email.html = email.html.replace(
      "</table></body></html>",
      `<tr><td style="padding:8px 0;border-top:1px solid #e6ebf2"><div style="font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:#5b7291">CV file</div><div style="font-size:15px;padding-top:4px">${
        cv.link ? `<a href="${escapeHtml(cv.link)}" style="color:#0066b2">${escapeHtml(cv.fileName)}</a>` : `${escapeHtml(cv.fileName)} (attached)`
      }</div></td></tr>
</table></body></html>`,
    );
  }

  return {
    email,
    row,
    links,
    replyTo: value("email"),
    attachments: cv ? [{ filename: cv.fileName, content: cv.bytes }] : undefined,
  };
}

export async function POST(request: Request) {
  // Lead forms post multipart form data (so a CV file can ride along); the course popup and
  // corporate form post JSON.
  let body: Record<string, unknown>;
  let cvUpload: File | null = null;
  const contentType = request.headers.get("content-type") ?? "";
  try {
    if (contentType.startsWith("multipart/form-data")) {
      if (Number(request.headers.get("content-length") ?? 0) > CV_MAX_BYTES + 256 * 1024) {
        return Response.json({ ok: false, message: "That file is too large. Please upload a CV under 4 MB.", errors: { cvFile: "Your CV is larger than 4 MB." } }, { status: 413 });
      }
      const data = await request.formData();
      body = {};
      for (const [key, value] of data.entries()) {
        if (typeof value === "string") body[key] = value;
        else if (key === "cvFile" && value.size > 0) cvUpload = value;
      }
    } else {
      body = await request.json();
    }
  } catch {
    return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }
  if (!body || typeof body !== "object") return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });

  // Honeypot: a field real visitors never see. Pretend success so bots learn nothing.
  if (str(body.website).trim()) return Response.json({ ok: true });

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return Response.json({ ok: false, message: "Too many enquiries in a short time. Please try again in a few minutes or call us." }, { status: 429 });
  }

  // The page the form was on, from the Referer header (path only; empty if the browser withholds it).
  let page = "";
  try {
    page = new URL(request.headers.get("referer") ?? "").pathname;
  } catch {}

  const submission = parse(body);
  if (!submission) return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });

  const errors =
    submission.type === "lead"
      ? validateLead(submission.form, submission.values)
      : submission.type === "course"
        ? validateCourseEnquiry(submission)
        : validateCorporateEnquiry(submission);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, message: "Please fix the highlighted fields.", errors }, { status: 400 });
  }

  // CV upload (Careers form only): check it, then store it in Drive before writing the row.
  let cv: StoredCv | undefined;
  if (cvUpload && submission.type === "lead" && submission.form === "career") {
    const nameError = cvFileError({ name: cvUpload.name, size: cvUpload.size });
    const bytes = Buffer.from(await cvUpload.arrayBuffer());
    const kind = cvKindFromBytes(bytes);
    if (nameError || !kind) {
      const message = nameError ?? "This file doesn't look like a PDF or Word document. Please upload your CV as .pdf, .doc or .docx.";
      return Response.json({ ok: false, message: "Please check your CV file.", errors: { cvFile: message } }, { status: 400 });
    }
    const safe = (text: string) => text.replace(/[\\/:*?"<>|\u0000-\u001f]+/g, " ").replace(/\s+/g, " ").trim().slice(0, 60);
    const date = sheetTime().slice(0, 10).split("/").reverse().join("-");
    const fileName = `${date} ${safe(submission.values.name ?? "Candidate")} - ${safe(submission.values.position ?? "Application")}.${kind}`;
    cv = { fileName, bytes };
    if (driveConfig()) {
      try {
        cv.link = (await uploadToDrive({ name: fileName, mimeType: cvMimeTypes[kind], bytes: new Uint8Array(bytes) })).link;
      } catch (error) {
        console.error("[enquiries] CV upload to Google Drive failed:", error instanceof Error ? error.message : error);
        cv.note = "Upload failed, see email";
      }
    } else {
      cv.note = "Not stored (Drive not configured), see email";
    }
  }

  const prepared = submission.type === "lead" ? prepareLead(submission, page, cv) : prepareEnquiry(submission, page);

  // Email and Sheets are independent: each runs if configured, and the enquiry counts as received
  // when at least one of them stored it, so one outage never loses a lead.
  const channels: { name: string; run: () => Promise<void> }[] = [];
  if (emailConfig()) channels.push({ name: "email", run: () => sendAdminNotification({ ...prepared.email, replyTo: prepared.replyTo, attachments: prepared.attachments }) });
  if (sheetsConfig()) channels.push({ name: "google-sheets", run: () => appendEnquiryRow(prepared.row, prepared.links) });

  if (channels.length === 0) {
    if (process.env.NODE_ENV !== "production") {
      // Local development without credentials: show what would have been stored.
      console.info(
        [
          "──── Enquiry received (no Resend or Google Sheets configured; nothing stored) ────",
          `Subject: ${prepared.email.subject}`,
          "",
          prepared.email.text,
          "Sheet row:",
          JSON.stringify(prepared.row, null, 2),
        ].join("\n"),
      );
      return Response.json({ ok: true });
    }
    console.error("[enquiries] no delivery channel configured: set the Resend and/or Google Sheets variables.");
    return Response.json({ ok: false, message: "Enquiries are temporarily unavailable. Please call or WhatsApp us." }, { status: 502 });
  }

  const results = await Promise.allSettled(channels.map((channel) => channel.run()));
  results.forEach((result, index) => {
    if (result.status === "rejected") {
      const reason = result.reason instanceof Error ? result.reason.message : String(result.reason);
      console.error(`[enquiries] ${channels[index].name} failed:`, reason);
    }
  });
  if (!results.some((result) => result.status === "fulfilled")) {
    return Response.json({ ok: false, message: "We couldn't send your enquiry. Please try again, or call or WhatsApp us." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
