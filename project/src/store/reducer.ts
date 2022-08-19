import { createReducer } from '@reduxjs/toolkit';
import { Genre, FILM_COUNT_STEP } from '../util/const';
import { changeGenre, filterFilms, incrFilmsCount, resetFilmsCount, reset } from './action';
import { generateFilms } from '../mock/film-data';

const initialState = {
  genre: Genre.AllGenres,
  films: generateFilms(Genre.AllGenres),
  filmsCount: FILM_COUNT_STEP,
  // activeFilmCard: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, { payload }) => {
      state.genre = payload;
    });
  builder
    .addCase(filterFilms, (state, { payload }) => {
      state.films = generateFilms(payload);
    });
  builder
    .addCase(incrFilmsCount, (state) => {
      state.filmsCount += FILM_COUNT_STEP;
    });
  builder
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = FILM_COUNT_STEP;
    });
  builder
    .addCase(reset, (state) => {
      state.genre = initialState.genre;
      state.films = initialState.films;
      state.filmsCount = initialState.filmsCount;
    });
});


export {reducer};
