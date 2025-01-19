import { useState, useEffect } from 'react'
import axios from 'axios'
import { IAddressInfo } from '@/models'
import { useAuth } from '@/context/AuthContext/AuthContext.tsx'

const useAddresses = (token: string | null) => {
  const [addresses, setAddresses] = useState<IAddressInfo[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()
  const API_BASE_URL = `https://outdry-backend.orangeforest-84325f96.polandcentral.azurecontainerapps.io`

  const fetchAddresses = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get(`${API_BASE_URL}/api/addresses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setAddresses(response.data.message)
    } catch (err) {
      setError('Failed to fetch addresses')
      console.error('Error fetching addresses:', err)
    } finally {
      setLoading(false)
    }
  }

  const addAddress = async (address: IAddressInfo) => {
    try {
      const addressWithoutId = {
        fullName: address.fullName,
        state: address.state,
        street: address.street,
        apartment: address.apartment,
        postalCode: address.postalCode,
        city: address.city,
        phone: address.phone,
        userId: parseInt(user?.userId || '0', 10),
      }

      const response = await axios.post(`${API_BASE_URL}/api/addresses`, addressWithoutId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      // Update the local state with the new address (including the generated `id`)
      setAddresses([response.data.message, ...addresses])
    } catch (err) {
      console.error('Error adding address:', err)
      throw new Error('Failed to add address')
    }
  }

  const editAddress = async (addressId: number, updatedAddress: IAddressInfo) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/addresses/${addressId}`, updatedAddress, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setAddresses(addresses.map(addr => (addr.id === addressId ? response.data.message : addr)))
    } catch (err) {
      console.error('Error editing address:', err)
      throw new Error('Failed to edit address')
    }
  }

  const deleteAddress = async (addressId: number) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/addresses/${addressId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setAddresses(addresses.filter(addr => addr.id !== addressId))
    } catch (err) {
      console.error('Error deleting address:', err)
      throw new Error('Failed to delete address')
    }
  }

  useEffect(() => {
    if (token) {
      fetchAddresses()
    }
  }, [token])

  return {
    addresses,
    loading,
    error,
    addAddress,
    editAddress,
    deleteAddress,
  }
}

export default useAddresses
