import {
  AtSign,
  Languages,
  LockKeyhole,
  LogOut,
  MessageSquareText,
  Pencil,
} from 'lucide-react'

import { Input } from '@/components/form/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Account() {
  return (
    <div className="mx-auto min-h-screen w-[1200px] py-9">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-zinc-500">
          Home/ <span className="font-medium text-zinc-900">Account</span>
        </h3>
        <div className="mb-6 flex justify-between">
          <h2 className="flex items-center gap-2 text-2xl font-medium text-zinc-900">
            Account
          </h2>
        </div>
      </div>

      <div className="mx-auto flex h-[600px] w-[600px] flex-col items-center gap-4 rounded-lg border-2 border-zinc-300 p-9">
        <div className="flex flex-col items-center gap-2">
          <img
            className="size-28 rounded-full"
            src="http://github.com/threis.png"
            alt=""
          />
          <h2 className="text-2xl font-medium text-zinc-900">Thiago Reis</h2>
          <span className="text-sm font-medium text-zinc-500">ID: 1234567</span>
        </div>
        <div className="flex w-full flex-col gap-2">
          <form className="relative w-full">
            <Input
              Icon={AtSign}
              label="Email"
              placeholder="thiago.reis@ecommerce.com"
              type="email"
            />
            <button
              type="submit"
              className="absolute bottom-0 right-4 top-6 flex size-4 items-center justify-center text-zinc-400"
            >
              <Pencil />
            </button>
          </form>
          <form className="relative w-full">
            <Input
              Icon={LockKeyhole}
              label="Password"
              placeholder="*********"
              type="password"
            />
            <button
              type="submit"
              className="absolute bottom-0 right-4 top-6 flex size-4 items-center justify-center text-zinc-400"
            >
              <Pencil />
            </button>
          </form>
          <Select defaultValue="english">
            <fieldset className="-my-1 rounded-lg border-2 border-zinc-300 focus-within:border-2 focus-within:border-primary">
              <SelectTrigger className="peer h-[calc(40px-1.6px)] w-full rounded-lg border-none bg-transparent px-4 py-2 focus:ring-0 focus:ring-transparent focus:ring-offset-0 ">
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
          <button
            type="button"
            className="flex h-14 w-full items-center justify-start gap-2 rounded-md border-2 border-zinc-300 px-3 transition-colors hover:bg-zinc-200"
          >
            <MessageSquareText className="mr-3 size-5" />
            Chat with us
          </button>
          <button className="flex h-14 items-center gap-2 rounded-lg border-2 border-zinc-300 pl-4 text-rose-700 transition-colors hover:border-transparent hover:bg-rose-500 hover:text-zinc-50 ">
            <LogOut />
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}