import { createSlice } from '@reduxjs/toolkit';
import { getAvatar } from '../../services/avatar';
import { getName } from '../../services/name';
import { UserProcess } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../util/const';
import {checkAuthAction, fetchFavoriteFilmsAction, loginAction, logoutAction} from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userAvatar: '',
  name: '',
  favoriteFilms: null,
  isDataLoading: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userAvatar = getAvatar();
        state.name = getName();
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userAvatar = payload.avatarUrl;
        state.name = payload.name;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.error = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = initialState.authorizationStatus;
        state.userAvatar = initialState.userAvatar;
        state.name = initialState.name;
        state.favoriteFilms = initialState.favoriteFilms;
      })
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

export const { setError } = userProcess.actions;
