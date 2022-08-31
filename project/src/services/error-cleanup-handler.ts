import { store } from '../store';
import { setError } from '../store/user-process/user-process';
import { TIMEOUT_DISPLAY_ERROR } from '../util/const';

export const errorCleanupHandler = (): void => {
  setTimeout(
    () => store.dispatch(setError(false)),
    TIMEOUT_DISPLAY_ERROR,
  );
};
