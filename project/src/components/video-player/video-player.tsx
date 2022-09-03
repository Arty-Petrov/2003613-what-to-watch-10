import React from 'react';
import { Film } from '../../types/film';

const VIDEO_PLAYER_DISPLAY_NAME = 'Video Player';

type VideoPlayerProps = {
  film: Film | null,
  isPreviewPlayer?: boolean;
  handleProgressUpdate?: () => void;
}

const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoPlayerProps>((
  {film, isPreviewPlayer, handleProgressUpdate}: VideoPlayerProps, ref) => (
  <video
    src={isPreviewPlayer
      ? film?.previewVideoLink
      : film?.videoLink}
    ref={ref}
    className="player__video"
    poster={film?.previewImage}
    onTimeUpdate={handleProgressUpdate}
  />
));
VideoPlayer.displayName = VIDEO_PLAYER_DISPLAY_NAME;

export default React.memo(VideoPlayer);
