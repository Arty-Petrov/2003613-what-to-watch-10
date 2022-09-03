import { useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useParams } from 'react-router-dom';
import VideoPlayerExitButton from '../../components/video-player-exit-button/video-player-exit-button';
import VideoPlayerPlaybackToggleButton from '../../components/video-player-playback-toggle-button/video-player-playback-toggle-button';
import VideoPlayerTimeBarToggler from '../../components/video-player-time-bar-toggler/video-player-time-bar-toggler';
import VideoPlayerTimeBar from '../../components/video-player-time-bar/video-player-time-bar';
import VideoPlayerTimer from '../../components/video-player-timer/video-player-timer';
import VideoPlayer from '../../components/video-player/video-player';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useVideoPlayer from '../../hooks/use-video-player/useVideoPlayer';
import { fetchFilmAction } from '../../store/api-actions';
import { getDataLoadingStatus, getFilm } from '../../store/film-process/selector';
import LoadingScreen from '../loading-screen/loading-screen';

function PlayerPage (): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const isDataLoading = useAppSelector(getDataLoadingStatus);
  const {
    videoRef,
    playerState,
    handlePlayButtonToggle,
    handleProgressUpdate,
  } = useVideoPlayer();

  const handleFullScreenAction = useFullScreenHandle();

  useEffect(() => {
    if (Number(id) !== film?.id) {
      dispatch(fetchFilmAction(String(id)));
    }
  }, [dispatch, film?.id, id]
  );

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <FullScreen handle={handleFullScreenAction}>
      <div className="player">
        <VideoPlayer
          ref={videoRef}
          {...{film, handleProgressUpdate}}
        />

        <VideoPlayerExitButton id={film?.id}/>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <VideoPlayerTimeBar {...playerState} />
              <VideoPlayerTimeBarToggler {...playerState} />
            </div>
            <VideoPlayerTimer {...playerState} />
          </div>

          <div className="player__controls-row">
            <VideoPlayerPlaybackToggleButton {...playerState} handlePlayButtonToggle={handlePlayButtonToggle} />
            <div className="player__name">{film?.name}</div>

            <button type="button" className="player__full-screen" onClick={handleFullScreenAction.enter}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </FullScreen>
  );
}

export default PlayerPage;
