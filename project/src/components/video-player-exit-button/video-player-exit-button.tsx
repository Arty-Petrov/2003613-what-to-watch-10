import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../util/const';

const VideoPlayerExitButton = ({id}: {id: number}) => <Link to={`${AppRoute.Film}${id}`} type="button" className="player__exit">Exit</Link>;

export default React.memo(VideoPlayerExitButton);
