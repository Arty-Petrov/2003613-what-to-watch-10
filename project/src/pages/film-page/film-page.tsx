import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilmInfoTab from '../../components/film-info-tab/film-info-tab';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import MyListButton from '../../components/my-list-button/my-list-button';
import PlayButton from '../../components/play-button/play-button';
import ReviewButton from '../../components/review-button/review-button';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction, fetchFilmCommentsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import {getDataLoadingStatus, getFilm, getSimilarFilms} from '../../store/film-process/selector';
import { FilmsCatalogState, LogoState } from '../../util/const';
import LoadingScreen from '../loading-screen/loading-screen';


function FilmPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const isDataLoading = useAppSelector(getDataLoadingStatus);
  const similarFilms = useAppSelector(getSimilarFilms);
  const style = {
    backgroundColor: `${film?.backgroundColor}`,
  };

  useEffect(() => {
    if (typeof film?.id === 'undefined' || (String(film?.id) !== id)){
      dispatch(fetchFilmAction(id));
      dispatch(fetchSimilarFilmsAction(id));
      dispatch(fetchFilmCommentsAction(id));
    }
  }, [dispatch, id, film]);

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <section className="film-card film-card--full" style={style}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo renderPlace={LogoState.Header}/>
            <UserBlock />

          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">

                <PlayButton film={film} />
                <MyListButton />
                <ReviewButton />
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327"/>
            </div>
            <FilmInfoTab />
          </div>
        </div>
      </section>

      <div className="page-content">
        <FilmsList films={similarFilms} state={FilmsCatalogState.MoreLikeThis} />
      </div>
    </>
  );
}

export default FilmPage;
