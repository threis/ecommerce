import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface CartContextProviderProps {
  children: ReactNode
}

interface PaymentFormData {
  paymentType: 'cash' | 'credit' | 'debit'
}

interface CustomerAddressData {
  zipCode: string
  address: string
  adressNumber: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

export interface ProductData {
  cartId: string
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  quantity: number
  rating: {
    rate: number
    count: number
  }
}

interface CartContextType {
  cartList: ProductData[]
  addCartItem: (item: ProductData) => void
  removeCartItem: (item: ProductData) => void
  updateQuantityProductInCart: (item: ProductData) => void
  customerAddress: CustomerAddressData
  addCustomerAddress: (customerAddress: CustomerAddressData) => void
  paymentForm: PaymentFormData
  addPaymentForm: (newPaymentForm: PaymentFormData) => void
  getAmountItensInCart: () => number
  getTotalPriceInCart: () => number
  clearCartStorage: () => void
  toggleDeliveryOptions: (option: 'standard' | 'express') => void
  deliveryOption: 'standard' | 'express'
  deliveryValue: number
}

const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [deliveryOption, setDeliveryOption] = useState<'standard' | 'express'>(
    'standard',
  )

  const deliveryValue = deliveryOption === 'express' ? 20 : 0

  const [cartList, setCartList] = useState<ProductData[]>(() => {
    const storedStateAsJSON = localStorage.getItem('@ecommerce:cart-1.0.0')

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return []
  })

  const [customerAddress, setCustomerAddress] = useState<CustomerAddressData>(
    {} as CustomerAddressData,
  )
  const [paymentForm, setPaymentForm] = useState<PaymentFormData>(
    {} as PaymentFormData,
  )

  function toggleDeliveryOptions(option: 'standard' | 'express') {
    setDeliveryOption(option)
  }

  function addCartItem(item: ProductData) {
    const newItem = {
      ...item,
      cartId: crypto.randomUUID(),
    }
    setCartList([...cartList, newItem])
  }

  function removeCartItem(item: ProductData) {
    const updatedCartList = cartList.filter(
      (cartItem) => cartItem.cartId !== item.cartId,
    )
    setCartList(updatedCartList)
  }

  function updateQuantityProductInCart(item: ProductData) {
    const cartItemsWithoutUpdatedCartItem = cartList.filter(
      (cartItem) => cartItem.cartId !== item.cartId,
    )

    const updatedCartList = [
      ...cartItemsWithoutUpdatedCartItem,
      { ...item, quantity: item.quantity },
    ].sort((a, b) => (a.cartId > b.cartId ? -1 : 1))

    setCartList(updatedCartList)
  }

  function addCustomerAddress(newCustomerAddress: CustomerAddressData) {
    setCustomerAddress(newCustomerAddress)
  }

  function addPaymentForm(newPaymentForm: PaymentFormData) {
    setPaymentForm(newPaymentForm)
  }

  function getAmountItensInCart() {
    const totalAmount = cartList.reduce((total, current) => {
      return total + current.quantity
    }, 0)

    return totalAmount
  }

  function getTotalPriceInCart() {
    const totalPrice = cartList.reduce((total, current) => {
      return total + current.quantity * current.price
    }, 0)

    return totalPrice
  }

  function clearCartStorage() {
    localStorage.setItem('@ecommerce:cart-1.0.0', '')
  }

  useEffect(() => {
    if (cartList) {
      const stateJSON = JSON.stringify(cartList)

      localStorage.setItem('@ecommerce:cart-1.0.0', stateJSON)
    }
  }, [cartList])

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        updateQuantityProductInCart,
        customerAddress,
        addCustomerAddress,
        paymentForm,
        addPaymentForm,
        getAmountItensInCart,
        getTotalPriceInCart,
        clearCartStorage,
        toggleDeliveryOptions,
        deliveryOption,
        deliveryValue,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
