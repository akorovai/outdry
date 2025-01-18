import { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext/AuthContext'
import { OrderResponse } from '@/models'

const useOrders = () => {
  const { token } = useAuth()
  const [orders, setOrders] = useState<OrderResponse[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          'https://outdry-backend.orangeforest-84325f96.polandcentral.azurecontainerapps.io/api/orders',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )

        if (!response.ok) {
          throw new Error('Failed to fetch orders')
        }

        const data = await response.json()
        setOrders(data.message)
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [token])

  return { orders, loading }
}

export default useOrders
