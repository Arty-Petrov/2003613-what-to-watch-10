import React, { useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { fetchFavoriteFilmsAction, fetchFilmAction, fetchPromoFilmAction, setFilmFavoriteAction } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/favorite-process/selector';
import { getFilm, getFilmFavoriteStatus } from '../../store/film-process/selector';
import { getAuthorizationStatus } from '../../store/user-process/selector';
import { FavoriteData } from '../../types/favorite-data';
import { AppRoute, AuthorizationStatus } from '../../util/const';
import { useNavigate } from 'react-router-dom';

const MyListButton = (): JSX.Element | null => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isUnauthorised = authorizationStatus !== AuthorizationStatus.Auth;
  const film = useAppSelector(getFilm);
  const filmIsFavorite = useAppSelector(getFilmFavoriteStatus);
  const favoriteFilms = useAppSelector(getFavoriteFilms);

  const favoriteFilmsCount = (isUnauthorised) ? 0 : favoriteFilms?.length;
  const isInFilmList = film?.isFavorite && !isUnauthorised;

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [filmIsFavorite, dispatch]);

  const onMyListButtonClickHandler = () => {
    if (isUnauthorised) {
      navigate(AppRoute.Login);
    }
    if (film !== null) {
      const favoriteData: FavoriteData = {
        filmId: String(film.id),
        status: Number(!film.isFavorite),
      };
      dispatch(setFilmFavoriteAction(favoriteData));
      dispatch(fetchPromoFilmAction());
      dispatch(fetchFilmAction(String(film.id)));
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

  return (
    <button onClick={onMyListButtonClickHandler} className="btn btn--list film-card__button">
      {(isInFilmList) ? <InListMarker /> : <PlusMarker />}
      <span>My list</span>
      <span className="film-card__count">{favoriteFilmsCount}</span>
    </button>
  );
};

export default React.memo(MyListButton);
