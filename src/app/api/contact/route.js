import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizePayload(body) {
  return {
    name: String(body?.name || "").trim(),
    email: String(body?.email || "").trim().toLowerCase(),
    phone: String(body?.phone || "").trim(),
    companyName: String(body?.companyName || "").trim(),
    companyWebsite: String(body?.companyWebsite || "").trim(),
    industry: String(body?.industry || "").trim(),
    companySize: String(body?.companySize || "").trim(),
    problem: String(body?.problem || "").trim(),
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

function buildEmailHtml(data) {
  const rows = [
    ["Name", data.name],
    ["Business Email", data.email],
    ["Phone", data.phone || "—"],
    ["Company", data.companyName],
    ["Website", data.companyWebsite || "—"],
    ["Industry", data.industry || "—"],
    ["Company Size", data.companySize || "—"],
    ["Problem", data.problem],
  ];

  const content = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 12px;border-bottom:1px solid #e8eef5;color:#737e8a;font-size:13px;width:160px;vertical-align:top;">${label}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e8eef5;color:#00213a;font-size:14px;white-space:pre-wrap;">${String(value).replace(/</g, "&lt;")}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Quicksand,Arial,sans-serif;background:#f7fbff;padding:24px;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #daedff;border-radius:8px;overflow:hidden;">
        <div style="background:#001830;color:#ffffff;padding:20px 24px;">
          <p style="margin:0;font-size:12px;letter-spacing:0.08em;color:#00b3ff;">NEW CONTACT REQUEST</p>
          <h1 style="margin:8px 0 0;font-size:22px;">System Heuristics Website</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;">${content}</table>
      </div>
    </div>
  `;
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
      SMTP_HOST = "smtp.gmail.com",
      SMTP_PORT = "465",
      SMTP_SECURE = "true",
      SMTP_USER,
      SMTP_APP_PASSWORD,
      CONTACT_RECEIVER_EMAIL,
      CONTACT_FROM_NAME = "System Heuristics Website",
    } = process.env;

    if (!SMTP_USER || !SMTP_APP_PASSWORD || !CONTACT_RECEIVER_EMAIL) {
      return Response.json(
        {
          ok: false,
          error:
            "Email is not configured yet. Add SMTP_USER, SMTP_APP_PASSWORD, and CONTACT_RECEIVER_EMAIL to .env.local.",
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
    });

    await transporter.sendMail({
      from: `"${CONTACT_FROM_NAME}" <${SMTP_USER}>`,
      to: CONTACT_RECEIVER_EMAIL,
      replyTo: data.email,
      subject: `New contact request from ${data.name} (${data.companyName})`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "—"}`,
        `Company: ${data.companyName}`,
        `Website: ${data.companyWebsite || "—"}`,
        `Industry: ${data.industry || "—"}`,
        `Company Size: ${data.companySize || "—"}`,
        "",
        "Problem:",
        data.problem,
      ].join("\n"),
      html: buildEmailHtml(data),
    });

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
