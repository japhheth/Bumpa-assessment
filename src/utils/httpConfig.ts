import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import appConfig from "./config";
import { StatusCode } from "./constants";

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "*/*",
};

class http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const localInstance = axios.create({
      baseURL: appConfig.baseUrl,
      headers,
    });

    localInstance.interceptors.response.use(
      (response) => {
        return response.data as AxiosResponse;
      },
      (error: AxiosError) => {
        const responseData = error;

        return this.handleError(responseData);
      }
    );
    this.instance = localInstance;
    return localInstance;
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.patch<T, R>(url, data, config);
  }

  private handleError(error: AxiosError) {
    switch (error?.response?.status) {
      case StatusCode.ResourceNotFound: {
        window.location.href = "/";
        break;
      }

      default:
        break;
    }
    return Promise.reject(error.response);
  }
}

export default http;
