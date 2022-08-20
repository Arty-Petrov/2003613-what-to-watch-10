import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import { FilmsCatalogState } from '../../util/const';

function MyListPage (): JSX.Element {
  const {films} = useAppSelector((state) => state);
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
        <UserBlock />
      </header>
      <FilmsList films={films} state={FilmsCatalogState.MyList} />
      <Footer />
    </div>
  );
}

export default MyListPage;
