import { GenreButtonName } from '../../util/const';
import './genre-button.css';

type GenreButtonProps = {
  genre: string;
  isActive: boolean;
  onClick: (evt: React.MouseEvent) => void;
}

function GenreButton({genre, isActive, onClick}: GenreButtonProps): JSX.Element {
  return (
    <li
      className={isActive ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
      onClick={onClick}
      data-genre={genre}
    >
      <button className="catalog__genres-link" disabled={isActive}>{GenreButtonName[genre]}</button>
    </li>
  );
}

export default GenreButton;
