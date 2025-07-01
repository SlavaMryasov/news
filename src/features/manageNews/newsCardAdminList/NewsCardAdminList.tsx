import { NewsCardAdmin } from '@/entities/newsCardAdmin'
import { useDeleteNewsMutation } from '@/shared/api/newsApi'
import type { NewsItem } from '@/shared/api/types'
import { cn } from '@/shared/lib/cn'
import type { ComponentProps } from 'react'
import { toast } from 'react-toastify'

type Props = {
  newsList: NewsItem[]
} & ComponentProps<'ul'>

export const NewsCardAdminList = ({ newsList }: Props) => {
  const [deleteNews] = useDeleteNewsMutation()
  const deleteNewsHandler = async (newsId: string) => {
    try {
      await deleteNews({ id: newsId }).unwrap()
    } catch {
      toast.error('Ошибка при удалении новости')
    }
  }
  return (
    <ul className={cn('grid grid-cols-1 gap-2 rounded-md px-2 py-4', 'lg:grid-cols-2')}>
      {newsList.map((news) => (
        <li>
          <NewsCardAdmin news={news} deleteNews={deleteNewsHandler} />
        </li>
      ))}
    </ul>
  )
}
