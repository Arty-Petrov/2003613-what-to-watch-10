import { createReducer } from '@reduxjs/toolkit';
import { Genre, FILM_COUNT_STEP, AuthorizationStatus } from '../util/const';
import { changeGenre,
  incrFilmsCount,
  resetFilmsCount,
  reset,
  loadFilms,
  requireAuthorization,
  setDataLoadingStatus,
  setGenreFilmsCount,
  setUserData,
  clearUserData,
  loadPromo,
  loadFilm,
  loadFavoriteFilms,
  loadSimilarFilms,
  loadFilmComments
} from './action';
import { Film, Films } from '../types/film';
import { UserInfo } from '../types/user-info';
import { Comments } from '../types/comment';

type InitalState = {
  genre: string,
  films: Films,
  favoriteFilms: Films,
  similarFilms: Films,
  promo: Film | null,
  film: Film | null,
  comments: Comments,
  filmsToRenderCount: number,
  genreFilmsCount: number,
  authorizationStatus: AuthorizationStatus,
  userInfo: UserInfo | null,
  isDataLoading: boolean,
}

const initialState: InitalState = {
  genre: Genre.AllGenres,
  films: [],
  favoriteFilms: [],
  similarFilms: [],
  promo: null,
  film: null,
  comments: [],
  filmsToRenderCount: FILM_COUNT_STEP,
  genreFilmsCount: FILM_COUNT_STEP,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  isDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, { payload }) => {
      state.genre = payload;
    })
    .addCase(incrFilmsCount, (state) => {
      state.filmsToRenderCount += FILM_COUNT_STEP;
    })
    .addCase(setGenreFilmsCount, (state, { payload }) => {
      state.genreFilmsCount = (payload !== null) ? payload : FILM_COUNT_STEP;
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmsToRenderCount = FILM_COUNT_STEP;
    })
    .addCase(reset, (state) => {
      state.genre = initialState.genre;
      state.films = initialState.films;
      state.filmsToRenderCount = FILM_COUNT_STEP;
      state.genreFilmsCount = FILM_COUNT_STEP;
    })
    .addCase(loadFilms, (state, { payload }) => {
      state.films = payload;
    })
    .addCase(loadFavoriteFilms, (state, { payload }) => {
      state.favoriteFilms = payload;
    })
    .addCase(loadSimilarFilms, (state, { payload }) => {
      state.similarFilms = payload;
    })
    .addCase(loadPromo, (state, { payload }) => {
      state.promo = payload;
    })
    .addCase(loadFilm, (state, { payload }) => {
      state.film = payload;
    })
    .addCase(loadFilmComments, (state, { payload }) => {
      state.comments = payload;
    })
    .addCase(setDataLoadingStatus, (state, { payload }) => {
      state.isDataLoading = payload;
    })
    .addCase(requireAuthorization, (state, { payload }) => {
      state.authorizationStatus = payload;
    })
    .addCase(setUserData, (state, { payload }) => {
      state.userInfo = payload;
    })
    .addCase(clearUserData, (state) => {
      state.userInfo = null;
    });
});


export {reducer};
