import { useState } from 'react'
import { IProduct } from '@/models'
import { useAuth } from '@/context/AuthContext/AuthContext.tsx'
import { api } from '@/context/AuthContext/AuthContext.tsx'

export const useProductApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { BASE_URL } = useAuth()

  const addProduct = async (product: IProduct): Promise<IProduct> => {
    setLoading(true)
    let productId: number | undefined

    try {
      console.group('ADD PRODUCT DATA:')
      console.log(product)
      console.groupEnd()
      const files = product.links
      product.links = []
      const productResponse = await api.post(`${BASE_URL}/api/products`, {
        ...product,
      })

      console.log(productResponse)

      productId = productResponse.data.message.id
      console.log('Product created with ID:', productId)

      if (!productId) {
        throw new Error('Product ID is undefined after creation.')
      }

      if (files.length > 0) {
        const uploadedLinksResponse = await uploadProductLinks(productId, files as File[])
        console.log('Links uploaded successfully:', uploadedLinksResponse)

        const updatedProductResponse = await api.put(`${BASE_URL}/api/products/${productId}`, {
          ...product,
          links: uploadedLinksResponse,
          id: productId,
        })

        setLoading(false)
        return updatedProductResponse.data.message
      }

      setLoading(false)
      return productResponse.data.message
    } catch (err) {
      setLoading(false)
      setError(err instanceof Error ? err.message : 'An unknown error occurred')

      if (productId) {
        try {
          await api.delete(`${BASE_URL}/api/products/${productId}`)
          console.log('Product deleted successfully due to error.')
        } catch (deleteError) {
          console.error('Error deleting product:', deleteError)
        }
      }

      throw err
    }
  }

  const uploadProductLinks = async (productId: number, links: File[]): Promise<string[]> => {
    const formData = new FormData()

    links.forEach(file => {
      formData.append('files', file)
    })

    try {
      const response = await api.post(`${BASE_URL}/api/products/${productId}/images`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      return response.data.message
    } catch (error) {
      console.error('Error uploading links:', error)
      throw error
    }
  }

  const modifyProduct = async (productId: number, product: IProduct): Promise<IProduct> => {
    setLoading(true)
    try {
      const response = await api.put(`${BASE_URL}/api/products/${productId}`, product)
      setLoading(false)
      return response.data.message
    } catch (err) {
      setLoading(false)
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
      throw err
    }
  }

  const deleteProduct = async (productId: number): Promise<void> => {
    setLoading(true)
    try {
      await api.delete(`${BASE_URL}/api/products/${productId}`)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
      throw err
    }
  }

  const addDiscount = async (productId: number, discount: number): Promise<void> => {
    setLoading(true)
    try {
      await api.post(`${BASE_URL}/api/products/${productId}/discount`, null, {
        params: { discount },
      })
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
      throw err
    }
  }

  const getAllProducts = async (): Promise<IProduct[]> => {
    setLoading(true)
    try {
      const response = await api.get(`${BASE_URL}/api/products/all`)

      const contentType = response.headers['content-type']
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Expected JSON response but received: ' + contentType)
      }

      setLoading(false)
      return response.data.message
    } catch (err) {
      setLoading(false)
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
      throw err
    }
  }

  return {
    loading,
    error,
    addProduct,
    modifyProduct,
    deleteProduct,
    addDiscount,
    getAllProducts,
  }
}
