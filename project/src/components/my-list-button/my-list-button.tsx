import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFavoriteFilmsAction, fetchFilmAction, fetchPromoFilmAction, setFilmFavoriteAction } from '../../store/api-actions';
import { FavoriteData } from '../../types/favorite-data';
import { AppRoute, AuthorizationStatus } from '../../util/const';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useAppDispatch } from '../../hooks/index';

const PROMO_FIELD_NAME = 'promo';
const FILM_FIELD_NAME = 'film';

const MyListButton = (): JSX.Element | null => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const filmStoreFieldName = (location.pathname === AppRoute.Root)
    ? PROMO_FIELD_NAME
    : FILM_FIELD_NAME;

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
      dispatch(setFilmFavoriteAction(favoriteData));
      dispatch(fetchFavoriteFilmsAction());

      switch (filmStoreFieldName) {
        case PROMO_FIELD_NAME:
          store.dispatch(fetchPromoFilmAction());
          break;
        case FILM_FIELD_NAME:
          dispatch(fetchFilmAction(String(film.id)));
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

  // eslint-disable-next-line no-console
  console.log(film?.isFavorite);

  return (
    <button onClick={onMyListButtonClickHandler} className="btn btn--list film-card__button">
      {(film?.isFavorite) ? <InListMarker /> : <PlusMarker />}
      <span>My list</span>
      <span className="film-card__count">{favoriteFilmsCount}</span>
    </button>
  );
};

export default React.memo(MyListButton);
