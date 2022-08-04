import axios from "redaxios";
import authHeader from "../services/AuthHeader";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    accept: "application/json, text/plain, */*",
    withCredentials: true,
    "Content-Type": "application/json",
  },
});
api.defaults.headers.common = authHeader()


export default api;
