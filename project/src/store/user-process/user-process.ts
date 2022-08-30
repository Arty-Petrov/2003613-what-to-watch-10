import { createSlice } from '@reduxjs/toolkit';
import { getAvatar } from '../../services/avatar';
import { getName } from '../../services/name';
import { UserProcess } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../util/const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userAvatar: '',
  name: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
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
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userAvatar = '';
        state.name = '';
      });
  }
});
