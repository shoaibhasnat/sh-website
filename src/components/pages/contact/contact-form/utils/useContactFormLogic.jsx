// useContactFormLogic.js
import { useState } from "react";
import toast from "react-hot-toast";
import {
  validateForm,
  checkDailyLimit,
  increaseDailyCount,
  sendEmail,
} from "./ContactFormUtils";

export const useContactFormLogic = (interests = []) => {
  const [formData, setFormData] = useState({
    padding: "",
    name: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [selectedInterest, setSelectedInterest] = useState(
    interests?.[0] || "",
  );
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [captchaKey, setCaptchaKey] = useState(0);
  const [emailFocused, setEmailFocused] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e?.target || {};
    if (!name) return;

    setFormData((prev) => ({ ...prev, [name]: value ?? "" }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const resetForm = () => {
    setFormData({ padding: "", name: "", message: "" });
    setSelectedInterest(interests?.[0] || "");
    setErrors({});
    setCaptchaToken(null);
    setCaptchaKey((k) => k + 1);
    setEmailFocused(false);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();

    if (loading) return;

    const honeypotEmail = e?.target?.email?.value;
    if (honeypotEmail) return;

    if (!captchaToken) {
      toast.error("Please verify that you are a human.");
      return;
    }

    if (!checkDailyLimit?.()) {
      toast.error("You can only send 10 messages per day.");
      return;
    }

    const validationErrors = validateForm?.(formData) || {};
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    try {
      setLoading(true);
      await sendEmail?.(formData, selectedInterest);
      toast.success("Message sent successfully!");
      increaseDailyCount?.();
      resetForm();
    } catch (err) {
      // console.error(err);
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    // state
    formData,
    errors,
    selectedInterest,
    captchaToken,
    loading,
    captchaKey,
    emailFocused,

    // setters
    setSelectedInterest,
    setCaptchaToken,
    setEmailFocused,

    // handlers
    handleInputChange,
    handleSubmit,
  };
};
