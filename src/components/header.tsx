import { CircleUser, ShoppingCart } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import logo from '@/assets/logo.svg'

export function Header() {
  return (
    <div className="flex h-[72px] items-center border-b-2 border-zinc-300 bg-header px-20">
      <div className="mx-auto flex w-app items-center justify-between">
        <NavLink to="/" className="h-[20px] w-[120px]">
          <img className="h-full w-full" src={logo} alt="" />
        </NavLink>
        <div className="flex items-center gap-6 leading-6 tracking-wider">
          <NavLink to="/" className="text-primary hover:text-primary">
            Home
          </NavLink>
          <NavLink to="/product" className="text-zinc-500 hover:text-primary">
            Product
          </NavLink>
          <NavLink to="/cart">
            <ShoppingCart className="size-4" />
          </NavLink>
          <NavLink to="/account">
            <CircleUser className="size-4" />
          </NavLink>
        </div>
      </div>
    </div>
  )
}
