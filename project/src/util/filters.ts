import {Genre} from './const';
import { Films } from '../types/film';

export const Filter = {
  [Genre.AllGenres]: (films: Films): Films => films,
  [Genre.Comedy]: (films: Films): Films => films.filter((film) => film.genre === Genre.Comedy),
  [Genre.Crime]: (films: Films): Films => films.filter((film) => film.genre === Genre.Crime),
  [Genre.Documentary]: (films: Films): Films => films.filter((film) => film.genre === Genre.Documentary),
  [Genre.Drama]: (films: Films): Films => films.filter((film) => film.genre === Genre.Drama),
  [Genre.Horror]: (films: Films): Films => films.filter((film) => film.genre === Genre.Horror),
  [Genre.Adventure]: (films: Films): Films => films.filter((film) => film.genre === Genre.Adventure),
  [Genre.Romance]: (films: Films): Films => films.filter((film) => film.genre === Genre.Romance),
  [Genre.Scifi]: (films: Films): Films => films.filter((film) => film.genre === Genre.Scifi),
  [Genre.Thriller]: (films: Films): Films => films.filter((film) => film.genre === Genre.Thriller),
};
