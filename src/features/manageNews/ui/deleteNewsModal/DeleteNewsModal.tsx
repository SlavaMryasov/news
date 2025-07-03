import type { NewsItem } from '@/shared/api/types'
import { cn } from '@/shared/lib/cn'
import { Button } from '@/shared/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog/Dialog'
import { Spinner } from '@/shared/ui/spinner'
import type { ComponentProps } from 'react'

type AdminNewsModalProps = {
  open: boolean
  news: NewsItem
  isDeleting: boolean
  onOpenChange: (open: boolean) => void
  deleteNews: () => void
} & ComponentProps<typeof DialogContent>

export const DeleteNewsModal = ({
  open,
  news,
  onOpenChange,
  deleteNews,
  isDeleting,
  className,
  ...props
}: AdminNewsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('overflow-hidden bg-gray-50', className)} {...props}>
        <DialogHeader>
          <DialogTitle>Удаление новости</DialogTitle>
        </DialogHeader>

        <DialogDescription className="relative">
          <div className="flex flex-col">
            <span>Вы действительно хотите удалить новость?</span>
            <span>"{news.title}"</span>
          </div>
        </DialogDescription>

        <div className="flex justify-end gap-2">
          <Button onClick={deleteNews}>Да</Button>
          <Button onClick={() => onOpenChange(false)}>Нет</Button>
        </div>
        {isDeleting && (
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-xs">
            <Spinner />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
