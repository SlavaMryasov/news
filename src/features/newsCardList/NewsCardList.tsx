import { NewsCard } from '@/entities/newsCard'
import type { NewsItem } from '@/shared/api/types'
import { cn } from '@/shared/lib/cn'
import { DEFAULT_NEWS_IMAGE } from '@/shared/lib/constants'
import type { ComponentProps } from 'react'

type Props = {
  data: NewsItem[]
} & ComponentProps<'ul'>

export const NewsCardList = ({ data, className }: Props) => {
  return (
    <ul
      className={cn('flex flex-wrap justify-center gap-4 px-4 pb-4', 'xs:gap-8 xs:pb-8', className)}
    >
      {data.map((news: NewsItem) => (
        <li key={news.id}>
          <NewsCard
            text={news.news}
            title={news.description}
            to={news.route}
            image={news.imageurl || DEFAULT_NEWS_IMAGE}
          />
        </li>
      ))}
    </ul>
  )
}
