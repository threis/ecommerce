import { CircleUser, ShoppingCart } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'

import darkLogo from '@/assets/logo.svg'
import lightLogo from '@/assets/logo-white.svg'
import { useCart } from '@/hook/useCart'
import { cn } from '@/lib/utils'

import { ModeToggle } from './mode-toggle'
import { useTheme } from './theme-provider'

export function Header() {
  const { theme } = useTheme()
  const { pathname } = useLocation()

  const { cartList } = useCart()

  const cartAmount = cartList?.length > 0 ? String(cartList.length) : ''

  const systemTheme =
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme

  const logo = systemTheme === 'dark' ? lightLogo : darkLogo

  return (
    <div className="bg-header flex h-[72px] items-center border-b-2 border-border px-20">
      <div className="mx-auto flex w-app items-center justify-between">
        <NavLink to="/" className="h-[20px] w-[120px]">
          <img className="h-full w-full" src={logo} alt="" />
        </NavLink>
        <div className="flex items-center gap-4 leading-6 tracking-wider">
          <NavLink
            to="/"
            className={`font-medium hover:text-primary ${pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={`font-medium hover:text-primary ${pathname === '/product' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            Product
          </NavLink>
          <NavLink
            data-content={cartAmount}
            className={cn(
              'relative flex size-[40px] items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground',
              cartAmount &&
                'after:absolute after:-right-1 after:-top-1 after:flex after:size-4 after:items-center after:justify-center after:rounded-full after:bg-foreground after:p-1 after:text-xs after:font-bold after:text-secondary after:content-[attr(data-content)]',
            )}
            to="/cart"
          >
            <span className="sr-only">Cart</span>
            <ShoppingCart
              className={`size-4 ${pathname === '/cart' ? 'text-primary' : 'text-muted-foreground'}`}
            />
          </NavLink>
          <NavLink
            className="flex size-[40px] items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
            to="/account"
          >
            <span className="sr-only">User Account</span>
            <CircleUser
              className={`size-4 ${pathname === '/account' ? 'text-primary' : 'text-muted-foreground'}`}
            />
          </NavLink>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
