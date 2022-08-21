import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { Film, Films } from '../types/film';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user-data';
import { UserInfo } from '../types/user-info';
import { APIRoute, AppRoute, AuthorizationStatus } from '../util/const';
import { loadFilms, requireAuthorization, setDataLoadingStatus, setUserData, clearUserData, loadPromo, redirectToRoute } from './action';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.films);
    dispatch(setDataLoadingStatus(true));
    dispatch(loadFilms(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.promo);
    dispatch(loadPromo(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: userData} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(userData.token);

    const userInfo: UserInfo = {
      avatarUrl: userData.avatarUrl,
      userEmail: userData.avatarUrl,
      userId: userData.id,
      userName: userData.name,
    };
    dispatch(setUserData(userInfo));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(clearUserData());
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
