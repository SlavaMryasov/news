import { cn } from '@/shared/lib/cn'
import { Icon } from '../icon'

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className={cn('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', className)}>
      <Icon icon="spinner" className="animate-spin" />
    </div>
  )
}
