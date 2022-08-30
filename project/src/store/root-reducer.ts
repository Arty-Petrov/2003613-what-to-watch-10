import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../util/const';
import { filmsProcess } from './films-process/films-process';
import { filmProcess } from './film-process/film-process';
import { userProcess } from './user-process/user-process';
import { favoriteProcess } from './favorite-process/favorite-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.Favorite]: favoriteProcess.reducer,
});
