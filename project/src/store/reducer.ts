import { createReducer } from '@reduxjs/toolkit';
import { Genre, FILM_COUNT_STEP, AuthorizationStatus } from '../util/const';
import { changeGenre, incrFilmsCount, resetFilmsCount, reset, loadFilms, requireAuthorization, setError, setDataLoadingStatus, setGenreFilmsCount } from './action';
import { Films } from '../types/film';

type InitalState = {
  genre: string,
  films: Films,
  filmsToRenderCount: number,
  genreFilmsCount: number,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  isDataLoading: boolean,
}

const initialState: InitalState = {
  genre: Genre.AllGenres,
  films: [],
  filmsToRenderCount: FILM_COUNT_STEP,
  genreFilmsCount: FILM_COUNT_STEP,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoading: true,
  // activeFilmCard: null,
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
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});


export {reducer};
