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

import { Input } from '@/components/form/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { CartMenu } from './components/cart-menu'
import { ProgressBar } from './components/progress-bar'

export function Shipping() {
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
      <ProgressBar step={['card', 'shipping']} />

      <div className="grid grid-cols-[1fr_480px] gap-6">
        <div className="flex flex-col gap-10 self-start rounded-2xl bg-zinc-50 p-6">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-medium text-zinc-700">
              Enter your details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <Input Icon={AtSign} label="Email" placeholder="Enter email" />
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
            <h3 className="text-2xl font-medium text-zinc-700">
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
            <h3 className="text-2xl font-medium text-zinc-700">
              Delivery options
            </h3>
            <RadioGroup
              className="flex flex-col gap-4"
              defaultValue="delivery1"
            >
              <label
                htmlFor="delivery1"
                className="flex items-center justify-between rounded-lg border-2 border-zinc-300 p-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="delivery1" id="delivery1" />
                  <span>Option 1</span>
                </div>
                <p>Free</p>
              </label>
              <label
                htmlFor="delivery2"
                className="flex items-center justify-between rounded-lg border-2 border-zinc-300 p-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="delivery2" id="delivery2" />
                  <span>Option 2</span>
                </div>
                <p>20 USD</p>
              </label>
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-medium text-zinc-700">
              Packaging options
            </h3>
            <RadioGroup
              className="flex flex-col gap-4"
              defaultValue="packaging1"
            >
              <label
                htmlFor="packaging1"
                className="flex items-center justify-between rounded-lg border-2 border-zinc-300 p-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="packaging1" id="packaging1" />
                  <span>Option 1</span>
                </div>
                <p>Free</p>
              </label>
              <label
                htmlFor="packaging2"
                className="flex items-center justify-between rounded-lg border-2 border-zinc-300 p-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="packaging2" id="packaging2" />
                  <span>Option 2</span>
                </div>
                <p>20 USD</p>
              </label>
            </RadioGroup>
          </div>
        </div>

        <CartMenu buttonTitle="Continue" />
      </div>
    </div>
  )
}