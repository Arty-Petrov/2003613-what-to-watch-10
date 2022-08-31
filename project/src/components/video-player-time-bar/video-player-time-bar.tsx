import React from 'react';

const VideoPlayerTimeBar = ({progress, isPlaying}: {progress: number, isPlaying: boolean;}) => (
  <progress className="player__progress" value={isPlaying ? progress : 0} max="100"/>
);

export default React.memo(VideoPlayerTimeBar);
