import { Heart, PlusCircle } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import product1 from '@/assets/product-1.png'

export function Card() {
  return (
    <NavLink
      to="/product-detail"
      className="flex h-[452px] w-[308px] flex-col rounded-lg border-2 border-border p-6"
    >
      <div className="relative h-[260px] w-[260px] ">
        <button className="absolute right-0 top-0 z-10">
          <Heart className="size-6 text-foreground" />
        </button>
        <img src={product1} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="relative mt-auto flex flex-col gap-3">
        <h3 className="text-2xl font-medium text-secondary-foreground">
          Warning
        </h3>
        <span className="text-xs text-muted-foreground">Description</span>
        <label className="font-bold text-foreground">8.00 USD</label>
        <button className="absolute bottom-0 right-0">
          <PlusCircle className="size-8 fill-primary text-white" />
        </button>
      </div>
    </NavLink>
  )
}
