import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/default'
import { ErrorLayout } from './layouts/error'
import { NotFound } from './pages/404'
import { Home } from './pages/home'
import { SignIn } from './pages/sign-in'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
      <Route path="*" element={<ErrorLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
