import { TabsList as TabsListPrimite, TabsTrigger } from '@/components/ui/tabs'

interface TabsListProps {
  tabs: string[]
}

export function TabsList({ tabs }: TabsListProps) {
  return (
    <TabsListPrimite className="flex h-14 w-full justify-between gap-9 rounded-lg border border-border p-1.5">
      {!!tabs &&
        tabs.map((tab) => {
          return (
            <TabsTrigger
              key={tab}
              value={tab}
              className="w-[100px] rounded-lg px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabsTrigger>
          )
        })}
    </TabsListPrimite>
  )
}
