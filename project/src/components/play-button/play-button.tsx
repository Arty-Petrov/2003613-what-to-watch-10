import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { AppRoute } from '../../util/const';

type PlayButtonProps = {
  film: Film | null,
}

const PlayButton = ({film}: PlayButtonProps): JSX.Element =>(
  <Link to={`${AppRoute.Player}/${film?.id}`} className="btn btn--play film-card__button" >
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span>Play</span>
  </Link>
);

export default React.memo(PlayButton);
