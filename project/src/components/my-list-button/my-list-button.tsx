import React from 'react';
import useFavorites from '../../hooks/use-favorites/use-favorites';

const MyListButton = (): JSX.Element | null => {
  const {
    isInFilmList,
    favoriteFilmsCount,
    handleOnMyListButtonClick,
  } = useFavorites();

  const InListMarker = (): JSX.Element => (
    <svg viewBox="0 0 18 14" width="18" height="14">
      <use xlinkHref="#in-list"></use>
    </svg>);

  const PlusMarker = (): JSX.Element => (
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#add"></use>
    </svg>);

  return (
    <button onClick={handleOnMyListButtonClick} className="btn btn--list film-card__button">
      {(isInFilmList) ? <InListMarker /> : <PlusMarker />}
      <span>My list</span>
      <span className="film-card__count">{favoriteFilmsCount}</span>
    </button>
  );
};

export default React.memo(MyListButton);
