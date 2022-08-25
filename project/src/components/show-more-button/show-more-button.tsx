import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { incrFilmsCount } from '../../store/action';
import { store } from '../../store/index';

function ShowMoreButton(): JSX.Element | null{
  const dispatch = useAppDispatch();
  const state = useAppSelector(store.getState);
  const {genreFilmsCount, filmsToRenderCount,} = state;

  const handleButtonClick = () => {
    dispatch(incrFilmsCount());
  };

  if (genreFilmsCount >= filmsToRenderCount){
    return (
      <div className="catalog__more">
        <button className="catalog__button" onClick={handleButtonClick} type="button">Show more</button>
      </div>
    );
  }
  return null;
}

export default React.memo(ShowMoreButton);
