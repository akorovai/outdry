import { useEffect, useState } from 'react'
import axios from 'axios'
import { IProduct } from '../models'
import { useAuth } from '../context/AuthContext/AuthContext.tsx'

const useNewProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/new`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.status !== 200) {
          throw new Error('Failed to fetch new products')
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

    fetchNewProducts()
  }, [token, BASE_URL])

  return { products, loading, error }
}

const useMenProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/gender/MEN`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.status !== 200) {
          throw new Error('Failed to fetch men products')
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

    fetchMenProducts()
  }, [token, BASE_URL])

  return { products, loading, error }
}

const useWomenProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  useEffect(() => {
    const fetchWomenProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/gender/WOMEN`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.status !== 200) {
          throw new Error('Failed to fetch women products')
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

    fetchWomenProducts()
  }, [token, BASE_URL])

  return { products, loading, error }
}

const useKidsProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  useEffect(() => {
    const fetchKidsProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/gender/KIDS`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.status !== 200) {
          throw new Error('Failed to fetch kids products')
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

    fetchKidsProducts()
  }, [token, BASE_URL])

  return { products, loading, error }
}

const useAccessoriesProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  useEffect(() => {
    const fetchAccessoriesProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/type/ACCESSORIES`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.status !== 200) {
          throw new Error('Failed to fetch accessories products')
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

    fetchAccessoriesProducts()
  }, [token, BASE_URL])

  return { products, loading, error }
}

const useSaleProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  useEffect(() => {
    const fetchSaleProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/discounted`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.status !== 200) {
          throw new Error('Failed to fetch sale products')
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

    fetchSaleProducts()
  }, [token, BASE_URL])

  return { products, loading, error }
}

export { useNewProducts, useMenProducts, useWomenProducts, useKidsProducts, useAccessoriesProducts, useSaleProducts }
