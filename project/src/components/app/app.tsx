import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import CatalogPage from '../../pages/catalog/catalog-page';
import FilmPage from '../../pages/film/film-page';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import LoginPage from '../../pages/login/login-page';
import MyListPage from '../../pages/my-list/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PlayerPage from '../../pages/player/player-page';
import { Film } from '../../types/film';
import { UserData } from '../../types/user-data';
import { AppRoute } from '../../util/const';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  promo: Film;
  user: UserData;
}

function App(props: AppProps): JSX.Element {
  const {promo, user} = props;
  const {authorizationStatus, isDataLoading} = useAppSelector((state) => state);

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>

      <Routes>

        <Route path={AppRoute.Root} >
          <Route index element={
            <CatalogPage promo={promo} user={user} />
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
                authorizationStatus={authorizationStatus}
              >
                <MyListPage user={user}/>
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Film}>
            <Route path=":id">
              <Route index
                element={
                  <FilmPage user={user} />
                }
              />
              <Route path={`${AppRoute.Film}:id${AppRoute.AddReview}`}
                element={
                  <AddReviewPage user={user} />
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

    </BrowserRouter>
  );
}

export default App;
