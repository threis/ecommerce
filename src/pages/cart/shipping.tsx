import { zodResolver } from '@hookform/resolvers/zod'
import {
  AtSign,
  Building2,
  Flag,
  FolderArchive,
  Home,
  MapPin,
  Smartphone,
  UserCircle,
} from 'lucide-react'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Input } from '@/components/form/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useCart } from '@/hook/useCart'

import { CartMenu } from './components/cart-menu'
import { ProgressBar } from './components/progress-bar'

const customerFormValidationSchema = z.object({
  email: z.string().email(),
  phone: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zipCode: z.string(),
  enterPrefix: z.string(),
  deliveryOption: z.enum(['standard', 'express']),
})

type CustomerFormData = z.infer<typeof customerFormValidationSchema>

export function Shipping() {
  const navigate = useNavigate()

  const { deliveryOption, toggleDeliveryOptions } = useCart()

  const { register, handleSubmit, watch, control } = useForm<CustomerFormData>({
    resolver: zodResolver(customerFormValidationSchema),
  })

  function handleRegisterCustomer(data: CustomerFormData) {
    console.log(data)
    navigate('/cart/payment')
  }

  const deliveryOptionInput = watch('deliveryOption')

  useEffect(() => {
    toggleDeliveryOptions(deliveryOptionInput)
  }, [deliveryOptionInput])

  return (
    <form
      onSubmit={handleSubmit(handleRegisterCustomer)}
      className="mx-auto min-h-screen w-[1200px] py-9"
    >
      <div className="flex flex-col gap-3">
        <div className="mb-6 flex justify-between">
          <h2 className="text-4xl text-foreground">Shopping Bag</h2>
        </div>
      </div>
      <ProgressBar step={['card', 'shipping']} />

      <div className="grid grid-cols-[1fr_480px] gap-6">
        <div className="flex flex-col gap-10 self-start rounded-2xl bg-secondary p-6">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-medium text-foreground">
              Enter your details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <Input
                  Icon={AtSign}
                  label="Email"
                  placeholder="Enter email"
                  {...register('email')}
                />
                <Input
                  Icon={UserCircle}
                  label="First name"
                  placeholder="Enter first name"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Input
                  Icon={Smartphone}
                  label="Phone number"
                  placeholder="Enter email"
                />
                <Input
                  Icon={UserCircle}
                  label="Last name"
                  placeholder="Enter first name"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-medium text-foreground">
              Shipping Address
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <Input Icon={MapPin} label="Address" placeholder="Address" />
                <Input
                  Icon={Home}
                  label="Province/state"
                  placeholder="Province/state"
                />
                <Input
                  Icon={FolderArchive}
                  label="Zip code"
                  placeholder="Enter zip code"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Input Icon={Building2} label="City" placeholder="City" />
                <Input Icon={Flag} label="Country" placeholder="Country" />
                <Input
                  Icon={UserCircle}
                  label="Prefix"
                  placeholder="Enter prefix"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-medium text-foreground">
              Delivery options
            </h3>
            <Controller
              name="deliveryOption"
              control={control}
              render={({ field: { name, onChange, value } }) => {
                return (
                  <RadioGroup
                    className="flex flex-col gap-4"
                    defaultValue={deliveryOption}
                    name={name}
                    onValueChange={onChange}
                    value={value}
                  >
                    <label
                      htmlFor="standard"
                      className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-foreground p-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <span className="text-muted-foreground">Standard</span>
                      </div>
                      <p className="text-foreground">Free</p>
                    </label>
                    <label
                      htmlFor="express"
                      className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-foreground p-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="express" id="express" />
                        <span className="text-muted-foreground">Express</span>
                      </div>
                      <p className="text-foreground">20 USD</p>
                    </label>
                  </RadioGroup>
                )
              }}
            />
          </div>
        </div>

        <CartMenu buttonTitle="Continue" />
      </div>
    </form>
  )
}
