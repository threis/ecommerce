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
import { DialogContent } from '@/components/ui/sidebar-dialog'

export function Filters() {
  return (
    <DialogContent>
      <button className="absolute right-28 top-4 min-w-20 rounded-lg bg-primary p-2 px-3 text-white hover:bg-primary/90">
        Filter
      </button>

      <Accordion
        type="multiple"
        className="mx-auto w-[90%] space-y-2"
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
            <div className="flex items-center gap-2 text-foreground">
              <Square />
              <span className="text-foreground">Size</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex gap-1">
            <button className="flex size-8 items-center justify-center rounded-md border border-muted-foreground font-bold text-muted-foreground hover:bg-primary hover:text-white">
              M
            </button>
            <button className="flex size-8 items-center justify-center rounded-md border border-muted-foreground font-bold text-muted-foreground hover:bg-primary hover:text-white">
              L
            </button>
            <button className="flex size-8 items-center justify-center rounded-md border border-muted-foreground font-bold text-muted-foreground hover:bg-primary hover:text-white">
              XL
            </button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="color">
          <AccordionTrigger>
            <div className="flex items-center gap-2 text-foreground">
              <Palette />
              <span className="text-foreground">Color</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex gap-2">
            <button>
              <div className="size-6 rounded-full bg-orange-500 hover:bg-orange-300" />
            </button>
            <button>
              <div className="size-6 rounded-full bg-primary hover:bg-primary/90" />
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
            <div className="flex items-center gap-2 text-foreground">
              <DollarSign />
              <span className="text-foreground">Price Range</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
              <span className="text-muted-foreground">Min</span>
              <input
                type="number"
                className="w-20 border border-border bg-secondary pl-2 text-muted-foreground"
                defaultValue={5}
              />
              <span className="text-muted-foreground">USD</span>
            </div>
            <div className="ml-8 flex flex-col items-center self-start">
              <div className="flex size-3 rounded-full bg-primary" />
              <div className="h-10 w-0.5 bg-primary" />
              <div className="flex size-3 rounded-full bg-primary" />
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">Max</span>
              <input
                type="number"
                className="w-20 border border-border bg-secondary pl-2 text-muted-foreground"
                defaultValue={999}
              />
              <span className="text-muted-foreground">USD</span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="material">
          <AccordionTrigger>
            <div className="flex items-center gap-2 text-foreground">
              <Settings />
              <span className="text-foreground">Material</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-wrap items-center justify-center gap-2 px-10">
            <button className="flex items-center justify-center rounded-lg border border-muted-foreground px-2 py-1 font-bold text-muted-foreground hover:bg-primary hover:text-white">
              Cotton
            </button>
            <button className="flex items-center justify-center rounded-lg border border-muted-foreground px-2 py-1 font-bold text-muted-foreground hover:bg-primary hover:text-white">
              Silk
            </button>
            <button className="flex items-center justify-center rounded-lg border border-muted-foreground px-2 py-1 font-bold text-muted-foreground hover:bg-primary hover:text-white">
              Polyester
            </button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="ratting">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Star className="border-foreground fill-foreground text-foreground" />
              <span className="text-foreground">Ratting</span>
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
            <div className="flex items-center gap-2 text-foreground">
              <LayoutDashboard />
              <span className="text-foreground">Brand</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-wrap items-center justify-center gap-2 px-4">
            <button className="flex items-center justify-center rounded-lg border border-muted-foreground px-2 py-1 text-xs font-bold text-muted-foreground hover:bg-primary hover:text-white">
              Gucci
            </button>
            <button className="flex items-center justify-center rounded-lg border border-muted-foreground px-2 py-1 text-xs font-bold text-muted-foreground hover:bg-primary hover:text-white">
              Prada
            </button>
            <button className="flex items-center justify-center rounded-lg border border-muted-foreground px-2 py-1 text-xs font-bold text-muted-foreground hover:bg-primary hover:text-white">
              Nike
            </button>
            <button className="flex items-center justify-center rounded-lg border border-muted-foreground px-2 py-1 text-xs font-bold text-muted-foreground hover:bg-primary hover:text-white">
              Chanel
            </button>
            <button className="flex items-center justify-center rounded-lg border border-muted-foreground px-2 py-1 text-xs font-bold text-muted-foreground hover:bg-primary hover:text-white">
              Adidas
            </button>
            <button className="flex items-center justify-center rounded-lg border border-muted-foreground px-2 py-1 text-xs font-bold text-muted-foreground hover:bg-primary hover:text-white">
              Diesel
            </button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </DialogContent>
  )
}
