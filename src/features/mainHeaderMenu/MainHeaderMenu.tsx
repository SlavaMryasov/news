import { cn } from '@/shared/lib/cn'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select/Select'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// Пока хардкод, еще не добавлен RTK-Query
const menuItems = [
  { id: 'news', title: 'Новости', route: '/' },
  { id: 'crud', title: 'CRUD с новостями', route: '/crud' },
  { id: 'aboutMe', title: 'Обо мне', route: '/aboutMe' },
]

export const MainHeaderMenu = ({ className }: { className?: string }) => {
  const navigate = useNavigate()
  const location = useLocation().pathname

  const commonHeaderMenuStyles = 'flex text-white'

  return (
    <>
      <div
        className={cn(
          'items-center gap-6 text-xl max-md:hidden',
          commonHeaderMenuStyles,
          className,
        )}
      >
        {menuItems.map((menuItem) => (
          <Link
            className={cn('rounded-md px-3 py-2 transition hover:bg-gray-200 hover:text-black', {
              'bg-gray-50 text-black': menuItem.route === location,
            })}
            key={menuItem.id}
            to={menuItem.route}
          >
            {menuItem.title}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <Select defaultValue={menuItems[0].route} onValueChange={(route) => navigate(route)}>
          <SelectTrigger className="w-50 bg-gray-50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-gray-50">
            {menuItems.map((menuItem) => (
              <SelectItem key={menuItem.id} value={menuItem.route} className="hover:bg-gray-200">
                {menuItem.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  )
}
