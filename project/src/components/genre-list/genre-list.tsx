import {GenreFilters, GenreMenu} from '../../util/const';
import { changeGenre } from '../../store/action';
import { useAppDispatch } from '../../hooks/index';
import { Link } from 'react-router-dom';

function GenreList(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="/" className="catalog__genres-link"
          onClick={
            () => dispatch(changeGenre(GenreFilters.AllGenres))
          }
        >
          {GenreMenu.AllGenres}
        </a>
      </li>
      <li className="catalog__genres-item">
        <Link to="/" className="catalog__genres-link"
          onClick={
            () => dispatch(changeGenre(GenreFilters.Comedy))
          }
        >
          {GenreMenu.Comedy}
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="/" className="catalog__genres-link"
          onClick={
            () => dispatch(changeGenre(GenreFilters.Crime))
          }
        >{GenreMenu.Crime}
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="/" className="catalog__genres-link"
          onClick={
            () => dispatch(changeGenre(GenreFilters.Documentary))
          }
        >
          {GenreMenu.Documentary}
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="/" className="catalog__genres-link"
          onClick={
            () => dispatch(changeGenre(GenreFilters.Drama))
          }
        >
          {GenreMenu.Drama}
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="/" className="catalog__genres-link"
          onClick={
            () => dispatch(changeGenre(GenreFilters.Horror))
          }
        >
          {GenreMenu.Horror}
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="/" className="catalog__genres-link"
          onClick={
            () => dispatch(changeGenre(GenreFilters.Adventure))
          }
        >
          {GenreMenu.Adventure}
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="/" className="catalog__genres-link"
          onClick={
            () => dispatch(changeGenre(GenreFilters.Romance))
          }
        >
          {GenreMenu.Romance}
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="/" className="catalog__genres-link"
          onClick={
            () => dispatch(changeGenre(GenreFilters.SciFi))
          }
        >
          {GenreMenu.SciFi}
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to="/" className="catalog__genres-link"
          onClick={
            () => dispatch(changeGenre(GenreFilters.Thriller))
          }
        >{GenreMenu.Thriller}
        </Link>
      </li>
    </ul>
  );
}

export default GenreList;
