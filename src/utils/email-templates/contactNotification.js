import {
  buildDetailRows,
  escapeHtml,
  wrapEmailShell,
} from "./emailShell";

/**
 * Internal notification when someone submits the contact form.
 */
export function buildContactNotification(data) {
  const rows = [
    ["Name", data.name],
    ["Business Email", data.email],
    ["Phone", data.phone || "—"],
    ["Company", data.companyName],
    ["Website", data.companyWebsite || "—"],
    ["Industry", data.industry || "—"],
    ["Company Size", data.companySize || "—"],
  ];

  if (data.service) rows.push(["Service", data.service]);
  if (data.budget) rows.push(["Budget", data.budget]);
  if (data.source) rows.push(["Source", data.source]);
  rows.push(["Problem", data.problem]);

  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding:28px 32px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f9fd;border:1px solid #dceef9;border-radius:12px;">
            <tr>
              <td style="padding:18px 20px;">
                <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#00b3ff;font-weight:bold;">
                  Lead summary
                </p>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#3a5166;">
                  <strong style="color:#00213a;">${escapeHtml(data.name)}</strong>
                  from
                  <strong style="color:#00213a;">${escapeHtml(data.companyName)}</strong>
                  submitted a new request.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 32px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${buildDetailRows(rows)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 32px 32px;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#7a8fa3;">
            Reply directly to this email to respond to
            <a href="mailto:${escapeHtml(data.email)}" style="color:#00b3ff;text-decoration:none;">${escapeHtml(data.email)}</a>.
          </p>
        </td>
      </tr>
    </table>
  `;

  const html = wrapEmailShell({
    preheader: `New contact request from ${data.name} at ${data.companyName}`,
    headerEyebrow: "New Contact Request",
    headerTitle: "A new lead just came in.",
    headerSubtitle: "Review the details below and follow up when ready.",
    bodyHtml,
    footerNote: "Internal notification from the System Heuristics website.",
    footerLinksHtml: `<a href="https://systemheuristics.com" style="color:#7dd3ff;text-decoration:none;">systemheuristics.com</a>`,
  });

  const text = [
    "NEW CONTACT REQUEST",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Company: ${data.companyName}`,
    `Website: ${data.companyWebsite || "—"}`,
    `Industry: ${data.industry || "—"}`,
    `Company Size: ${data.companySize || "—"}`,
    data.service ? `Service: ${data.service}` : null,
    data.budget ? `Budget: ${data.budget}` : null,
    data.source ? `Source: ${data.source}` : null,
    "",
    "Problem:",
    data.problem,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return {
    subject: `New contact request from ${data.name} (${data.companyName})`,
    html,
    text,
  };
}
