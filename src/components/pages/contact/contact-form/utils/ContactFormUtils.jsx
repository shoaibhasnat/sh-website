const { default: emailjs } = await import("@emailjs/browser");

// ✅ Regex rules
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const NAME_REGEX = /^[a-zA-Z\s.'-]{2,50}$/;
export const MIN_MESSAGE_LENGTH = 3;

// 🔒 Local limit config
export const LIMIT_PER_DAY = 10;
export const STORAGE_KEY = "contact_form_daily_limit";

// 🔹 Validate form fields
export const validateForm = (formData) => {
  const errors = {};

  if (!formData.padding.trim()) {
    errors.padding = "Email is required";
  } else if (!EMAIL_REGEX.test(formData.padding)) {
    errors.padding = "Please enter a valid email address";
  }

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (!NAME_REGEX.test(formData.name)) {
    errors.name = "Please enter a valid name";
  }

  if (!formData.message.trim()) {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters`;
  }

  return errors;
};

// 🔹 Check daily limit
export const checkDailyLimit = () => {
  const today = new Date().toDateString();
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

  if (stored.date !== today) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: today, count: 0 }),
    );
    return true;
  }

  return stored.count < LIMIT_PER_DAY;
};

export const increaseDailyCount = () => {
  const today = new Date().toDateString();
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  const newCount = stored.date === today ? (stored.count || 0) + 1 : 1;
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ date: today, count: newCount }),
  );
};

// 🔹 Send email using EmailJS
export const sendEmail = async (formData, selectedInterest) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: formData.name,
      padding: formData.padding,
      message: formData.message,
      selectedInterest,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  );
};
