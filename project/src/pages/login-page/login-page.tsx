import { FormEvent, useEffect, useRef, useState } from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilmsAction, loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { AppRoute, AuthorizationStatus, ErrorMessages, LogoState } from '../../util/const';
import { getAuthorizationStatus, getError } from '../../store/user-process/selector';
import { useNavigate } from 'react-router-dom';
import { errorCleanupHandler } from '../../services/error-cleanup-handler';
import LoginFormErrorMessage from '../../components/login-form-error-message/login-form-error-message';
import { setError } from '../../store/user-process/user-process';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(getError);
  const [errorType, setErrorType] = useState(ErrorMessages.FalseLoginCombination);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);


  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const login = loginRef.current ? loginRef.current.value : '';
    const password = passwordRef.current ? passwordRef.current.value : '';
    switch (true) {
      case !login.length:
        setErrorType(ErrorMessages.EmptyEmail);
        dispatch(setError(true));
        break;
      case !password.length:
        setErrorType(ErrorMessages.EmptyPassword);
        dispatch(setError(true));
        break;
      default:
        onSubmit({
          login: login,
          password: password,
        });
        dispatch(fetchFavoriteFilmsAction());
        break;
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
    if (error) {
      errorCleanupHandler();
    }
  }, [error, authorizationStatus, navigate]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo renderPlace={LogoState.Header}/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action=""
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          {error ? <LoginFormErrorMessage errorType={errorType} /> : null}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                autoComplete="username"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
            </div>
            <div className="sign-in__field">
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
