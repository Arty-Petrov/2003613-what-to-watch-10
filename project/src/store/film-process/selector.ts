import { State } from '../../types/state';
import { NameSpace } from '../../util/const';
import {createSelector} from 'reselect';


export const getFilmState = (state: State) => state[NameSpace.Film];
export const getFilm = createSelector(getFilmState, (state) => state.film);
export const getFilmFavoriteStatus = createSelector(getFilmState, (state) => state.film?.isFavorite);
export const getPromoFilm = createSelector(getFilmState, (state) => state.promoFilm);
export const getSimilarFilms = createSelector(
  [getFilmState, getFilm],
  (state, film) => state.similarFilms?.filter((similar) => film?.id !== similar.id));

export const getDataLoadingStatus = createSelector(getFilmState, (state) => state.isDataLoading);
