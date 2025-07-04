import type z from 'zod'
import type { newsFormSchema } from './newsFormSchema'

export type RequestNewsData = {
  id: string
  date: Date
  title: string
  imageUrl: string
  route: string
  description: string
  news: string
}

export type FormFields = z.infer<typeof newsFormSchema>
