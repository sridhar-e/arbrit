import "server-only";
import { Resend } from "resend";

export type AdminNotification = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer }[];
};

type EmailConfig = { apiKey: string; from: string; to: string[] };

/**
 * Returns the Resend config when every variable is set, otherwise null (the channel is off).
 * ADMIN_EMAIL takes one address or several separated by commas.
 */
export function emailConfig(): EmailConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.FROM_EMAIL?.trim();
  const to = (process.env.ADMIN_EMAIL ?? "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
  if (!apiKey || !from || to.length === 0) return null;
  return { apiKey, from, to };
}

/** Sends one notification to every ADMIN_EMAIL address through Resend. */
export async function sendAdminNotification(message: AdminNotification) {
  const config = emailConfig();
  if (!config) throw new Error("Resend is not configured.");

  const resend = new Resend(config.apiKey);
  const { error } = await resend.emails.send({
    from: config.from,
    to: config.to,
    subject: message.subject,
    html: message.html,
    text: message.text,
    replyTo: message.replyTo,
    attachments: message.attachments,
  });
  if (error) throw new Error(`Resend rejected the email: ${error.name}: ${error.message}`);
}
