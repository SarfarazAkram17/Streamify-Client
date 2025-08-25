import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://streamify-server-sri7.onrender.com",
  withCredentials: true,
});