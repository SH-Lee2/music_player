import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { Country } from '../interface/country.interface';
import { Song } from '../interface/song.interface';

type SongType = Song | Country;

interface Props {
  isPlaying: boolean;
  activeSong: Song;
  song: SongType;
  handlePause?: () => void;
  handlePlay?: () => void;
}

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }: Props) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
