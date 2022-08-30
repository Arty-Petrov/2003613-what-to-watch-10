import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { increaseFilmsCount } from '../../store/films-process/films-process';
import { getFilteredFilmsCount, getFilmsToRenderCount } from '../../store/films-process/selector';

function ShowMoreButton(): JSX.Element | null{
  const dispatch = useAppDispatch();
  const filteredFilmsCount = useAppSelector(getFilteredFilmsCount);
  const filmsToRenderCount = useAppSelector(getFilmsToRenderCount);

  const handleButtonClick = () => {
    dispatch(increaseFilmsCount());
  };

  if (filteredFilmsCount !== null && filteredFilmsCount >= filmsToRenderCount){
    return (
      <div className="catalog__more">
        <button className="catalog__button" onClick={handleButtonClick} type="button">Show more</button>
      </div>
    );
  }
  return null;
}

export default React.memo(ShowMoreButton);
