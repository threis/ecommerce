import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SortResults() {
  return (
    <Select defaultValue="relevant">
      <fieldset className="rounded-md border-2 border-muted-foreground focus-within:border-2 focus-within:border-primary">
        <SelectTrigger className="peer h-12 w-32 rounded-lg border-none bg-transparent px-4 py-2 text-muted-foreground focus:ring-0 focus:ring-transparent focus:ring-offset-0">
          <div className="flex items-center justify-start gap-4">
            <SelectValue defaultValue="relevant" />
          </div>
        </SelectTrigger>
        <legend className="ml-3 px-1 text-xs text-muted-foreground peer-focus:text-primary">
          Sort
        </legend>
      </fieldset>
      <SelectContent className="bg-secondary">
        <SelectItem value="relevant">
          <span className="text-xs">Most Relevant</span>
        </SelectItem>
        <SelectItem value="price">
          <span className="text-xs">Lower Price</span>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
