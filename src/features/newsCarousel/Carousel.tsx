import type { NewsItem } from '@/shared/api/types'
import { cn } from '@/shared/lib/cn'
import { DEFAULT_NEWS_IMAGE } from '@/shared/lib/constants'
import { Carousel as CarouselComponent } from '@/shared/ui/carousel'
import { CarouselContent, CarouselNext, CarouselPrevious } from '@/shared/ui/carousel/Carousel'
import Autoplay from 'embla-carousel-autoplay'
import { CarouselItem } from './CarouselItem'

export type Props = {
  items: NewsItem[]
  className?: string
}

export const Carousel = ({ items, className }: Props) => {
  const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false })
  return (
    <section className={cn('w-full bg-white p-5', className)}>
      <CarouselComponent opts={{ loop: true }} plugins={[autoplay]}>
        <CarouselContent>
          {items.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                title={item.title}
                imageUrl={item.imageUrl || DEFAULT_NEWS_IMAGE}
                news={item.news}
                date={item.date.toString()}
                route={item.route}
                description={item.description}
              />
            )
          })}
        </CarouselContent>
        <div className="absolute bottom-0.5 left-1/2 flex justify-center gap-1 max-lg:hidden">
          <CarouselPrevious onClick={() => autoplay.reset()} />
          <CarouselNext onClick={() => autoplay.reset()} />
        </div>
      </CarouselComponent>
    </section>
  )
}
