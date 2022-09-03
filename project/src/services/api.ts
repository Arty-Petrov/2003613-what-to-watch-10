import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import {StatusCodes} from 'http-status-codes';
import {getToken} from './token';
import {redirectToRouteAction} from '../store/action';
import {store} from '../store';
import {AppRoute} from '../util/const';

const BACKEND_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === StatusCodes.NOT_FOUND) {
        store.dispatch(redirectToRouteAction(AppRoute.NotFound));
      }

      throw error;
    }
  );

  return api;
};
