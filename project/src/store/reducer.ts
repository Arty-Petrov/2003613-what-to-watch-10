import { createReducer } from '@reduxjs/toolkit';
import { Genre, FILM_COUNT_STEP, AuthorizationStatus } from '../util/const';
import { changeGenre, filterFilms, incrFilmsCount, resetFilmsCount, reset, loadFilms, requireAuthorization, setError, setDataLoadingStatus } from './action';
import { generateFilms } from '../mock/film-data';
import { Films } from '../types/film';

type InitalState = {
  genre: string,
  films: Films,
  filmsCount: number,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  isDataLoading: boolean,
}

const initialState: InitalState = {
  genre: Genre.AllGenres,
  films: generateFilms(Genre.AllGenres),
  filmsCount: FILM_COUNT_STEP,
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
    .addCase(filterFilms, (state, { payload }) => {
      state.films = generateFilms(payload);
    })
    .addCase(incrFilmsCount, (state) => {
      state.filmsCount += FILM_COUNT_STEP;
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = FILM_COUNT_STEP;
    })
    .addCase(reset, (state) => {
      state.genre = initialState.genre;
      state.films = initialState.films;
      state.filmsCount = initialState.filmsCount;
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
