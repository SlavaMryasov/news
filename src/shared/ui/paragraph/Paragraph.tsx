import { cn } from '@/shared/lib/cn'
import type { ComponentProps } from 'react'

export const Paragraph = ({ className, ...props }: ComponentProps<'p'>) => (
  <p className={cn('flex flex-col leading-7 md:text-lg lg:text-xl', className)} {...props} />
)
