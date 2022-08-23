import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import SomeComp from '../../components/some-comp/some-comp';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFilmAction, fetchFilmCommentsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { AppRoute, FilmsCatalogState } from '../../util/const';
import FilmInfoTab from '../../components/film-info-tab/film-info-tab';
import MyListButton from '../../components/my-list-button/my-list-button';
import ReviewButton from '../../components/review-button/review-button';


function FilmPage(): JSX.Element {
  const {id} = useParams();
  const film = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof film?.id === 'undefined' || (`${film?.id}` !== `${id}`)){
      store.dispatch(fetchFilmAction(`${id}`));
      store.dispatch(fetchSimilarFilmsAction(`${id}`));
      store.dispatch(fetchFilmCommentsAction(`${id}`));
    }
  }, [id, film]);

  if (film === undefined){
    navigate(AppRoute.NotFound);
  }

  return (
    <>
      <SomeComp addElement={false}/>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
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

                <Link to={`${AppRoute.Player}/${film?.id}`} className="btn btn--play film-card__button" >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
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
