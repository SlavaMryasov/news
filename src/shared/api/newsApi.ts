import type { RequestNewsData } from '@/features/manageNews/model/types'
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
    editNews: builder.mutation<void, RequestNewsData>({
      query: (entry) => ({
        url: '/news',
        method: 'PUT',
        body: entry,
      }),
      invalidatesTags: ['News'],
    }),
    addNews: builder.mutation<void, RequestNewsData>({
      query: (entry) => ({
        url: '/news',
        method: 'POST',
        body: entry,
      }),
      invalidatesTags: ['News'],
    }),
  }),
})

export const { useGetNewsQuery, useDeleteNewsMutation, useEditNewsMutation, useAddNewsMutation } =
  newsApi
