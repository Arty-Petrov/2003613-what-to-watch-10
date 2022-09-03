import { store } from '../store';
import { AuthorizationStatus, Genre } from '../util/const';
import { Comments } from './comment';
import { Film, Films } from './film';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  error: boolean | null,
  userAvatar: string,
  name: string,
  favoriteFilms: Films | null,
  isDataLoading: boolean,
};

export type FilmsProcess = {
  films: Films | null,
  activeGenre: Genre;
  filmsCount: number,
  isDataLoading: boolean,
};

export type FilmProcess = {
  film: Film | null,
  promoFilm: Film | null,
  similarFilms: Films | null,
  isDataLoading: boolean,
  error: boolean | null,
};

export type ReviewProcess = {
  filmComments: Comments,
  isReviewSubmited: boolean,
  isDataLoading: boolean,
};
