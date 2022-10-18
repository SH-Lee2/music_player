import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ArtistDetail } from '../../interface/artistDetail.interface';
import { Country } from '../../interface/country.interface';
import { Related } from '../../interface/related.interface';
import { Search } from '../../interface/search.interface';
import { Song } from '../../interface/song.interface';
import { SongDetail } from '../../interface/songDetail.interface';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
      return headers;
    },
  }),

  endpoints: builder => ({
    getTopCharts: builder.query<Song[], void>({ query: () => '/charts/world' }),
    getSongsByGenre: builder.query<Song[], string | undefined>({
      query: genre => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongDetails: builder.query<SongDetail, string | undefined>({
      query: songid => `/tracks/details?track_id=${songid}`,
    }),
    getArtistDetails: builder.query<ArtistDetail, string | undefined>({
      query: artistId => `/artists/details?artist_id=${artistId}`,
    }),
    getSongRelated: builder.query<Related[], string | undefined>({
      query: songid => `/tracks/related?track_id=${songid}`,
    }),
    getSongsBySearch: builder.query<Search, string | undefined>({
      query: searchTerm => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getSongsByCountry: builder.query<Country[], string | undefined>({
      query: countryCode => `/charts/country?country_code=${countryCode}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetSongRelatedQuery,
  useGetSongsBySearchQuery,
  useGetSongsByCountryQuery,
} = shazamCoreApi;
