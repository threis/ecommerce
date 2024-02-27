import { AtSign, LockKeyhole } from 'lucide-react'

import logo from '@/assets/logo.svg'
import { Input } from '@/components/form/input'

export function SignIn() {
  return (
    <div className="mx-auto flex w-app flex-col items-center space-y-6 p-10">
      <img src={logo} alt="" className="h-20 w-[200px]" />
      <form className="flex h-[480px] w-[600px] flex-col items-center space-y-8 rounded-3xl border-2 border-border p-9">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-medium text-zinc-900">
            Login to your account
          </h2>
          <p className="text-zinc-500">Please enter your information</p>
        </div>
        <div className="h-full w-full space-y-6">
          <Input
            Icon={AtSign}
            label="Email"
            placeholder="Enter your email"
            className="text-zinc-900"
          />

          <Input
            Icon={LockKeyhole}
            label="Password"
            placeholder="Type your password"
            className="text-zinc-900"
            type="password"
          />

          <div className="flex flex-col space-y-2">
            <label className="flex gap-2" htmlFor="remember">
              <input type="checkbox" id="remember" className="accent-primary" />
              <span>Remember me</span>
            </label>
          </div>
        </div>
        <button
          className="w-full rounded-full bg-primary py-3 text-white"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="font-semibold text-zinc-900">
        Have not had account yet?{' '}
        <a href="" className="text-primary">
          Sign Up
        </a>
      </p>
    </div>
  )
}
