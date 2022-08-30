import { createSelector } from 'reselect';
import { Films } from '../../types/film';
import { State } from '../../types/state';
import { NameSpace, Genre } from '../../util/const';
import { Filter } from '../../util/filters';

export const getFilms = (state: State): Films | null => state[NameSpace.Films].films;
export const getDataLoadingStatus = (state: State): boolean => state[NameSpace.Films].isDataLoading;
export const getFilmsToRenderCount = (state: State): number => state[NameSpace.Films].filmsCount;
export const getGetActiveGenre = (state: State): Genre => state[NameSpace.Films].activeGenre;

export const getFilteredFilms = createSelector(
  [getFilms, getGetActiveGenre, getFilmsToRenderCount],
  (films, genre) => (films !== null) ? Filter[genre](films) : []);

export const getFilteredFilmsCount = createSelector(
  [getFilteredFilms],
  (films) => (films !== null && films !== undefined) ? films.length : null);

export const getFilmsToRender = createSelector(
  [getFilteredFilms, getFilmsToRenderCount],
  (films, count) => films.slice(0, count)
);

