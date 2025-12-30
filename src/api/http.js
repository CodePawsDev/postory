import axios from "axios";

export const http = axios.create({
  baseURL: "https://blog-post-project-api.vercel.app",
  timeout: 10000,
});

// Interceptor for request 