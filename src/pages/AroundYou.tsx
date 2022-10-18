import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
import Loader from '../components/Loader';
import SongCard from '../components/SongCard';
import Error from '../components/Error';

import { countryCode } from '../assets';
import { RootState } from '../redux/store';
import { Country } from '../interface/country.interface';

const CountryTracks = () => {
  const [country, setCountry] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const { activeSong, isPlaying } = useSelector((state: RootState) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country || 'KR');

  useEffect(() => {
    axios
      .get(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_GEO_API_KEY}`)
      .then(res => setCountry(res?.data?.location.country))
      .catch(err => window.alert('트래커 혹은 광고 차단을 해제 해주세요.'))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading) return <Loader title="Loading Songs around you..." />;

  if (error && country !== '') return <Error />;

  const transCountry: string | undefined = countryCode.find(({ code }) => code === country)?.value;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around you <span className="font-black">{transCountry}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song: Country, i: number) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
