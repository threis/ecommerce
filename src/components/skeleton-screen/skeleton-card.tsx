import { Skeleton } from '../ui/skeleton'

export function SkeletonCard() {
  return (
    <div className="flex h-[452px] w-[308px] flex-col rounded-lg border-2 border-border p-6">
      <Skeleton className="size-[260px]" />
      <div className="relative mt-auto flex flex-col gap-3">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-6 w-20" />
      </div>
    </div>
  )
}
