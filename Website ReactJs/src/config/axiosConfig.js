import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API_URL || "https://localhost:7158",
  timeout: 9000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Adding token to every request if available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
