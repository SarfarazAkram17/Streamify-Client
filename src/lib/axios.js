import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://streamify-server-9tu5.onrender.com/",
  withCredentials: true,
});