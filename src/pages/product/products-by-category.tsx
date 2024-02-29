import { useQuery } from '@tanstack/react-query'

import { getProductByCategory } from '@/api/get-products-by-category'
import { Card } from '@/components/card'
import { SkeletonCard } from '@/components/skeleton-screen/skeleton-card'

interface ProductsByCategoryProps {
  category: string
}

export function ProductsByCategory({ category }: ProductsByCategoryProps) {
  const { data: productByCategory } = useQuery({
    queryKey: ['productByCategory', category],
    queryFn: () => getProductByCategory(category),
  })

  return (
    <div className="flex w-full flex-wrap justify-between gap-10">
      {!productByCategory &&
        Array.from({ length: 3 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}

      {productByCategory &&
        productByCategory.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
    </div>
  )
}
