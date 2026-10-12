import { AUTH_LOGIN, AUTH_LOGOUT } from "../types/authTypes";

// Placeholder auth actions - maintain existing structure
export const login = (userData) => ({
  type: AUTH_LOGIN,
  payload: userData,
});

export const logout = () => ({
  type: AUTH_LOGOUT,
});
