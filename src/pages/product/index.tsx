import { LockKeyhole } from 'lucide-react'

import { Input } from '@/components/form/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { CarouselCards } from './carousel-cards'

export function Product() {
  return (
    <div className="mx-auto min-h-screen w-app py-9">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-zinc-500">
          Home/ <span className="font-medium text-zinc-900">Product</span>
        </h3>
        <div className="mb-6 flex justify-between">
          <h2 className="text-4xl text-zinc-900">All Product Categories</h2>
          <Input
            placeholder="Search all assets"
            Icon={LockKeyhole}
            label="Search"
            className=""
            width="w-[280px]"
          />
        </div>
        <Tabs defaultValue="cloth">
          <div className="mb-12 flex w-full items-center justify-between gap-4">
            <TabsList className="flex h-14 w-full justify-between gap-9 rounded-lg border border-zinc-300 p-1.5">
              <TabsTrigger
                value="cloth"
                className="w-[100px] rounded-lg px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Cloth
              </TabsTrigger>
              <TabsTrigger
                value="shoes"
                className="w-[100px] rounded-lg px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Shoes
              </TabsTrigger>
              <TabsTrigger
                value="dresses"
                className="w-[100px] rounded-lg px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Hats
              </TabsTrigger>
              <TabsTrigger
                value="hats"
                className="w-[100px] rounded-lg px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Skincare
              </TabsTrigger>
              <TabsTrigger
                value="skincare"
                className="w-[100px] rounded-md px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Eletronic
              </TabsTrigger>
              <TabsTrigger
                value="eletronic"
                className="w-[100px] rounded-md px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Arts
              </TabsTrigger>
              <TabsTrigger
                value="arts"
                className="w-[100px] rounded-md px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Books
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="cloth" className="flex flex-col gap-12">
            <CarouselCards title="Best Selling Products:" />
            <CarouselCards title="New Products:" />
            <CarouselCards title="Recommended Products:" />
            <CarouselCards title="Special Offer:" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
