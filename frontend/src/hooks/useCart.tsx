import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@/context/AuthContext/AuthContext.tsx'

interface AddToCartResponse {
  code: number
  message: string
}

const useAddToCart = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  const addToCart = async (productId: number) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post<AddToCartResponse>(`${BASE_URL}/api/shopping-cart/items`, null, {
        params: { productId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 204) {
        return { success: true, message: 'Product added to cart successfully!' }
      }

      if (response.status >= 200 && response.status < 300) {
        return response.data
      }

      throw new Error('Failed to add product to cart')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
      return { success: false, message: error || 'Failed to add product to cart' }
    } finally {
      setLoading(false)
    }
  }

  return { addToCart, loading, error }
}

export default useAddToCart
