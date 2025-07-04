import { AboutMe, Crud, Error404, News, NewsItem } from '@/pages'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { MainLayoutWrapper } from '../../../../widgets/layout/MainLayoutWrapper'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayoutWrapper>
        <Outlet />
      </MainLayoutWrapper>
    ),
    children: [
      { path: '', element: <Navigate to="news" /> },
      { path: 'news', element: <News /> },
      { path: 'news/:route', element: <NewsItem /> },
      { path: 'crud', element: <Crud /> },
      { path: 'aboutMe', element: <AboutMe /> },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
])
