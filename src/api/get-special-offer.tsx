import { api } from '@/lib/axios'

interface SpecialOfferResponse {
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

export async function getSpecialOffer() {
  const response = await api.get<SpecialOfferResponse[]>('/special-offer')
  return response.data
}
