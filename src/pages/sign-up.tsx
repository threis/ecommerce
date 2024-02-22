import { AtSign, CircleUser, LockKeyhole } from 'lucide-react'

import logo from '@/assets/logo.svg'
import { Input } from '@/components/form/input'

export function SignUp() {
  return (
    <div className="mx-auto flex w-app flex-col items-center space-y-6 p-10">
      <img src={logo} alt="" className="h-20 w-[200px]" />
      <form className="flex h-[624px] w-[600px] flex-col items-center space-y-8 rounded-3xl border-2 border-zinc-300 p-9">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-medium text-zinc-900">
            Sign up as our customer
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
            Icon={CircleUser}
            label="Name"
            placeholder="Enter your name"
            className="text-zinc-900"
          />
          <Input
            Icon={LockKeyhole}
            label="Password"
            placeholder="Create a password"
            className="text-zinc-900"
            type="password"
          />
          <Input
            Icon={LockKeyhole}
            label="Confirm password"
            placeholder="Enter password again"
            className="text-zinc-900"
            type="password"
          />
          <div className="flex flex-col space-y-2">
            <label className="flex gap-2" htmlFor="remember">
              <input type="checkbox" id="remember" className="accent-primary" />
              <span>Remember me</span>
            </label>
            <label className="flex gap-2" htmlFor="terms">
              <input type="checkbox" id="terms" className="accent-primary" />
              <span>Agree with terms and conditions</span>
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
        Already have account?{' '}
        <a href="" className="text-primary">
          Sign In
        </a>
      </p>
    </div>
  )
}
