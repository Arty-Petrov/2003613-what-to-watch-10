import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeGenre } from '../../store/action';
import { store } from '../../store/index';
import { Genre } from '../../util/const';
import GenreButton from '../genre-button/genre-button';
import { generateFilms } from '../../mock/film-data';


function GenreList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(store.getState).genre;
  const genres = Array.from(new Set([Genre.AllGenres, ...generateFilms().map((film) => film.genre)]));

  const onButtonClickHandler = (evt: React.MouseEvent) => {
    const clickedGenre = evt.currentTarget.getAttribute('data-genre');
    if (clickedGenre !== null) {
      dispatch(changeGenre(clickedGenre));
    }
  };

  const createGenreTab = genres.map((genreName) => (
    <GenreButton
      key={genreName}
      genre={genreName}
      isActive={activeGenre === genreName as keyof typeof GenreButton}
      onClick={onButtonClickHandler}
    />
  )
  );

  return (
    <ul className="catalog__genres-list">
      {createGenreTab}
    </ul>
  );

}

export default GenreList;
