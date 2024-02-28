import { ListFilter } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { Card } from '@/components/card'
import { TabsList } from '@/components/tabs-list'
import { Tabs, TabsContent } from '@/components/ui/tabs'
export function BestSellerProducts() {
  return (
    <section>
      <Tabs defaultValue="clothing">
        <div className="mx-auto flex max-w-app flex-col items-center gap-16 py-[3.75rem]">
          <h3 className="border-b-2 border-primary text-2xl font-bold text-secondary-foreground">
            Best Seller Products
          </h3>

          <TabsContent value="clothing">
            <Tabs defaultValue="tops" className="space-y-20 ">
              <div className="flex w-app items-center justify-between gap-4">
                <TabsList
                  tabs={['tops', 'bottoms', 'dresses', 'outwear', 'activewear']}
                />
                <NavLink
                  to="/search"
                  className="flex size-10 items-center justify-center rounded-full border border-secondary-foreground"
                >
                  <ListFilter className="size-6 text-secondary-foreground" />
                </NavLink>
              </div>
              <TabsContent value="tops">
                <div className="flex items-center justify-between gap-12">
                  {Array.from({ length: 3 }).map((_, index) => {
                    return <Card key={index} />
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}
