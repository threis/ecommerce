import { api } from '@/lib/axios'

interface ProductByIdResponse {
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

export async function getProductById(id: string) {
  const response = await api.get<ProductByIdResponse>(`/products/${id}`)
  return response.data
}
