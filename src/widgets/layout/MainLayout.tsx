import { MainHeaderMenu } from '@/features/mainHeaderMenu'
import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../header/ui/Header'

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-dvh bg-gray-50">
      <Header
        logo={
          <Link to="/" className="logo-font text-6xl text-white">
            news
          </Link>
        }
      >
        <MainHeaderMenu />
      </Header>
      <main className="w-full overflow-auto">{children}</main>
    </div>
  )
}
