import React from 'react'
import { MainButton } from '../../components'
import { colors } from '../../consts'
import { ReviewsContainerHeader, ReviewsContainerHeaderContent, ReviewsContainerHeaderTitle, Divider } from './styles'
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

interface IReviewsHeaderProps {
  openReview: () => void
}
export const ReviewsHeader: React.FC<IReviewsHeaderProps> = ({ openReview }) => {
  return (
    <ReviewsContainerHeader variants={headerVariants} initial='hidden' animate='visible'>
      <ReviewsContainerHeaderContent variants={childVariants}>
        <ReviewsContainerHeaderTitle variants={childVariants}>Reviews</ReviewsContainerHeaderTitle>
        <MainButton backgroundColor={colors.LIGHT_GREEN_400} textColor={colors.WHITE} width={22.5} onClick={openReview}>
          Write a review
        </MainButton>
      </ReviewsContainerHeaderContent>
      <Divider variants={childVariants} />
    </ReviewsContainerHeader>
  )
}
