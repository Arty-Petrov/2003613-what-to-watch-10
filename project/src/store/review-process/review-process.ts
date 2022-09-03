import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../util/const';
import {addFilmCommentAction, fetchFilmCommentsAction} from '../api-actions';
import {ReviewProcess} from '../../types/state';

const initialState: ReviewProcess = {
  filmComments: [],
  isReviewSubmited: false,
  isDataLoading: false,
};

export const reviewProcess = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {
    resetReviewState: (state) => {
      state.isReviewSubmited = false;
    },
  },
  extraReducers(builder) {
    builder
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
      .addCase(addFilmCommentAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(addFilmCommentAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(addFilmCommentAction.fulfilled, (state, {payload}) => {
        state.filmComments = payload;
        state.isReviewSubmited = true;
        state.isDataLoading = false;
      });
  }
});

export const { resetReviewState } = reviewProcess.actions;
