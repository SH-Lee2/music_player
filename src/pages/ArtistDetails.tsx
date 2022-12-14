import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';
import Loader from '../components/Loader';
import Error from '../components/Error';
import DetailsHeader from '../components/DetailsHeader';
import RelatedSongs from '../components/RelatedSongs';

import { RootState } from '../redux/store';

const ArtistDetails = () => {
  const { id: artistId } = useParams<string>();
  const { activeSong, isPlaying } = useSelector((state: RootState) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      {artistData && (
        <RelatedSongs
          data={Object.values(artistData?.songs)}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      )}
    </div>
  );
};

export default ArtistDetails;
