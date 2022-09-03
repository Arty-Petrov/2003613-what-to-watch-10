import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../util/const';

type VideoPlayerExitButtonProps = {
  id: number | undefined,
}

const VideoPlayerExitButton = (id: VideoPlayerExitButtonProps) => (id)
  ? (<Link to={`${AppRoute.Film}${id}`} type="button" className="player__exit">Exit</Link>)
  : null;

export default React.memo(VideoPlayerExitButton);
