import { useAddNewsMutation } from '@/shared/api/newsApi'
import { cn } from '@/shared/lib/cn'
import { Button } from '@/shared/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui/dialog/Dialog'
import { Spinner } from '@/shared/ui/spinner'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import { newsFormSchema } from '../../model/newsFormSchema'
import type { FormFields } from '../../model/types'
import { NewsForm } from '../newsForm'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
} & React.ComponentProps<typeof DialogContent>

export const AddNewsModal = ({ open, onOpenChange, className, ...props }: Props) => {
  const [addNews, { isLoading }] = useAddNewsMutation()

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormFields>({
    defaultValues: {
      title: '',
      imageUrl: '',
      route: '/news/',
      description: '',
      news: '',
    },
    resolver: zodResolver(newsFormSchema),
    mode: 'onChange',
  })

  const handleAddNews = async (formData: FormFields) => {
    try {
      await addNews({ id: uuidv4(), date: new Date(), ...formData }).unwrap()
      toast.success('Новость успешно добавлена')
      reset()
      onOpenChange(false)
    } catch {
      toast.error('Ошибка добавления новости')
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('overflow-hidden bg-gray-50', className)} {...props}>
        <DialogHeader>
          <DialogTitle>Добавление новости</DialogTitle>
        </DialogHeader>

        <NewsForm register={register} errors={errors} />

        <div className="mt-4 flex justify-end gap-2">
          <Button
            disabled={!isValid || isLoading}
            onClick={handleSubmit(handleAddNews)}
            className="bg-green-500 hover:bg-green-600 disabled:cursor-not-allowed"
          >
            Добавить
          </Button>
          <Button onClick={() => onOpenChange(false)}>Отмена</Button>
        </div>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-xs">
            <Spinner />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
