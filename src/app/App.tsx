import { RouterProvider } from 'react-router-dom'
import { router } from './providers/router/config/router'

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
