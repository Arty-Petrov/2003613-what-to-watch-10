import {State} from '../../types/state';
import {NameSpace} from '../../util/const';
import {createSelector} from 'reselect';

export const getReviewState = (state: State) => state[NameSpace.Review];
export const getReviewSubmitStatus = createSelector(getReviewState, (state) => state.isReviewSubmited);
export const getCommentsLoadingStatus = createSelector(getReviewState, (state) => state.isDataLoading);
export const getFilmComments = createSelector(getReviewState, (state) => state.filmComments);
