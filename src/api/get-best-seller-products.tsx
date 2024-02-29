import { api } from '@/lib/axios'

interface BestSellerProductsResponse {
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

export async function getBestSellerProducts() {
  const response = await api.get<BestSellerProductsResponse[]>('/best-seller')
  return response.data
}
