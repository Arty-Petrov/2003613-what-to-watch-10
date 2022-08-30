import { Films } from '../../types/film';
import { State } from '../../types/state';
import { NameSpace } from '../../util/const';

export const getFavoriteFilms = (state: State): Films | null => state[NameSpace.Favorite].favoriteFilms;
