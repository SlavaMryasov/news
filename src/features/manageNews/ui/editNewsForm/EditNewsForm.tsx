import type { NewsItem } from '@/shared/api/types'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'

export const EditNewsForm = ({ news }: { news?: NewsItem }) => {
  return (
    <form className="flex flex-col">
      <Input
        label="Название новости"
        placeholder="Введите название новости"
        defaultValue={news?.title}
      />
      <Input
        label="Ссылка на картинку"
        placeholder="Введите ссылку на картинку"
        defaultValue={news?.imageUrl}
      />
      <Input
        label="Путь к новости"
        placeholder="Введите путь к новости"
        defaultValue={news?.route}
      />
      <Textarea label="Описание" placeholder="Опишите новость" defaultValue={news?.description} />
      <Textarea label="Новость" placeholder="Введите новость" defaultValue={news?.news} />
    </form>
  )
}
