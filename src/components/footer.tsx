import { Facebook, Instagram, Languages, Linkedin, Twitter } from 'lucide-react'

import darkLogo from '@/assets/logo.svg'
import lightLogo from '@/assets/logo-white.svg'
import applePay from '@/assets/payments/apple-pay.svg'
import googlePay from '@/assets/payments/google-pay.svg'
import mastercard from '@/assets/payments/mastercard.svg'
import payPal from '@/assets/payments/pay-pal.svg'
import unionPay from '@/assets/payments/union-pay.svg'
import visa from '@/assets/payments/visa.svg'

import { useTheme } from './theme-provider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function Footer() {
  const { theme } = useTheme()

  const systemTheme =
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme

  const logo = systemTheme === 'dark' ? darkLogo : lightLogo

  return (
    <div className="flex h-[450px] bg-secondary-foreground pb-8 pt-10">
      <div className="mx-auto flex w-app flex-col gap-12">
        <div className="grid grid-cols-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Make money with us</h3>
            <div className="flex flex-col gap-2">
              <a
                href=""
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Sell product on Ecommerce
              </a>
              <a
                href=""
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Sell on Ecommerce Business
              </a>
              <a
                href=""
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Self-Publish with us
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Connects</h3>
            <div className="flex flex-col gap-2">
              <a
                href=""
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Facebook className="size-5" />
                <span>facebook</span>
              </a>
              <a
                href=""
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Instagram className="size-5" />
                Instagram
              </a>
              <a
                href=""
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Linkedin className="size-5" />
                Linkedin
              </a>
              <a
                href=""
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Twitter className="size-5" />X
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Payment Method</h3>
            <div className="flex max-w-[180px] flex-wrap items-center gap-2">
              <img
                className="h-6 w-8 rounded-lg border border-border bg-white p-1"
                src={visa}
                alt=""
              />
              <img
                className="h-6 w-8 rounded-lg border border-border bg-white p-1"
                src={unionPay}
                alt=""
              />
              <img
                className="h-6 w-8 rounded-lg border border-border bg-white p-1"
                src={mastercard}
                alt=""
              />
              <img
                className="h-6 w-8 rounded-lg border border-border bg-white p-1"
                src={payPal}
                alt=""
              />
              <img
                className="h-6 w-8 rounded-lg border border-border bg-white p-1"
                src={googlePay}
                alt=""
              />
              <img
                className="h-6 w-8 rounded-lg border border-border bg-white p-1"
                src={applePay}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-xl font-medium hover:text-primary">
              Terms and Conditions
            </a>
          </div>
        </div>
        <div className="h-0.5 w-full rounded-full bg-secondary-foreground" />
        <div className="mx-auto flex items-center gap-10">
          <img src={logo} alt="" />
          <Select defaultValue="english">
            <fieldset className="rounded-lg border-2 border-border focus-within:border-2 focus-within:border-primary">
              <SelectTrigger className="peer h-12 w-52 rounded-lg border-none bg-secondary-foreground px-4 py-2 focus:ring-0 focus:ring-transparent focus:ring-offset-0 ">
                <div className="flex items-center justify-start gap-4">
                  <Languages />
                  <SelectValue defaultValue="english" />
                </div>
              </SelectTrigger>
              <legend className="ml-3 px-1 text-xs text-muted-foreground peer-focus:text-primary">
                Language
              </legend>
            </fieldset>
            <SelectContent className="bg-secondary-foreground text-secondary">
              <SelectItem value="english">
                <span>English</span>
              </SelectItem>
              <SelectItem value="portuguese">
                <span>Português</span>
              </SelectItem>
            </SelectContent>
          </Select>
          <a
            href=""
            className="font-semibold text-muted-foreground hover:text-primary"
          >
            Download App
          </a>
        </div>
        <div className="mx-auto text-muted">
          Copyright {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}
