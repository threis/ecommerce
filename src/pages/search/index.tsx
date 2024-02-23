import { Heart, LockKeyhole, PlusCircle } from 'lucide-react'

import productNotFound from '@/assets/not-found.svg'
import product1 from '@/assets/product-1.png'
import { Input } from '@/components/form/input'
import { Pagination } from '@/components/pagination'

import { Filters } from './filters'
import { SortResults } from './sort-results'

export function Search() {
  const isEmpty = false

  return (
    <div className="grid grid-cols-[300px_1fr] py-8">
      <Filters />
      <div className="flex flex-col gap-3 pl-10 pr-20">
        <h3 className="text-lg text-zinc-500">
          Home/ <span className="font-medium text-zinc-900">Search</span>
        </h3>
        <div className="mb-6 flex justify-between">
          <h2 className="text-4xl text-zinc-900">Shirt (2005 results)</h2>
          <Input
            placeholder="Search all assets"
            Icon={LockKeyhole}
            label="Search"
            className=""
            width="w-[280px]"
          />
        </div>

        {isEmpty ? (
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <img
              src={productNotFound}
              alt=""
              className="h-[200px] w-[200px] object-cover"
            />
            <h2 className="text-xl font-medium">Product not found</h2>
            <p className="font-xs text-zinc-500">
              Product you’re looking for might not have in our site
            </p>
          </div>
        ) : (
          <>
            <div className="mb-10 flex items-center justify-between">
              <h3 className="inline border-b-2 border-primary pb-1 text-xl font-medium text-zinc-900">
                Show results for shirts:
              </h3>
              <SortResults />
            </div>
            <div className="flex flex-wrap gap-x-16 gap-y-12 ">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  className="flex h-[452px] w-[308px] flex-col rounded-lg border-2 border-zinc-300 p-6"
                  key={index}
                >
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
                    <h3 className="text-2xl font-medium text-zinc-900">
                      Warning
                    </h3>
                    <span className="text-xs text-zinc-400">Description</span>
                    <label className="font-bold text-zinc-900">8.00 USD</label>
                    <button className="absolute bottom-0 right-0">
                      <PlusCircle className="size-8 fill-primary text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Pagination />
          </>
        )}
      </div>
    </div>
  )
}
