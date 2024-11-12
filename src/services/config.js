import axios from "axios";

// Create axios instance
export const apiClient = axios.create({
  baseURL: "https://advertisement-back-end.onrender.com", // Base API URL
  headers: {
    "Content-Type": "application/json",
  },
});


