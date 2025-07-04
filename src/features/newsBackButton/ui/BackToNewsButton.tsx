import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'
import { Link } from 'react-router-dom'

export const BackToNewsButton = () => (
  <div className="flex">
    <Button asChild>
      <Link to="/" className="inline-flex items-center">
        <Icon icon="arrowLeft" className="text-red-400" />
        <span>Вернуться к новостям</span>
      </Link>
    </Button>
  </div>
)
