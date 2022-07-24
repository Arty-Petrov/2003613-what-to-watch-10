import { Link, useParams } from 'react-router-dom';
import FilmOverview from '../../components/film-overview/film-overview';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import SomeComp from '../../components/some-comp/some-comp';
import UserBlock from '../../components/user-block/user-block';
import Film from '../../types/film';
import User from '../../types/user';
import { AppRoute, FilmsCatalogState } from '../../util/const';
import NotFoundPage from '../not-found-page/not-found-page';

type FilmInfoProps = {
  films: Film[];
  user: User;
}

enum FilmInfoSection {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

function FilmPage({films, user}: FilmInfoProps): JSX.Element {
  const {id} = useParams();
  const film = films.find((item) => item.id === Number(id));
  const linkStyle = {textDecoration: 'none'};

  if (!film){
    return (
      <NotFoundPage />
    );
  }

  return (
    <>
      <SomeComp addElement={false}/>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock avatarUrl={user.avatarUrl} name={user.name}/>

          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">

                <Link to={`${AppRoute.Player}/${film.id}`} className="btn btn--play film-card__button" >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <Link to={`${AppRoute.MyList}`} className="btn btn--list film-card__button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span style={linkStyle}>My list</span>
                  <span className="film-card__count">9</span>
                </Link>

                <Link to={`${AppRoute.Film}${film.id}${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/" className="film-nav__link">{FilmInfoSection.Overview}</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">{FilmInfoSection.Details}</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">{FilmInfoSection.Reviews}</a>
                  </li>
                </ul>
              </nav>
              {/* Делегируем nav елементу обработку события клика
                  Показываем компонент соотвествующий evt.href
              */}
              <FilmOverview film={film}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <FilmsList films={films} state={FilmsCatalogState.MoreLikeThis} />
      </div>
    </>
  );
}

export default FilmPage;
