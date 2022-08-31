
import React from 'react';

const VideoPlayerTimebarToggler = ({progress, isPlaying}: {progress: number, isPlaying: boolean}) => (
  <div className="player__toggler" style={{left: `${isPlaying ? progress.toFixed() : 0}%`}}>
    Toggler
  </div>
);

export default React.memo(VideoPlayerTimebarToggler);
