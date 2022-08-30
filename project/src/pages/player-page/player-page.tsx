import { useAppSelector } from '../../hooks';
import { getFilm } from '../../store/film-process/selector';
import NotFoundPage from '../not-found-page/not-found-page';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';


function PlayerPage (): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);

  useEffect(() => {
    if (Number(id) !== film?.id) {
      dispatch(fetchFilmAction(String(id)));
    }
  }, [dispatch, film?.id, id]
  );

  const divStyle = {left: '30%'};

  if (!film){
    return (
      <NotFoundPage />
    );
  }

  return (
    <div className="player">
      <video src="#" className="player__video" poster={film.backgroundImage}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={divStyle}>Toggler</div>
          </div>
          <div className="player__time-value">{film.runTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
