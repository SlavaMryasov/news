import { AdminNewsModal } from '@/features/manageNews/adminNewsModal'
import type { NewsItem } from '@/shared/api/types'
import { cn } from '@/shared/lib/cn'
import { Icon } from '@/shared/ui/icon'
import { useState, type ComponentProps } from 'react'
import { toast } from 'react-toastify'

type Props = {
  news: NewsItem
  deleteNews: (newsId: string) => void
} & ComponentProps<'div'>

export const NewsCardAdmin = ({ news, deleteNews, className, ...props }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalType, setModalType] = useState<'delete' | 'edit'>('delete')
  const [isDeleting, setIsDeleting] = useState(false)
  const deleteNewsHandler = async () => {
    setIsDeleting(true)
    try {
      await deleteNews(news.id)
      setIsOpenModal(false)
    } catch {
      toast.error('Ошибка при удалении новости')
    } finally {
      setIsDeleting(false)
    }
  }
  return (
    <div
      className={cn('flex flex-col rounded-md border border-gray-300 bg-gray-50 p-2', className)}
      {...props}
    >
      <span>{news.title}</span>
      <div className="flex justify-end gap-2">
        <Icon
          icon="write"
          onClick={() => {
            setModalType('edit')
            setIsOpenModal(true)
          }}
        />

        <Icon
          icon="trash"
          onClick={() => {
            setModalType('delete')
            setIsOpenModal(true)
          }}
        />
      </div>
      {isOpenModal && (
        <AdminNewsModal
          open={isOpenModal}
          onOpenChange={setIsOpenModal}
          type={modalType}
          newsTitle={news.title}
          deleteNews={deleteNewsHandler}
          isDeleting={isDeleting}
        />
      )}
    </div>
  )
}
