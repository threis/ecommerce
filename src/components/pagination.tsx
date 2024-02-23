import {
  Pagination as PaginationPrimitive,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function Pagination() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Select defaultValue="12">
          <fieldset className="rounded-lg border-2 border-zinc-300 focus-within:border-2 focus-within:border-primary">
            <SelectTrigger className="peer h-8 w-20 rounded-lg border-none bg-transparent px-4 py-2 focus:ring-0 focus:ring-transparent focus:ring-offset-0 ">
              <div className="flex items-center justify-start gap-4">
                <SelectValue defaultValue="english" />
              </div>
            </SelectTrigger>
            <legend className="ml-3 px-1 text-xs text-zinc-500 peer-focus:text-primary">
              Page
            </legend>
          </fieldset>
          <SelectContent className="bg-zinc-50">
            <SelectItem value="12">
              <span>12</span>
            </SelectItem>
            <SelectItem value="24">
              <span>24</span>
            </SelectItem>
            <SelectItem value="48">
              <span>48</span>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <PaginationPrimitive>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </PaginationPrimitive>
      </div>
    </div>
  )
}
