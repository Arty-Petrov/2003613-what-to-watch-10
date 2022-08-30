import { useEffect, useRef } from 'react';
import { Film } from '../../types/film';

const PLAY_DELAY = 1000;

type VideoPlayerProps = {
  film: Film,
}

function VideoPlayer ({film}:VideoPlayerProps): JSX.Element {

  const videoSrc = film.previewVideoLink;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const playVideo = setTimeout(
      () => videoRef.current && videoRef.current.play(),
      PLAY_DELAY);
    return () => clearTimeout(playVideo);
  });

  return (
    <video
      src={videoSrc}
      ref={videoRef}
      poster={film.previewImage}
      muted
      width="280"
      height="175"
    />
  );
}

export default VideoPlayer;
