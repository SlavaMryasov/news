import { NewsCard } from '@/entities/newsCard'
import type { NewsItem } from '@/shared/api/types'
import { cn } from '@/shared/lib/cn'
import { DEFAULT_NEWS_IMAGE } from '@/shared/lib/constants'
import type { ComponentProps } from 'react'

type Props = {
  data: NewsItem[]
  className?: string
} & ComponentProps<'ul'>

export const NewsCardList = ({ data, className }: Props) => {
  return (
    <ul className={cn('xs:gap-8 flex flex-wrap justify-center gap-4 pr-5 pl-1.5', className)}>
      {data.map((news: NewsItem) => (
        <li key={news.id}>
          <NewsCard
            text={news.news}
            title={news.description}
            to={news.route}
            image={news.imageUrl || DEFAULT_NEWS_IMAGE}
          />
        </li>
      ))}
    </ul>
  )
}
