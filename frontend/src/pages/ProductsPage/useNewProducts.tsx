import { useEffect, useState } from 'react'
import axios from 'axios'
import { IProduct } from '@/models'
import { useAuth } from '@/context/AuthContext/AuthContext.tsx'

const useCategoryProducts = (category: string) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  const fetchProducts = async () => {
    let endpoint = ''

    switch (category) {
      case 'new':
        endpoint = `${BASE_URL}/api/products/new`
        break
      case 'men':
        endpoint = `${BASE_URL}/api/products/gender/MEN`
        break
      case 'women':
        endpoint = `${BASE_URL}/api/products/gender/WOMEN`
        break
      case 'kids':
        endpoint = `${BASE_URL}/api/products/gender/KIDS`
        break
      case 'accessories':
        endpoint = `${BASE_URL}/api/products/type/ACCESSORIES`
        break
      case 'sale':
        endpoint = `${BASE_URL}/api/products/discounted`
        break
      default:
        endpoint = `${BASE_URL}/api/products/new`
        break
    }

    try {
      setLoading(true)
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.status !== 200) {
        throw new Error(`Failed to fetch ${category} products`)
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

  useEffect(() => {
    fetchProducts()
  }, [category, token, BASE_URL])

  return { products, loading, error, refetch: fetchProducts }
}

export default useCategoryProducts
