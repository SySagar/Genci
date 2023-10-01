import useAxiosAuthorized from "./hooks/useAxiosAuthorized";
import axios, { AxiosInstance, AxiosProgressEvent } from "axios";
import CreateUserData from "./types/signupTypes";
import LoginData from "./types/loginType";
import profileTypes from "./types/profileTypes";
import Cookies from "js-cookie";
import refresh from "./hooks/useRefreshToken";

const APIInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const AuthorizedAPIInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

AuthorizedAPIInstance.interceptors.request.use((config) => {
  config.headers.Authorization = Cookies.get("accessToken");
  return config;
});


const APIMethods = {
  auth: {
    login: (data: LoginData) =>{return  APIInstance.post("/auth/login", data)},
    signUp: (data: CreateUserData) =>{console.log(data); APIInstance.post("/auth/register", data)},
  },
  dashboard: {
    dashboard: () => AuthorizedAPIInstance.get("/dashboard"),
  },
  profile: {
    profile: (data: profileTypes) => {
      return AuthorizedAPIInstance.post("/profile", data);
    },
  },
};

export { APIMethods, AuthorizedAPIInstance };
