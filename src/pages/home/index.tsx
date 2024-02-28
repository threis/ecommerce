import { Star } from 'lucide-react'

import banner from '@/assets/banner.svg'
import imgCard2 from '@/assets/location.svg'
import imgCard3 from '@/assets/pick-up.svg'
import imgCard1 from '@/assets/select-product.svg'
import user1 from '@/assets/user-image-1.jpg'
import user2 from '@/assets/user-image-2.jpg'

import { BestSellerProducts } from './components/best-seller-products'

export function Home() {
  return (
    <>
      <main className="mx-auto grid max-w-app grid-cols-2 items-center gap-20 py-14">
        <div className="flex max-w-[600px] flex-col space-y-4">
          <h2 className="text-4xl text-foreground">Product Collection</h2>
          <p className="text-justify text-lg leading-8 text-muted-foreground">
            Welcome to our online fashion haven, where we invite you to embark
            on a thrilling journey of discovery. We understand that fashion is
            an expression of your unique personality, and we&apos;ve curated an
            extensive collection of dresses, shoes, and more to help you find
            your new favorites.
          </p>
          <div className="flex gap-5">
            <button
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              type="button"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="h-[400px] w-[400px]">
          <img className="h-full w-full" src={banner} alt="" />
        </div>
      </main>

      <section className="bg-secondary-foreground">
        <div className="mx-auto flex max-w-app flex-col items-center gap-12 py-[3.75rem]">
          <h3 className="border-b-2 border-primary text-2xl font-bold text-secondary">
            How To Order Our Products
          </h3>
          <div className="flex items-center justify-center gap-14">
            <div className="flex h-[432px] w-[308px]  flex-col space-y-2 rounded-lg border-2 border-border p-6">
              <div className="h-[260px] w-[260px]">
                <img src={imgCard1} alt="" className="h-full w-full" />
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <h3 className="text-xl font-medium text-secondary">
                  Select Product
                </h3>
                <p className="text-center text-sm text-muted-foreground">
                  Choosing product you want to purchase and pay with payment
                  method such as credit card or google pays
                </p>
              </div>
            </div>
            <div className="flex h-[432px] w-[308px]  flex-col space-y-2 rounded-lg border-2 border-border p-6">
              <div className="h-[260px] w-[260px]">
                <img src={imgCard2} alt="" className="h-full w-full" />
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <h3 className="text-xl font-medium text-secondary">Location</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Please choose a location near your residence where you can
                  pick up product easyly and inquire about the product in more
                  detail.
                </p>
              </div>
            </div>
            <div className="flex h-[432px] w-[308px]  flex-col space-y-2 rounded-lg border-2 border-border p-6">
              <div className="h-[260px] w-[260px]">
                <img src={imgCard3} alt="" className="h-full w-full" />
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <h3 className="text-xl font-medium text-secondary">Pick Up</h3>
                <p className="text-center text-sm text-muted-foreground">
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
          <h3 className="border-b-2 border-primary text-2xl font-bold text-foreground">
            Reviews
          </h3>
          <div className="flex w-full items-center justify-between">
            <div className="h-[348px] max-w-[490px] space-y-7 rounded-lg border-2 border-border p-6">
              <header className="flex w-full items-center gap-8">
                <img
                  src={user1}
                  alt=""
                  className="h-[76px] w-[76px] rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-foreground">
                    Adria Amesa
                  </p>
                  <span className="text-sm text-muted-foreground">
                    Customer . Agu 22 2023
                  </span>
                </div>
              </header>
              <p className="text-justify text-sm tracking-tight text-muted-foreground">
                The laptop I bought from Ecommerce company was better than I had
                anticipated. The laptop had exceptional quality and performance,
                and the website was easy to use. The customer support was
                excellent and quick to respond. The package was safe and the
                shipping was quick. Since Ecommerce offers reasonable cost and
                complete happiness, I heartily suggest it.
              </p>
              <div className="flex items-center gap-2">
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <span className="text-sm font-medium text-muted-foreground">
                  5.0 stars
                </span>
              </div>
            </div>
            <div className="h-[348px] max-w-[490px] space-y-7 rounded-lg border-2 border-border p-6">
              <header className="flex w-full items-center gap-8">
                <img
                  src={user2}
                  alt=""
                  className="h-[76px] w-[76px] rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-foreground">
                    Devid Machi
                  </p>
                  <span className="text-sm text-muted-foreground">
                    Customer . Nov 22 2023
                  </span>
                </div>
              </header>
              <p className="text-justify text-sm tracking-tight text-muted-foreground">
                It‘s a true pleasure to be a customer from Ecommerce website.
                Their dedication to quality is evident in their varied product
                options and user-friendly design. Smooth ordering and quick
                customer support combine to provide a flawless experience. Due
                to Ecommerce‘s excellent service and cheap cost.
              </p>
              <div className="flex items-center gap-2">
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <Star className="fill-amber-400 text-transparent" />
                <span className="text-sm font-medium text-muted-foreground">
                  5.0 stars
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary-foreground">
        <div className="mx-auto flex max-w-app flex-col items-center gap-12 py-[3.75rem]">
          <h3 className="border-b-2 border-primary text-2xl font-bold text-secondary">
            Why You Picking Us
          </h3>
          <div className="flex gap-20">
            <div className="flex w-[260px] flex-col gap-2 rounded-lg border-2 border-border p-6">
              <span className="text-6xl font-bold text-primary">1000+</span>
              <label className="text-sm font-medium text-muted">Brands</label>
            </div>
            <div className="flex w-[260px] flex-col gap-2 rounded-lg border-2 border-border p-6">
              <span className="text-6xl font-bold text-primary">35000+</span>
              <label className="text-sm font-medium text-muted">
                Customers
              </label>
            </div>
            <div className="flex w-[260px] flex-col gap-2 rounded-lg border-2 border-border p-6">
              <span className="text-6xl font-bold text-primary">350+</span>
              <label className="text-sm font-medium text-muted">Partners</label>
            </div>
          </div>
        </div>
      </section>
      <BestSellerProducts />
    </>
  )
}
