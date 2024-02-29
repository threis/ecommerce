import { Heart, PlusCircle } from 'lucide-react'
import { NavLink } from 'react-router-dom'

interface CardProps {
  id: string
  image: string
  title: string
  price: number
}

export function Card({ id, image, price, title }: CardProps) {
  const priceFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
  return (
    <div className="flex h-[452px] w-[308px] flex-col gap-4 rounded-lg border-2 border-border p-6">
      <div className="relative h-[260px] min-h-[260px] w-[260px]">
        <button className="absolute right-2 top-2 z-10">
          <Heart className="size-6 text-muted-foreground hover:fill-primary hover:text-primary" />
        </button>
        <img src={image} alt="" className="size-full object-cover" />
      </div>
      <NavLink
        to={`/product-detail?product_id=${id}`}
        className="relative flex h-full max-h-[124px] flex-col justify-between"
      >
        <h3 className="line-clamp-2 text-xl font-medium text-secondary-foreground">
          {title}
        </h3>
        <label className="font-bold text-foreground">{priceFormatted}</label>
        <button className="absolute bottom-0 right-0">
          <PlusCircle className="size-8 fill-primary text-white" />
        </button>
      </NavLink>
    </div>
  )
}
