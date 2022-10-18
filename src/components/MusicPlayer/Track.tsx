import React from 'react';
import { Song } from '../../interface/song.interface';

interface Props {
  isPlaying: boolean;
  isActive: boolean;
  activeSong: Song;
}

const Track = ({ isPlaying, isActive, activeSong }: Props) => (
  <div className="flex-1 flex items-center justify-start">
    <div
      className={`hidden ${isPlaying && isActive ? 'animate-spin' : ''} h-16 w-16 mr-4 sm:block`}
    >
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
