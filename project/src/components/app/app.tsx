import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { useAppSelector } from '../../hooks';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import CatalogPage from '../../pages/catalog/catalog-page';
import FilmPage from '../../pages/film/film-page';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import LoginPage from '../../pages/login/login-page';
import MyListPage from '../../pages/my-list/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PlayerPage from '../../pages/player/player-page';
import { AppRoute } from '../../util/const';
import HistoryRouter from '../history-route/history-route';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  const {isDataLoading} = useAppSelector((state) => state);

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>

      <Routes>

        <Route path={AppRoute.Root} >
          <Route index element={
            <CatalogPage />
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
              <PrivateRoute>
                <MyListPage />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Film}>
            <Route path=":id">
              <Route index
                element={
                  <FilmPage />
                }
              />
              <Route path={`${AppRoute.Film}:id${AppRoute.AddReview}`}
                element={
                  <PrivateRoute>
                    <AddReviewPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Route>

          <Route path={AppRoute.Player}>
            <Route path=":id"
              element={
                <PlayerPage />
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

    </HistoryRouter>
  );
}

export default App;
