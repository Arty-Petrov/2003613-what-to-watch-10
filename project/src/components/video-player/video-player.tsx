import { useEffect, useRef } from 'react';
import Film from '../../types/film';


type VideoPlayerProps = {
  film: Film,
  settings: {
    isPlaying: boolean;
    isMuted: boolean;
  }
}
// Если быстро перенести курсор с одного элемента на другой, то видео проигрывается в обоих карточках

function VideoPlayer ({film, settings}:VideoPlayerProps): JSX.Element { //settings
  const {isPlaying} = settings;

  const videoSrc = film.previewVideoLink;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying && videoRef.current !== null) {
      videoRef.current.play();
      return;
    }
    videoRef?.current?.pause();
  }, [isPlaying]);

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
