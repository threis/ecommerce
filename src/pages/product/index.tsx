import { LockKeyhole } from 'lucide-react'

import { Input } from '@/components/form/input'
import { TabsList } from '@/components/tabs-list'
import { Tabs, TabsContent } from '@/components/ui/tabs'

import { CarouselCards } from './carousel-cards'

export function Product() {
  return (
    <div className="mx-auto min-h-screen w-app py-9">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-muted-foreground">
          Home/ <span className="font-medium text-foreground">Product</span>
        </h3>
        <div className="mb-6 flex justify-between">
          <h2 className="text-4xl text-foreground">All Product Categories</h2>
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
            <TabsList
              tabs={[
                'cloth',
                'shoes',
                'dresses',
                'hats',
                'skincare',
                'eletronic',
                'arts',
              ]}
            />
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
