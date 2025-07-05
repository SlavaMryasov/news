import type { NewsItem } from '@/shared/api/types'
import type z from 'zod'
import type { newsFormSchema } from './newsFormSchema'

export type RequestNewsData = Omit<NewsItem, 'date'> & { date: Date }

export type FormFields = z.infer<typeof newsFormSchema>
