import { useAppDispatch, useAppSelector } from '../../hooks';
import { incrFilmsCount } from '../../store/action';
import { store } from '../../store/index';

function ShowMoreButton(): JSX.Element | null{
  const dispatch = useAppDispatch();
  const state = useAppSelector(store.getState);
  const filmsCount = state.filmsCount;
  const films = state.films;

  const handleButtonClick = () => {
    dispatch(incrFilmsCount());
  };

  if (films.length >= filmsCount){
    return (
      <div className="catalog__more">
        <button className="catalog__button" onClick={handleButtonClick} type="button">Show more</button>
      </div>
    );
  }
  return null;
}

export default ShowMoreButton;
