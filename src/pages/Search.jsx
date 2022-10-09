import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loader from '../components/Loader';
import SongCard from '../components/SongCard';

import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector(state => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits.map(song => song.track);

  if (isFetching) return <Loader title={`${searchTerm} 검색중...`} />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        <span className="font-black">{searchTerm}</span> 검색 결과
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
        {!songs && <p className="text-gray-400 font-bold text-lg">검색 결과 없음</p>}
      </div>
    </div>
  );
};

export default Search;
