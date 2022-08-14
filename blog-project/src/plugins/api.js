import axios from "redaxios";
import authHeader from "../services/AuthHeader";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
export default function api() {
  axiosInstance.defaults.headers = authHeader();
  return axiosInstance;
}
