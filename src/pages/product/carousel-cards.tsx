import { Heart, PlusCircle } from 'lucide-react'

import product1 from '@/assets/product-1.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface CarouselCardsProps {
  title: string
}

export function CarouselCards({ title }: CarouselCardsProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="inline border-b-2 border-primary pb-1 text-xl font-medium text-foreground">
          {title}
        </h3>
        <a href="" className="text-lg font-medium text-primary">
          See more+
        </a>
      </div>
      <div className="w-full">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full "
        >
          <CarouselContent className="flex first:-ml-10">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="mr-12 basis-1/4 px-10">
                <div className="flex h-[452px] w-[308px] flex-col rounded-lg border-2 border-border p-6">
                  <div className="relative h-[260px] w-[260px] ">
                    <button className="absolute right-0 top-0 z-10">
                      <Heart className="size-6" />
                    </button>
                    <img
                      src={product1}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative mt-auto flex flex-col gap-3">
                    <h3 className="text-2xl font-medium text-foreground">
                      Warning
                    </h3>
                    <span className="text-muted-foreground text-xs">
                      Description
                    </span>
                    <label className="font-bold text-foreground">
                      8.00 USD
                    </label>
                    <button className="absolute bottom-0 right-0">
                      <PlusCircle className="size-8 fill-primary text-white" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
