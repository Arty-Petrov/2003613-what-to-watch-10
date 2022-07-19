import Film from '../../types/film';
import User from '../../types/user';
import SomeComp from '../../components/some-comp/some-comp';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import GenreList from '../../components/genre-list/genre-list';
import FilmCard from '../../components/film-card/film-card';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import Footer from '../../components/footer/footer';

type CatalogProps = {
  film: Film;
  user: User;
  filmCardsCount: number;
}

function CatalogPage({film, user, filmCardsCount}: CatalogProps): JSX.Element {
  return (
    <>
      <SomeComp addElement={false} />
      <section className="film-card">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock name={user.name} avatarUrl={user.avatarUrl} />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <div className="catalog__films-list">
            { [...Array(filmCardsCount)].map((item) => <FilmCard film = {film} key = {item} />)}
          </div>
          <ShowMoreButton />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default CatalogPage;
