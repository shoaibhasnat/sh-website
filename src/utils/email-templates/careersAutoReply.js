import { ctaButton, escapeHtml, wrapEmailShell } from "./emailShell";

/**
 * Auto-reply sent to the person who submitted the careers application.
 */
export function buildCareersAutoReply({ fullName, expertise, careersUrl }) {
  const firstName = escapeHtml(
    String(fullName || "").trim().split(/\s+/)[0] || "there",
  );
  const area = escapeHtml(expertise || "your field");
  const careers =
    careersUrl || "https://systemheuristics.com/careers";

  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding:32px 32px 8px;font-family:Arial,Helvetica,sans-serif;color:#12261d;">
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">
            Hi ${firstName},
          </p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#3d5649;">
            Thank you for applying to System Heuristics in
            <strong style="color:#12261d;">${area}</strong>.
            We’ve received your résumé and introduction, and our team will review them carefully.
          </p>
          <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#3d5649;">
            If your background is a strong match, we’ll reach out with next steps.
            Either way, we appreciate the time you put into your application.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 32px 28px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6fbf8;border:1px solid #d5e8dc;border-radius:14px;">
            <tr>
              <td style="padding:22px;">
                <p style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#1a6b4f;font-weight:bold;">
                  Our hiring process
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 0 14px;vertical-align:top;width:34px;">
                      <span style="display:inline-block;width:24px;height:24px;border-radius:50%;background:#1a6b4f;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:24px;text-align:center;font-weight:bold;">1</span>
                    </td>
                    <td style="padding:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.55;color:#3d5649;">
                      <strong style="color:#12261d;">Application review</strong> — we read every submission
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 14px;vertical-align:top;width:34px;">
                      <span style="display:inline-block;width:24px;height:24px;border-radius:50%;background:#1a6b4f;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:24px;text-align:center;font-weight:bold;">2</span>
                    </td>
                    <td style="padding:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.55;color:#3d5649;">
                      <strong style="color:#12261d;">Conversation</strong> — a focused chat about craft and fit
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0;vertical-align:top;width:34px;">
                      <span style="display:inline-block;width:24px;height:24px;border-radius:50%;background:#1a6b4f;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:24px;text-align:center;font-weight:bold;">3</span>
                    </td>
                    <td style="padding:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.55;color:#3d5649;">
                      <strong style="color:#12261d;">Decision</strong> — clear feedback and next steps
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 32px 28px;" align="center">
          ${ctaButton({
            href: careers,
            label: "Explore Open Roles",
            background: "#1a6b4f",
            color: "#ffffff",
          })}
        </td>
      </tr>
      <tr>
        <td style="padding:0 32px 36px;font-family:Arial,Helvetica,sans-serif;">
          <p style="margin:0;font-size:15px;line-height:1.7;color:#3d5649;">
            Best regards,<br />
            <strong style="color:#12261d;">People Team · System Heuristics</strong>
          </p>
        </td>
      </tr>
    </table>
  `;

  const html = wrapEmailShell({
    preheader: "Your application is in — thanks for wanting to build with us.",
    accent: "#1a6b4f",
    headerEyebrow: "Careers · Application Received",
    headerTitle: "Your application is in.",
    headerSubtitle: "We’re glad you want to build with us.",
    bodyHtml,
    footerNote: "Build systems that help businesses work better.",
    footerLinksHtml: `
      <a href="https://systemheuristics.com/careers" style="color:#9aefc8;text-decoration:none;">systemheuristics.com/careers</a>
      &nbsp;·&nbsp;
      <a href="mailto:hr@systemheuristics.com" style="color:#9aefc8;text-decoration:none;">hr@systemheuristics.com</a>
    `,
  });

  const text = [
    `Hi ${String(fullName || "").trim().split(/\s+/)[0] || "there"},`,
    "",
    `Thank you for applying to System Heuristics in ${expertise || "your field"}. We've received your résumé and introduction, and our team will review them carefully.`,
    "",
    "Our hiring process:",
    "1. Application review — we read every submission",
    "2. Conversation — a focused chat about craft and fit",
    "3. Decision — clear feedback and next steps",
    "",
    `Explore open roles: ${careers}`,
    "",
    "Best regards,",
    "People Team · System Heuristics",
    "hr@systemheuristics.com",
  ].join("\n");

  return {
    subject: "Application received — System Heuristics Careers",
    html,
    text,
  };
}
