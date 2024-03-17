import axios from "axios";
import { API_AUTHENTICATE } from "./config";
import { logout } from "./services/logoutUser";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const onSuccess = (res) => Promise.resolve(res.data);
const onError = ({ response }) => {
  if (response === undefined) {
    let serviceNotReachable = { data: [{ require: "serviceNotReachable" }] };
    return Promise.reject(serviceNotReachable);
  } else {
    if (response.status === 401) {
      logout()
    }
    return Promise.reject(response);
  }
};


httpClient.interceptors.request.use((request) => {
  if (request.url !== API_AUTHENTICATE) {
    request.headers.Authorization = `Bearer ${localStorage.getItem("authToken")}`;
  }
  return request;
});

httpClient.interceptors.response.use((response) => response);

httpClient.interceptors.response.use(onSuccess, onError);

export default httpClient;