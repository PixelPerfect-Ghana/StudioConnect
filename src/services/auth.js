import { apiClient } from "./config";

export const apiSignUp = async (payload) => {
  return await apiClient.post("/users/register", payload);
};

export const apiLogin = async (payload) => {
  return await apiClient.post("/users/login", payload);
};

export const apiGetProfile = async () => {
  return await apiClient.get("/users/me");
};

export const apiForgotPassword = async (payload) => {
  return await apiClient.post("users/forgot-password", payload);
};
