import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const ACCEPTED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

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

function escapeHtml(value) {
  return String(value).replace(/</g, "&lt;");
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

function buildEmailHtml(data) {
  const rows = [
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Area of Expertise", data.expertise],
    ["LinkedIn", data.linkedin || "—"],
    ["Portfolio / GitHub", data.portfolio || "—"],
    ["Introduction", data.introduction],
    ["Resume", data.resume?.name || "—"],
  ];

  const content = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 12px;border-bottom:1px solid #e8eef5;color:#737e8a;font-size:13px;width:160px;vertical-align:top;">${label}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e8eef5;color:#00213a;font-size:14px;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Quicksand,Arial,sans-serif;background:#f7fbff;padding:24px;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #daedff;border-radius:8px;overflow:hidden;">
        <div style="background:#001830;color:#ffffff;padding:20px 24px;">
          <p style="margin:0;font-size:12px;letter-spacing:0.08em;color:#00b3ff;">GENERAL CAREERS APPLICATION</p>
          <h1 style="margin:8px 0 0;font-size:22px;">System Heuristics Careers</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;">${content}</table>
      </div>
    </div>
  `;
}

export async function POST(request) {
  try {
    const data = await parseFormData(request);
    const errors = validatePayload(data);

    if (errors.length) {
      return Response.json({ ok: false, errors }, { status: 400 });
    }

    const {
      SMTP_HOST = "smtp.gmail.com",
      SMTP_PORT = "465",
      SMTP_SECURE = "true",
      SMTP_USER,
      SMTP_APP_PASSWORD,
      CAREERS_RECEIVER_EMAIL,
      CAREERS_FROM_NAME = "System Heuristics Careers",
    } = process.env;

    if (!SMTP_USER || !SMTP_APP_PASSWORD || !CAREERS_RECEIVER_EMAIL) {
      return Response.json(
        {
          ok: false,
          error:
            "Careers email is not configured yet. Add SMTP_USER, SMTP_APP_PASSWORD, and CAREERS_RECEIVER_EMAIL to .env.local.",
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
    });

    await transporter.sendMail({
      from: `"${CAREERS_FROM_NAME}" <${SMTP_USER}>`,
      to: CAREERS_RECEIVER_EMAIL,
      replyTo: data.email,
      subject: `Careers application — ${data.fullName} (${data.expertise})`,
      text: [
        `Full Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "—"}`,
        `Area of Expertise: ${data.expertise}`,
        `LinkedIn: ${data.linkedin || "—"}`,
        `Portfolio / GitHub: ${data.portfolio || "—"}`,
        "",
        "Introduction:",
        data.introduction,
        "",
        `Resume: ${data.resume.name}`,
      ].join("\n"),
      html: buildEmailHtml(data),
      attachments: [
        {
          filename: data.resume.name,
          content: resumeBuffer,
          contentType: data.resume.type || undefined,
        },
      ],
    });

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
