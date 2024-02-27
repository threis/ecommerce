import { ElementType, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  Icon: ElementType
  width?: string
}

export function Input({ label, Icon, width, ...props }: InputProps) {
  return (
    <fieldset
      className={`${width || 'w-full'} flex h-14 items-center rounded-md border-2 border-muted-foreground text-muted-foreground focus-within:border-primary focus-within:text-foreground`}
    >
      <legend className="ml-3 px-1 text-xs text-muted-foreground group-focus/input:text-primary">
        {label}
      </legend>
      <div className="flex w-full items-center gap-2">
        <Icon className="mx-3 size-5 text-muted-foreground" />
        <input
          {...props}
          className={`group/input my-1 h-full w-full border-none bg-transparent outline-none placeholder:-mx-1 placeholder:text-muted-foreground ${props.className}`}
        />
      </div>
    </fieldset>
  )
}
