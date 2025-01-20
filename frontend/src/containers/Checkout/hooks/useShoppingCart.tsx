import { useEffect, useState } from 'react'
import { api } from '@/context/AuthContext/AuthContext.tsx'

export interface ProductCartResponse {
  id: number
  name: string
  color: string
  price: number
  discount?: number
  amount: number
  imageUrl: string
  size: string
}

export interface ShoppingCartItemResponse {
  id: number
  quantity: number
  product: ProductCartResponse
  userId: number
}

export const useShoppingCart = () => {
  const [cartItems, setCartItems] = useState<ShoppingCartItemResponse[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCartItems = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await api.get('/api/shopping-cart/items')
      setCartItems(response.data.message)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch cart items')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCartItems()
  }, [])

  return { cartItems, loading, error, refetch: fetchCartItems }
}
