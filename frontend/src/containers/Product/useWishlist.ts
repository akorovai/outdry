import { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '@/context/AuthContext/AuthContext.tsx'

const useWishlist = (productId: string) => {
  const { token, BASE_URL } = useAuth()
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const checkWishlistStatus = useCallback(async () => {
    if (!token || !productId || isLoading) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await axios.get(`${BASE_URL}/api/wishlist/check/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status >= 200 && response.status < 300) {
        setIsInWishlist(response.data.isInWishlist)
      } else {
        throw new Error('Failed to check wishlist status')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setIsLoading(false)
    }
  }, [token, BASE_URL, productId, isLoading])

  const addToWishlist = useCallback(async () => {
    if (!token || !productId || isLoading) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await axios.post(
        `${BASE_URL}/api/wishlist/add/${productId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      if (response.status >= 200 && response.status < 300) {
        setIsInWishlist(true)
      } else {
        throw new Error('Failed to add to wishlist')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setIsLoading(false)
    }
  }, [token, BASE_URL, productId, isLoading])

  const removeFromWishlist = useCallback(async () => {
    if (!token || !productId || isLoading) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await axios.delete(`${BASE_URL}/api/wishlist/delete/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status >= 200 && response.status < 300) {
        setIsInWishlist(false)
      } else {
        throw new Error('Failed to remove from wishlist')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setIsLoading(false)
    }
  }, [token, BASE_URL, productId, isLoading])

  useEffect(() => {
    if (token && productId) {
      checkWishlistStatus()
    }
  }, [token, productId]) // Убрали checkWishlistStatus из зависимостей

  return {
    isInWishlist,
    isLoading,
    error,
    addToWishlist,
    removeFromWishlist,
  }
}

export default useWishlist
