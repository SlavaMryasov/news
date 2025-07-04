import { AddNewsModal } from '@/features/manageNews/ui/addNewsModal'
import { NewsCardAdminList } from '@/features/manageNews/ui/newsCardAdminList'
import { useGetNewsQuery } from '@/shared/api/newsApi'
import { Button } from '@/shared/ui/button'
import { Spinner } from '@/shared/ui/spinner'
import { useState } from 'react'

export const Crud = () => {
  const { data: newsData, isLoading } = useGetNewsQuery()
  const [isOpenAddModal, setIsOpenAddModal] = useState(false)

  if (isLoading) return <Spinner />

  return (
    <div className="h-full bg-gray-100 p-5">
      <AddNewsModal open={isOpenAddModal} onOpenChange={setIsOpenAddModal} />
      <div className="mr-2 flex justify-end">
        <Button onClick={() => setIsOpenAddModal(true)}>Добавить новость</Button>
      </div>

      {newsData && <NewsCardAdminList newsList={newsData.data} />}
    </div>
  )
}
