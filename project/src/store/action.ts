import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../util/const';

export const redirectToRouteAction = createAction<AppRoute>('app/redirectToRoute');

// export const changeGenre = createAction('catalog/changeGenre', (value) => ({payload: value}));
// export const incrFilmsCount = createAction('catalog/incrFilmsCount');
// export const reset = createAction('catalog/reset');
// export const resetFilmsCount = createAction('catalog/resetFilmsCount');
// export const setGenreFilmsCount = createAction<number | null>('catalog/setGenreFilmsCount');

// export const loadFilms = createAction<Films>('data/loadFilms');
// export const loadFavoriteFilms = createAction<Films>('data/loadFavoriteFilms');
// export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');

// export const loadPromo = createAction<Film>('data/loadPromo');
// export const loadFilm = createAction<Film>('data/loadFilm');

// export const loadFilmComments = createAction<Comments>('data/loadFilmComments');

// export const setFilmFavorite = createAction<boolean>('data/setFilmFavorite');
// export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

// export const clearUserData = createAction('user/clearUserData');
// export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
// export const setUserData = createAction<UserInfo>('user/setUserData');
