import { useState } from 'react';
import Film from '../../types/film';
import FilmCard from '../film-card/film-card';
import GenreList from '../genre-list/genre-list';
import ShowMoreButton from '../show-more-button/show-more-button';

type FilmsListProps = {
  films: Film[];
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

  const activeCardIdHandler = (id: number | null) => {
    setActiveCardId(id);
    //заглушка чтобы линтер не ругался
    // eslint-disable-next-line no-console
    console.log(activeCardId);
  };

  return(
    <section className="catalog">
      <h2 className={`catalog__title ${state.headStyle}`}>{state.headText}</h2>
      {(state.genreList) ? <GenreList /> : null}
      <div className="catalog__films-list">
        {films.slice(0,state.filmsCount).map((item) =>
          <FilmCard key = {item.id} film = {item} callback={activeCardIdHandler}/>)}
      </div>
      {(state.moreButton) ? <ShowMoreButton /> : null}
    </section>
  );
}

export default FilmsList;
