import { Suspense } from 'react'
import { icons } from './icons'

export type IconName = keyof typeof icons

type Props = {
  className?: string
  color?: string
  height?: number
  width?: number
  onClick?: () => void
  cursor?: 'auto' | 'pointer'
  icon: IconName
}

export const Icon = ({
  icon,
  className,
  color = 'inherit',
  cursor = 'pointer',
  height = 20,
  width = 20,
  onClick,
}: Props) => {
  const Component = icons[icon]

  if (!Component) return null

  return (
    <Suspense fallback={null}>
      <Component
        className={className}
        color={color}
        cursor={cursor}
        height={height}
        width={width}
        onClick={onClick}
      />
    </Suspense>
  )
}
