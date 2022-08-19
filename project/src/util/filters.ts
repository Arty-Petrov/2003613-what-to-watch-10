import {Genre} from './const';
import Film from '../types/film';

export const Filter = {
  [Genre.AllGenres]: (films: Film []): Film [] => films,
  [Genre.Comedy]: (films: Film []): Film [] => films.filter((film) => film.genre === Genre.Comedy),
  [Genre.Crime]: (films: Film []): Film [] => films.filter((film) => film.genre === Genre.Crime),
  [Genre.Documentary]: (films: Film []): Film [] => films.filter((film) => film.genre === Genre.Documentary),
  [Genre.Drama]: (films: Film []): Film [] => films.filter((film) => film.genre === Genre.Drama),
  [Genre.Horror]: (films: Film []): Film [] => films.filter((film) => film.genre === Genre.Horror),
  [Genre.Adventure]: (films: Film []): Film [] => films.filter((film) => film.genre === Genre.Adventure),
  [Genre.Romance]: (films: Film []): Film [] => films.filter((film) => film.genre === Genre.Romance),
  [Genre.Scifi]: (films: Film []): Film [] => films.filter((film) => film.genre === Genre.Scifi),
  [Genre.Thriller]: (films: Film []): Film [] => films.filter((film) => film.genre === Genre.Thriller),
};
