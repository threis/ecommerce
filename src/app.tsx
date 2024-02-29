import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@/components/theme-provider'
import { queryClient } from '@/lib/react-query'
import { Router } from '@/router'

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="@ecommerce/theme-1.0">
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
