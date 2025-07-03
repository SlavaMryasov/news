import { cn } from '@/shared/lib/cn'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { FormFields } from '../../model/types'

type Props = {
  register: UseFormRegister<FormFields>
  errors: FieldErrors<FormFields>
  className?: string
}

export const EditNewsForm = ({ register, errors, className }: Props) => {
  return (
    <form className={cn('flex flex-col gap-2', className)}>
      <Input
        label="Название новости"
        placeholder="А у нас в квартире газ!"
        {...register('title')}
        isError={!!errors.title}
        hint={errors.title?.message}
      />
      <Input
        label="Ссылка на картинку"
        placeholder="https://..."
        {...register('imageUrl')}
        isError={!!errors.imageUrl}
        hint={errors.imageUrl?.message}
      />
      <Input
        label="Путь к новости"
        placeholder="/news"
        {...register('route')}
        isError={!!errors.route}
        hint={errors.route?.message}
      />
      <Textarea
        label="Описание"
        placeholder="В доме 46 появился газ после капитального ремонта"
        {...register('description')}
        isError={!!errors.description}
        hint={errors.description?.message}
      />
      <Textarea
        label="Новость"
        placeholder="Введите новость"
        {...register('news')}
        isError={!!errors.news}
        hint={errors.news?.message}
      />
    </form>
  )
}
