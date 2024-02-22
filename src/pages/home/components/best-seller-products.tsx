import { Heart, ListFilter, PlusCircle } from 'lucide-react'

import product1 from '@/assets/product-1.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
export function BestSellerProducts() {
  return (
    <section>
      <Tabs defaultValue="clothing">
        <div className="mx-auto flex max-w-app flex-col items-center gap-16 py-[3.75rem]">
          <h3 className="border-b-2 border-primary text-2xl font-bold text-zinc-700">
            Best Seller Products
          </h3>
          <div className="flex w-full items-center justify-center gap-6">
            <div className="h-1 w-full rounded-full bg-primary" />
            <TabsList
              className="flex h-14 gap-9 rounded-lg border border-zinc-300 p-1.5"
              defaultValue="clothing"
            >
              <TabsTrigger
                value="clothing"
                className="w-[100px] rounded-lg px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Clothing
              </TabsTrigger>
              <TabsTrigger
                value="shoes"
                className="w-[100px] rounded-lg px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Shoes
              </TabsTrigger>
            </TabsList>
            <div className="h-1 w-full bg-primary" />
          </div>

          <TabsContent value="clothing">
            <Tabs defaultValue="tops" className="space-y-20 ">
              <div className="flex w-app items-center justify-between gap-4">
                <TabsList className="flex h-14 w-full justify-between gap-9 rounded-lg border border-zinc-300 p-1.5">
                  <TabsTrigger
                    value="tops"
                    className="w-[100px] rounded-lg px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Tops
                  </TabsTrigger>
                  <TabsTrigger
                    value="bottoms"
                    className="w-[100px] rounded-lg px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Bottoms
                  </TabsTrigger>
                  <TabsTrigger
                    value="dresses"
                    className="w-[100px] rounded-lg px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Dresses
                  </TabsTrigger>
                  <TabsTrigger
                    value="outwear"
                    className="w-[100px] rounded-lg px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Outerwear
                  </TabsTrigger>
                  <TabsTrigger
                    value="activewear"
                    className="w-[100px] rounded-md px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Activewear
                  </TabsTrigger>
                </TabsList>
                <button className="flex size-10 items-center justify-center rounded-full border border-zinc-700">
                  <ListFilter className="size-6" />
                </button>
              </div>
              <TabsContent value="tops">
                <div className="flex items-center justify-between gap-12">
                  <div className="flex h-[452px] w-[308px] flex-col rounded-lg border-2 border-zinc-300 p-6">
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
                      <label className="font-bold text-zinc-900">
                        8.00 USD
                      </label>
                      <button className="absolute bottom-0 right-0">
                        <PlusCircle className="size-8 fill-primary text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="flex h-[452px] w-[308px] flex-col rounded-lg border-2 border-zinc-300 p-6">
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
                      <label className="font-bold text-zinc-900">
                        8.00 USD
                      </label>
                      <button className="absolute bottom-0 right-0">
                        <PlusCircle className="size-8 fill-primary text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="flex h-[452px] w-[308px] flex-col rounded-lg border-2 border-zinc-300 p-6">
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
                      <label className="font-bold text-zinc-900">
                        8.00 USD
                      </label>
                      <button className="absolute bottom-0 right-0">
                        <PlusCircle className="size-8 fill-primary text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}
