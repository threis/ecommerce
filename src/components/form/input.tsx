import { ElementType, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  Icon: ElementType
}

export function Input({ label, Icon, ...props }: InputProps) {
  return (
    <fieldset className="h-12 w-full rounded-md border-2 border-zinc-300 text-zinc-500 focus-within:border-primary focus-within:text-primary">
      <legend className="ml-3 px-1 text-xs group-focus/input:text-primary">
        {label}
      </legend>
      <div className="flex items-center gap-2">
        <Icon className="mx-3 size-5 text-zinc-700" />
        <input
          {...props}
          className={`group/input w-full border-none outline-none placeholder:text-zinc-600 ${props.className}`}
        />
      </div>
    </fieldset>
  )
}
