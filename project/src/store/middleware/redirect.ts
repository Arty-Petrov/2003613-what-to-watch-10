
import { Middleware } from 'redux';
import { reducer } from '../reducer';
import browserHistory from '../../browser-history';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'app/redirectToRoute') {
          browserHistory.push(action.payload);
          // eslint-disable-next-line no-console
          console.log(action.payload, (action.type === 'app/redirectToRoute'));
          // eslint-disable-next-line no-console
          console.log(action.payload, browserHistory.location);
        }

        return next(action);
      };
