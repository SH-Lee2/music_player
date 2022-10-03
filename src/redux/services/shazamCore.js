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
  endpoints: builder => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
