import {GenreFilters} from './const';
import Film from '../types/film';

export const Filter = {
  [GenreFilters.AllGenres]: (films: Film []): Film [] => films,
  [GenreFilters.Comedy]: (films: Film []): Film [] => films.filter((film) => film.genre === GenreFilters.Comedy),
  [GenreFilters.Crime]: (films: Film []): Film [] => films.filter((film) => film.genre === GenreFilters.Crime),
  [GenreFilters.Documentary]: (films: Film []): Film [] => films.filter((film) => film.genre === GenreFilters.Documentary),
  [GenreFilters.Drama]: (films: Film []): Film [] => films.filter((film) => film.genre === GenreFilters.Drama),
  [GenreFilters.Horror]: (films: Film []): Film [] => films.filter((film) => film.genre === GenreFilters.Horror),
  [GenreFilters.Adventure]: (films: Film []): Film [] => films.filter((film) => film.genre === GenreFilters.Adventure),
  [GenreFilters.Romance]: (films: Film []): Film [] => films.filter((film) => film.genre === GenreFilters.Romance),
  [GenreFilters.SciFi]: (films: Film []): Film [] => films.filter((film) => film.genre === GenreFilters.SciFi),
  [GenreFilters.Thriller]: (films: Film []): Film [] => films.filter((film) => film.genre === GenreFilters.Thriller),
};
