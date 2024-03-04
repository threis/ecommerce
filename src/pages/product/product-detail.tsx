import { useQuery } from '@tanstack/react-query'
import { Minus, Plus, Share2, Star } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

import { getBestSellerProducts } from '@/api/get-best-seller-products'
import { getProductById } from '@/api/get-product-by-id'
import { useCart } from '@/hook/useCart'

import { CarouselCards } from './carousel-cards'

export function ProductDetail() {
  const { addCartItem } = useCart()
  const [searchParams] = useSearchParams()

  const productId = String(searchParams.get('product_id'))
  const [quantity, setQuantity] = useState(1)

  const { data: bestSellerProducts } = useQuery({
    queryKey: ['bestSellerProducts'],
    queryFn: getBestSellerProducts,
  })

  const { data: product } = useQuery({
    queryKey: ['getProductById', productId],
    queryFn: () => getProductById(productId),
  })

  const totalPrice = product ? product.price * quantity : 0

  const priceFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalPrice)

  function handleAddQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleSubtractQuantity() {
    if (quantity === 1) {
      return
    }
    setQuantity((state) => state - 1)
  }

  function handleCopySharedProductURL() {
    navigator.clipboard.writeText(window.location.href)
    toast.success('Copy to clipboard')
  }

  function handleAddProductToCart() {
    if (product) {
      addCartItem({ ...product, quantity, cartId: '' })
      toast.success('Added to cart')
    }
  }

  return (
    <div className="mx-auto min-h-screen w-[1200px] py-9">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-muted-foreground">
          Home/ <span className="font-medium text-foreground">Product</span>
        </h3>

        <div className="mb-10 grid grid-cols-[700px_1fr] gap-16">
          <div className="h-[700px] w-[650px] rounded-lg bg-secondary">
            <img
              src={product?.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-medium text-foreground">
              {product?.title}
            </h2>
            <p className="text-sm font-medium text-muted-foreground">
              {product?.description}
            </p>
            <div className="flex items-center gap-2">
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <div className="flex items-baseline gap-6">
                <span className="text-popover-foreground">
                  ({String(product?.rating?.rate || 0)})
                </span>
                <span className="text-sm font-medium text-popover-foreground">
                  {product?.rating?.count} reviews
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6 rounded-lg border border-border px-6 py-8">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Quantity</span>
                <button
                  onClick={handleSubtractQuantity}
                  className="flex items-center justify-center rounded-full bg-secondary p-2 text-foreground hover:bg-primary"
                >
                  <Minus className="size-3" />
                </button>

                <span className="flex size-5 items-center justify-center text-xl font-medium text-muted-foreground">
                  {quantity}
                </span>
                <button
                  onClick={handleAddQuantity}
                  className="flex items-center justify-center rounded-full bg-secondary p-2 text-foreground hover:bg-primary"
                >
                  <Plus className="size-3" />
                </button>
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                {priceFormatted}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleAddProductToCart}
                className="flex w-full items-center justify-center rounded-full bg-primary py-3 text-xs font-medium text-white hover:bg-primary/80"
              >
                Add to card
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                Product id: {product?.id}
              </span>
              <button
                onClick={handleCopySharedProductURL}
                className="flex items-center justify-center rounded-full border-2 border-muted-foreground p-2"
              >
                <Share2 className="size-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>

        <CarouselCards
          title="These you might also like:"
          products={bestSellerProducts}
        />
      </div>
    </div>
  )
}
