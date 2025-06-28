import { useGetNewsQuery } from '@/shared/api/newsApi'

export const News = () => {
  const { data: newsData, isLoading } = useGetNewsQuery()
  console.log(newsData, isLoading)
  return <div>News</div>
}
