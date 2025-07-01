import type { PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import { MainLayout } from './MainLayout'
export const MainLayoutWrapper = ({ children }: PropsWithChildren) => {
  return (
    <MainLayout>
      {children}
      <ToastContainer position="bottom-right" />
    </MainLayout>
  )
}
