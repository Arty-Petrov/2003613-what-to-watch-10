import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Film from '../../types/film';
import User from '../../types/user';
import { FilmsCatalogState } from '../../util/const';

type MyListProps = {
  films: Film[];
  user: User;
}

function MyListPage ({films, user}: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={user.avatarUrl} alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a href="/" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>
      <FilmsList films={films} state={FilmsCatalogState.MyList} />
      <Footer />
    </div>
  );
}

export default MyListPage;
