import { useEffect, useState } from 'react'
import axios from 'axios'
import { IProduct } from '@/models'
import { useAuth } from '@/context/AuthContext/AuthContext.tsx'

const useDiscountedProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  useEffect(() => {
    const fetchDiscountedProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/discounted`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.status !== 200) {
          throw new Error('Failed to fetch discounted products')
        }

        setProducts(response.data.message)
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

    fetchDiscountedProducts()
  }, [token])

  return { products, loading, error }
}

export default useDiscountedProducts
