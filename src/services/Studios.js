import { apiClient } from "./config";

export const apiCreateStudio = async (payload) => {
    return await apiClient.post("/studios", payload);
  };
  