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
import type { ComponentProps } from 'react'
import { EditNewsForm } from '../editNewsForm'

type Props = {
  open: boolean
  news: NewsItem
  onOpenChange: (open: boolean) => void
} & ComponentProps<typeof DialogContent>

export const EditNewsModal = ({ open, news, onOpenChange, className, ...props }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('overflow-hidden bg-gray-50', className)} {...props}>
        <DialogHeader>
          <DialogTitle>Редактирование новости</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <EditNewsForm news={news} />
          <div className="flex flex-col">
            <span>Вы действительно хотите редактировать новость?</span>
            <span>"{news.title}"</span>
          </div>
        </DialogDescription>
        <div className="flex justify-end gap-2">
          <Button>Да</Button>
          <Button onClick={() => onOpenChange(false)}>Нет</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
