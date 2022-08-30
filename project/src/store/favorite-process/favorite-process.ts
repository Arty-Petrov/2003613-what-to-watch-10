import { createSlice } from '@reduxjs/toolkit';
import { FavoriteProcess } from '../../types/state';
import { NameSpace } from '../../util/const';
import { fetchFavoriteFilmsAction } from '../api-actions';

const initialState: FavoriteProcess = {
  favoriteFilms: null,
  isDataLoading: false,
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFavoriteFilmsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, {payload}) => {
        state.favoriteFilms = payload;
        state.isDataLoading = false;
      });
  }
});
