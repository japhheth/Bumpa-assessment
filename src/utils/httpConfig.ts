import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { StatusCode } from "./constants";

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "*/*",
};

const handleError = (error: AxiosError) => {
  switch (error?.response?.status) {
    case StatusCode.ResourceNotFound: {
      window.location.href = "/";
      break;
    }

    default:
      break;
  }
  return Promise.reject(error.response);
};

const http: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers,
});

http.interceptors.response.use(
  (response) => {
    return response.data as AxiosResponse;
  },
  (error: AxiosError) => {
    const responseData = error;

    return handleError(responseData);
  }
);

export default http;
