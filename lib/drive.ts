import "server-only";
import { GOOGLE_SCOPES, googleAccessToken, serviceAccount } from "@/lib/google-auth";

/**
 * Uploads files (Careers CVs) into GOOGLE_DRIVE_CV_FOLDER_ID with the site's service account.
 * The folder must sit in a Shared Drive where that account is at least a Contributor: service
 * accounts have no storage of their own, so uploads to a personal "My Drive" folder are refused.
 */

export function driveConfig() {
  const folderId = process.env.GOOGLE_DRIVE_CV_FOLDER_ID?.trim();
  if (!serviceAccount() || !folderId) return null;
  return { folderId };
}

export async function uploadToDrive(file: { name: string; mimeType: string; bytes: Uint8Array<ArrayBuffer> }) {
  const config = driveConfig();
  if (!config) throw new Error("Google Drive is not configured.");
  const token = await googleAccessToken(GOOGLE_SCOPES.drive);

  const boundary = `arbrit-${crypto.randomUUID()}`;
  const metadata = JSON.stringify({ name: file.name, parents: [config.folderId] });
  const body = new Blob([
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${metadata}\r\n`,
    `--${boundary}\r\nContent-Type: ${file.mimeType}\r\n\r\n`,
    file.bytes,
    `\r\n--${boundary}--`,
  ]);

  const response = await fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&supportsAllDrives=true&fields=id,name,webViewLink",
    { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": `multipart/related; boundary=${boundary}` }, body },
  );
  const data = (await response.json().catch(() => ({}))) as { id?: string; name?: string; webViewLink?: string; error?: { message?: string } };
  if (!response.ok || !data.id) {
    throw new Error(`Google Drive upload failed (${response.status}): ${data.error?.message ?? "no file id returned"}`);
  }
  return { id: data.id, name: data.name ?? file.name, link: data.webViewLink ?? `https://drive.google.com/file/d/${data.id}/view` };
}
