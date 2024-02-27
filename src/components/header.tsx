import { CircleUser, ShoppingCart } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import darkLogo from '@/assets/logo.svg'
import lightLogo from '@/assets/logo-white.svg'

import { ModeToggle } from './mode-toggle'
import { useTheme } from './theme-provider'

export function Header() {
  const { theme } = useTheme()

  const systemTheme =
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme

  const logo = systemTheme === 'dark' ? lightLogo : darkLogo

  return (
    <div className="flex h-[72px] items-center border-b-2 border-border bg-header px-20">
      <div className="mx-auto flex w-app items-center justify-between">
        <NavLink to="/" className="h-[20px] w-[120px]">
          <img className="h-full w-full" src={logo} alt="" />
        </NavLink>
        <div className="flex items-center gap-4 leading-6 tracking-wider">
          <NavLink
            to="/"
            className="font-medium text-primary hover:text-primary"
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className="text-muted-foreground font-medium hover:text-primary"
          >
            Product
          </NavLink>
          <NavLink
            className="hover:bg-accent hover:text-accent-foreground flex size-[40px] items-center justify-center rounded-md"
            to="/cart"
          >
            <span className="sr-only">Cart</span>
            <ShoppingCart className="text-muted-foreground size-4" />
          </NavLink>
          <NavLink
            className="hover:bg-accent hover:text-accent-foreground flex size-[40px] items-center justify-center rounded-md"
            to="/account"
          >
            <span className="sr-only">User Account</span>
            <CircleUser className="text-muted-foreground size-4" />
          </NavLink>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
