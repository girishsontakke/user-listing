import api from "./axiosInstance";

const service = {
  getUser: (userId: string | number) => api.get(`users/${userId}`),
  getUserList: () => api.get("users/")
};

export default service;
