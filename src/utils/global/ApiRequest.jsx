import axios from "axios";

export const apiRequest  = async ({
  method = "get",
  url,
  token,
  data = null,
  params = null,
  isFormData = false,
  successMessage = null,
  errorMessage = "An unexpected error occurred.",
  onSuccess, // (msg, responseData) => void
  onError, // (msg, error) => void
}) => {
  try {
    const headers = {
      ...(token ? { Authorization: token } : {}),
      ...(isFormData ? { "Content-Type": "multipart/form-data" } : {}),
    };

    const response = await axios({ method, url, headers, data, params });

    if (successMessage && typeof onSuccess === "function") {
      onSuccess(successMessage, response.data);
    }

    return response.data;
  } catch (error) {
    console.error(error);

    const errorText =
      error?.response?.data?.message ||
      error?.response?.data?.detail ||
      error?.response?.data?.error ||
      errorMessage;

    if (typeof onError === "function") {
      onError(errorText, error);
    }

    return null;
  }
};
