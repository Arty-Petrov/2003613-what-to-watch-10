import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-block/user-block';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, LogoState} from '../../util/const';
import {getDataLoadingStatus, getFilm} from '../../store/film-process/selector';
import LoadingScreen from '../loading-screen/loading-screen';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';

function AddReviewPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const isDataLoading = useAppSelector(getDataLoadingStatus);

  useEffect(() => {
    if (typeof film?.id === 'undefined' || (String(film?.id) !== id)){
      navigate(`${AppRoute.Film}${id}`);
    }
  }, [dispatch, id, film, navigate]);

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo renderPlace={LogoState.Header} />
          <Breadcrumbs />
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={`${film?.name} poster`} width="218"
            height="327"
          />
        </div>
      </div>

      <ReviewForm />
    </section>
  );
}

export default AddReviewPage;
