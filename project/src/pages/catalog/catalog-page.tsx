import { useEffect } from 'react';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import MyListButton from '../../components/my-list-button/my-list-button';
import PlayButton from '../../components/play-button/play-button';
import SomeComp from '../../components/some-comp/some-comp';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks/index';
import { setPromoToFilmField } from '../../store/film-process/film-process';
import { getDataLoadingStatus, getPromoFilm } from '../../store/film-process/selector';
import { setActiveGenre } from '../../store/films-process/films-process';
import { getFilmsToRender, getGetActiveGenre } from '../../store/films-process/selector';
import { FilmsCatalogState, LogoState } from '../../util/const';

function CatalogPage(): JSX.Element | null{
  const dispatch = useAppDispatch();
  const isDataloading = useAppSelector(getDataLoadingStatus);
  const promo = useAppSelector(getPromoFilm);
  const genre = useAppSelector(getGetActiveGenre);

  const filmsToRender = useAppSelector(getFilmsToRender);
  const genreFilmsCount = (filmsToRender !== null) ? filmsToRender.length : 0;

  useEffect(() => {
    dispatch(setPromoToFilmField());
  }
  , [dispatch, promo]);

  useEffect(() => {
    dispatch(setActiveGenre(genre));
  }
  , [dispatch, genre, genreFilmsCount,]);


  return (promo === null && !isDataloading) ? null : (
    <>
      <SomeComp addElement={false} />
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo?.backgroundImage} alt={promo?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo renderPlace={LogoState.Header}/>
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo?.posterImage} alt={`${promo?.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo?.genre}</span>
                <span className="film-card__year">{promo?.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton film={promo} />
                <MyListButton />
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
