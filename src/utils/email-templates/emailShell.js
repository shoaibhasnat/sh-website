import { emailLogoImg } from "./emailAssets";

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function displayValue(value) {
  const text = String(value ?? "").trim();
  return text ? escapeHtml(text) : "—";
}

/**
 * Shared shell for System Heuristics transactional emails (Gmail-safe tables).
 * Logo is rendered via cid:sh-logo — attach getEmailLogoAttachment() on send.
 */
export function wrapEmailShell({
  preheader = "",
  accent = "#00b3ff",
  headerEyebrow,
  headerTitle,
  headerSubtitle = "",
  bodyHtml,
  footerNote = "System Heuristics · AI, automation & custom software",
  footerLinksHtml = "",
}) {
  const safePreheader = escapeHtml(preheader);
  const safeEyebrow = escapeHtml(headerEyebrow);
  const safeTitle = escapeHtml(headerTitle);
  const safeSubtitle = escapeHtml(headerSubtitle);
  const logo = emailLogoImg({ height: 64 });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <title>${safeTitle}</title>
</head>
<body style="margin:0;padding:0;background:#e8f1f8;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    ${safePreheader}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e8f1f8;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border:1px solid #d5e6f3;border-radius:18px;overflow:hidden;">
          <tr>
            <td style="height:4px;background:${accent};font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="background:#001830;padding:28px 32px 30px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 0 24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:middle;padding-right:14px;">
                          ${logo}
                        </td>
                        <td style="vertical-align:middle;">
                          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:bold;color:#ffffff;letter-spacing:0.01em;line-height:1.2;">
                            System Heuristics
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${accent};font-weight:bold;">
                      ${safeEyebrow}
                    </p>
                    <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.25;color:#ffffff;font-weight:normal;">
                      ${safeTitle}
                    </h1>
                    ${
                      headerSubtitle
                        ? `<p style="margin:14px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#b7d4ea;">${safeSubtitle}</p>`
                        : ""
                    }
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0;font-family:Arial,Helvetica,sans-serif;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="background:#001830;padding:22px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 12px;">
                <tr>
                  <td style="vertical-align:middle;padding-right:10px;">
                    ${emailLogoImg({ height: 48 })}
                  </td>
                  <td style="vertical-align:middle;">
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#ffffff;font-weight:bold;">
                      System Heuristics
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.65;color:#8eb6d4;">
                ${escapeHtml(footerNote)}
                ${footerLinksHtml ? `<br />${footerLinksHtml}` : ""}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}

export function buildDetailRows(rows) {
  return rows
    .map(([label, value], index) => {
      const isLast = index === rows.length - 1;
      return `
        <tr>
          <td style="padding:14px 0 ${isLast ? "0" : "14px"};border-bottom:${isLast ? "none" : "1px solid #e7eef5"};vertical-align:top;width:38%;">
            <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:#7a8fa3;font-weight:bold;">
              ${escapeHtml(label)}
            </p>
          </td>
          <td style="padding:14px 0 ${isLast ? "0" : "14px"} 16px;border-bottom:${isLast ? "none" : "1px solid #e7eef5"};vertical-align:top;">
            <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:#00213a;white-space:pre-wrap;">
              ${displayValue(value)}
            </p>
          </td>
        </tr>`;
    })
    .join("");
}

export function ctaButton({ href, label, background = "#00b3ff", color = "#001830" }) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
      <tr>
        <td style="border-radius:10px;background:${background};">
          <a href="${escapeHtml(href)}" style="display:inline-block;padding:14px 28px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:bold;color:${color};text-decoration:none;">
            ${escapeHtml(label)}
          </a>
        </td>
      </tr>
    </table>`;
}
