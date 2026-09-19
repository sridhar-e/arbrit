import type { EnquiryErrors } from "@/lib/enquiry";

export type SubmitResult = { ok: true } | { ok: false; message: string; errors?: EnquiryErrors & Record<string, string | undefined> };

/**
 * Posts an enquiry to /api/enquiries and normalises every failure into a message the form can show.
 * Plain objects go as JSON; FormData (used when a form can carry a file) goes as multipart.
 */
export async function submitEnquiry(payload: Record<string, unknown> | FormData): Promise<SubmitResult> {
  try {
    const response = await fetch(
      "/api/enquiries",
      payload instanceof FormData
        ? { method: "POST", body: payload }
        : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) },
    );
    const data = (await response.json().catch(() => null)) as { ok?: boolean; message?: string; errors?: Record<string, string> } | null;
    if (response.ok && data?.ok) return { ok: true };
    return {
      ok: false,
      message: data?.message ?? "We couldn't send your enquiry. Please try again, or call or WhatsApp us.",
      errors: data?.errors,
    };
  } catch {
    return { ok: false, message: "No connection. Check your internet and try again, or call or WhatsApp us." };
  }
}
