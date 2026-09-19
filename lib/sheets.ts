import "server-only";
import { GOOGLE_SCOPES, googleAccessToken, serviceAccount } from "@/lib/google-auth";

/**
 * Appends enquiry rows to a Google Sheet with the service account. The Sheet must be shared with
 * GOOGLE_SHEETS_CLIENT_EMAIL as an Editor.
 */

const SHEETS_API = "https://sheets.googleapis.com/v4/spreadsheets";

/**
 * One Sheet collects every form on the site. These are all the fields any form can send; a row only
 * fills the columns its form has and leaves the rest blank. Columns are matched by heading name
 * (case and spacing ignored), so the Sheet's columns can be reordered, and extra columns of your
 * own (Status, Notes, Assigned To...) are left untouched.
 */
export const SHEET_COLUMNS = [
  "Submitted (Dubai time)",
  "Name",
  "Company",
  "Email",
  "Phone / WhatsApp",
  "Courses / Certifications",
  "Other (typed)",
  "Service Required",
  "Preferred Location",
  "Team Size",
  "Message",
  "Position Applied For",
  "Experience",
  "Current Location",
  "Notice Period",
  "Certifications Held",
  "CV Link",
  "CV File",
  "Form",
  "Page",
  "Clicked From Menu",
] as const;

export type SheetColumn = (typeof SHEET_COLUMNS)[number];
/** Only the fields a form actually has; anything missing is written as a blank cell. */
export type SheetRow = Partial<Record<SheetColumn, string>>;
/** Cells whose text should be a clickable link, e.g. { "CV File": "https://drive.google.com/..." }. */
export type SheetLinks = Partial<Record<SheetColumn, string>>;

type SheetsConfig = { sheetId: string; tabName: string };

/** Returns the config when every variable is set, otherwise null (the channel is off). */
export function sheetsConfig(): SheetsConfig | null {
  const sheetId = process.env.GOOGLE_SHEET_ID?.trim();
  const tabName = process.env.GOOGLE_SHEET_TAB_NAME?.trim();
  if (!serviceAccount() || !sheetId || !tabName) return null;
  return { sheetId, tabName };
}

/** A1 range on the configured tab; tab names with spaces or quotes must be quoted. */
const range = (tabName: string, cells: string) => `'${tabName.replace(/'/g, "''")}'!${cells}`;

type SheetsResponse = {
  error?: { message?: string };
  values?: string[][];
  updates?: { updatedRange?: string };
  sheets?: { properties: { sheetId: number; title: string } }[];
};

async function sheetsRequest(config: SheetsConfig, token: string, path: string, init: RequestInit = {}) {
  const response = await fetch(`${SHEETS_API}/${encodeURIComponent(config.sheetId)}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", ...init.headers },
  });
  const data = (await response.json().catch(() => ({}))) as SheetsResponse;
  if (!response.ok) throw new Error(`Google Sheets request failed (${response.status}): ${data.error?.message ?? "unknown error"}`);
  return data;
}

const normalise = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]/g, "");

/**
 * Returns the Sheet's heading row, read fresh on every submission so a column that was just moved
 * or renamed in the Sheet is honoured immediately (a cached order would misplace values). If row 1
 * is empty, writes the full SHEET_COLUMNS set first.
 */
async function headings(config: SheetsConfig, token: string) {
  const existing = await sheetsRequest(config, token, `/values/${encodeURIComponent(range(config.tabName, "1:1"))}`);
  let row = (existing.values?.[0] ?? []).map((cell) => String(cell));
  if (!row.some((cell) => cell.trim())) {
    row = [...SHEET_COLUMNS];
    await sheetsRequest(
      config,
      token,
      `/values/${encodeURIComponent(range(config.tabName, "A1"))}?valueInputOption=RAW`,
      { method: "PUT", body: JSON.stringify({ values: [row] }) },
    );
  }
  return row;
}

const tabIds = new Map<string, number>();

/** The numeric id of the configured tab (needed to format cells); cached per spreadsheet and tab. */
async function tabId(config: SheetsConfig, token: string) {
  const key = `${config.sheetId}/${config.tabName}`;
  const known = tabIds.get(key);
  if (known !== undefined) return known;
  const meta = await sheetsRequest(config, token, "?fields=sheets.properties(sheetId,title)");
  const tab = meta.sheets?.find((sheet) => sheet.properties.title === config.tabName);
  if (!tab) throw new Error(`Google Sheets tab "${config.tabName}" was not found.`);
  tabIds.set(key, tab.properties.sheetId);
  return tab.properties.sheetId;
}

/**
 * Appends one submission as a new row, placing each value under the heading with the same name.
 * Fields with no matching heading are skipped (and logged); headings with no value stay blank.
 * RAW input stores every value as typed text, so visitor input like "=HYPERLINK(...)" or
 * "+971 ..." is never evaluated as a formula. `links` then turns the text of those cells into a
 * clickable link (a formatting link on the text, not a formula).
 */
export async function appendEnquiryRow(row: SheetRow, links: SheetLinks = {}) {
  const config = sheetsConfig();
  if (!config) throw new Error("Google Sheets is not configured.");
  const token = await googleAccessToken(GOOGLE_SCOPES.sheets);
  const sheetHeadings = await headings(config, token);

  const values = new Map(Object.entries(row).map(([column, value]) => [normalise(column), value ?? ""]));
  const cells = sheetHeadings.map((heading) => values.get(normalise(heading)) ?? "");

  const placed = new Set(sheetHeadings.map(normalise));
  const skipped = Object.entries(row).filter(([column, value]) => value && !placed.has(normalise(column)));
  if (skipped.length) {
    console.warn(`[sheets] no column for: ${skipped.map(([column]) => column).join(", ")}. Add these headings to row 1 to capture them.`);
  }

  const appended = await sheetsRequest(
    config,
    token,
    `/values/${encodeURIComponent(range(config.tabName, "A1"))}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    { method: "POST", body: JSON.stringify({ values: [cells] }) },
  );

  const linked = Object.entries(links).filter(([column, url]) => url && values.get(normalise(column)));
  if (linked.length === 0) return;

  // The append response names the row it wrote, e.g. 'Enquiries'!A18:U18.
  const rowNumber = Number(appended.updates?.updatedRange?.match(/![A-Z]+(\d+)/)?.[1]);
  if (!rowNumber) {
    console.warn("[sheets] row saved, but its position was not returned, so the link could not be added.");
    return;
  }
  const sheetId = await tabId(config, token);
  const requests = linked.flatMap(([column, url]) => {
    const columnIndex = sheetHeadings.findIndex((heading) => normalise(heading) === normalise(column));
    if (columnIndex < 0) return [];
    return [
      {
        updateCells: {
          range: { sheetId, startRowIndex: rowNumber - 1, endRowIndex: rowNumber, startColumnIndex: columnIndex, endColumnIndex: columnIndex + 1 },
          rows: [
            {
              values: [
                {
                  userEnteredValue: { stringValue: values.get(normalise(column)) },
                  textFormatRuns: [{ startIndex: 0, format: { link: { uri: url } } }],
                },
              ],
            },
          ],
          fields: "userEnteredValue,textFormatRuns",
        },
      },
    ];
  });
  if (requests.length) {
    // The row is already saved; a failed link only loses the click-through, so log rather than fail.
    try {
      await sheetsRequest(config, token, ":batchUpdate", { method: "POST", body: JSON.stringify({ requests }) });
    } catch (error) {
      console.warn("[sheets] row saved, but the link could not be added:", error instanceof Error ? error.message : error);
    }
  }
}
