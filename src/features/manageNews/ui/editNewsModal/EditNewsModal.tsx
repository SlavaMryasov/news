import { useEditNewsMutation } from '@/shared/api/newsApi'
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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { editingFormSchema } from '../../model/editingFormSchema'
import type { FormFields } from '../../model/types'
import { EditNewsForm } from '../editNewsForm'

type Props = {
  open: boolean
  news: NewsItem
  onOpenChange: (open: boolean) => void
} & React.ComponentProps<typeof DialogContent>

export const EditNewsModal = ({ open, news, onOpenChange, className, ...props }: Props) => {
  const [editNews, { isLoading }] = useEditNewsMutation()

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      title: news?.title || '',
      imageUrl: news?.imageUrl || '',
      route: news?.route || '',
      description: news?.description || '',
      news: news?.news || '',
    },
    resolver: zodResolver(editingFormSchema),
    mode: 'onChange',
  })

  const handleEditNews = async (formData: FormFields) => {
    try {
      await editNews({ id: news.id, date: new Date(), ...formData }).unwrap()
      toast.success('Новость успешно отредактирована')
      onOpenChange(false)
    } catch {
      toast.error('Ошибка редактирования новости')
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('overflow-hidden bg-gray-50', className)} {...props}>
        <DialogHeader>
          <DialogTitle>Редактирование новости</DialogTitle>
        </DialogHeader>

        <DialogDescription asChild>
          <div>
            <EditNewsForm register={register} errors={errors} />
            <div className="flex flex-col">
              <span>Вы действительно хотите редактировать новость?</span>
              <span>"{news.title}"</span>
            </div>
          </div>
        </DialogDescription>

        <div className="flex justify-end gap-2">
          <Button
            className="disabled:cursor-not-allowed"
            disabled={!isValid || isLoading}
            onClick={handleSubmit(handleEditNews)}
          >
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-xs">
                <Spinner />
              </div>
            ) : (
              'Да'
            )}
          </Button>
          <Button onClick={() => onOpenChange(false)}>Нет</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
