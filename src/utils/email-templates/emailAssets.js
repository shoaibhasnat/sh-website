import fs from "fs";
import path from "path";

export const EMAIL_LOGO_CID = "logo@systemheuristics.com";

function getLogoPath() {
  return path.join(
    process.cwd(),
    "public",
    "images",
    "email",
    "logo-light.png",
  );
}

/** Inline white logo attachment for Nodemailer (visible on dark headers). */
export function getEmailLogoAttachment() {
  const logoPath = getLogoPath();
  const content = fs.readFileSync(logoPath);

  return {
    filename: "system-heuristics-logo.png",
    content,
    contentType: "image/png",
    cid: EMAIL_LOGO_CID,
    contentDisposition: "inline",
  };
}

export function emailLogoImg({ height = 64 } = {}) {
  // Keep aspect ratio of the mark (~25.5 x 29.5)
  const width = Math.round((height * 25.52) / 29.47);

  return `
    <img
      src="cid:${EMAIL_LOGO_CID}"
      alt="System Heuristics"
      width="${width}"
      height="${height}"
      style="display:block;border:0;outline:none;text-decoration:none;width:${width}px;height:${height}px;max-width:${width}px;"
    />
  `.trim();
}
