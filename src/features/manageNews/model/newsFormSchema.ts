import z from 'zod'

export const newsFormSchema = z.object({
  title: z.string().min(5, { message: 'Введите название новости' }),
  imageUrl: z
    .string()
    .min(3, { message: 'Веедите ссылку на картинку' })
    .startsWith('https://', { message: 'Ссылка должна начинаться с https://' })
    .url({ message: 'Некорректный URL' }),
  route: z
    .string()
    .min(4, { message: 'Введите путь к новости' })
    .startsWith('/news', { message: 'Путь должен начинаться с "/news"' }),
  description: z.string().min(40, { message: 'Минимальное количесвто символов 40' }),
  news: z
    .string()
    .min(40, { message: 'Минимальное количесвто символов 40' })
    .max(500, { message: 'Максимум 500 символов' }),
})
