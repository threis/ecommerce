import { Facebook, Instagram, Languages, Linkedin, Twitter } from 'lucide-react'

import logo from '@/assets/logo.svg'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function Footer() {
  return (
    <div className="flex h-[450px] bg-zinc-50 pb-8 pt-10">
      <div className="mx-auto flex w-app flex-col gap-12">
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
                className="flex items-center gap-2 text-sm text-zinc-500"
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
          <Select defaultValue="english">
            <fieldset className="rounded-lg border-2 border-zinc-300 focus-within:border-2 focus-within:border-primary">
              <SelectTrigger className="peer h-12 w-52 rounded-lg border-none bg-transparent px-4 py-2 focus:ring-0 focus:ring-transparent focus:ring-offset-0 ">
                <div className="flex items-center justify-start gap-4">
                  <Languages />
                  <SelectValue defaultValue="english" />
                </div>
              </SelectTrigger>
              <legend className="ml-3 px-1 text-xs text-zinc-500 peer-focus:text-primary">
                Language
              </legend>
            </fieldset>
            <SelectContent className="bg-zinc-50">
              <SelectItem value="english">
                <span>English</span>
              </SelectItem>
              <SelectItem value="portuguese">
                <span>Português</span>
              </SelectItem>
            </SelectContent>
          </Select>
          <a href="" className="font-semibold text-zinc-400">
            Download App
          </a>
        </div>
        <div className="mx-auto">Copyright {new Date().getFullYear()}</div>
      </div>
    </div>
  )
}
