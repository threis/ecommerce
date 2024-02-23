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
        <h3 className="text-lg text-zinc-500">
          Home/ <span className="font-medium text-zinc-900">Shirt</span>
        </h3>
        <a href="" className="mb-6 flex justify-between">
          <h2 className="flex items-center gap-2 text-2xl font-medium text-zinc-900">
            <ArrowLeft className="size-5" />
            Back
          </h2>
        </a>

        <div className="mb-10 grid grid-cols-[700px_1fr] gap-16">
          <div className="h-full w-full rounded-lg bg-zinc-50"></div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-medium text-zinc-900">
              Shirt mockup concept with plain clothing
            </h2>
            <p className="text-sm font-medium text-zinc-500">
              This shirt is made in Thailand in a company called ANM
            </p>
            <div className="flex items-center gap-2">
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <div className="flex items-baseline gap-6">
                <span>(5.0)</span>
                <span className="text-sm font-medium">960 reviews</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-zinc-900">9.50 USD</h2>
            <p className="font-medium text-zinc-500">Product options:</p>
            <div className="flex flex-col gap-6 rounded-lg border border-zinc-300 px-6 py-8">
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <span>Color</span>
                  <div className="size-5 rounded-full bg-red-500" />
                  <div className="size-5 rounded-full bg-emerald-500" />
                  <div className="size-5 rounded-full bg-amber-500" />
                  <div className="size-5 rounded-full border border-zinc-200 bg-white" />
                  <div className="size-5 rounded-full bg-black" />
                </div>
                <div className="flex items-center gap-2">
                  <span>Size</span>
                  <Select defaultValue="medium">
                    <SelectTrigger className="h-8 w-16 rounded-md border border-zinc-300 px-4 py-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-50">
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
                <span className="text-sm">Qty</span>
                <button className="flex items-center justify-center rounded-full bg-zinc-300 p-2 hover:bg-zinc-200">
                  <Minus className="size-3" />
                </button>
                <span className="flex size-5 items-center justify-center text-xl font-medium">
                  1
                </span>
                <button className="flex items-center justify-center rounded-full bg-zinc-300 p-2 hover:bg-zinc-200">
                  <Plus className="size-3" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex w-full items-center justify-center rounded-full bg-primary py-3 text-xs font-medium text-white hover:bg-primary/80">
                Add to card
              </button>
              <button className="flex min-w-40 items-center justify-center rounded-full border border-zinc-300 bg-transparent py-3 text-xs font-medium text-primary hover:bg-zinc-100 hover:text-zinc-500">
                Add to favorite
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-zinc-400">
                Product id: 1234-abcdef
              </span>
              <button className="flex items-center justify-center rounded-full border-2 border-zinc-300 p-2">
                <Share2 className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <CarouselCards title="These you might also like:" />
      </div>
    </div>
  )
}
