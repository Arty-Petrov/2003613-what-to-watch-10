import { Film } from '../../types/film';
import { FilmRating, FilmRatingCheck } from '../../util/const';

type FilmOverviewProps = {
  film: Film;
}

function FilmOverview({film}: FilmOverviewProps): JSX.Element{

  const getRatingDescription = (rating: number) => {
    if (FilmRatingCheck.isAwesome(rating)) {return FilmRating.Awesome;}
    if (FilmRatingCheck.isVeryGood(rating)) {return FilmRating.VeryGood;}
    if (FilmRatingCheck.isGood(rating)) {return FilmRating.Good;}
    if (FilmRatingCheck.isNormal(rating)) {return FilmRating.Normal;}
    return FilmRating.Bad;
  };

  const getFilmDescription = (text: string) => {
    const searchSymbol = '/n';
    const array: JSX.Element[] = [];
    let keyIndex = 0;
    let lineStartIndex = 0;
    let lineEndIndex = text.indexOf(searchSymbol);

    if (lineEndIndex === -1) {
      array.push(<p key={keyIndex}>{text}</p>);
    }
    while (lineEndIndex !== -1) {
      array.push(<p key={keyIndex++}>{text.slice(lineStartIndex, lineEndIndex)};</p>);
      lineStartIndex = lineEndIndex + searchSymbol.length;
      lineEndIndex = text.indexOf(searchSymbol, lineStartIndex);
      if (lineEndIndex) {
        array.push(<p key={keyIndex++}>{text.slice(lineStartIndex, text.length - 1)}</p>);
      }
    }
    return array;
  };

  const getStarringList = (array: string[]) => {
    const maxStarsInString = 4;
    const starsStringSuffix = (array.length > maxStarsInString) ? ' and other' : '';
    return `${array.slice(0, (maxStarsInString)).join(', ')}${starsStringSuffix}`;
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating.toLocaleString('ru')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDescription(film.rating)}</span>
          <span className="film-rating__count">
            {film.scoresCount}
            {(film.scoresCount <= 1 ) ? ' rating' : ' ratings'}
          </span>
        </p>
      </div>

      <div className="film-card__text">

        {getFilmDescription(film.description)}

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {getStarringList(film.starring)}</strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverview;

