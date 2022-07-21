import {Genres} from '../../util/const';

function GenreList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="/" className="catalog__genres-link">{Genres.AllGenres}</a>
      </li>
      <li className="catalog__genres-item">
        <a href="/" className="catalog__genres-link">{Genres.Comedies}</a>
      </li>
      <li className="catalog__genres-item">
        <a href="/" className="catalog__genres-link">{Genres.Crime}</a>
      </li>
      <li className="catalog__genres-item">
        <a href="/" className="catalog__genres-link">{Genres.Documentary}</a>
      </li>
      <li className="catalog__genres-item">
        <a href="/" className="catalog__genres-link">{Genres.Dramas}</a>
      </li>
      <li className="catalog__genres-item">
        <a href="/" className="catalog__genres-link">{Genres.Horror}</a>
      </li>
      <li className="catalog__genres-item">
        <a href="/" className="catalog__genres-link">{Genres.KidsAndFamily}</a>
      </li>
      <li className="catalog__genres-item">
        <a href="/" className="catalog__genres-link">{Genres.Romance}</a>
      </li>
      <li className="catalog__genres-item">
        <a href="/" className="catalog__genres-link">{Genres.SciFi}</a>
      </li>
      <li className="catalog__genres-item">
        <a href="/" className="catalog__genres-link">{Genres.Thrillers}</a>
      </li>
    </ul>
  );
}

export default GenreList;
