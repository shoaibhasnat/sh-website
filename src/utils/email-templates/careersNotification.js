import {
  buildDetailRows,
  escapeHtml,
  wrapEmailShell,
} from "./emailShell";

/**
 * Internal notification when someone submits a careers application.
 */
export function buildCareersNotification(data) {
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

  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding:28px 32px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3faf6;border:1px solid #d5e8dc;border-radius:12px;">
            <tr>
              <td style="padding:18px 20px;">
                <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#1a6b4f;font-weight:bold;">
                  Candidate snapshot
                </p>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#3d5649;">
                  <strong style="color:#12261d;">${escapeHtml(data.fullName)}</strong>
                  applied for
                  <strong style="color:#12261d;">${escapeHtml(data.expertise)}</strong>.
                  Resume is attached.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:14px 32px 28px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${buildDetailRows(rows)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 32px 32px;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#7a9186;">
            Reply directly to reach
            <a href="mailto:${escapeHtml(data.email)}" style="color:#1a6b4f;text-decoration:none;">${escapeHtml(data.email)}</a>.
          </p>
        </td>
      </tr>
    </table>
  `;

  const html = wrapEmailShell({
    preheader: `Careers application from ${data.fullName} · ${data.expertise}`,
    accent: "#1a6b4f",
    headerEyebrow: "Careers Application",
    headerTitle: "A new application arrived.",
    headerSubtitle: "Review the candidate details and attached résumé.",
    bodyHtml,
    footerNote: "Internal notification from System Heuristics Careers.",
    footerLinksHtml: `<a href="https://systemheuristics.com/careers" style="color:#9aefc8;text-decoration:none;">systemheuristics.com/careers</a>`,
  });

  const text = [
    "CAREERS APPLICATION",
    "",
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
    `Resume: ${data.resume?.name || "—"}`,
  ].join("\n");

  return {
    subject: `Careers application — ${data.fullName} (${data.expertise})`,
    html,
    text,
  };
}
