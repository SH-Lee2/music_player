import React from 'react';
import SongBar from './SongBar';

import { Song } from '../interface/song.interface';
import { Album } from '../interface/artistDetail.interface';
import { Related } from '../interface/related.interface';
type DataTypes = Album | Related;

interface Props {
  data: DataTypes[];
  artistId: string | undefined;
  isPlaying: boolean;
  activeSong: Song;
  handlePauseClick?: () => void;
  handlePlayClick?: (song: Song, i: number) => void;
}

const RelatedSongs = ({
  data,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">관련 노래:</h1>

      <div className="mt-6 w-full flex flex-col">
        {data.map((song, i) => (
          <SongBar
            // key={`${artistId}-${song.key}-${i}`}
            key={`${artistId}-${i}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
