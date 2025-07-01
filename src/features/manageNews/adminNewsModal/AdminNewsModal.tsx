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
import { EditNewsForm } from '../editNewsForm'

type AdminNewsModalProps = {
  open: boolean
  type: 'delete' | 'edit'
  newsTitle: string
  isDeleting: boolean
  onOpenChange: (open: boolean) => void
  deleteNews: () => void
} & ComponentProps<typeof DialogContent>

export const AdminNewsModal = ({
  open,
  type,
  newsTitle,
  onOpenChange,
  deleteNews,
  isDeleting,
  className,
  ...props
}: AdminNewsModalProps) => {
  return (
    <>
      {type === 'delete' ? (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className={cn('bg-gray-50', className)} {...props}>
            <DialogHeader>
              <DialogTitle>Удаление новости</DialogTitle>
            </DialogHeader>

            <DialogDescription className="relative">
              <div className="flex flex-col">
                <span>Вы действительно хотите удалить новость?</span>
                <span>"{newsTitle}"</span>
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
      ) : (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className={cn('bg-gray-50', className)} {...props}>
            <DialogHeader>
              <DialogTitle>Редактирование новости</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <EditNewsForm />
              <div className="flex flex-col">
                <span>Вы действительно хотите редактировать новость?</span>
                <span>"{newsTitle}"</span>
              </div>
            </DialogDescription>
            <div className="flex justify-end gap-2">
              <Button>Да</Button>
              <Button onClick={() => onOpenChange(false)}>Нет</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
