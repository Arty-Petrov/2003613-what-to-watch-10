
import {State} from '../../types/state';
import { NameSpace } from '../../util/const';
import {createSelector} from 'reselect';

export const getUserState = (state: State) => state[NameSpace.User];
export const getAuthorizationStatus = createSelector(getUserState, (state) => state.authorizationStatus);
export const getError = createSelector(getUserState, (state) => state.error);
export const getUserAvatar = createSelector(getUserState, (state) => state.userAvatar);
export const getUserName = createSelector(getUserState, (state) => state.name);
export const getFavoriteFilms = createSelector(getUserState, (state) => state?.favoriteFilms);
export const getFavoriteFilmsCount = createSelector(getUserState, (state) => state?.favoriteFilms?.length);
