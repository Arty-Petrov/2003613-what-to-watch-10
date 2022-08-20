import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeGenre, resetFilmsCount } from '../../store/action';
import { store } from '../../store/index';
import { Genre } from '../../util/const';
import GenreButton from '../genre-button/genre-button';

function GenreList(): JSX.Element {
  const dispatch = useAppDispatch();
  const state = useAppSelector(store.getState);
  const activeGenre = state.genre;
  const genres = Array.from(new Set([Genre.AllGenres, ...state.films.map((film) => film.genre)]));

  const onButtonClickHandler = (evt: React.MouseEvent) => {
    const clickedGenre = evt.currentTarget.getAttribute('data-genre');
    if (clickedGenre !== null) {
      dispatch(changeGenre(clickedGenre));
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
  )
  );

  return (
    <ul className="catalog__genres-list">
      {createGenreTab}
    </ul>
  );

}

export default GenreList;
