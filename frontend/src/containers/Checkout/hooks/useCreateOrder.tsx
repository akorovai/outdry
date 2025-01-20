import { useState } from 'react'
import { useAuth } from '@/context/AuthContext/AuthContext.tsx'

interface AddressInfoResponse {
  id?: number
  fullName: string
  state: string
  street: string
  apartment: string
  postalCode: string
  city: string
  phone: string
  userId: number
}

interface CreateOrderRequest {
  email: string
  addressInfo: AddressInfoResponse
  shippingPrice: number
  shippingTime: string
  paymentMethod: string
}

const useCreateOrder = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  const createOrder = async (orderData: CreateOrderRequest) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${BASE_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      })

      return await response.json()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return { createOrder, isLoading, error }
}

export default useCreateOrder
