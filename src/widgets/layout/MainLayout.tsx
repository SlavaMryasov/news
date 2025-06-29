import { MainHeaderMenu } from '@/features/mainHeaderMenu'
import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../footer/ui/Footer'
import { Header } from '../header/ui/Header'

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-dvh flex-col bg-gray-50">
      <Header
        logo={
          <Link to="/" className="logo-font text-6xl text-white">
            news
          </Link>
        }
      >
        <MainHeaderMenu />
      </Header>
      <main className="flex flex-1 flex-col overflow-auto">
        <div className="flex-1">{children}</div>
        <Footer />
      </main>
    </div>
  )
}
