import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 1000
});

api.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('droppal-token') ?? '';
  config.headers.Authorization = token;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
