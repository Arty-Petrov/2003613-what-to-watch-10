import { createSlice } from '@reduxjs/toolkit';
import { FilmsProcess } from '../../types/state';
import { FILM_COUNT_STEP, Genre, NameSpace } from '../../util/const';
import { fetchFilmsAction } from '../api-actions';

const initialState: FilmsProcess = {
  films: null,
  activeGenre: Genre.AllGenres,
  filmsCount: FILM_COUNT_STEP,
  isDataLoading: false,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    increaseFilmsCount: (state) => {
      state.filmsCount += FILM_COUNT_STEP;
    },
    setActiveGenre: (state, {payload}) => {
      state.activeGenre = payload;
    },
    resetFilmsCount: (state) => {
      state.filmsCount = FILM_COUNT_STEP;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, {payload}) => {
        state.films = payload;
        state.isDataLoading = false;
      });
  }
});

export const {increaseFilmsCount, setActiveGenre, resetFilmsCount} = filmsProcess.actions;
