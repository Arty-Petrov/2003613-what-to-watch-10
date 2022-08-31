import React from 'react';
import { convertSecondsToHHMMSS } from '../../util/utils';

const VideoPlayerTimer = ({time}: {time: number}) => {
  const playbackTime = convertSecondsToHHMMSS(Number(time.toFixed()));

  return <div className="player__time-value">{playbackTime}</div>;
};

export default React.memo(VideoPlayerTimer);
