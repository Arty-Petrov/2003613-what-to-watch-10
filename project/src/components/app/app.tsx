import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../util/const';

import Film from '../../types/film';
import User from '../../types/user';

import CatalogPage from '../../pages/catalog/catalog-page';
import LoginPage from '../../pages/login/login-page';
import MyListPage from '../../pages/my-list/my-list-page';
import FilmPage from '../../pages/film/film-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player/player-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppProps = {
  films: Film[];
  promo: Film;
  user: User;
}

function App(props: AppProps): JSX.Element {
  const {films, promo, user, } = props;

  return (
    <BrowserRouter>

      <Routes>

        <Route path={AppRoute.Root} >
          <Route index element={
            <CatalogPage films={films} promo={promo} user={user} />
          }
          />

          <Route
            path={AppRoute.Login}
            element={
              <LoginPage />
            }
          />

          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <MyListPage films={films} user={user}/>
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Film}>
            <Route path=":id">
              <Route index
                element={
                  <FilmPage films={films} user={user} />
                }
              />
              <Route path={`:id${AppRoute.AddReview}`}
                element={
                  <AddReviewPage films={films} user={user} />
                }
              />
            </Route>
          </Route>

          <Route path={AppRoute.Player}>
            <Route path=":id"
              element={
                <PlayerPage films={films} />
              }
            />
          </Route>

          <Route
            path="*"
            element={
              <NotFoundPage />
            }
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
