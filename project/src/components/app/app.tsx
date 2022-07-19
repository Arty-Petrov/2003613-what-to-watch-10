import CatalogPage from '../../pages/catalog/catalog-page';
import Film from '../../types/film';
import User from '../../types/user';

type AppScreenProps = {
  film: Film;
  user: User;
  filmCardsCount: number;
}

function App({film, user, filmCardsCount,}: AppScreenProps): JSX.Element {
  return (
    <CatalogPage
      film = {film}
      user = {user}
      filmCardsCount={filmCardsCount}
    />
  );
}

export default App;
