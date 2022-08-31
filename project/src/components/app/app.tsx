import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { useAppSelector } from '../../hooks';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import FilmPage from '../../pages/film-page/film-page';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import LoginPage from '../../pages/login-page/login-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PlayerPage from '../../pages/player-page/player-page';
import { getDataLoadingStatus } from '../../store/films-process/selector';
import { AppRoute } from '../../util/const';
import HistoryRoute from '../history-route/history-route';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  const loadingStatus = useAppSelector(getDataLoadingStatus);

  if (loadingStatus) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRoute history={browserHistory}>

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
            path={AppRoute.NotFound}
            element={
              <NotFoundPage />
            }
          />

        </Route>

      </Routes>

    </HistoryRoute>
  );
}

export default App;
