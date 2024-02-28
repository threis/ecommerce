import { Minus, Plus, Tags } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import noProductInBag from '@/assets/empty-cart.svg'
import product1 from '@/assets/product-1.png'
import { Input } from '@/components/form/input'

import { CartMenu } from './components/cart-menu'
import { ProgressBar } from './components/progress-bar'

export function Cart() {
  const navigate = useNavigate()
  const isEmpty = false
  return (
    <div className="mx-auto min-h-screen w-[1200px] py-9">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-muted-foreground">
          Home/{' '}
          <span className="font-medium text-foreground">Shopping Bag</span>
        </h3>
        <div className="mb-6 flex justify-between">
          <h2 className="text-4xl text-foreground">Shopping Bag</h2>
        </div>
      </div>
      <ProgressBar step={['card']} />

      {isEmpty ? (
        <div className="flex h-[590px] w-full flex-col items-center rounded-2xl bg-secondary p-20">
          <div className="flex h-[200px] w-[200px] items-center justify-center">
            <img
              className="h-full w-full object-cover"
              src={noProductInBag}
              alt=""
            />
          </div>
          <div className="my-10 flex flex-col items-center gap-2">
            <h3 className="text-2xl font-medium text-foreground">
              No product in Bag
            </h3>
            <p className="text-lg text-muted-foreground">
              Ordered product will appear here
            </p>
          </div>
          <button className="w-[400px] rounded-full bg-primary py-4 font-medium text-white">
            Go to shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-[1fr_480px] gap-6">
          <div className="flex flex-col self-start rounded-2xl bg-secondary p-6">
            <div className="relative flex min-h-[180px] gap-4 rounded-lg border border-muted-foreground p-6">
              <button
                type="button"
                className="absolute right-6 top-4 text-xs text-rose-600 transition-all hover:border-b hover:border-rose-600"
              >
                Remove
              </button>
              <div className="h-[130px] min-h-[130px] w-[130px] min-w-[130px] self-baseline">
                <img
                  className="h-full w-full object-cover"
                  src={product1}
                  alt=""
                />
              </div>
              <div className="flex h-full w-full flex-col gap-4">
                <h2 className="text-xl font-medium text-foreground">Product</h2>
                <p className="text-xs text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, iure voluptas cumque soluta unde iste rerum optio
                  voluptatibus, facere sapiente adipisci delectus vitae debitis
                  eveniet maxime quod consequuntur autem facilis.
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Qty</span>
                  <button className="flex items-center justify-center rounded-full bg-muted-foreground p-2 text-secondary hover:bg-primary">
                    <Minus className="size-3" />
                  </button>
                  <span className="flex size-5 items-center justify-center text-xl font-medium text-muted-foreground">
                    1
                  </span>
                  <button className="flex items-center justify-center rounded-full bg-muted-foreground p-2 text-secondary hover:bg-primary">
                    <Plus className="size-3" />
                  </button>
                </div>
              </div>
            </div>

            <div className="my-10 h-0.5 w-full bg-foreground" />
            <Input
              Icon={Tags}
              label="Code"
              placeholder="Enter promotion code to get discount"
            />
          </div>
          <CartMenu
            buttonTitle="Continue"
            onNavigation={() => navigate('/cart/shipping')}
          />
        </div>
      )}
    </div>
  )
}
