import type { NewsItem } from '@/shared/api/types'
import { cn } from '@/shared/lib/cn'
import { CarouselItem as CarouselItemComponent } from '@/shared/ui/carousel/Carousel'
import { useNavigate } from 'react-router-dom'

type Props = Omit<NewsItem, 'id'> & { className?: string }

export const CarouselItem = ({
  date,
  imageUrl,
  route,
  news,
  description,
  title,
  className,
}: Props) => {
  const navigate = useNavigate()

  return (
    <CarouselItemComponent
      className={cn('flex flex-col gap-6 lg:flex-row', className)}
      onClick={() => navigate(route)}
    >
      <div className={cn('max-h-[500px] overflow-hidden rounded-xl', 'lg:w-1/2')}>
        <img src={imageUrl} alt={description} className="h-full w-full object-cover" />
      </div>
      <article className="flex flex-col justify-between sm:gap-4 lg:w-1/2">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl xl:text-[40px] 2xl:text-5xl">{title}</h3>
          <p className="md:text-lg xl:text-xl 2xl:text-2xl">{news}</p>
        </div>
        <div className="text-end">
          <time dateTime={date}>{date}</time>
        </div>
      </article>
    </CarouselItemComponent>
  )
}
