import { createSlice } from '@reduxjs/toolkit';
import { FilmProcess } from '../../types/state';
import { NameSpace } from '../../util/const';
import { addFilmCommentAction, fetchFilmAction, fetchFilmCommentsAction, fetchPromoFilmAction, fetchSimilarFilmsAction, setFilmFavoriteAction } from '../api-actions';

const initialState: FilmProcess = {
  film: null,
  promoFilm: null,
  similarFilms: null,
  filmComments: [],
  isDataLoading: false,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    setPromoToFilmField: (state) => {
      state.film = state.promoFilm;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, {payload}) => {
        state.promoFilm = payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchFilmAction.fulfilled, (state, {payload}) => {
        state.film = payload;
        state.isDataLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, {payload}) => {
        state.similarFilms = payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFilmCommentsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmCommentsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchFilmCommentsAction.fulfilled, (state, {payload}) => {
        state.filmComments = payload;
        state.isDataLoading = false;
      })
      .addCase(setFilmFavoriteAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(setFilmFavoriteAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(setFilmFavoriteAction.fulfilled, (state, {payload}) => {
        state.film = payload;
        state.isDataLoading = false;
      })
      .addCase(addFilmCommentAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(addFilmCommentAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(addFilmCommentAction.fulfilled, (state, {payload}) => {
        state.filmComments = payload;
        state.isDataLoading = false;
      });
  }
});

export const { setPromoToFilmField } = filmProcess.actions;
