import { ctaButton, escapeHtml, wrapEmailShell } from "./emailShell";

/**
 * Auto-reply sent to the person who submitted the contact form.
 */
export function buildContactAutoReply({ name, companyName, bookingUrl }) {
  const firstName = escapeHtml(
    String(name || "").trim().split(/\s+/)[0] || "there",
  );
  const company = escapeHtml(companyName || "your company");
  const booking = bookingUrl || "https://systemheuristics.com/discovery-call";

  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding:32px 32px 8px;font-family:Arial,Helvetica,sans-serif;color:#00213a;">
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">
            Hi ${firstName},
          </p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#3a5166;">
            Thank you for reaching out about <strong style="color:#00213a;">${company}</strong>.
            We’ve received your request and a specialist on our team will review what you shared.
          </p>
          <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#3a5166;">
            You’ll typically hear from us within <strong style="color:#00213a;">1–2 business days</strong>.
            If your challenge is time-sensitive, you can book a free consultation below.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 32px 28px;" align="center">
          ${ctaButton({
            href: booking,
            label: "Book Free Consultation",
          })}
        </td>
      </tr>
      <tr>
        <td style="padding:0 32px 28px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f9fd;border:1px solid #dceef9;border-radius:14px;">
            <tr>
              <td style="padding:22px;">
                <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#00b3ff;font-weight:bold;">
                  What happens next
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#3a5166;">
                      <strong style="color:#00213a;">01</strong>&nbsp;&nbsp;We review your process and goals
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#3a5166;">
                      <strong style="color:#00213a;">02</strong>&nbsp;&nbsp;We identify where systems or AI can help
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#3a5166;">
                      <strong style="color:#00213a;">03</strong>&nbsp;&nbsp;We reply with clear next steps
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 32px 36px;font-family:Arial,Helvetica,sans-serif;">
          <p style="margin:0;font-size:15px;line-height:1.7;color:#3a5166;">
            Warm regards,<br />
            <strong style="color:#00213a;">The System Heuristics Team</strong>
          </p>
        </td>
      </tr>
    </table>
  `;

  const html = wrapEmailShell({
    preheader:
      "Thanks — we received your request and will reply within 1–2 business days.",
    headerEyebrow: "Request Received",
    headerTitle: "Thanks — we got your message.",
    headerSubtitle: "A short confirmation that your request is with our team.",
    bodyHtml,
    footerNote: "AI agents, automation & custom software for growing businesses.",
    footerLinksHtml: `
      <a href="https://systemheuristics.com" style="color:#7dd3ff;text-decoration:none;">systemheuristics.com</a>
      &nbsp;·&nbsp;
      <a href="mailto:info@systemheuristics.com" style="color:#7dd3ff;text-decoration:none;">info@systemheuristics.com</a>
    `,
  });

  const text = [
    `Hi ${String(name || "").trim().split(/\s+/)[0] || "there"},`,
    "",
    `Thank you for reaching out about ${companyName || "your company"}. We've received your request and a specialist will review what you shared.`,
    "",
    "You'll typically hear from us within 1–2 business days.",
    `Book a free consultation: ${booking}`,
    "",
    "What happens next:",
    "1. We review your process and goals",
    "2. We identify where systems or AI can help",
    "3. We reply with clear next steps",
    "",
    "Warm regards,",
    "The System Heuristics Team",
    "https://systemheuristics.com",
  ].join("\n");

  return {
    subject: "We received your request — System Heuristics",
    html,
    text,
  };
}
