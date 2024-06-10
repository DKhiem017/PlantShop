import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

let token = AsyncStorage.getItem("Token");

const axiosClient = axios.create({
  baseURL: "https://3f9a-2402-800-631d-fd4a-f897-6339-36ef-7502.ngrok-free.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  //Handle token here
  if (token && config.headers) {
    config.headers.Authorization = token;
    return config;
  }
  return config;
});

axiosClient.interceptors.response.use(
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

export default axiosClient;
