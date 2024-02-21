import { Facebook, Instagram, Languages, Linkedin, Twitter } from 'lucide-react'

import logo from '@/assets/logo.svg'

export function Footer() {
  return (
    <div className="flex h-[450px] bg-zinc-50 pb-8 pt-10">
      <div className="w-app mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Make money with us</h3>
            <div className="flex flex-col gap-2">
              <a href="" className="text-sm text-zinc-700">
                Sell product on Ecommerce
              </a>
              <a href="" className="text-sm text-zinc-700">
                Sell on Ecommerce Business
              </a>
              <a href="" className="text-sm text-zinc-700">
                Self-Publish with us
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Connects</h3>
            <div className="flex flex-col gap-2">
              <a
                href=""
                className="flex items-center gap-2 text-sm text-zinc-500"
              >
                <Facebook className="size-5" />
                <span>facebook</span>
              </a>
              <a
                href=""
                className="flex items-center gap-2 text-sm text-zinc-500"
              >
                <Instagram className="size-5" />
                Instagram
              </a>
              <a
                href=""
                className="flex flex items-center gap-2 text-sm text-zinc-500"
              >
                <Linkedin className="size-5" />
                Linkedin
              </a>
              <a
                href=""
                className="flex flex items-center gap-2 text-sm text-zinc-500"
              >
                <Twitter className="size-5" />X
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium">Payment Method</h3>
            <div></div>
          </div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-xl font-medium">
              Terms and Conditions
            </a>
          </div>
        </div>
        <div className="h-0.5 w-full rounded-full bg-zinc-200" />
        <div className="mx-auto flex items-center gap-10">
          <img src={logo} alt="" />
          <span className=" flex w-60 items-center  gap-2 rounded-lg border border-zinc-300 px-4 py-2">
            <Languages className="size-6 text-zinc-500" />
            English
          </span>
          <a href="" className="font-semibold text-zinc-400">
            Download App
          </a>
        </div>
        <div className="mx-auto">Copyright {new Date().getFullYear()}</div>
      </div>
    </div>
  )
}
