import { cn } from '@/shared/lib/cn'

type Props = {
  label: string
  items: { id: string; label: string; value: string }[]
  className?: string
}

export const LabeledList = ({ label, items, className }: Props) => (
  <div className={cn('flex flex-col', className)}>
    <span className="font-medium">{label}:</span>
    {items.map((item) => (
      <span key={item.id}>
        <span className="font-medium">{item.label}:</span> {item.value}
      </span>
    ))}
  </div>
)
