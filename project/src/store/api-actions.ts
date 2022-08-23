import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { Comments } from '../types/comment';
import { FavoriteData } from '../types/favorite-data';
import { Film, FilmId, Films } from '../types/film';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user-data';
import { UserInfo } from '../types/user-info';
import { APIRoute, AppRoute, AuthorizationStatus } from '../util/const';
import {
  loadFilms,
  requireAuthorization,
  setDataLoadingStatus,
  setUserData,
  clearUserData,
  loadPromo,
  redirectToRoute,
  loadFilm,
  loadFilmComments,
  loadSimilarFilms,
  loadFavoriteFilms
} from './action';

type ThunkProps = {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}

export const fetchFilmsAction = createAsyncThunk<void, undefined, ThunkProps>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<void, undefined, ThunkProps>(
  'data/fetchFavoriteFilmsAction',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Films>(APIRoute.Favorite);
    dispatch(loadFavoriteFilms(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, ThunkProps>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    dispatch(loadPromo(data));
  },
);

export const fetchFilmAction = createAsyncThunk<void, FilmId, ThunkProps>(
  'data/fetchFilm',
  async (filmId, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Film>(`${APIRoute.Film}/${filmId}`);
    dispatch(loadFilm(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, FilmId, ThunkProps>(
  'data/fetchFilm',
  async (filmId, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Films>(`${APIRoute.Film}/${filmId}${APIRoute.Similar}`);
    dispatch(loadSimilarFilms(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const fetchFilmCommentsAction = createAsyncThunk<void, FilmId, ThunkProps>(
  'data/fetchFilm',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${filmId}`);
    dispatch(loadFilmComments(data));
  },
);

export const setFilmFavoriteAction = createAsyncThunk<void, FavoriteData, ThunkProps>(
  'data/setFilmFavoriteAction',
  async ({filmId, status}, {dispatch, extra: api}) => {
    await api.post<Film>(`${APIRoute.Favorite}/${filmId}/${status}`);
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkProps>(
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

export const loginAction = createAsyncThunk<void, AuthData, ThunkProps>(
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

export const logoutAction = createAsyncThunk<void, undefined, ThunkProps>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(clearUserData());
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
