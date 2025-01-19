import { useCallback, useEffect, useState } from 'react'
import { api } from '@/context/AuthContext/AuthContext.tsx'

interface ResponseRecord<T> {
  code: number
  message: T | string
}

interface ShoppingCartItemResponse {
  id: number
  quantity: number
  product: ProductCartResponse
  userId: number
}

interface ProductCartResponse {
  id: number
  name: string
  color: string
  price: number
  discount: number
  amount: number
  imageUrl: string
  size: string
}

interface CartOperationResult {
  success: boolean
  message: string
}

const useShoppingCart = () => {
  const [cartItems, setCartItems] = useState<ShoppingCartItemResponse[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchShoppingCartItems = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await api.get<ResponseRecord<ShoppingCartItemResponse[]>>('/api/shopping-cart/items')

      if (response.status === 200 && Array.isArray(response.data.message)) {
        setCartItems(response.data.message)
      } else {
        throw new Error('Failed to fetch shopping cart items')
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
    } finally {
      setLoading(false)
    }
  }, []) // Убрали зависимости, так как api уже настроен

  const deleteShoppingCartItem = useCallback(
    async (itemId: number): Promise<CartOperationResult> => {
      if (loading) {
        return { success: false, message: 'Request already in progress' }
      }

      setLoading(true)
      setError(null)

      try {
        const response = await api.delete<ResponseRecord<string>>(`/api/shopping-cart/items/${itemId}`)

        if (response.status === 204) {
          setCartItems(prevItems => prevItems.filter(item => item.id !== itemId))
          return { success: true, message: 'Item deleted successfully' }
        } else {
          throw new Error('Failed to delete shopping cart item')
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred'
        setError(errorMessage)
        return { success: false, message: errorMessage }
      } finally {
        setLoading(false)
      }
    },
    [loading], // Только loading, так как api уже настроен
  )

  const updateShoppingCartItemQuantity = useCallback(
    async (itemId: number, newQuantity: number): Promise<CartOperationResult> => {
      if (loading) {
        return { success: false, message: 'Request already in progress' }
      }

      setLoading(true)
      setError(null)

      try {
        // Оптимистичное обновление локального состояния
        setCartItems(prevItems =>
          prevItems.map(item =>
            item.id === itemId
              ? {
                  ...item,
                  quantity: newQuantity,
                }
              : item,
          ),
        )

        const response = await api.patch<ResponseRecord<string>>(`/api/shopping-cart/items/${itemId}/quantity`, null, {
          params: {
            newQuantity,
          },
        })

        if (response.status === 204) {
          return { success: true, message: 'Quantity updated successfully' }
        } else {
          // Откат локального состояния, если запрос не удался
          setCartItems(prevItems =>
            prevItems.map(item =>
              item.id === itemId
                ? {
                    ...item,
                    quantity: item.quantity,
                  }
                : item,
            ),
          )
          throw new Error('Failed to update shopping cart item quantity')
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred'
        setError(errorMessage)
        return { success: false, message: errorMessage }
      } finally {
        setLoading(false)
      }
    },
    [loading], // Только loading, так как api уже настроен
  )

  useEffect(() => {
    const abortController = new AbortController()

    fetchShoppingCartItems()

    return () => {
      abortController.abort()
    }
  }, [fetchShoppingCartItems])

  return {
    cartItems,
    loading,
    error,
    fetchShoppingCartItems,
    deleteShoppingCartItem,
    updateShoppingCartItemQuantity,
  }
}

export default useShoppingCart
