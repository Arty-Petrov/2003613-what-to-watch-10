import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Film from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardSmallProps = {
  film: Film;
  callback: (id: number | null) => void;
}

function FilmCard({film, callback}: FilmCardSmallProps): JSX.Element {
  const [isActive, setActive] = useState<boolean>(false);

  const mouseEnterHandler = (evt: MouseEvent <HTMLDivElement>) => {
    switch (evt.type) {
      case 'mouseenter':
        callback(film.id);
        setTimeout(setActive, 1000, !isActive);
        break;
      case 'mouseleave':
        callback(null);
        setActive(!isActive);
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
        {(isActive)
          ? <VideoPlayer film={film} settings={{
            isPlaying: isActive,
            isMuted: true
          }}/>
          : <img src={film.previewImage} alt={film.name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
