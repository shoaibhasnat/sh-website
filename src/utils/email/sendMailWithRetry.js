/**
 * Send mail with delay + retries for transient Gmail SMTP errors (421 busy).
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRetryableSmtpError(error) {
  const blob = `${error?.response || ""} ${error?.message || ""} ${error?.code || ""}`.toLowerCase();
  return (
    blob.includes("421") ||
    blob.includes("450") ||
    blob.includes("451") ||
    blob.includes("busy") ||
    blob.includes("try again") ||
    blob.includes("rate") ||
    blob.includes("timeout") ||
    blob.includes("etimedout") ||
    blob.includes("econnreset") ||
    blob.includes("greeting")
  );
}

export async function sendMailWithRetry(
  transporter,
  mailOptions,
  { retries = 4, baseDelayMs = 1200 } = {},
) {
  let lastError;

  for (let attempt = 0; attempt < retries; attempt += 1) {
    try {
      if (attempt > 0) {
        await sleep(baseDelayMs * attempt);
      }
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      lastError = error;
      if (!isRetryableSmtpError(error) || attempt === retries - 1) {
        throw error;
      }
      console.warn(
        `[email] retry ${attempt + 1}/${retries - 1} after SMTP error:`,
        error?.response || error?.message,
      );
    }
  }

  throw lastError;
}
