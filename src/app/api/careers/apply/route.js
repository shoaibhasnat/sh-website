import nodemailer from "nodemailer";
import { buildCareersAutoReply } from "@/utils/email-templates/careersAutoReply";
import { buildCareersNotification } from "@/utils/email-templates/careersNotification";
import { getEmailLogoAttachment } from "@/utils/email-templates/emailAssets";
import {
  sendMailWithRetry,
  sleep,
} from "@/utils/email/sendMailWithRetry";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const ACCEPTED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const CAREERS_PAGE_URL = "https://systemheuristics.com/careers";

const EXPERTISE_OPTIONS = [
  "AI / Machine Learning",
  "Automation",
  "Frontend Engineering",
  "Backend Engineering",
  "Full-Stack Engineering",
  "UI/UX Design",
  "Product",
  "Sales",
  "Marketing",
  "Business Analysis",
  "Other",
];

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getExtension(filename = "") {
  const match = filename.toLowerCase().match(/\.[a-z0-9]+$/);
  return match ? match[0] : "";
}

function isAcceptedResume(file) {
  if (!file || typeof file !== "object") return false;
  const extension = getExtension(file.name || "");
  const hasExtension = ACCEPTED_EXTENSIONS.includes(extension);
  const type = file.type || "";
  const hasType = !type || ACCEPTED_MIME_TYPES.includes(type);
  return hasExtension && hasType;
}

async function parseFormData(request) {
  const formData = await request.formData();
  const resume = formData.get("resume");

  return {
    fullName: String(formData.get("fullName") || "").trim(),
    email: String(formData.get("email") || "").trim().toLowerCase(),
    phone: String(formData.get("phone") || "").trim(),
    expertise: String(formData.get("expertise") || "").trim(),
    linkedin: String(formData.get("linkedin") || "").trim(),
    portfolio: String(formData.get("portfolio") || "").trim(),
    introduction: String(formData.get("introduction") || "").trim(),
    resume: resume instanceof File ? resume : null,
  };
}

function validatePayload(data) {
  const errors = [];

  if (!isNonEmptyString(data.fullName)) errors.push("Full name is required.");
  if (!isNonEmptyString(data.email)) errors.push("Email is required.");
  else if (!EMAIL_REGEX.test(data.email)) errors.push("Enter a valid email.");
  if (!isNonEmptyString(data.expertise)) {
    errors.push("Area of expertise is required.");
  } else if (!EXPERTISE_OPTIONS.includes(data.expertise)) {
    errors.push("Select a valid area of expertise.");
  }
  if (!isNonEmptyString(data.introduction)) {
    errors.push("Short introduction is required.");
  } else if (data.introduction.trim().length < 40) {
    errors.push("Introduction must be at least 40 characters.");
  }
  if (!data.resume) errors.push("Resume / CV is required.");
  else if (!isAcceptedResume(data.resume)) {
    errors.push("Resume must be a PDF or Word document (.pdf, .doc, .docx).");
  } else if (data.resume.size > MAX_RESUME_BYTES) {
    errors.push("Resume must be 5 MB or smaller.");
  }

  return errors;
}

export async function POST(request) {
  try {
    const data = await parseFormData(request);
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
      CAREERS_RECEIVER_EMAIL,
      CAREERS_FROM_NAME,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_SECURE ||
      !SMTP_USER ||
      !SMTP_APP_PASSWORD ||
      !CAREERS_RECEIVER_EMAIL ||
      !CAREERS_FROM_NAME
    ) {
      return Response.json(
        {
          ok: false,
          error:
            "Careers email is not configured yet. Add SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_APP_PASSWORD, CAREERS_RECEIVER_EMAIL, and CAREERS_FROM_NAME to .env.local.",
        },
        { status: 503 },
      );
    }

    const resumeBuffer = Buffer.from(await data.resume.arrayBuffer());

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

    const fromAddress = `"${CAREERS_FROM_NAME}" <${SMTP_USER}>`;
    const notification = buildCareersNotification(data);
    const logoAttachment = getEmailLogoAttachment();

    // Internal notification must succeed first.
    await sendMailWithRetry(transporter, {
      from: fromAddress,
      to: CAREERS_RECEIVER_EMAIL,
      replyTo: data.email,
      subject: notification.subject,
      text: notification.text,
      html: notification.html,
      attachments: [
        logoAttachment,
        {
          filename: data.resume.name,
          content: resumeBuffer,
          contentType: data.resume.type || undefined,
        },
      ],
    });

    const autoReply = buildCareersAutoReply({
      fullName: data.fullName,
      expertise: data.expertise,
      careersUrl: CAREERS_PAGE_URL,
    });

    await sleep(1500);

    try {
      await sendMailWithRetry(
        transporter,
        {
          from: fromAddress,
          to: data.email,
          replyTo: CAREERS_RECEIVER_EMAIL,
          subject: autoReply.subject,
          text: autoReply.text,
          html: autoReply.html,
          attachments: [logoAttachment],
        },
        { retries: 5, baseDelayMs: 1800 },
      );
    } catch (autoReplyError) {
      console.error("[careers/apply] auto-reply failed", autoReplyError);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[careers/apply]", error);
    return Response.json(
      {
        ok: false,
        error: "We couldn't send your application right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
