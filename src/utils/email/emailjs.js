function requireEnv(key) {
  const value = import.meta.env?.[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

/**
 * Sends a newsletter subscription email via EmailJS.
 * EmailJS is dynamically loaded only when a user submits the form.
 */
export async function sendNewsletterSubscription(email) {
  const { default: emailjs } = await import("@emailjs/browser");

  const serviceId = requireEnv("VITE_EMAILJS_SERVICE_ID");
  const publicKey = requireEnv("VITE_EMAILJS_PUBLIC_KEY");

  const templateId =
    import.meta.env?.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID ||
    requireEnv("VITE_EMAILJS_TEMPLATE_ID_NEWSLETTER");

  const trimmedEmail = String(email || "").trim();
  if (!trimmedEmail) {
    throw new Error("Email is required");
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      email: trimmedEmail,
    },
    publicKey,
  );
}
