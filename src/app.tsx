import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from './components/theme-provider'
import { Router } from './router'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="@ecommerce/theme-1.0">
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}
