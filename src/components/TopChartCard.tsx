import React from 'react';
import { Link } from 'react-router-dom';
import { Song } from '../interface/song.interface';
import PlayPause from './PlayPause';

interface Props {
  song: Song;
  i: number;
  isPlaying: boolean;
  activeSong: Song;
  handlePauseClick: () => void;
  handlePlayClick: () => void;
}

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}: Props) => {
  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
        activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'
      } py-2 p-4 rounded-lg cursor-pointer mb-2`}
    >
      <h3 className="font-bold text-base text-white mr-3">{i + 1}</h3>
      <div className="flex flex-1 justify-between items-center">
        <img src={song?.images?.coverart} alt={song?.title} className="w-20 h-20 rounded-lg" />
        <div className="flex flex-1 flex-col justify-center mx-3">
          <Link to={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">{song?.title}</p>
          </Link>
          {song.artists && (
            <Link to={`/artists/${song?.artists[0].adamid}`}>
              <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
            </Link>
          )}
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
};

export default TopChartCard;
