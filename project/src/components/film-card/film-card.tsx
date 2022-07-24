import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Film from '../../types/film';

type FilmCardSmallProps = {
  film: Film;
  callback: (id: number | null) => void;
}

function FilmCard({film, callback}: FilmCardSmallProps): JSX.Element {

  const mouseEnterHandler = (evt: MouseEvent <HTMLDivElement>) => {
    switch (evt.type) {
      case 'mouseenter':
        callback(film.id);
        break;
      case 'mouseleave':
        callback(null);
        break;
      default:
        break;
    }
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseEnterHandler}
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
