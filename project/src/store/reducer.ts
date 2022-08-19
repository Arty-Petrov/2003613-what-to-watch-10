import { createReducer } from '@reduxjs/toolkit';
import { Genre } from '../util/const';
import { changeGenre, filterFilms, reset } from './action';
import { generateFilms } from '../mock/film-data';

const initialState = {
  genre: Genre.AllGenres,
  films: generateFilms(Genre.AllGenres),
  filmsCounter: 20,
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
    .addCase(reset, (state) => {
      state.genre = initialState.genre;
      state.films = initialState.films;
      state.filmsCounter = initialState.filmsCounter;
    });
});


export {reducer};
