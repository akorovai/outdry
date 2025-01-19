import { useEffect, useState } from 'react'
import axios from 'axios'
import { OrderResponse } from '@/models'
import { useAuth } from '@/context/AuthContext/AuthContext.tsx'

const useOrders = () => {
  const [orders, setOrders] = useState<OrderResponse[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { token } = useAuth()

  useEffect(() => {
    const fetchOrders = async () => {
      if (!token) return

      try {
        const response = await axios.get(
          'https://outdry-backend.orangeforest-84325f96.polandcentral.azurecontainerapps.io/api/orders',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )

        if (response.status === 200) {
          setOrders(response.data.message)
        } else {
          throw new Error('Failed to fetch orders')
        }
      } catch (err) {
        console.error('Error fetching orders:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [token]) // Добавляем token в зависимости useEffect

  return { orders, loading }
}

export default useOrders
