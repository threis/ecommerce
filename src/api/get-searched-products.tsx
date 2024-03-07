import { api } from '@/lib/axios'

interface SearchedProductsResponse {
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

export async function getSearchedProducts(query: string) {
  const response = await api.get<SearchedProductsResponse[]>('/products', {
    params: {
      q: query,
    },
  })
  return response.data
}
