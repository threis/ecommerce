export interface ProgressBarProps {
  step: string[]
}

export function ProgressBar({ step }: ProgressBarProps) {
  return (
    <div className="mb-20 mt-10 flex h-1 w-full items-center justify-between border bg-zinc-300 px-[25%] text-muted-foreground">
      <div
        className={`relative flex size-5 items-center justify-center rounded-full border border-border ${step.includes('card') ? 'bg-primary' : 'bg-white'} before:absolute before:-bottom-8 before:content-['card']`}
      />
      <div
        className={`relative flex size-5 items-center justify-center rounded-full border border-border ${step.includes('shipping') ? 'bg-primary' : 'bg-white'} before:absolute before:-bottom-8 before:content-['shipping']`}
      />
      <div
        className={`relative flex size-5 items-center justify-center rounded-full border border-border ${step.includes('payment') ? 'bg-primary' : 'bg-white'} before:absolute before:-bottom-8 before:content-['payment']`}
      />
    </div>
  )
}
