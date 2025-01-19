import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { IProduct } from '@/models'
import { useAuth } from '@/context/AuthContext/AuthContext'

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

interface ApiResponse {
  success: boolean
  message: string
}

const useWishList = () => {
  const [wishListProducts, setWishListProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  const handleApiCall = useCallback(
    async <T,>(apiCall: () => Promise<T>): Promise<T & { success: boolean; message: string }> => {
      setLoading(true)
      setError(null)

      try {
        const result = await apiCall()
        return { ...result, success: true, message: 'Success' }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred'
        setError(errorMessage)
        return { success: false, message: errorMessage } as T & { success: boolean; message: string }
      } finally {
        setLoading(false)
      }
    },
    [],
  )

  const fetchWishListProducts = useCallback(
    async (filters: WishListFilters = {}): Promise<ApiResponse> => {
      return handleApiCall(async () => {
        const response = await axios.get<ResponseRecord>(`${BASE_URL}/api/wishlist/products`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: filters,
        })

        if (response.status === 200 && Array.isArray(response.data.message)) {
          setWishListProducts(response.data.message)
          return { success: true, message: 'Products fetched successfully' }
        } else {
          throw new Error('Failed to fetch wishlist products')
        }
      })
    },
    [BASE_URL, token, handleApiCall],
  )

  const addToWishList = useCallback(
    async (productId: number): Promise<ApiResponse> => {
      return handleApiCall(async () => {
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
          await fetchWishListProducts()
          return { success: true, message: response.data.message as string }
        } else {
          throw new Error('Failed to add product to wishlist')
        }
      })
    },
    [BASE_URL, token, fetchWishListProducts, handleApiCall],
  )

  const deleteWishListItem = useCallback(
    async (productId: number): Promise<ApiResponse> => {
      return handleApiCall(async () => {
        const response = await axios.delete<ResponseRecord>(`${BASE_URL}/api/wishlist/delete/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.status === 200) {
          return { success: true, message: response.data.message as string }
        } else {
          throw new Error('Failed to delete product from wishlist')
        }
      })
    },
    [BASE_URL, token, handleApiCall],
  )

  const deleteAllWishListItems = useCallback(async (): Promise<ApiResponse> => {
    return handleApiCall(async () => {
      const response = await axios.delete<ResponseRecord>(`${BASE_URL}/api/wishlist/delete-all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 200) {
        setWishListProducts([])
        return { success: true, message: response.data.message as string }
      } else {
        throw new Error('Failed to delete all products from wishlist')
      }
    })
  }, [BASE_URL, token, handleApiCall])

  useEffect(() => {
    if (token) {
      fetchWishListProducts()
    }
  }, [fetchWishListProducts, token])

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
