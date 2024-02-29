import { Card } from '@/components/card'
import { SkeletonCard } from '@/components/skeleton-screen/skeleton-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

type Product = {
  id: string
  title: string
  price: number
  image: string
}

interface CarouselCardsProps {
  title: string
  products: Product[] | undefined
}

export function CarouselCards({ title, products }: CarouselCardsProps) {
  return (
    <div className="space-y-8">
      <h3 className="inline border-b-2 border-primary pb-1 text-xl font-medium text-foreground">
        {title}
      </h3>
      <div className="w-full">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full "
        >
          <CarouselContent className="flex first:-ml-10">
            {!products &&
              Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index} className="mr-12 basis-1/4 px-10">
                  <SkeletonCard />
                </CarouselItem>
              ))}

            {products &&
              products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="mr-12 basis-1/4 px-10"
                >
                  <Card
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
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
