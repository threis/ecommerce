import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/default'
import { ErrorLayout } from './layouts/error'
import { NotFound } from './pages/404'
import { Home } from './pages/home'
import { Product } from './pages/product'
import { ProductDetail } from './pages/product/product-detail'
import { Search } from './pages/search'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/product" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Route>
      <Route path="*" element={<ErrorLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
