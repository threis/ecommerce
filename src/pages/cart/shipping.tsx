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
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Input } from '@/components/form/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useCart } from '@/hook/useCart'

import { CartMenu } from './components/cart-menu'
import { ProgressBar } from './components/progress-bar'

const customerFormValidationSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  address: z.string().min(1, { message: 'Adress is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
  zipCode: z.string().min(1, { message: 'Zip code is required' }),
  prefix: z.string().min(1, { message: 'Prefix is required' }),
  deliveryOption: z.enum(['standard', 'express']),
})

type CustomerFormData = z.infer<typeof customerFormValidationSchema>

export function Shipping() {
  const navigate = useNavigate()

  const { deliveryOption, toggleDeliveryOptions, addCustomerAddress } =
    useCart()

  const methods = useForm<CustomerFormData>({
    resolver: zodResolver(customerFormValidationSchema),
    values: {
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
      prefix: '',
      deliveryOption,
    },
  })

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = methods

  function handleRegisterCustomer({
    email,
    phone,
    firstName,
    lastName,
    address,
    city,
    state,
    country,
    zipCode,
    prefix,
  }: CustomerFormData) {
    addCustomerAddress({
      email,
      phone,
      firstName,
      lastName,
      address,
      city,
      state,
      country,
      zipCode,
      prefix,
    })
    navigate('/cart/payment')
  }

  const deliveryOptionInput = watch('deliveryOption')

  useEffect(() => {
    toggleDeliveryOptions(deliveryOptionInput)
  }, [deliveryOptionInput, toggleDeliveryOptions])

  return (
    <FormProvider {...methods}>
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
                    registerName="email"
                    textError={errors.email?.message}
                  />
                  <Input
                    Icon={UserCircle}
                    label="First name"
                    placeholder="Enter first name"
                    registerName="firstName"
                    textError={errors.firstName?.message}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <Input
                    Icon={Smartphone}
                    label="Phone number"
                    placeholder="Enter phone number"
                    registerName="phone"
                    textError={errors.phone?.message}
                  />
                  <Input
                    Icon={UserCircle}
                    label="Last name"
                    placeholder="Enter Last name"
                    registerName="lastName"
                    textError={errors.lastName?.message}
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
                  <Input
                    Icon={MapPin}
                    label="Address"
                    placeholder="Address"
                    registerName="address"
                    textError={errors.address?.message}
                  />
                  <Input
                    Icon={Home}
                    label="Province/state"
                    placeholder="Province/state"
                    registerName="state"
                    textError={errors.state?.message}
                  />
                  <Input
                    Icon={FolderArchive}
                    label="Zip code"
                    placeholder="Enter zip code"
                    registerName="zipCode"
                    textError={errors.zipCode?.message}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <Input
                    Icon={Building2}
                    label="City"
                    placeholder="City"
                    registerName="city"
                    textError={errors.city?.message}
                  />
                  <Input
                    Icon={Flag}
                    label="Country"
                    placeholder="Country"
                    registerName="country"
                    textError={errors.country?.message}
                  />
                  <Input
                    Icon={UserCircle}
                    label="Prefix"
                    placeholder="Enter prefix"
                    registerName="prefix"
                    textError={errors.prefix?.message}
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
                          <span className="text-muted-foreground">
                            Standard
                          </span>
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

          <CartMenu buttonTitle="Continue" buttonType="submit" />
        </div>
      </form>
    </FormProvider>
  )
}
