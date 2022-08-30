import { Comments } from '../../types/comment';
import { Film, Films } from '../../types/film';
import { State } from '../../types/state';
import { NameSpace } from '../../util/const';

export const getFilm = (state: State): Film | null => state[NameSpace.Film].film;
export const getFilmFavoriteStatus = (state: State): boolean | undefined=> state[NameSpace.Film].film?.isFavorite;
export const getPromoFilm = (state: State): Film | null => state[NameSpace.Film].promoFilm;
export const getSimilarFilms = (state: State): Films | null => state[NameSpace.Film].similarFilms;
export const getfilmComments = (state: State): Comments | null => state[NameSpace.Film].filmComments;
export const getDataLoadingStatus = (state: State): boolean => state[NameSpace.Film].isDataLoading;
