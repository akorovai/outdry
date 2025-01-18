import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { IProduct } from '../models'
import { useAuth } from '../context/AuthContext/AuthContext.tsx'

interface ResponseRecord {
  code: number
  message: IProduct[] | string
}

interface WishListFilters {
  type?: string
  gender?: string
  color?: string
  size?: string
  minPrice?: number
  maxPrice?: number
}

const useWishList = () => {
  const [wishListProducts, setWishListProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  const fetchWishListProducts = useCallback(
    async (filters: WishListFilters = {}) => {
      setLoading(true)
      setError(null)

      try {
        const response = await axios.get<ResponseRecord>(`${BASE_URL}/api/wishlist/products`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: filters,
        })

        if (response.status === 200 && Array.isArray(response.data.message)) {
          setWishListProducts(response.data.message)
        } else {
          throw new Error('Failed to fetch wishlist products')
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
    },
    [BASE_URL, token],
  )

  // Add a product to the wishlist
  const addToWishList = useCallback(
    async (productId: number) => {
      setLoading(true)
      setError(null)

      try {
        const response = await axios.post<ResponseRecord>(
          `${BASE_URL}/api/wishlist/add/${productId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )

        if (response.status === 200) {
          // Refresh the wishlist after adding a product
          await fetchWishListProducts()
          return { success: true, message: response.data.message }
        } else {
          throw new Error('Failed to add product to wishlist')
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occurred')
        }
        return { success: false, message: error || 'Failed to add product to wishlist' }
      } finally {
        setLoading(false)
      }
    },
    [BASE_URL, token, fetchWishListProducts, error],
  )

  // Delete a product from the wishlist
  const deleteWishListItem = useCallback(
    async (productId: number) => {
      setLoading(true)
      setError(null)

      try {
        const response = await axios.delete<ResponseRecord>(`${BASE_URL}/api/wishlist/delete/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.status === 200) {
          // Refresh the wishlist after deleting a product
          await fetchWishListProducts()
          return { success: true, message: response.data.message }
        } else {
          throw new Error('Failed to delete product from wishlist')
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occurred')
        }
        return { success: false, message: error || 'Failed to delete product from wishlist' }
      } finally {
        setLoading(false)
      }
    },
    [BASE_URL, token, fetchWishListProducts, error],
  )

  // Delete all products from the wishlist
  const deleteAllWishListItems = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.delete<ResponseRecord>(`${BASE_URL}/api/wishlist/delete-all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 200) {
        // Clear the wishlist after deleting all products
        setWishListProducts([])
        return { success: true, message: response.data.message }
      } else {
        throw new Error('Failed to delete all products from wishlist')
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
      return { success: false, message: error || 'Failed to delete all products from wishlist' }
    } finally {
      setLoading(false)
    }
  }, [BASE_URL, token, error])

  useEffect(() => {
    fetchWishListProducts()
  }, [fetchWishListProducts])

  return {
    wishListProducts,
    loading,
    error,
    fetchWishListProducts,
    addToWishList,
    deleteWishListItem,
    deleteAllWishListItems,
  }
}

export default useWishList
