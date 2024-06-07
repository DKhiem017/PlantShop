import axios from "axios";

//let token = localStorage.getItem("token");

const axiosClient = axios.create({
  baseURL:
    "https://2c30-2402-800-631d-9c15-913d-e1c4-e257-56e4.ngrok-free.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  //Handle token here
  // if (token && config.headers) {
  //     config.headers.Authorization = token;
  //     return config;
  // }
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
