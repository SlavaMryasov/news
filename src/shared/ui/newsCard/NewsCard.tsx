import { cn } from '@/shared/lib/cn'
import { useEffect, useState, type ComponentPropsWithRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button'

type Props = {
  title: string
  text: string
  to: string
  image: string
} & ComponentPropsWithRef<'div'>

export const NewsCard = ({ title, text, ref, to, image, className, ...props }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const setIsOpenHandler = () => {
    if (window.innerWidth < 1024) {
      setIsOpen((prev) => !prev)
    }
  }

  useEffect(() => {
    const handleResize = () => setIsOpen(false)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div
      ref={ref}
      className={cn(
        `group relative flex max-w-md min-w-[340px] items-end overflow-hidden rounded-md`,
        className,
      )}
      onClick={setIsOpenHandler}
      {...props}
    >
      <img src={image} alt={title} />
      <div
        className={cn(
          'xs:pt-3 flex flex-col items-center justify-between px-6 py-4 pt-1.5 text-white',
          'absolute inset-0 z-20',
          'transition-all duration-300',
          isOpen
            ? 'top-0 bg-[#253745]/[0.9]'
            : 'top-3/4 bg-[#253745]/[0.75] lg:group-hover:top-0 lg:group-hover:bg-[#253745]/[0.9]',
        )}
      >
        <div className="flex flex-col gap-4">
          <h3 className="xs:text-xl leading-6">{title}</h3>
          <p className="leading-5 font-light">{text}</p>
        </div>
        <Button asChild className="self-start">
          <Link to={to}>Перейти</Link>
        </Button>
      </div>
    </div>
  )
}

NewsCard.displayName = 'NewsCard'
