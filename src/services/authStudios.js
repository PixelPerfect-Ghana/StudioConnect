import { apiClient } from "./config";

export const apiSignupForm = async (payload) => {
    return await apiClient.post("/users/register", payload);
  };
  

export const apiLoginForm = async(payload) => {
    return await apiClient.post("/users/login", payload)
};

export const apiForgotPassword = async(payload) => {
    return await apiClient.post("users/forgot-password", payload)
};
