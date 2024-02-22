import { NavLink } from 'react-router-dom'

import image404 from '@/assets/404.svg'

export function NotFound() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-[440px] w-[400px] flex-col items-center gap-12">
        <img className="h-[140px] w-[300px]" src={image404} alt="" />
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-4xl font-medium text-zinc-900">Page Not Found</h2>
          <p className="font-sm text-zinc-500">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <NavLink
            to="/"
            className="rounded-full bg-primary px-8 py-2.5 text-white"
          >
            Home Page
          </NavLink>
        </div>
      </div>
    </div>
  )
}
