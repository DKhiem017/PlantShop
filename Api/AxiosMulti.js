import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

let token = AsyncStorage.getItem("Token");

const axiosMulti = axios.create({
  baseURL:
    "https://2e2a-2402-800-631d-fd4a-fc38-ca0b-db53-5ef9.ngrok-free.app/api/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosMulti.interceptors.request.use(async (config) => {
  //Handle token here
  if (token && config.headers) {
    config.headers.Authorization = token;
    return config;
  }
  return config;
});

axiosMulti.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    //Handle errors;
    throw error;
  }
);

export default axiosMulti;
