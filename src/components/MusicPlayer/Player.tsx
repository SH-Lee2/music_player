/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';
import { Song } from '../../interface/song.interface';

interface Props {
  activeSong: Song;
  volume: number;
  isPlaying: boolean;
  seekTime: number;
  repeat: boolean;
  onEnded: () => void;
  onTimeUpdate: (event: React.ChangeEvent<HTMLAudioElement>) => void;
  onLoadedData: (event: React.ChangeEvent<HTMLAudioElement>) => void;
}

const Player = ({
  activeSong,
  volume,
  isPlaying,
  seekTime,
  repeat,
  onEnded,
  onTimeUpdate,
  onLoadedData,
}: Props) => {
  const ref = useRef<HTMLAudioElement>(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  // volume, seekTime 클릭해서 변경될때
  useEffect(() => {
    if (ref.current) ref.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (ref.current) ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
