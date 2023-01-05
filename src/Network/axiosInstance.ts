import axios, { AxiosInstance } from "axios";

const api = configureApi(
  axios.create({
    baseURL: "https://reqres.in/api/",
    headers: {
      "Content-Type": "application/json"
    }
  })
);

function configureApi(API: AxiosInstance) {
  API.interceptors.response.use((response) => response.data);
  return API;
}

export default api;
