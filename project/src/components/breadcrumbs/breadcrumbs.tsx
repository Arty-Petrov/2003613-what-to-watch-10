import { AppRoute } from '../../util/const';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFilm } from '../../store/film-process/selector';

const Breadcrumbs = ():JSX.Element => {
  const {id} = useParams();
  const film = useAppSelector(getFilm);

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`${AppRoute.Film}${id}`} className="breadcrumbs__link">{film?.name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to="/" onClick={(evt) => evt.preventDefault()}className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>

  );
};
export default Breadcrumbs;
