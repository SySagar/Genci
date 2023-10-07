import axios, { AxiosInstance } from "axios";
import CreateUserData from "./types/signupTypes";
import LoginData from "./types/loginType";
import profileTypes from "./types/profileTypes";
import Cookies from "js-cookie";

const APIInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
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
  user:{
    verify: () => {return AuthorizedAPIInstance.post("/user/verify")},
  },
  playgrounds: {
    createRoom: () => {return AuthorizedAPIInstance.get("/playgrounds/createRoom")},
    executeCode: (data: any) => { return AuthorizedAPIInstance.post("/playgrounds/results", data)},
    populatePlayground: (data: any) => { console.log(data); return AuthorizedAPIInstance.post("/playgrounds/populatePlayground", data)},
    createPlayground: (data: any) => { return AuthorizedAPIInstance.post("/playgrounds/createPlayground", data)},
  },
  profile: {
    profile: (data: profileTypes) => {
      return AuthorizedAPIInstance.post("/profile", data);
    },
  },
};

export { APIMethods, AuthorizedAPIInstance };
