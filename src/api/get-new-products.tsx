import { api } from '@/lib/axios'

interface NewProductsResponse {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export async function getNewProducts() {
  const response = await api.get<NewProductsResponse[]>('/new-products')
  return response.data
}
