import { api } from '@/lib/axios'

interface ProductByCategoryResponse {
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

export async function getProductByCategory(category: string) {
  const response = await api.get<ProductByCategoryResponse[]>(
    `/products?category=${category}`,
  )
  return response.data
}
