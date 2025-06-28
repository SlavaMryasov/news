import type { PropsWithChildren } from 'react'
import { MainLayout } from './MainLayout'

export const MainLayoutWrapper = ({ children }: PropsWithChildren) => {
  return <MainLayout>{children}</MainLayout>
}
