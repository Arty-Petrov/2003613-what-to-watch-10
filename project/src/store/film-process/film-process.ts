import {createSlice} from '@reduxjs/toolkit';
import {FilmProcess} from '../../types/state';
import {NameSpace} from '../../util/const';
import {fetchFilmAction, fetchPromoFilmAction, fetchSimilarFilmsAction, setFilmFavoriteAction} from '../api-actions';

const initialState: FilmProcess = {
  film: null,
  promoFilm: null,
  similarFilms: null,
  isDataLoading: false,
  error: null,
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
        state.error = true;
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
      .addCase(setFilmFavoriteAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(setFilmFavoriteAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(setFilmFavoriteAction.fulfilled, (state, {payload}) => {
        state.film = payload;
        state.isDataLoading = false;
      });
  }
});

export const { setPromoToFilmField } = filmProcess.actions;
