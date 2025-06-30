import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';



const baseQuery = fetchBaseQuery({ baseUrl:" https://bike-store-nine.vercel.app/api/v1",
  credentials : "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token

    if (token) {
      headers.set('authorization', ` ${token}`)
    }

    return headers
  },
  })
  console.log(import.meta.env.VITE_MAIN_API )

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export default baseApi;