/**
 * CV upload rules shared by the Careers form and /api/enquiries. The size cap stays under the
 * 4.5 MB request limit many hosts (e.g. Vercel) put on a single request.
 */

export const CV_MAX_BYTES = 4 * 1024 * 1024;
export const CV_ACCEPT = ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

const extensions = ["pdf", "doc", "docx"];

/** Checks name and size (the browser can see both); returns an error message or undefined. */
export function cvFileError(file: { name: string; size: number } | null | undefined) {
  if (!file || file.size === 0) return undefined;
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!extensions.includes(extension)) return "Upload your CV as a PDF or Word file (.pdf, .doc or .docx).";
  if (file.size > CV_MAX_BYTES) return "Your CV is larger than 4 MB. Please upload a smaller file, or share a link instead.";
  return undefined;
}

export const cvMimeTypes: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

/**
 * Server-side check of the file's first bytes, so a renamed .exe cannot pass as a CV.
 * PDF starts with "%PDF", DOCX is a ZIP ("PK\x03\x04"), and legacy DOC is an OLE file.
 */
export function cvKindFromBytes(bytes: Uint8Array): "pdf" | "doc" | "docx" | null {
  const starts = (...signature: number[]) => signature.every((byte, index) => bytes[index] === byte);
  if (starts(0x25, 0x50, 0x44, 0x46)) return "pdf";
  if (starts(0x50, 0x4b, 0x03, 0x04)) return "docx";
  if (starts(0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1)) return "doc";
  return null;
}
