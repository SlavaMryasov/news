import { NewsCardList } from '@/features/newsCardList'
import { Carousel } from '@/features/newsCarousel'

import { useGetNewsQuery } from '@/shared/api/newsApi'

import { Spinner } from '@/shared/ui/spinner'

export const News = () => {
  const { data: newsData, isLoading: isLoadingGetNews } = useGetNewsQuery()

  if (isLoadingGetNews) return <Spinner />
  return (
    <>
      <Carousel items={newsData?.data || []} />
      <NewsCardList data={newsData?.data || []} />
    </>
  )
}
