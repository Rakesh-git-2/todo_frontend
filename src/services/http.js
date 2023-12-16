import Axios, { AxiosRequestConfig } from 'axios';
import {redirect} from 'react-router-dom';

const http = Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

http.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token');
  if (!token) return config;
  if (config?.headers) {
    config.headers = { Authorization: `Token ${token}` };
  }
  return config;
});

http.interceptors.response.use(
  (value) => {
    return Promise.resolve(value);
  },
  (error) => {
    const { isAxiosError = false, response = null } = error;

    if (isAxiosError && response && response.status === 401) {
      // User redirection rule for login page
      redirect('/login')
      return Promise.reject(error);
    }
    if (isAxiosError && response && response.status === 403) {
      // User redirection rule for disallowed page
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default http;

