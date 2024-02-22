import { Heart, PlusCircle, Star } from 'lucide-react'

import banner from '@/assets/banner.svg'
import imgCard1 from '@/assets/image-card-1.png'
import imgCard2 from '@/assets/image-card-2.png'
import imgCard3 from '@/assets/image-card-3.png'
import product1 from '@/assets/product-1.png'
import user1 from '@/assets/user-avatar-1.png'
import user2 from '@/assets/user-avatar-2.png'

import { BestSellerProducts } from './components/best-seller-products'

export function Home() {
  return (
    <>
      <main className="mx-auto grid max-w-app grid-cols-2 items-center gap-20 py-14">
        <div className="flex max-w-[600px] flex-col space-y-4">
          <h2 className="text-4xl text-zinc-900">Product Collection</h2>
          <p className="text-lg leading-8 text-zinc-500">
            Welcome to our online fashion haven, where we invite you to embark
            on a thrilling journey of discovery. We understand that fashion is
            an expression of your unique personality, and we&apos;ve curated an
            extensive collection of dresses, shoes, and more to help you find
            your new favorites.
          </p>
          <div className="flex gap-5">
            <button
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-lime-500/90"
              type="button"
            >
              Shop Now
            </button>
            <button
              className="rounded-full border-2 border-zinc-300 px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:border-lime-500 hover:bg-lime-200"
              type="button"
            >
              Learn more
            </button>
          </div>
        </div>
        <div className="h-[400px] w-[400px]">
          <img className="h-full w-full" src={banner} alt="" />
        </div>
      </main>

      <section className="bg-zinc-50">
        <div className="mx-auto flex max-w-app flex-col items-center gap-12 py-[3.75rem]">
          <h3 className="border-b-2 border-primary text-2xl font-bold text-zinc-700">
            How To Order Our Products
          </h3>
          <div className="flex items-center justify-center gap-14">
            <div className="flex h-[432px] w-[308px]  flex-col space-y-2 rounded-lg border-2 border-zinc-300 p-6">
              <div className="h-[260px] w-[260px]">
                <img src={imgCard1} alt="" className="h-full w-full" />
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <h3 className="text-xl font-medium text-zinc-900">
                  Select Product
                </h3>
                <p className="text-center text-sm text-zinc-500">
                  Choosing product you want to purchase and pay with payment
                  method such as credit card or google pays
                </p>
              </div>
            </div>
            <div className="flex h-[432px] w-[308px]  flex-col space-y-2 rounded-lg border-2 border-zinc-300 p-6">
              <div className="h-[260px] w-[260px]">
                <img src={imgCard2} alt="" className="h-full w-full" />
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <h3 className="text-xl font-medium text-zinc-900">Location</h3>
                <p className="text-center text-sm text-zinc-500">
                  Please choose a location near your residence where you can
                  pick up product easyly and inquire about the product in more
                  detail.
                </p>
              </div>
            </div>
            <div className="flex h-[432px] w-[308px]  flex-col space-y-2 rounded-lg border-2 border-zinc-300 p-6">
              <div className="h-[260px] w-[260px]">
                <img src={imgCard3} alt="" className="h-full w-full" />
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <h3 className="text-xl font-medium text-zinc-900">Pick Up</h3>
                <p className="text-center text-sm text-zinc-500">
                  Once the product has arrived at the location you selected, you
                  can proceed to pick it up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto flex max-w-app flex-col items-center gap-12 py-[3.75rem]">
          <h3 className="border-b-2 border-primary text-2xl font-bold text-zinc-700">
            Reviews
          </h3>
          <div className="flex w-full items-center justify-between">
            <div className="max-h-[348px] max-w-[490px] space-y-7 rounded-lg border-2 border-zinc-300 p-6">
              <header className="flex w-full items-center gap-8">
                <img
                  src={user1}
                  alt=""
                  className="h-[76px] w-[76px] rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-zinc-600">Adria Amesa</p>
                  <span className="text-sm text-zinc-400">
                    Customer . Agu 22 2023
                  </span>
                </div>
              </header>
              <p className="text-sm text-zinc-500">
                I purchased a laptop from Ecommerce website and it exceeded my
                expectations. The website was user-friendly, and the
                laptop&apos;s quality and performance were outstanding. Customer
                service was responsive and helpful. Shipping was fast and
                packaging was secure. With competitive pricing and overall
                satisfaction, I highly recommend Ecommerce.
              </p>
              <div className="flex items-center gap-2">
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <span className="text-sm font-medium text-zinc-500">
                  5.0 stars
                </span>
              </div>
            </div>
            <div className="max-h-[348px] max-w-[490px] space-y-7 rounded-lg border-2 border-zinc-300 p-6">
              <header className="flex w-full items-center gap-8">
                <img
                  src={user2}
                  alt=""
                  className="h-[76px] w-[76px] rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-zinc-600">Devid Machi</p>
                  <span className="text-sm text-zinc-400">
                    Customer . Nov 22 2023
                  </span>
                </div>
              </header>
              <p className="text-sm text-zinc-500">
                Partnering with Ecommerce website is an absolute delight. The
                user-friendly design and diverse product offerings showcase
                their commitment to excellence. Prompt customer service and
                efficient order processing make for a seamless experience. I
                highly recommend partnering with Ecommerce for their competitive
                pricing and top-notch service.
              </p>
              <div className="flex items-center gap-2">
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <span className="text-sm font-medium text-zinc-500">
                  5.0 stars
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-50">
        <div className="mx-auto flex max-w-app flex-col items-center gap-12 py-[3.75rem]">
          <h3 className="border-b-2 border-primary text-2xl font-bold text-zinc-700">
            Why You Picking Us
          </h3>
          <div className="flex gap-20">
            <div className="flex w-[260px] flex-col gap-2 rounded-lg border-2 border-zinc-300 p-6">
              <span className="text-6xl font-bold text-primary">1000+</span>
              <label className="text-sm font-medium text-zinc-400">
                Brands
              </label>
            </div>
            <div className="flex w-[260px] flex-col gap-2 rounded-lg border-2 border-zinc-300 p-6">
              <span className="text-6xl font-bold text-primary">35000+</span>
              <label className="text-sm font-medium text-zinc-400">
                Customers
              </label>
            </div>
            <div className="flex w-[260px] flex-col gap-2 rounded-lg border-2 border-zinc-300 p-6">
              <span className="text-6xl font-bold text-primary">350+</span>
              <label className="text-sm font-medium text-zinc-400">
                Partners
              </label>
            </div>
          </div>
        </div>
      </section>
      <BestSellerProducts />
      <section className="bg-zinc-50">
        <div className="mx-auto flex max-w-app flex-col items-center gap-16 py-[3.75rem]">
          <h3 className="border-b-2 border-primary text-2xl font-bold text-zinc-700">
            Discount Products
          </h3>

          <div className="flex items-center justify-between gap-12">
            <div className="flex h-[452px] w-[308px] flex-col rounded-lg border-2 border-zinc-300 p-6">
              <div className="relative h-[260px] w-[260px] ">
                <button className="absolute left-0 top-0 z-10 rounded-full bg-primary p-2.5 text-white">
                  20% off
                </button>

                <button className="absolute right-0 top-0 z-10">
                  <Heart className="size-6" />
                </button>
                <img
                  src={product1}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative mt-auto flex flex-col gap-3">
                <h3 className="text-2xl font-medium text-zinc-900">Warning</h3>
                <span className="text-xs text-zinc-400">Description</span>
                <label className="font-bold text-zinc-900">8.00 USD</label>
                <button className="absolute bottom-0 right-0">
                  <PlusCircle className="size-8 fill-primary text-white" />
                </button>
              </div>
            </div>
            <div className="flex h-[452px] w-[308px] flex-col rounded-lg border-2 border-zinc-300 p-6">
              <div className="relative h-[260px] w-[260px] ">
                <button className="absolute left-0 top-0 z-10 rounded-full bg-primary p-2.5 text-white">
                  20% off
                </button>
                <button className="absolute right-0 top-0 z-10">
                  <Heart className="size-6" />
                </button>
                <img
                  src={product1}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative mt-auto flex flex-col gap-3">
                <h3 className="text-2xl font-medium text-zinc-900">Warning</h3>
                <span className="text-xs text-zinc-400">Description</span>
                <label className="font-bold text-zinc-900">8.00 USD</label>
                <button className="absolute bottom-0 right-0">
                  <PlusCircle className="size-8 fill-primary text-white" />
                </button>
              </div>
            </div>
            <div className="flex h-[452px] w-[308px] flex-col rounded-lg border-2 border-zinc-300 p-6">
              <div className="relative h-[260px] w-[260px] ">
                <button className="absolute left-0 top-0 z-10 rounded-full bg-primary p-2.5 text-white">
                  20% off
                </button>
                <button className="absolute right-0 top-0 z-10">
                  <Heart className="size-6" />
                </button>
                <img
                  src={product1}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative mt-auto flex flex-col gap-3">
                <h3 className="text-2xl font-medium text-zinc-900">Warning</h3>
                <span className="text-xs text-zinc-400">Description</span>
                <label className="font-bold text-zinc-900">8.00 USD</label>
                <button className="absolute bottom-0 right-0">
                  <PlusCircle className="size-8 fill-primary text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
