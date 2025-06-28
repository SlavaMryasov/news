import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'
import { Link } from 'react-router-dom'

export const Error404 = () => {
  return (
    <>
      <h1>Упс, Вы заглянули на неcуществующую страницу</h1>
      <Button asChild>
        <Link to="/" className="inline-flex items-center">
          <Icon icon="arrowLeft" className="text-red-400" />
          <span>Вернуться на главную</span>
        </Link>
      </Button>
    </>
  )
}
