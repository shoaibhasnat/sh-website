const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const outDir = path.join("public", "images", "email");
fs.mkdirSync(outDir, { recursive: true });

const original = fs.readFileSync(
  path.join("public", "images", "logo.svg"),
  "utf8",
);

// White mark on transparent background for dark email headers.
const svg = original
  .replace(/#002549/g, "#ffffff")
  .replace(
    "<svg ",
    '<svg xmlns="http://www.w3.org/2000/svg" ',
  );

const sizedSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="592" viewBox="0 0 25.52 29.47">
  ${svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "")}
</svg>
`.trim();

fs.writeFileSync(path.join(outDir, "logo-light.svg"), sizedSvg);

sharp(Buffer.from(sizedSvg), { density: 300 })
  .resize(256, 296, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .ensureAlpha()
  .png()
  .toFile(path.join(outDir, "logo-light.png"))
  .then(() => {
    console.log("created public/images/email/logo-light.png");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
