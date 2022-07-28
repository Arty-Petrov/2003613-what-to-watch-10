import { useEffect, useRef } from 'react';
import Film from '../../types/film';


type VideoPlayerProps = {
  film: Film,
  settings: {
    isPlaying: boolean;
    isMuted: boolean;
  }
}
/// Предусмотрите возможность воспроизведения видео без звука.
// у <video> есть атрибут poster. В нём можно указать путь к изображению постера — картинка,
// которая отображается, когда видео не воспроизводится.
// Это может помочь упростить задачу перевода карточки
// в исходное состояние.

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
      width="280"
      height="175"
    />
  );
}

export default VideoPlayer;
