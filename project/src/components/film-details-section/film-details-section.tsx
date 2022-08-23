import { useAppSelector } from '../../hooks';
import { convertMinutesToHM } from '../../util/utils';

const getStarringsList = (stringsArray: string[]) => {
  let keyIndex = 0;
  const array = [];
  for (let i = 0; i < stringsArray.length; i++){
    const isLastElement = (i === stringsArray.length - 1);
    array.push(`${stringsArray[i].trim()}${(!isLastElement) ? ', ' : ''}`);
    if (!isLastElement) {
      array.push(<br key={keyIndex++}></br>);
    }
  }
  return array;
};

function FilmDetailsSection(): JSX.Element | null {
  const film = useAppSelector((state) => state.film);

  return (film === null) ? null : (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {getStarringsList(film.starring)}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{convertMinutesToHM(film.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmDetailsSection;
