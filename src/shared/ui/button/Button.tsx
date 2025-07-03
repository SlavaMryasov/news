import { cn } from '@/shared/lib/cn'
import { Slot } from '@radix-ui/react-slot'
import type React from 'react'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
  ref?: React.Ref<HTMLButtonElement>
  asChild?: boolean
  className?: string
} & ComponentPropsWithoutRef<'button'>

export const Button = ({ ref, asChild, className, ...props }: Props) => {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      className={cn(
        'rounded-sm bg-[#3d64dd] px-3 py-1.5 text-sm text-white',
        'active:bg-[#5a7af4]',
        'hover:bg-[#5372e4]',
        'disabled:bg-gray-300 disabled:text-gray-500',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}

Button.displayName = 'Button'
