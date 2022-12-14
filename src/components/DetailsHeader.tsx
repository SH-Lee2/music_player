import React from 'react';
import { Link } from 'react-router-dom';
import { ArtistDetail } from '../interface/artistDetail.interface';

import { SongDetail } from '../interface/songDetail.interface';

interface Props {
  artistId: string | undefined;
  artistData?: ArtistDetail;
  songData?: SongDetail;
}

const DetailsHeader = ({ artistId, artistData, songData }: Props) => {
  const artist = artistId && artistData?.artists[artistId].attributes;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          alt="profile"
          src={
            artistId
              ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
              : songData?.images?.coverart
          }
          className="h-28 rounded-full object-cover border-2 shadow-xl shadow-black sm:w-48 w-28 sm:h-48"
        />

        <div className="ml-5">
          <p className="font-bold text-xl text-white sm:text-3xl">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
              <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
            </Link>
          )}

          <p className="text-base text-gray-400 mt-2">
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>

      <div className="w-full h-24 sm:h-44" />
    </div>
  );
};

export default DetailsHeader;
