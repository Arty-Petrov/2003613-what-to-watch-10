import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import { FilmsCatalogState, LogoState } from '../../util/const';

function MyListPage (): JSX.Element {
  const films = useAppSelector((state) => state.favoriteFilms);
  const favoriteFilmsCount = (films === null) ? 0 : films.length;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo renderPlace={LogoState.Header}/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilmsCount}</span></h1>
        <UserBlock />
      </header>
      <FilmsList films={films} state={FilmsCatalogState.MyList} />
      <Footer />
    </div>
  );
}

export default MyListPage;
