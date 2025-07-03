import { NewsCardAdminList } from '@/features/manageNews/ui/newsCardAdminList'
import { useGetNewsQuery } from '@/shared/api/newsApi'
import { Spinner } from '@/shared/ui/spinner'

export const Crud = () => {
  const { data: newsData, isLoading: isLoadingGetNews } = useGetNewsQuery()

  if (isLoadingGetNews) return <Spinner />
  return (
    <div className="h-full bg-gray-100 p-5">
      {newsData && <NewsCardAdminList newsList={newsData?.data} />}
    </div>
  )
}
