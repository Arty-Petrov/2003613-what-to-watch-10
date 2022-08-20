import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import SomeComp from '../../components/some-comp/some-comp';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import { setGenreFilmsCount } from '../../store/action';
import { Film } from '../../types/film';
import { UserData } from '../../types/user-data';
import { AppRoute, FilmsCatalogState } from '../../util/const';
import { Filter } from '../../util/filters';

type CatalogProps = {
  promo: Film;
  user: UserData;
}

function CatalogPage(props: CatalogProps): JSX.Element {
  const { promo, user, } = props;
  const dispatch = useDispatch();
  const { genre, filmsToRenderCount, films } = useAppSelector((state) => state);
  const genreFilms = Filter[genre](films);
  const filmsToRender = genreFilms.slice(0, filmsToRenderCount);
  const genreFilmsCount = genreFilms.length;

  useEffect(() => {
    dispatch(setGenreFilmsCount(genreFilmsCount));
  }
  , [dispatch, genre, genreFilmsCount,]);

  return (
    <>
      <SomeComp addElement={false} />
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.backgroundImage} alt={promo.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock name={user.name} avatarUrl={user.avatarUrl} />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo.posterImage} alt={`${promo.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`${AppRoute.Player}/${promo.id}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={`${AppRoute.MyList}`} className="btn btn--list film-card__button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <FilmsList films={filmsToRender} state={FilmsCatalogState.Catalog} />
        <Footer />
      </div>
    </>
  );
}

export default CatalogPage;
