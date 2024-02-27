import { Heart, LockKeyhole, PlusCircle } from 'lucide-react'

import productNotFound from '@/assets/not-found.svg'
import product1 from '@/assets/product-1.png'
import { Input } from '@/components/form/input'
import { Pagination } from '@/components/pagination'
import { Dialog, DialogTrigger } from '@/components/ui/sidebar-dialog'

import { Filters } from './filters'
import { SortResults } from './sort-results'

export function Search() {
  const isEmpty = false

  return (
    <Dialog>
      <div className="mx-auto flex w-app flex-col gap-20 py-14">
        <Filters />
        <div className="flex w-full flex-col gap-3">
          <h3 className="text-lg text-muted-foreground">
            Home/ <span className="font-medium text-foreground">Search</span>
          </h3>
          <div className="mb-6 flex justify-between">
            <h2 className="text-4xl text-foreground">Shirt (2005 results)</h2>
            <div className="flex items-center gap-2">
              <DialogTrigger asChild>
                <button className="bg-transparent px-6 py-1 text-muted-foreground  hover:text-primary">
                  Filter
                </button>
              </DialogTrigger>
              <Input
                placeholder="Search all assets"
                Icon={LockKeyhole}
                label="Search"
                className=""
                width="w-[280px]"
              />
            </div>
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
              <div className="mb-10 flex w-full items-center justify-between">
                <h3 className="inline border-b-2 border-primary pb-1 text-xl font-medium text-foreground">
                  Show results for shirts:
                </h3>
                <SortResults />
              </div>
              <div className="flex w-full flex-wrap justify-between gap-10">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    className="flex h-[452px] w-[308px] flex-col rounded-lg border-2 border-border p-6"
                    key={index}
                  >
                    <div className="relative h-[260px] w-[260px] ">
                      <button className="absolute right-0 top-0 z-10">
                        <Heart className="size-6 text-foreground" />
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
                      <span className="text-xs text-muted-foreground">
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
                ))}
              </div>
              <Pagination />
            </>
          )}
        </div>
      </div>
    </Dialog>
  )
}
