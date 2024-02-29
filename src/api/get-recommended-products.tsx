import { api } from '@/lib/axios'

interface RecommendedProductsResponse {
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

export async function getRecommendedProducts() {
  const response = await api.get<RecommendedProductsResponse[]>(
    '/recommended-products',
  )
  return response.data
}
