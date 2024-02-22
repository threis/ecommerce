import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function ErrorLayout() {
  return (
    <div className="h-[calc(100vh-72px)]">
      <Header />
      <Outlet />
    </div>
  )
}
