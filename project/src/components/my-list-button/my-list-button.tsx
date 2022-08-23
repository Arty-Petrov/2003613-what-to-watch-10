import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFavoriteFilmsAction, fetchFilmAction, fetchPromoFilmAction, setFilmFavoriteAction } from '../../store/api-actions';
import { FavoriteData } from '../../types/favorite-data';
import { AppRoute, AuthorizationStatus } from '../../util/const';
import { useLocation } from 'react-router-dom';

const MyListButton = (): JSX.Element | null => {
  const location = useLocation();
  const promoFieldName = 'promo';
  const filmFieldName = 'film';
  const filmStoreFieldName = (location.pathname === AppRoute.Root)
    ? promoFieldName
    : filmFieldName;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const film = useAppSelector((state) => state[filmStoreFieldName]);
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);

  const isUnauthorised = authorizationStatus !== AuthorizationStatus.Auth;
  if (isUnauthorised) {
    return null;
  }

  const favoriteFilmsCount = (favoriteFilms === null) ? 0 : favoriteFilms.length;

  const onMyListButtonClickHandler = () => {
    if (film !== null) {
      const favoriteData: FavoriteData = {
        filmId: String(film.id),
        status: Number(!film.isFavorite),
      };
      store.dispatch(setFilmFavoriteAction(favoriteData));
      store.dispatch(fetchFavoriteFilmsAction());
      switch (filmStoreFieldName) {
        case promoFieldName:
          store.dispatch(fetchPromoFilmAction());
          break;
        case filmFieldName:
          store.dispatch(fetchFilmAction(String(film.id)));
          break;
      }
    }
  };

  const InListMarker = (): JSX.Element => (
    <svg viewBox="0 0 18 14" width="18" height="14">
      <use xlinkHref="#in-list"></use>
    </svg>);

  const PlusMarker = (): JSX.Element => (
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#add"></use>
    </svg>);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return null;
  }

  return (
    <button onClick={onMyListButtonClickHandler} className="btn btn--list film-card__button">
      {(film?.isFavorite) ? <InListMarker /> : <PlusMarker />}
      <span>My list</span>
      <span className="film-card__count">{favoriteFilmsCount}</span>
    </button>
  );
};

export default MyListButton;
