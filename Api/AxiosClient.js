import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import ApiURL from "../constants/baseURL";

let token = AsyncStorage.getItem("Token");

const axiosClient = axios.create({
  baseURL: `${ApiURL}/api/`,
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
