import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import NotFoundPage from '../not-found-page/not-found-page';
import { LogoState } from '../../util/const';
import { getFilm } from '../../store/film-process/selector';

function AddReviewPage(): JSX.Element {
  const film = useAppSelector(getFilm);

  if (!film){
    return (
      <NotFoundPage />
    );
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo renderPlace={LogoState.Header} />
          <Breadcrumbs />
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218"
            height="327"
          />
        </div>
      </div>

      <ReviewForm />
    </section>
  );
}

export default AddReviewPage;
