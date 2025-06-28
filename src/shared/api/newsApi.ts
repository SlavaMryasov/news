import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { NewsResponse } from './types'
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsResponse, void>({
      query: () => '/news',
    }),
  }),
})

export const { useGetNewsQuery } = newsApi
