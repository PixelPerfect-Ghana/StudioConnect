import { apiClient } from "./config";

export const apiCreateStudio = async (payload) => {
  return await apiClient.post("/studios", payload);
};

export const apiGetAllStudios = async () => {
  return await apiClient.get("/studios");
};

export const apiGetUserStudio = async () => {
  return await apiClient.get(`/studios/me`);
};
export const apiGetStudioById = async (id) => {
  return await apiClient.get(`/studios/${id}`);
};

export const apiUpdateStudioDetails = async () => {
  return await apiClient.patch(`/studios/${id}`);
};

export const apiDeleteStudio = async () => {
  return await apiClient.delete(`/studios/${id}`);
};
