import { useState } from 'react'
import axios from 'axios'
import { IReview } from '../../models/review/IReview.ts'
import { useAuth } from '../../context/AuthContext/AuthContext.tsx'

interface ResponseRecord {
  code: number
  message: IReview[] | string
}

interface AddReviewRequest {
  productId: number
  rating: number
  comment: string
  subject: string
}

const useReviews = (productId: number) => {
  const [reviews, setReviews] = useState<IReview[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { token, BASE_URL } = useAuth()

  const fetchReviews = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.get<ResponseRecord>(`${BASE_URL}/api/reviews/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 200 && Array.isArray(response.data.message)) {
        setReviews(response.data.message)
      } else {
        throw new Error('Failed to fetch reviews')
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

  const addReview = async (reviewData: AddReviewRequest) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post<ResponseRecord>(`${BASE_URL}/api/reviews`, reviewData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 201) {
        await fetchReviews()
        return { success: true, message: 'Review added successfully!' }
      } else {
        throw new Error('Failed to add review')
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
      return { success: false, message: error || 'Failed to add review' }
    } finally {
      setLoading(false)
    }
  }

  return { reviews, loading, error, fetchReviews, addReview }
}

export default useReviews
