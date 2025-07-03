import { NewsCardAdmin } from '@/entities/newsCardAdmin'
import { useDeleteNewsMutation } from '@/shared/api/newsApi'
import type { NewsItem } from '@/shared/api/types'
import { cn } from '@/shared/lib/cn'
import { useState, type ComponentProps } from 'react'
import { toast } from 'react-toastify'
import { DeleteNewsModal } from '../deleteNewsModal'
import { EditNewsModal } from '../editNewsModal'

type Props = {
  newsList: NewsItem[]
} & ComponentProps<'ul'>

export const NewsCardAdminList = ({ newsList }: Props) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [modalType, setModalType] = useState<'delete' | 'edit' | null>(null)
  const [deleteNews, { isLoading: isDeleting }] = useDeleteNewsMutation()

  const deleteNewsHandler = async () => {
    if (!selectedNews) return
    try {
      await deleteNews({ id: selectedNews.id }).unwrap()
      toast.success('Новость удалена')
      setModalType(null)
    } catch {
      toast.error('Ошибка при удалении новости')
    }
  }

  return (
    <>
      <ul className={cn('grid grid-cols-1 gap-2 rounded-md px-2 py-4 lg:grid-cols-2')}>
        {newsList.map((news) => (
          <li key={news.id}>
            <NewsCardAdmin
              news={news}
              onDelete={() => {
                setSelectedNews(news)
                setModalType('delete')
              }}
              onEdit={() => {
                setSelectedNews(news)
                setModalType('edit')
              }}
            />
          </li>
        ))}
      </ul>

      {modalType === 'delete' && selectedNews && (
        <DeleteNewsModal
          open={modalType === 'delete'}
          onOpenChange={() => setModalType(null)}
          news={selectedNews}
          deleteNews={deleteNewsHandler}
          isDeleting={isDeleting}
        />
      )}

      {modalType === 'edit' && selectedNews && (
        <EditNewsModal
          open={modalType === 'edit'}
          onOpenChange={() => setModalType(null)}
          news={selectedNews}
        />
      )}
    </>
  )
}
