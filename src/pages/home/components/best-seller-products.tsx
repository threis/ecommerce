import { useQuery } from '@tanstack/react-query'

import { getBestSellerProducts } from '@/api/get-best-seller-products'
import { Card } from '@/components/card'
import { SkeletonCard } from '@/components/skeleton-screen/skeleton-card'

export function BestSellerProducts() {
  const { data: bestSellerProducts, isPending: isBestSellerProductsPending } =
    useQuery({
      queryKey: ['bestSellerProducts'],
      queryFn: getBestSellerProducts,
    })

  console.log(bestSellerProducts)

  return (
    <section>
      <div className="mx-auto flex max-w-app flex-col items-center gap-16 py-[3.75rem]">
        <h3 className="border-b-2 border-primary text-2xl font-bold text-secondary-foreground">
          Best Seller Products
        </h3>

        <div className="flex items-center justify-between gap-12">
          {isBestSellerProductsPending &&
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          {!!bestSellerProducts &&
            bestSellerProducts.map((product) => {
              return (
                <Card
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}
