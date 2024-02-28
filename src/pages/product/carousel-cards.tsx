import { Card } from '@/components/card'
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
                <Card />
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
