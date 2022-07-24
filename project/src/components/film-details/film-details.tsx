import Film from '../../types/film';

type FilmDetailsProps = {
  film: Film;
}

function FilmDetails({film}: FilmDetailsProps): JSX.Element {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {film.starring.map((el) => `${el}, <br>`)}
          </span>
          {/* Нужно сделать метод, который генерирует список актеров */}
          {/*Bill Murray, <br>*/}
          {/*Edward Norton, <br>*/}
          {/*Jude Law, <br>*/}
          {/*Willem Dafoe, <br>*/}
          {/*Saoirse Ronan, <br>*/}
          {/*Tony Revoloru, <br>*/}
          {/*Tilda Swinton, <br>*/}
          {/*Tom Wilkinson, <br>*/}
          {/*Owen Wilkinson, <br>*/}
          {/*Adrien Brody, <br>*/}
          {/*Ralph Fiennes, <br>*/}
          {/*Jeff Goldblum*/}
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{film.runTime}</span>
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

export default FilmDetails;
