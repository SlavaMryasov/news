import { cn } from '@/shared/lib/cn'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  logo: ReactNode
  ref?: React.Ref<HTMLHeadingElement>
  className?: string
}

export const Header = ({ children, className, logo, ref }: Props) => {
  return (
    <header
      className={cn('border-dark-300 border-b bg-black p-0', {
        className,
      })}
      ref={ref}
    >
      <div className="mx-auto flex items-center justify-between bg-transparent px-6 py-2">
        {logo}
        {children}
      </div>
    </header>
  )
}

Header.displayName = 'Header'
