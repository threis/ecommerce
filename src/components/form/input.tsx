import { ElementType, InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  Icon: ElementType
  width?: string
  textError?: string
  registerName: string
}

export function Input({
  label,
  Icon,
  width,
  textError,
  registerName,
  ...props
}: InputProps) {
  const { register } = useFormContext()

  return (
    <div className="h-16">
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
            {...register(registerName)}
            className={`group/input my-1 h-full w-full border-none bg-transparent text-foreground outline-none placeholder:-mx-1 placeholder:text-muted-foreground ${props.className}`}
          />
        </div>
      </fieldset>
      {textError && (
        <span className="text-xs text-destructive">{textError}</span>
      )}
    </div>
  )
}
