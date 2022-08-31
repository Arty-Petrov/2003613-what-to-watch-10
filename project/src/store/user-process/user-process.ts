import { createSlice } from '@reduxjs/toolkit';
import { getAvatar } from '../../services/avatar';
import { getName } from '../../services/name';
import { UserProcess } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../util/const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { toast } from 'react-toastify';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userAvatar: '',
  name: '',
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
        toast.warn('We can\'t recognize this email and password combination. Please try again. Please try again later.');
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
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userAvatar = '';
        state.name = '';
      });
  }
});

export const { setError } = userProcess.actions;
