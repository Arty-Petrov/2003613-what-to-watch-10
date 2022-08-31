import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import useVideoPlayer from '../../hooks/use-video-player/useVideoPlayer';
import { Film } from '../../types/film';
import { AppRoute } from '../../util/const';
import VideoPlayer from '../video-player/video-player';

type FilmCardSmallProps = {
  film: Film,
  activeCardId: number | null,
  getActiveCardId: (id: number | null) => void,
}

function FilmCard({film, activeCardId, getActiveCardId}: FilmCardSmallProps): JSX.Element {
  const isPlaying = film.id === activeCardId;
  const {videoRef, isPreviewPlayer} = useVideoPlayer();

  const mouseEventHandler = (evt: MouseEvent <HTMLDivElement>) => {
    switch (evt.type) {
      case 'mouseenter':
        getActiveCardId(film.id);
        break;
      case 'mouseleave':
        getActiveCardId(null);
        break;
    }
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={mouseEventHandler}
      onMouseLeave={mouseEventHandler}
    >
      <Link to={`${AppRoute.Film}${film.id}`} className="small-film-card__link">
        <div className="small-film-card__image" data-id={film.id}>
          {(isPlaying)
            ? <VideoPlayer film={film} ref={videoRef} {...{ isPreviewPlayer }}/>
            : <img src={film.previewImage} alt={film.name} width="280" height="175" />}
        </div>
        <h3 className="small-film-card__title">
          {film.name}
        </h3>
      </Link>
    </article>
  );
}

export default FilmCard;
