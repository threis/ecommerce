import { AtSign, LockKeyhole } from 'lucide-react'

import logo from '@/assets/logo.svg'
import { Input } from '@/components/form/input'

export function SignIn() {
  return (
    <div className="mx-auto flex w-app flex-col items-center space-y-6 p-10">
      <img src={logo} alt="" className="h-20 w-[200px]" />
      <form className="flex h-[480px] w-[600px] flex-col items-center space-y-8 rounded-3xl border-2 border-border p-9">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-medium text-foreground">
            Login to your account
          </h2>
          <p className="text-muted-foreground">Please enter your information</p>
        </div>
        <div className="h-full w-full space-y-6">
          <Input
            Icon={AtSign}
            label="Email"
            placeholder="Enter your email"
            className="text-foreground"
            registerName="email"
          />

          <Input
            Icon={LockKeyhole}
            label="Password"
            placeholder="Type your password"
            className="text-foreground"
            type="password"
            registerName="password"
          />

          <div className="flex flex-col space-y-2">
            <label className="flex gap-2" htmlFor="remember">
              <input type="checkbox" id="remember" className="accent-primary" />
              <span className="text-muted-foreground">Remember me</span>
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
      <p className="font-semibold text-muted-foreground">
        Have not had account yet?{' '}
        <a href="" className="text-primary">
          Sign Up
        </a>
      </p>
    </div>
  )
}
