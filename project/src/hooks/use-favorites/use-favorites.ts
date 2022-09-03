import {useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../util/const';
import {useAppDispatch, useAppSelector} from '../index';
import {getAuthorizationStatus} from '../../store/user-process/selector';
import {getFavoriteFilmsCount} from '../../store/user-process/selector';
import {getFilm, getFilmFavoriteStatus} from '../../store/film-process/selector';
import {FavoriteData} from '../../types/favorite-data';
import {
  fetchFavoriteFilmsAction,
  fetchFilmAction,
  fetchPromoFilmAction,
  setFilmFavoriteAction,
} from '../../store/api-actions';
import {useEffect} from 'react';

const useFavorites = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const filmIsFavorite = useAppSelector(getFilmFavoriteStatus);
  const isUnauthorized = useAppSelector(getAuthorizationStatus) !== AuthorizationStatus.Auth;
  const favoriteFilmsCount = useAppSelector(getFavoriteFilmsCount) ?? 0;

  const isInFilmList = film?.isFavorite && !isUnauthorized;


  useEffect(()=>{
    if (!isUnauthorized){
      dispatch(fetchFavoriteFilmsAction());
    }}, [dispatch, filmIsFavorite, isUnauthorized]);

  const handleOnMyListButtonClick = () => {
    if (isUnauthorized) {
      navigate(AppRoute.Login);
      return;
    }
    if (film !== null) {
      const favoriteData: FavoriteData = {
        filmId: String(film.id),
        status: Number(!filmIsFavorite),
      };
      dispatch(setFilmFavoriteAction(favoriteData));
      dispatch(fetchPromoFilmAction());
      dispatch(fetchFilmAction(String(film.id)));
    }
  };

  return {
    isInFilmList,
    favoriteFilmsCount,
    handleOnMyListButtonClick,
  };
};

export default useFavorites;
