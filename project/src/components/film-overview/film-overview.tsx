import Film from '../../types/film';

type FilmOverviewProps = {
  film: Film;
}

function FilmOverview({film}: FilmOverviewProps): JSX.Element{
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          {/* Вычисляем уровень рейтинга фильма:
          от 0 до 3 — Bad.
          от 3 до 5 — Normal.
          от 5 до 8 — Good.
          от 8 до 10 — Very good.
          10 — Awesome. */}
          <span className="film-rating__level">Very good</span>
          {/* Если рейтинг <= 1, пишем 'ratings', иначе 'ratings' */}
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {/* Отрезаем текст по символу параграфа и оборачивает
            фрагмент текста в тег параграфа <p></p>
        */}
        {film.description}

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        {/* Выводим до 4 элементов массива разделенных запятой с пробелом,
            в конце строки запятая и пробел отсутствуют. Если элементов больше 4, то в конец
            строки добваляет ' and other'
        */}
        <p className="film-card__starring"><strong>Starring: {film.starring} and other</strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverview;
