import nodemailer from "nodemailer";
import { buildContactAutoReply } from "@/utils/email-templates/contactAutoReply";
import { buildContactNotification } from "@/utils/email-templates/contactNotification";
import { getEmailLogoAttachment } from "@/utils/email-templates/emailAssets";
import {
  sendMailWithRetry,
  sleep,
} from "@/utils/email/sendMailWithRetry";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FALLBACK_BOOKING_LINK =
  "https://calendar.app.google/ZnSSS2B9R7mkmfBc6";

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizePayload(body) {
  const firstName = String(body?.firstName || "").trim();
  const lastName = String(body?.lastName || "").trim();
  const combinedName = `${firstName} ${lastName}`.trim();
  const name = String(body?.name || "").trim() || combinedName;

  return {
    name,
    email: String(body?.email || "").trim().toLowerCase(),
    phone: String(body?.phone || "").trim(),
    companyName: String(body?.companyName || "").trim(),
    companyWebsite: String(body?.companyWebsite || "").trim(),
    industry: String(body?.industry || "").trim(),
    companySize: String(body?.companySize || "").trim(),
    problem: String(body?.problem || "").trim(),
    service: String(body?.service || body?.helpWith || "").trim(),
    budget: String(body?.budget || "").trim(),
    source: String(body?.source || "").trim(),
  };
}

function validatePayload(data) {
  const errors = [];

  if (!isNonEmptyString(data.name)) errors.push("Name is required.");
  if (!isNonEmptyString(data.email)) errors.push("Business email is required.");
  else if (!EMAIL_REGEX.test(data.email)) errors.push("Enter a valid business email.");
  if (!isNonEmptyString(data.companyName)) errors.push("Company name is required.");
  if (!isNonEmptyString(data.problem)) errors.push("Please describe the problem.");

  return errors;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const data = normalizePayload(body);
    const errors = validatePayload(data);

    if (errors.length) {
      return Response.json({ ok: false, errors }, { status: 400 });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_APP_PASSWORD,
      CONTACT_RECEIVER_EMAIL,
      CONTACT_FROM_NAME,
      BOOKING_CALENDAR_LINK,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_SECURE ||
      !SMTP_USER ||
      !SMTP_APP_PASSWORD ||
      !CONTACT_RECEIVER_EMAIL ||
      !CONTACT_FROM_NAME
    ) {
      return Response.json(
        {
          ok: false,
          error:
            "Email is not configured yet. Add SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_APP_PASSWORD, CONTACT_RECEIVER_EMAIL, and CONTACT_FROM_NAME to .env.local.",
        },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === "true",
      auth: {
        user: SMTP_USER,
        pass: SMTP_APP_PASSWORD,
      },
      pool: false,
    });

    const fromAddress = `"${CONTACT_FROM_NAME}" <${SMTP_USER}>`;
    const notification = buildContactNotification(data);
    const logoAttachment = getEmailLogoAttachment();

    // Internal notification must succeed before auto-reply / redirect.
    await sendMailWithRetry(transporter, {
      from: fromAddress,
      to: CONTACT_RECEIVER_EMAIL,
      replyTo: data.email,
      subject: notification.subject,
      text: notification.text,
      html: notification.html,
      attachments: [logoAttachment],
    });

    const autoReply = buildContactAutoReply({
      name: data.name,
      companyName: data.companyName,
      bookingUrl: BOOKING_CALENDAR_LINK?.trim() || FALLBACK_BOOKING_LINK,
    });

    // Gmail often returns 421 if a second message is sent immediately.
    await sleep(1500);

    try {
      await sendMailWithRetry(
        transporter,
        {
          from: fromAddress,
          to: data.email,
          replyTo: CONTACT_RECEIVER_EMAIL,
          subject: autoReply.subject,
          text: autoReply.text,
          html: autoReply.html,
          attachments: [logoAttachment],
        },
        { retries: 5, baseDelayMs: 1800 },
      );
    } catch (autoReplyError) {
      // Do not fail the API if the lead email already succeeded.
      console.error("[contact] auto-reply failed", autoReplyError);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    return Response.json(
      {
        ok: false,
        error: "We couldn't send your request right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
