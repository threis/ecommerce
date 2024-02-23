import {
  DollarSign,
  LayoutDashboard,
  Palette,
  Settings,
  Square,
  Star,
} from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Filters() {
  return (
    <div className="flex flex-col border-r-2 border-r-zinc-300 px-8 py-2 ">
      <h3 className="text-center text-4xl font-medium text-primary">Filters</h3>
      <div className=" my-8 h-[2px] w-full bg-zinc-300" />
      <Accordion
        type="multiple"
        className="mx-auto w-[90%] space-y-10"
        defaultValue={[
          'size',
          'color',
          'price',
          'material',
          'ratting',
          'brand',
        ]}
      >
        <AccordionItem value="size">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Square />
              <span>Size</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex gap-1">
            <button className="flex size-8 items-center justify-center rounded-md border border-zinc-300 font-bold text-zinc-900 hover:bg-zinc-100">
              M
            </button>
            <button className="flex size-8 items-center justify-center rounded-md border border-zinc-300 font-bold text-zinc-900 hover:bg-zinc-100">
              L
            </button>
            <button className="flex size-8 items-center justify-center rounded-md border border-zinc-300 font-bold text-zinc-900 hover:bg-zinc-100">
              XL
            </button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="color">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Palette />
              <span>Color</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex gap-2">
            <button>
              <div className="size-6 rounded-full bg-orange-500 hover:bg-orange-300" />
            </button>
            <button>
              <div className="size-6 rounded-full bg-lime-500 hover:bg-lime-300" />
            </button>
            <button>
              <div className="size-6 rounded-full bg-red-500 hover:bg-red-300" />
            </button>
            <button>
              <div className="size-6 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100" />
            </button>
            <button>
              <div className="size-6 rounded-full bg-zinc-900 hover:bg-zinc-700" />
            </button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <DollarSign />
              <span>Price Range</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
              <span>Min</span>
              <input
                type="number"
                className="w-20 border border-zinc-300 pl-2"
                defaultValue={5}
              />
              <span>USD</span>
            </div>
            <div className="ml-8 flex flex-col items-center self-start">
              <div className="flex size-3 rounded-full bg-primary" />
              <div className="h-10 w-0.5 bg-primary" />
              <div className="flex size-3 rounded-full bg-primary" />
            </div>
            <div className="flex gap-2">
              <span>Max</span>
              <input
                type="number"
                className="w-20 border border-zinc-300 pl-2"
                defaultValue={999}
              />
              <span>USD</span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="material">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Settings />
              <span>Material</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-wrap items-center justify-center gap-2 px-10">
            <button className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 font-bold text-zinc-900 hover:bg-zinc-100">
              Cotton
            </button>
            <button className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 font-bold text-zinc-900 hover:bg-zinc-100">
              Silk
            </button>
            <button className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 font-bold text-zinc-900 hover:bg-zinc-100">
              Polyester
            </button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="ratting">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Star className="border-zinc-900 fill-zinc-900 text-zinc-900" />
              <span>Ratting</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex items-center gap-2">
            <button>
              <Star className="border-amber-300 fill-amber-300 text-amber-300" />
            </button>
            <button>
              <Star className="border-amber-300 fill-amber-300 text-amber-300" />
            </button>
            <button>
              <Star className="border-amber-300 fill-amber-300 text-amber-300" />
            </button>
            <button>
              <Star className="border-amber-300 fill-amber-300 text-amber-300" />
            </button>
            <button>
              <Star className="border-amber-300 fill-amber-300 text-amber-300" />
            </button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <LayoutDashboard />
              <span>Brand</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-wrap items-center justify-center gap-2 px-4">
            <button className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 text-xs font-bold text-zinc-900 hover:bg-zinc-100">
              Gucci
            </button>
            <button className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 text-xs font-bold text-zinc-900 hover:bg-zinc-100">
              Prada
            </button>
            <button className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 text-xs font-bold text-zinc-900 hover:bg-zinc-100">
              Nike
            </button>
            <button className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 text-xs font-bold text-zinc-900 hover:bg-zinc-100">
              Chanel
            </button>
            <button className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 text-xs font-bold text-zinc-900 hover:bg-zinc-100">
              Adidas
            </button>
            <button className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 text-xs font-bold text-zinc-900 hover:bg-zinc-100">
              Diesel
            </button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
