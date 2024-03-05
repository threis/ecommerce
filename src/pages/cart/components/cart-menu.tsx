import applePay from '@/assets/payments/apple-pay.svg'
import googlePay from '@/assets/payments/google-pay.svg'
import mastercard from '@/assets/payments/mastercard.svg'
import payPal from '@/assets/payments/pay-pal.svg'
import unionPay from '@/assets/payments/union-pay.svg'
import visa from '@/assets/payments/visa.svg'
import { useCart } from '@/hook/useCart'

export interface CartMenuProps {
  buttonTitle: string
  onNavigation?: () => void
  buttonType?: 'button' | 'submit' | 'reset' | undefined
}

export function CartMenu({
  buttonTitle,
  onNavigation,
  buttonType = 'button',
}: CartMenuProps) {
  const { getTotalPriceInCart, cartList, deliveryValue } = useCart()

  const totalPrice = getTotalPriceInCart()

  const totalPriceInCart = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalPrice)

  const deliveryValueFormatted =
    deliveryValue === 0
      ? 'Free'
      : new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(deliveryValue)

  const totalPriceFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalPrice + deliveryValue)

  return (
    <div className="flex flex-col gap-6 self-start">
      <div className="flex flex-col gap-6 rounded-2xl bg-secondary px-9 py-8">
        <h3 className="text-xl font-medium text-foreground">
          Summary ( {cartList.length} items )
        </h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Subtotal</span>
            <span className="text-sm font-medium text-foreground">
              {totalPriceInCart}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Shipping</span>
            <span className="text-sm font-medium text-foreground">
              {deliveryValueFormatted}
            </span>
          </div>
        </div>

        <div className="h-0.5 w-full bg-zinc-200" />
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-muted-foreground">Total</h3>
          <span className="text-2xl font-bold text-foreground">
            {totalPriceFormatted}
          </span>
        </div>
        <button
          className="w-full rounded-full bg-primary py-3 text-white hover:bg-primary/70"
          onClick={onNavigation}
          type={buttonType}
        >
          {buttonTitle}
        </button>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-secondary px-9 py-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-foreground">Payment accepted:</p>
          <div className="flex flex-wrap items-center gap-2">
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
        <div className="flex items-center justify-between">
          <p className="text-sm text-foreground">Customer services:</p>
          <span className="text-sm font-medium text-muted-foreground">
            24/7 +855 (240) 999 999
          </span>
        </div>
      </div>
    </div>
  )
}
