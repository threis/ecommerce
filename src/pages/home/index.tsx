import { Star } from 'lucide-react'

import banner from '@/assets/banner.svg'
import imgCard1 from '@/assets/image-card-1.png'
import imgCard2 from '@/assets/image-card-2.png'
import imgCard3 from '@/assets/image-card-3.png'
import user1 from '@/assets/user-avatar-1.png'
import user2 from '@/assets/user-avatar-2.png'

import { BestSellerProducts } from './components/best-seller-products'

export function Home() {
  return (
    <>
      <main className="mx-auto grid max-w-app grid-cols-2 items-center gap-20 py-14">
        <div className="flex max-w-[600px] flex-col space-y-4">
          <h2 className="text-4xl text-foreground">Product Collection</h2>
          <p className="text-muted-foreground text-justify text-lg leading-8">
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
          <h3 className="text-secondary border-b-2 border-primary text-2xl font-bold">
            How To Order Our Products
          </h3>
          <div className="flex items-center justify-center gap-14">
            <div className="flex h-[432px] w-[308px]  flex-col space-y-2 rounded-lg border-2 border-border p-6">
              <div className="h-[260px] w-[260px]">
                <img src={imgCard1} alt="" className="h-full w-full" />
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <h3 className="text-secondary text-xl font-medium">
                  Select Product
                </h3>
                <p className="text-muted-foreground text-center text-sm">
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
                <h3 className="text-secondary text-xl font-medium">Location</h3>
                <p className="text-muted-foreground text-center text-sm">
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
                <h3 className="text-secondary text-xl font-medium">Pick Up</h3>
                <p className="text-muted-foreground text-center text-sm">
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
            <div className="max-h-[348px] max-w-[490px] space-y-7 rounded-lg border-2 border-border p-6">
              <header className="flex w-full items-center gap-8">
                <img
                  src={user1}
                  alt=""
                  className="h-[76px] w-[76px] rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-foreground">
                    Adria Amesa
                  </p>
                  <span className="text-muted-foreground text-sm">
                    Customer . Agu 22 2023
                  </span>
                </div>
              </header>
              <p className="text-muted-foreground text-sm">
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
                <span className="text-muted-foreground text-sm font-medium">
                  5.0 stars
                </span>
              </div>
            </div>
            <div className="max-h-[348px] max-w-[490px] space-y-7 rounded-lg border-2 border-border p-6">
              <header className="flex w-full items-center gap-8">
                <img
                  src={user2}
                  alt=""
                  className="h-[76px] w-[76px] rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-foreground">
                    Devid Machi
                  </p>
                  <span className="text-muted-foreground text-sm">
                    Customer . Nov 22 2023
                  </span>
                </div>
              </header>
              <p className="text-muted-foreground text-sm">
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
                <span className="text-muted-foreground text-sm font-medium">
                  5.0 stars
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary-foreground">
        <div className="mx-auto flex max-w-app flex-col items-center gap-12 py-[3.75rem]">
          <h3 className="text-secondary border-b-2 border-primary text-2xl font-bold">
            Why You Picking Us
          </h3>
          <div className="flex gap-20">
            <div className="flex w-[260px] flex-col gap-2 rounded-lg border-2 border-border p-6">
              <span className="text-6xl font-bold text-primary">1000+</span>
              <label className="text-muted text-sm font-medium">Brands</label>
            </div>
            <div className="flex w-[260px] flex-col gap-2 rounded-lg border-2 border-border p-6">
              <span className="text-6xl font-bold text-primary">35000+</span>
              <label className="text-muted text-sm font-medium">
                Customers
              </label>
            </div>
            <div className="flex w-[260px] flex-col gap-2 rounded-lg border-2 border-border p-6">
              <span className="text-6xl font-bold text-primary">350+</span>
              <label className="text-muted text-sm font-medium">Partners</label>
            </div>
          </div>
        </div>
      </section>
      <BestSellerProducts />
    </>
  )
}
