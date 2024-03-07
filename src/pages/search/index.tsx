import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { LockKeyhole } from 'lucide-react'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getSearchedProducts } from '@/api/get-searched-products'
import productNotFound from '@/assets/empty-cart.svg'
import { Card } from '@/components/card'
import { Input } from '@/components/form/input'
import { Pagination } from '@/components/pagination'
import { SkeletonCard } from '@/components/skeleton-screen/skeleton-card'
import { Dialog, DialogTrigger } from '@/components/ui/sidebar-dialog'

// import { SortResults } from './sort-results'

const searchProductSchema = z.object({
  search: z.string(),
})

type SearchProductData = z.infer<typeof searchProductSchema>

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const methods = useForm<SearchProductData>({
    resolver: zodResolver(searchProductSchema),
  })

  const { handleSubmit } = methods

  const searchQuery = searchParams.get('q') || ''

  function handleSearchProduct({ search }: SearchProductData) {
    if (search) {
      setSearchParams((state) => {
        state.set('q', search)
        return state
      })
    }
  }

  const { data: searchedProducts, isPending: isSearchedProductsPending } =
    useQuery({
      queryKey: ['searchedProducts', searchQuery],
      queryFn: () => getSearchedProducts(searchQuery),
    })

  useEffect(() => {
    if (!isSearchedProductsPending && !searchQuery) {
      navigate('/product')
    }
  }, [isSearchedProductsPending, searchQuery, navigate])

  const isEmpty = !isSearchedProductsPending && searchedProducts?.length === 0

  return (
    <Dialog>
      <div className="mx-auto flex w-app flex-col gap-20 py-14">
        {/* <Filters /> */}
        <div className="flex w-full flex-col gap-3">
          <h3 className="text-lg text-muted-foreground">
            Home/ <span className="font-medium text-foreground">Search</span>
          </h3>
          <div className="mb-6 flex justify-between">
            <h2 className="text-4xl text-foreground">
              {searchQuery} ({searchedProducts?.length} results)
            </h2>
            <div className="flex items-center gap-2">
              <DialogTrigger asChild>
                {/* <button className="bg-transparent px-6 py-1 text-muted-foreground  hover:text-primary">
                  Filter
                </button> */}
              </DialogTrigger>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleSearchProduct)}>
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
          </div>

          {isEmpty ? (
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <img
                src={productNotFound}
                alt=""
                className="h-[200px] w-[200px] object-cover"
              />
              <h2 className="text-xl font-medium text-foreground">
                Product not found
              </h2>
              <p className="font-xs text-muted-foreground">
                Product you’re looking for might not have in our site
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10 flex w-full items-center justify-between">
                <h3 className="inline border-b-2 border-primary pb-1 text-xl font-medium text-foreground">
                  Show results for shirts:
                </h3>
                {/* <SortResults /> */}
              </div>
              <div className="flex w-full flex-wrap justify-between gap-10">
                {isSearchedProductsPending &&
                  Array.from({ length: 6 }).map((_, index) => (
                    <SkeletonCard key={index} />
                  ))}

                {searchedProducts &&
                  searchedProducts.map((product) => (
                    <Card
                      key={product.id}
                      id={product.id}
                      image={product.image}
                      price={product.price}
                      title={product.title}
                    />
                  ))}
              </div>
              {/* <Pagination /> */}
            </>
          )}
        </div>
      </div>
    </Dialog>
  )
}
