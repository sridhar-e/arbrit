import "server-only";
import { createSign } from "node:crypto";

/**
 * Service-account sign-in shared by Google Sheets and Google Drive. Signs the OAuth token request
 * with Node's crypto (no googleapis dependency) and caches one access token per scope.
 */

const TOKEN_URL = "https://oauth2.googleapis.com/token";

export const GOOGLE_SCOPES = {
  sheets: "https://www.googleapis.com/auth/spreadsheets",
  drive: "https://www.googleapis.com/auth/drive",
} as const;

/**
 * .env files hold the key on one line with "\n" escapes. Keys copied from an escaped JSON view
 * often arrive double-escaped ("\\n"), which Next's env loader turns into a backslash followed by a
 * real newline. Collapse every variant to a plain newline so any of them parses.
 */
function normalisePrivateKey(raw: string | undefined) {
  return raw
    ?.replace(/^"|"$/g, "")
    .replace(/\\+(?:n|\r?\n)/g, "\n")
    .replace(/\r\n/g, "\n")
    .trim();
}

/** The service account from GOOGLE_SHEETS_CLIENT_EMAIL / GOOGLE_SHEETS_PRIVATE_KEY, or null if unset. */
export function serviceAccount() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL?.trim();
  const privateKey = normalisePrivateKey(process.env.GOOGLE_SHEETS_PRIVATE_KEY);
  if (!clientEmail || !privateKey) return null;
  return { clientEmail, privateKey };
}

const base64url = (input: string | Buffer) => Buffer.from(input).toString("base64url");
const cache = new Map<string, { value: string; expiresAt: number }>();

export async function googleAccessToken(scope: string) {
  const account = serviceAccount();
  if (!account) throw new Error("Google service account is not configured.");

  const now = Math.floor(Date.now() / 1000);
  const cacheKey = `${account.clientEmail} ${scope}`;
  const cached = cache.get(cacheKey);
  if (cached && cached.expiresAt - 60 > now) return cached.value;

  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(JSON.stringify({ iss: account.clientEmail, scope, aud: TOKEN_URL, iat: now, exp: now + 3600 }));
  let signature: string;
  try {
    const signer = createSign("RSA-SHA256");
    signer.update(`${header}.${claims}`);
    signature = signer.sign(account.privateKey).toString("base64url");
  } catch (error) {
    throw new Error(
      `GOOGLE_SHEETS_PRIVATE_KEY could not be read. Paste the full "private_key" from the JSON key, in double quotes on one line with its \\n sequences (${error instanceof Error ? error.message : error}).`,
    );
  }

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${header}.${claims}.${signature}`,
    }),
  });
  const data = (await response.json().catch(() => ({}))) as { access_token?: string; expires_in?: number; error_description?: string; error?: string };
  if (!response.ok || !data.access_token) {
    throw new Error(`Google token request failed (${response.status}): ${data.error_description ?? data.error ?? "no token"}`);
  }
  cache.set(cacheKey, { value: data.access_token, expiresAt: now + (data.expires_in ?? 3600) });
  return data.access_token;
}
