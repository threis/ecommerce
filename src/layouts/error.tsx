import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function ErrorLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
