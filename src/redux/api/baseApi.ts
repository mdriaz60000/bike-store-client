import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'bike.json' }),
  endpoints: (builder) => ({
    getBike: builder.query({
      query: () => '/bike', 
    }),
  }),
});

export const { useGetBikeQuery } = baseApi;