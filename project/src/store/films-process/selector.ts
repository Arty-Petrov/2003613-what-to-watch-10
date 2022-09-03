import { createSelector } from 'reselect';
import { State } from '../../types/state';
import { NameSpace} from '../../util/const';
import { Filter } from '../../util/filters';
import {getPromoFilm} from '../film-process/selector';

export const getFilmsState = (state: State) => state[NameSpace.Films];

export const getDataLoadingStatus = createSelector(getFilmsState,(state)=> state.isDataLoading);

export const getFilmsToRenderCount = createSelector(getFilmsState,(state)=> state.filmsCount);

export const getGetActiveGenre = createSelector(getFilmsState,(state)=> state.activeGenre);

export const getFilms = createSelector(
  [getFilmsState, getPromoFilm],
  (state, film) =>
    (state.films !== null && state.films !== undefined)
      ? state.films?.filter((films) => film?.id !== films.id)
      : []
);

export const getFilteredFilms = createSelector(
  [getFilms, getGetActiveGenre, getFilmsToRenderCount],
  (films, genre) => Filter[genre](films));

export const getFilteredFilmsCount = createSelector(
  [getFilteredFilms],
  (films) => films.length);

export const getFilmsToRender = createSelector(
  [getFilteredFilms, getFilmsToRenderCount],
  (films, count) => films.slice(0, count)
);
