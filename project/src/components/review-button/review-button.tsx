import { useParams, Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../util/const';


const ReviewButton = (): JSX.Element | null => {
  const {id} = useParams();

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const isUnauthorized = authorizationStatus !== AuthorizationStatus.Auth;
  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return null;
  }

  return (isUnauthorized) ? null : (
    <Link to={`${AppRoute.Film}${id}${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link>
  );
};

export default ReviewButton;
