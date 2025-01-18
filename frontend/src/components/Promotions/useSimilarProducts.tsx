import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '@/context/AuthContext/AuthContext.tsx'

import { IProduct } from '@/models'

interface ResponseRecord {
  code: number
  message: IProduct[]
}

const useSimilarProducts = (productId: number) => {
  const [similarProducts, setSimilarProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await axios.get<ResponseRecord>(`${BASE_URL}/api/products/${productId}/similar`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.status === 200 && response.data.message) {
          setSimilarProducts(response.data.message)
        } else {
          throw new Error('Failed to fetch similar products')
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
    }

    fetchSimilarProducts()
  }, [productId, token, BASE_URL])

  return { similarProducts, loading, error }
}

export default useSimilarProducts