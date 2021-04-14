import axios from 'axios';
import { getToken } from "./auth";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 100000
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
