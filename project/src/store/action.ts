import {createAction} from '@reduxjs/toolkit';
import { Film, Films } from '../types/film';
import { UserInfo } from '../types/user-info';
import { AuthorizationStatus, AppRoute } from '../util/const';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const changeGenre = createAction('catalog/changeGenre', (value) => ({payload: value}));
export const incrFilmsCount = createAction('catalog/incrFilmsCount');
export const reset = createAction('catalog/reset');
export const resetFilmsCount = createAction('catalog/resetFilmsCount');
export const setGenreFilmsCount = createAction<number | null>('catalog/setGenreFilmsCount');
export const loadFilms = createAction<Films>('data/loadFilms');
export const loadPromo = createAction<Film>('data/loadPromo');
export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
export const clearUserData = createAction('user/clearUserData');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setUserData = createAction<UserInfo>('user/setUserData');
