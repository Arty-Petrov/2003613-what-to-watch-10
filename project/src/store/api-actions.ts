import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { dropAvatar, saveAvatar } from '../services/avatar';
import { dropName, saveName } from '../services/name';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { Comments } from '../types/comment';
import { CommentData } from '../types/comment-data';
import { FavoriteData } from '../types/favorite-data';
import { Film, FilmId, Films } from '../types/film';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user-data';
import { APIRoute } from '../util/const';

type ThunkProps = {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}

export const fetchFilmsAction = createAsyncThunk<Films, undefined, ThunkProps>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Films, undefined, ThunkProps>(
  'data/fetchFavoriteFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Favorite);
    return data;
  },
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, ThunkProps>(
  'data/fetchPromo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<Film, FilmId, ThunkProps>(
  'data/fetchFilm',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Film}/${filmId}`);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Films, FilmId, ThunkProps>(
  'data/fetchSimilarFilm',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<Films>(`${APIRoute.Film}/${filmId}${APIRoute.Similar}`);
    return data;
  },
);

export const fetchFilmCommentsAction = createAsyncThunk<Comments, FilmId, ThunkProps>(
  'data/fetchFilmComments',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${filmId}`);
    return data;
  },
);

export const setFilmFavoriteAction = createAsyncThunk<Film, FavoriteData, ThunkProps>(
  'data/toggleFilmFavorite',
  async ({filmId, status}, {extra: api}) => {
    const {data} = await api.post<Film>(`${APIRoute.Favorite}/${filmId}/${status}`);
    return data;
  },
);

export const addFilmCommentAction = createAsyncThunk<Comments, CommentData, ThunkProps>(
  'data/addFilmComment',
  async ({filmId, comment, rating}, {extra: api}) => {
    const {data} = await api.post<Comments>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkProps>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, ThunkProps>(
  'user/login',
  async ({login: email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    saveAvatar(data.avatarUrl);
    saveName(data.name);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkProps>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropAvatar();
    dropName();
  },
);
