import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', 'dabb821a4bmsh0d81130b7d70a66p198f29jsn27f55a283438');
      return headers;
    },
  }),
  // refetchOnMountOrArgChange: 1800,
  endpoints: builder => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongsByGenre: builder.query({ query: genre => `/charts/genre-world?genre_code=${genre}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getArtistDetails: builder.query({
      query: artistId => `/artists/details?artist_id=${artistId}`,
    }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
    getSongsBySearch: builder.query({
      query: searchTerm => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getSongsByCountry: builder.query({
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
