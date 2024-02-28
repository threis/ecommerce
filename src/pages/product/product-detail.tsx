import { ArrowLeft, Minus, Plus, Share2, Star } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { CarouselCards } from './carousel-cards'

export function ProductDetail() {
  return (
    <div className="mx-auto min-h-screen w-[1200px] py-9">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-muted-foreground">
          Home/ <span className="font-medium text-foreground">Shirt</span>
        </h3>
        <a href="" className="mb-6 flex justify-between">
          <h2 className="flex items-center gap-2 text-2xl font-medium text-foreground">
            <ArrowLeft className="size-5" />
            Back
          </h2>
        </a>

        <div className="mb-10 grid grid-cols-[700px_1fr] gap-16">
          <div className="h-full w-full rounded-lg bg-secondary"></div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-medium text-foreground">
              Shirt mockup concept with plain clothing
            </h2>
            <p className="text-sm font-medium text-muted-foreground">
              This shirt is made in Thailand in a company called ANM
            </p>
            <div className="flex items-center gap-2">
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <div className="flex items-baseline gap-6">
                <span className="text-popover-foreground">(5.0)</span>
                <span className="text-sm font-medium text-popover-foreground">
                  960 reviews
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-foreground">9.50 USD</h2>
            <p className="font-medium text-muted-foreground">
              Product options:
            </p>
            <div className="flex flex-col gap-6 rounded-lg border border-border px-6 py-8">
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Color</span>
                  <div className="size-5 rounded-full bg-red-500" />
                  <div className="size-5 rounded-full bg-emerald-500" />
                  <div className="size-5 rounded-full bg-amber-500" />
                  <div className="size-5 rounded-full border border-zinc-200 bg-white" />
                  <div className="size-5 rounded-full border border-zinc-50 bg-black" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Size</span>
                  <Select defaultValue="medium">
                    <SelectTrigger className="h-8 w-16 rounded-md border border-border bg-secondary px-4 py-2 text-muted-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-secondary text-muted-foreground">
                      <SelectItem value="small">
                        <span>S</span>
                      </SelectItem>
                      <SelectItem value="medium">
                        <span>M</span>
                      </SelectItem>
                      <SelectItem value="large">
                        <span>L</span>
                      </SelectItem>
                      <SelectItem value="extralarge">
                        <span>XL</span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Qty</span>
                <button className="flex items-center justify-center rounded-full bg-secondary p-2 text-foreground hover:bg-primary">
                  <Minus className="size-3" />
                </button>
                <span className="flex size-5 items-center justify-center text-xl font-medium text-muted-foreground">
                  1
                </span>
                <button className="flex items-center justify-center rounded-full bg-secondary p-2 text-foreground hover:bg-primary">
                  <Plus className="size-3" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex w-full items-center justify-center rounded-full bg-primary py-3 text-xs font-medium text-white hover:bg-primary/80">
                Add to card
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                Product id: 1234-abcdef
              </span>
              <button className="flex items-center justify-center rounded-full border-2 border-muted-foreground p-2">
                <Share2 className="size-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>

        <CarouselCards title="These you might also like:" />
      </div>
    </div>
  )
}
