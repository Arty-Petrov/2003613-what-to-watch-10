import {createAction} from '@reduxjs/toolkit';
import { Films } from '../types/film';
import { AuthorizationStatus } from '../util/const';

export const setError = createAction<string | null>('app/setError');
export const changeGenre = createAction('catalog/changeGenre', (value) => ({payload: value}));
export const filterFilms = createAction('catalog/filterFilms', (value) => ({payload: value}));
export const incrFilmsCount = createAction('catalog/incrFilmsCount');
export const resetFilmsCount = createAction('catalog/resetFilmsCount');
export const reset = createAction('catalog/reset');

export const loadFilms = createAction<Films>('data/loadFilms');
export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
