import { createReducer } from '@reduxjs/toolkit';
import { Genre, FILM_COUNT_STEP, AuthorizationStatus } from '../util/const';
import { changeGenre, incrFilmsCount, resetFilmsCount, reset, loadFilms, requireAuthorization, setDataLoadingStatus, setGenreFilmsCount, setUserData, clearUserData, loadPromo } from './action';
import { Film, Films } from '../types/film';
import { UserInfo } from '../types/user-info';

type InitalState = {
  genre: string,
  films: Films,
  promo: Film | null,
  filmsToRenderCount: number,
  genreFilmsCount: number,
  authorizationStatus: AuthorizationStatus,
  userInfo: UserInfo | null,
  isDataLoading: boolean,
}

const initialState: InitalState = {
  genre: Genre.AllGenres,
  films: [],
  promo: null,
  filmsToRenderCount: FILM_COUNT_STEP,
  genreFilmsCount: FILM_COUNT_STEP,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  isDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, { payload }) => {
      state.genre = payload;
    })
    .addCase(incrFilmsCount, (state) => {
      state.filmsToRenderCount += FILM_COUNT_STEP;
    })
    .addCase(setGenreFilmsCount, (state, { payload }) => {
      state.genreFilmsCount = (payload !== null) ? payload : FILM_COUNT_STEP;
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmsToRenderCount = FILM_COUNT_STEP;
    })
    .addCase(reset, (state) => {
      state.genre = initialState.genre;
      state.films = initialState.films;
      state.filmsToRenderCount = FILM_COUNT_STEP;
      state.genreFilmsCount = FILM_COUNT_STEP;
    })
    .addCase(loadFilms, (state, { payload }) => {
      state.films = payload;
    })
    .addCase(loadPromo, (state, { payload }) => {
      state.promo = payload;
    })
    .addCase(setDataLoadingStatus, (state, { payload }) => {
      state.isDataLoading = payload;
    })
    .addCase(requireAuthorization, (state, { payload }) => {
      state.authorizationStatus = payload;
    })
    .addCase(setUserData, (state, { payload }) => {
      state.userInfo = payload;
    })
    .addCase(clearUserData, (state) => {
      state.userInfo = null;
    });
});


export {reducer};
