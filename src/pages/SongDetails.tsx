import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import Error from '../components/Error';
import Loader from '../components/Loader';
import DetailsHeader from '../components/DetailsHeader';
import RelatedSongs from '../components/RelatedSongs';

import { RootState } from '../redux/store';
import { Song } from '../interface/song.interface';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state: RootState) => state.player);
  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error: errorSongDetails,
  } = useGetSongDetailsQuery(songid);
  const {
    data,
    isFetching: isFetchinRelatedSongs,
    error: errorSongRelated,
  } = useGetSongRelatedQuery(songid);

  if (isFetchingSongDetails && isFetchinRelatedSongs)
    return <Loader title="Searching song details" />;

  if (errorSongDetails || errorSongRelated) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song: Song, i: number) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">가사 :</h2>

        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS' && songData?.sections[1]?.text ? (
            songData?.sections[1]?.text.map((line: string, i: number) => (
              <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">가사를 찾을 수 없습니다!</p>
          )}
        </div>
      </div>
      {data && (
        <RelatedSongs
          data={data}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      )}
    </div>
  );
};

export default SongDetails;
