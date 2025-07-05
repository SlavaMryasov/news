import { cn } from '@/shared/lib/cn'
import type { ComponentProps, PropsWithChildren } from 'react'

type Props = ComponentProps<'div'> & PropsWithChildren

export const AboutMeCard = ({ title, children, className }: Props) => {
  return (
    <div className={cn('flex flex-col gap-4 rounded-xl border-2 border-[#DEDEDE] p-5', className)}>
      <h3
        className={cn(
          'text-[28px] font-medium',
          'md:text-[32px] md:leading-10',
          'lg:text-[40px] lg:leading-11',
        )}
      >
        {title}
      </h3>
      {children}
    </div>
  )
}
