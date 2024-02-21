import { CircleUser, Heart, Search, ShoppingCart } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import logo from '@/assets/logo.svg'

export function Header() {
  return (
    <div className="bg-header flex h-[72px] items-center justify-between border-b-2 border-zinc-300 px-20">
      <NavLink to="/" className="h-[20px] w-[120px]">
        <img className="h-full w-full" src={logo} alt="" />
      </NavLink>
      <div className="flex gap-6 leading-6 tracking-wider">
        <a href="" className="text-primary hover:text-primary">
          Home
        </a>
        <a href="" className="text-zinc-500 hover:text-primary">
          Product
        </a>
        <a href="" className="text-zinc-500 hover:text-primary">
          About us
        </a>
        <a href="" className="text-zinc-500 hover:text-primary">
          Contact us
        </a>
      </div>
      <div className="flex gap-1">
        <button className="size-10">
          <Search className="size-4" />
        </button>
        <button className="size-10">
          <Heart className="size-4" />
        </button>
        <button className="size-10">
          <ShoppingCart className="size-4" />
        </button>
        <button className="size-10">
          <CircleUser className="size-4" />
        </button>
      </div>
    </div>
  )
}
