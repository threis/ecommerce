import { AsteriskSquare, Calendar, CreditCard, UserCircle } from 'lucide-react'

import applePay from '@/assets/payments/apple-pay.svg'
import googlePay from '@/assets/payments/google-pay.svg'
import payPal from '@/assets/payments/pay-pal.svg'
import { Input } from '@/components/form/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { CartMenu } from './components/cart-menu'
import { ProgressBar } from './components/progress-bar'

export function Payment() {
  return (
    <div className="mx-auto min-h-screen w-[1200px] py-9">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-zinc-500">
          Home/ <span className="font-medium text-zinc-900">Shopping Bag</span>
        </h3>
        <div className="mb-6 flex justify-between">
          <h2 className="text-4xl text-zinc-900">Shopping Bag</h2>
        </div>
      </div>
      <ProgressBar step={['card', 'shipping', 'payment']} />

      <div className="grid grid-cols-[1fr_480px] gap-6">
        <div className="flex flex-col gap-10 self-start rounded-2xl bg-zinc-50 p-6">
          <h3 className="text-2xl font-medium text-zinc-700">Payment Method</h3>

          <RadioGroup
            className="flex items-center justify-between gap-4"
            defaultValue="credit"
          >
            <label
              htmlFor="credit"
              className="flex w-[140px] items-center justify-between rounded-lg border-2 border-zinc-300 p-3"
            >
              <div className="flex items-center space-x-2">
                <CreditCard className="size-5" />
                <span>Card</span>
              </div>
              <RadioGroupItem value="credit" id="credit" />
            </label>
            <label
              htmlFor="paypal"
              className="flex w-[140px] items-center justify-between rounded-lg border-2 border-zinc-300 p-3"
            >
              <div className="flex items-center space-x-2">
                <img
                  className="h-6 w-8 rounded-lg border border-zinc-300 bg-white p-1"
                  src={payPal}
                  alt=""
                />
                <span>Paypal</span>
              </div>
              <RadioGroupItem value="paypal" id="paypal" />
            </label>
            <label
              htmlFor="google-pay"
              className="flex w-[140px] items-center justify-between rounded-lg border-2 border-zinc-300 p-3"
            >
              <div className="flex items-center space-x-2">
                <img
                  className="h-6 w-8 rounded-lg border border-zinc-300 bg-white p-1"
                  src={googlePay}
                  alt=""
                />
                <span>G Pay</span>
              </div>
              <RadioGroupItem value="google-pay" id="google-pay" />
            </label>
            <label
              htmlFor="apple-pay"
              className="flex w-[140px] items-center justify-between rounded-lg border-2 border-zinc-300 p-3"
            >
              <div className="flex items-center space-x-2">
                <img
                  className="h-6 w-8 rounded-lg border border-zinc-300 bg-white p-1"
                  src={applePay}
                  alt=""
                />
                <span>A Pay</span>
              </div>
              <RadioGroupItem value="apple-pay" id="apple-pay" />
            </label>
          </RadioGroup>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <Input
                Icon={UserCircle}
                label="Name on card"
                placeholder="Enter name on card"
              />
              <Input
                Icon={CreditCard}
                label="Card number"
                placeholder="Enter card number"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Input
                Icon={Calendar}
                label="Expired date"
                placeholder="Enter expired date"
                type="date"
              />
              <Input
                Icon={AsteriskSquare}
                label="CVV"
                placeholder="Enter CVV"
              />
            </div>
          </div>
        </div>

        <CartMenu buttonTitle="Pay now" />
      </div>
    </div>
  )
}
