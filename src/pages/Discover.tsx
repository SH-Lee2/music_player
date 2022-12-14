import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { genres } from '../assets/constants';
import Loader from '../components/Loader';
import Error from '../components/Error';

import SongCard from '../components/SongCard';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { selectGenreListId } from '../redux/features/playerSlice';
import { RootState } from '../redux/store';
import { Song } from '../interface/song.interface';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector((state: RootState) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');
  const genreTitle: string | undefined = genres.find(({ value }) => value === genreListId)?.title;

  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-center w-full mt-4 mb-10 sm:flex-row">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle || 'POP'}</h2>
        <select
          onChange={e => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className="bg-black text-gray-300 text-sm p-3 mt-5 rounded-lg outline-none sm:mt-0"
        >
          {genres.map(({ title, value }) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
        {data?.map((song: Song, i: number) => (
          <SongCard
            key={song.key}
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
