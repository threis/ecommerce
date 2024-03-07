import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { LockKeyhole } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { getBestSellerProducts } from '@/api/get-best-seller-products'
import { getNewProducts } from '@/api/get-new-products'
import { getRecommendedProducts } from '@/api/get-recommended-products'
import { getSpecialOffer } from '@/api/get-special-offer'
import { Input } from '@/components/form/input'
import { TabsList } from '@/components/tabs-list'
import { Tabs, TabsContent } from '@/components/ui/tabs'

import { CarouselCards } from './carousel-cards'
import { ProductsByCategory } from './products-by-category'

const searchProductSchema = z.object({
  search: z.string(),
})

type SearchProductData = z.infer<typeof searchProductSchema>

export function Product() {
  const navigate = useNavigate()

  const methods = useForm<SearchProductData>({
    resolver: zodResolver(searchProductSchema),
  })
  const { handleSubmit } = methods

  const { data: bestSellerProducts } = useQuery({
    queryKey: ['bestSellerProducts'],
    queryFn: getBestSellerProducts,
  })
  const { data: recommendedProducts } = useQuery({
    queryKey: ['recommendedProducts'],
    queryFn: getRecommendedProducts,
  })
  const { data: specialOffer } = useQuery({
    queryKey: ['specialOffer'],
    queryFn: getSpecialOffer,
  })
  const { data: newProducts } = useQuery({
    queryKey: ['newProducts'],
    queryFn: getNewProducts,
  })

  function handleProductSearch({ search }: SearchProductData) {
    if (search) {
      navigate(`/search?q=${search}`)
    }
  }

  return (
    <div className="mx-auto min-h-screen w-app py-9">
      <div className="flex flex-col gap-3">
        <div className="mb-6 flex justify-between">
          <h2 className="text-4xl text-foreground">All Product Categories</h2>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleProductSearch)}>
              <Input
                placeholder="Search all assets"
                Icon={LockKeyhole}
                label="Search"
                className=""
                width="w-[280px]"
                registerName="search"
              />
            </form>
          </FormProvider>
        </div>
        <Tabs defaultValue="all">
          <div className="mb-12 flex w-full items-center justify-between gap-4">
            <TabsList tabs={['all', 'clothing', 'jewelery', 'electronics']} />
          </div>
          <TabsContent value="all" className="flex flex-col gap-12">
            <CarouselCards
              title="Best Selling Products:"
              products={bestSellerProducts}
            />
            <CarouselCards title="New Products:" products={newProducts} />
            <CarouselCards
              title="Recommended Products:"
              products={recommendedProducts}
            />
            <CarouselCards title="Special Offer:" products={specialOffer} />
          </TabsContent>

          <TabsContent value="clothing" className="flex flex-col gap-12">
            <ProductsByCategory category="clothing" />
          </TabsContent>

          <TabsContent value="jewelery" className="flex flex-col gap-12">
            <ProductsByCategory category="jewelery" />
          </TabsContent>
          <TabsContent value="electronics" className="flex flex-col gap-12">
            <ProductsByCategory category="electronics" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
