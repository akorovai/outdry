import React, { SetStateAction, useEffect, useState, useMemo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { RatingSummary } from './RatingSummary'
import { ReviewsSection } from './ReviewsSection'
import { ComponentContainer } from './styles'
import useReviews from './useReviews'
import { ReviewFormOverlay } from '@/components/Overlay'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

interface ICustomerReviews {
  setMessagesNumber: React.Dispatch<SetStateAction<number>>
}

const CustomerReviews: React.FC<ICustomerReviews> = ({ setMessagesNumber }) => {
  const { id } = useParams<{ id: string }>()
  const productId = parseInt(id || '0')
  const { reviews, fetchReviews, addReview } = useReviews(productId)
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)

  useEffect(() => {
    const loadReviews = async () => {
      try {
        await fetchReviews()
      } catch (error) {
        console.error('Failed to fetch reviews:', error)
      }
    }
    loadReviews()
  }, [fetchReviews, productId])

  useEffect(() => {
    setMessagesNumber(reviews.length)
  }, [reviews.length, setMessagesNumber])

  const transformedReviews = useMemo(() => {
    return reviews.map(review => ({
      title: review.subject,
      author: `User ${review.userId}`,
      date: new Date(review.createdAt).toLocaleDateString(),
      message: review.comment,
      rating: review.rating,
    }))
  }, [reviews])

  const averageRating = useMemo(() => {
    const totalReviews = transformedReviews.length
    return totalReviews > 0
      ? parseFloat((transformedReviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1))
      : 0
  }, [transformedReviews])

  const starRatings = useMemo(() => {
    const totalReviews = transformedReviews.length
    return [5, 4, 3, 2, 1].map(stars => {
      const count = transformedReviews.filter(review => review.rating === stars).length
      const percentage = totalReviews > 0 ? parseFloat(((count / totalReviews) * 100).toFixed(1)) : 0
      return { stars, percentage }
    })
  }, [transformedReviews])

  const percentageOfReviewers = useMemo(() => {
    return starRatings.find(rating => rating.stars === 5)?.percentage || 0
  }, [starRatings])

  const handleAddReview = useCallback(
    async (reviewData: { rating: number; subject: string; comment: string }) => {
      const result = await addReview({
        productId,
        rating: reviewData.rating,
        comment: reviewData.comment,
        subject: reviewData.subject,
      })

      if (result.success) {
        setIsOverlayVisible(false)
        await fetchReviews()
      } else {
        console.error('Failed to add review:', result.message)
      }
    },
    [addReview, fetchReviews, productId],
  )

  const toggleOverlay = useCallback(() => {
    setIsOverlayVisible(prev => !prev)
  }, [])

  return (
    <ComponentContainer variants={containerVariants} initial='hidden' animate='visible'>
      <RatingSummary
        averageRating={averageRating}
        totalReviews={transformedReviews.length}
        starRatings={starRatings}
        percentageOfReviewers={percentageOfReviewers}
      />

      <ReviewsSection reviews={transformedReviews} openReview={toggleOverlay} />
      {isOverlayVisible && <ReviewFormOverlay onClose={() => setIsOverlayVisible(false)} onSubmit={handleAddReview} />}
    </ComponentContainer>
  )
}

export default CustomerReviews
