
import {State} from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../util/const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserAvatar = (state: State): string => state[NameSpace.User].userAvatar;
export const getUserName = (state: State): string => state[NameSpace.User].name;
