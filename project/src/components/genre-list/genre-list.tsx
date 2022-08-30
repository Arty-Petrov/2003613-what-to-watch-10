import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { resetFilmsCount, setActiveGenre } from '../../store/films-process/films-process';
import { getFilms, getGetActiveGenre } from '../../store/films-process/selector';
import { Genre } from '../../util/const';
import GenreButton from '../genre-button/genre-button';

function GenreList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getGetActiveGenre);
  const films = useAppSelector(getFilms);
  const genres = (films !== null) ? Array.from(new Set([Genre.AllGenres, ...films.map((film) => film.genre)])) : [];

  const onButtonClickHandler = (evt: React.MouseEvent) => {
    const clickedGenre = evt.currentTarget.getAttribute('data-genre');
    if (clickedGenre !== null) {
      dispatch(setActiveGenre(clickedGenre));
      dispatch(resetFilmsCount());
    }
  };

  const createGenreTab = genres.map((genreName) => (
    <GenreButton
      key={genreName}
      genre={genreName}
      isActive={activeGenre === genreName as keyof typeof GenreButton}
      onClick={onButtonClickHandler}
    />
  ));

  return (
    <ul className="catalog__genres-list">
      {createGenreTab}
    </ul>
  );

}

export default GenreList;
