import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { NewsResponse } from './types'
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    getNews: builder.query<NewsResponse, void>({
      query: () => '/news',
      providesTags: ['News'],
    }),
    deleteNews: builder.mutation<void, { id: string }>({
      query: (entry) => ({
        url: '/news',
        method: 'DELETE',
        body: entry,
      }),
      invalidatesTags: ['News'],
    }),
  }),
})

export const { useGetNewsQuery, useDeleteNewsMutation } = newsApi
