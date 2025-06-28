import { AboutMe } from '@/pages/aboutMe'
import { Crud } from '@/pages/crud'
import { News } from '@/pages/news'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { MainLayoutWrapper } from '../../../../widgets/layout/MainLayoutWrapper'
import { Error404 } from '@/pages/Error404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayoutWrapper>
        <Outlet />
      </MainLayoutWrapper>
    ),
    children: [
      { index: true, element: <News /> },
      { path: 'crud', element: <Crud /> },
      { path: 'aboutMe', element: <AboutMe /> },
    ],
  },
  {
   path:'*', element: <Error404/>
  }
])
