import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@/components/theme-provider'
import { queryClient } from '@/lib/react-query'
import { Router } from '@/router'

import { Toaster } from './components/ui/sonner'
import { CartContextProvider } from './hook/useCart'

export function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="dark" storageKey="@ecommerce/theme-1.0">
            <Router />
            <Toaster />
          </ThemeProvider>
        </QueryClientProvider>
      </CartContextProvider>
    </BrowserRouter>
  )
}
