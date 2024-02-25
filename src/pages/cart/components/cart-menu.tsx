import applePay from '@/assets/payments/apple-pay.svg'
import googlePay from '@/assets/payments/google-pay.svg'
import mastercard from '@/assets/payments/mastercard.svg'
import payPal from '@/assets/payments/pay-pal.svg'
import unionPay from '@/assets/payments/union-pay.svg'
import visa from '@/assets/payments/visa.svg'

export interface CartMenuProps {
  buttonTitle: string
  onNavigation?: () => void
}

export function CartMenu({ buttonTitle, onNavigation }: CartMenuProps) {
  return (
    <div className="flex flex-col gap-6 self-start">
      <div className="flex flex-col gap-6 rounded-2xl bg-zinc-50 px-9 py-8">
        <h3 className="text-xl font-medium">Summary ( 2 items )</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Subtotal</span>
            <span className="text-sm font-medium">16.25 USD</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Shipping</span>
            <span className="text-sm font-medium">Free</span>
          </div>
        </div>

        <div className="h-0.5 w-full bg-zinc-200" />
        <div className="flex items-center justify-between">
          <h3 className="text-lg">Total</h3>
          <span className="text-2xl font-bold">16.25 USD</span>
        </div>
        <button
          type="button"
          className="w-full rounded-full bg-primary py-3 text-white hover:bg-primary/70"
          onClick={onNavigation}
        >
          {buttonTitle}
        </button>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-zinc-50 px-9 py-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-500">Payment accepted:</p>
          <div className="flex flex-wrap items-center gap-2">
            <img
              className="h-6 w-8 rounded-lg border border-zinc-300 bg-white p-1"
              src={visa}
              alt=""
            />
            <img
              className="h-6 w-8 rounded-lg border border-zinc-300 bg-white p-1"
              src={unionPay}
              alt=""
            />
            <img
              className="h-6 w-8 rounded-lg border border-zinc-300 bg-white p-1"
              src={mastercard}
              alt=""
            />
            <img
              className="h-6 w-8 rounded-lg border border-zinc-300 bg-white p-1"
              src={payPal}
              alt=""
            />
            <img
              className="h-6 w-8 rounded-lg border border-zinc-300 bg-white p-1"
              src={googlePay}
              alt=""
            />
            <img
              className="h-6 w-8 rounded-lg border border-zinc-300 bg-white p-1"
              src={applePay}
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-500">Customer services:</p>
          <span className="text-sm font-medium">24/7 +855 (240) 999 999</span>
        </div>
      </div>
    </div>
  )
}
