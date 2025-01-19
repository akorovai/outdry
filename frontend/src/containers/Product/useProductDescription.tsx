import { useState, useEffect } from 'react'
import axios from 'axios'

import { useAuth } from '@/context/AuthContext/AuthContext.tsx'

import { IProductWithSizeAvailability } from '@/models'

const useProduct = (productId: string) => {
  const [product, setProduct] = useState<IProductWithSizeAvailability | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/${productId}/size-availability`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.status !== 200) {
          throw new Error('Failed to fetch product')
        }
        setProduct(response.data.message)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId, token, BASE_URL])

  return { product, loading, error }
}

export default useProduct
