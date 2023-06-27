import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { DATA_URL } from '../../services';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: DATA_URL,
  }),
  endpoints: (builder) => ({
    getAvailableHotels: builder.query({
      query: ({
        search,
        dateFrom,
        dateTo,
        adults,
        children,
        childrenAges,
        rooms,
      }) => {
        const searchPrams = new URLSearchParams({
          search,
          dateFrom,
          dateTo,
          adults,
          children,
          childrenAges,
          rooms,
        });
        return `?${searchPrams.toString()}`;
      },
    }),
  }),
});

export const { useGetAvailableHotelsQuery } = apiSlice;
