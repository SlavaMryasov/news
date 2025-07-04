import type { NewsItem } from '@/shared/api/types'
import { cn } from '@/shared/lib/cn'
import { Icon } from '@/shared/ui/icon'
import type { ComponentProps } from 'react'

type Props = {
  news: NewsItem
  onDelete: () => void
  onEdit: () => void
} & ComponentProps<'div'>

export const NewsCardAdmin = ({ news, onDelete, onEdit, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'flex flex-col rounded-md border border-gray-300 bg-gray-50 p-2 hover:bg-gray-200',
        className,
      )}
      {...props}
    >
      <span>{news.title}</span>
      <div className="flex justify-end gap-2">
        <Icon icon="write" onClick={onEdit} />
        <Icon icon="trash" onClick={onDelete} />
      </div>
    </div>
  )
}
