import { useState } from 'react';
import { Films } from '../../types/film';
import FilmCard from '../film-card/film-card';
import GenreList from '../genre-list/genre-list';
import ShowMoreButton from '../show-more-button/show-more-button';

type FilmsListProps = {
  films: Films;
  state: {
    headText: string,
    headStyle: string,
    genreList: boolean,
    moreButton: boolean,
    filmsCount: number,
  }
}

function FilmsList ({films, state}: FilmsListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return(
    <section className="catalog">
      <h2 className={`catalog__title ${state.headStyle}`}>{state.headText}</h2>
      {(state.genreList) ? <GenreList /> : null}
      <div className="catalog__films-list">
        {films.map((item) => (
          <FilmCard
            key={item.id}
            film={item}
            activeCardId={activeCardId}
            getActiveCardId={setActiveCardId}
          />)
        )}
      </div>
      {(state.moreButton) ? <ShowMoreButton /> : null}
    </section>
  );
}

export default FilmsList;
