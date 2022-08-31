import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../util/const';

const useVideoPlayer = () => {
  const location = useLocation();
  const isPreviewPlayer = !(location.pathname).includes(AppRoute.Player);

  const [playerState, setPlayerState] = useState({
    progress: 0,
    time: 0,
    isPlaying: isPreviewPlayer,
    isMuted: isPreviewPlayer,
  });

  const [isLoading, setIsLoading] = useState(true);

  const {isPlaying, isMuted} = playerState;

  const videoRef = React.createRef<HTMLVideoElement>();

  const handlePlayButtonToggle = useCallback(
    () => {
      setPlayerState({
        ...playerState,
        isPlaying: !isPlaying,
      });
    }, [isPlaying, playerState]
  );

  const handleProgressUpdate = useCallback(
    () => {
      if (videoRef.current) {
        const update = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setPlayerState({
          ...playerState,
          progress: update,
          time: videoRef.current.duration - videoRef.current.currentTime,
        });
      }
    }, [playerState, videoRef]);

  const handlePlayback = useCallback(
    () => {(isPreviewPlayer)
      ? setTimeout(() => videoRef.current?.play(), 1000)
      : videoRef.current?.play();
    },
    [isPreviewPlayer, videoRef]
  );

  const handleVideoLoadedData = useCallback(() => {
    setIsLoading(false);
    if (videoRef.current) {
      setPlayerState({
        ...playerState,
        isPlaying: isPlaying,
        time: videoRef.current.duration
      });
    }
  }, [isPlaying, playerState, videoRef]);

  useLayoutEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (!videoRef.current) {
        return;
      }

      videoRef.current.onloadeddata = handleVideoLoadedData;
      videoRef.current.muted = isPreviewPlayer ? true : isMuted;

      isPlaying && !isLoading
        ? handlePlayback()
        : videoRef.current.pause();
    }

    return () => {
      isMounted = false;
    };
  }, [handlePlayback, handleVideoLoadedData, isLoading, isMuted, isPlaying, isPreviewPlayer, videoRef]);

  return {
    videoRef,
    playerState,
    isPreviewPlayer,
    isLoading,
    handlePlayButtonToggle,
    handleProgressUpdate,
  };
};

export default useVideoPlayer;
