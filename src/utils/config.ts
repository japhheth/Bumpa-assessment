declare global {
  interface Window {
    _env_: {
      REACT_APP_BASEURL: string;
    };
  }
}

interface AppConfig {
  baseUrl: string;
}

const config: AppConfig = {
  baseUrl: window._env_.REACT_APP_BASEURL,
};

export default config;
