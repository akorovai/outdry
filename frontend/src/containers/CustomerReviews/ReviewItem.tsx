import React from 'react'
import { SVG } from '../../components'
import { colors } from '../../consts'
import styled from 'styled-components'
import {
  ReviewItemContainer,
  ReviewContainerHeader,
  RCStarsContainer,
  RCHeaderContent,
  ReviewTitleContainer,
  ReviewTitle,
  ReviewAuthor,
  RCDateText,
  ReviewMessage,
} from './styles'

const StarWrapper = styled.div<{ filled: boolean }>`
  svg {
    fill: ${({ filled }) => (filled ? colors.LIGHT_GREEN_500 : colors.LIGHT_GREEN_100)};
    width: 0.75rem;
  }
`

interface ReviewItemProps {
  title: string
  author: string
  date: string
  message: string
  rating: number
}

export const ReviewItem: React.FC<ReviewItemProps> = ({ title, author, date, message, rating }) => {
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating
      stars.push(
        <StarWrapper key={i} filled={filled}>
          <SVG.Star />
        </StarWrapper>,
      )
    }
    return stars
  }

  return (
    <ReviewItemContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)' }}
      whileTap={{ scale: 0.98 }}
    >
      <ReviewContainerHeader>
        <RCStarsContainer>{renderStars()}</RCStarsContainer>
        <RCHeaderContent>
          <ReviewTitleContainer>
            <ReviewTitle>{title}</ReviewTitle>
            <ReviewAuthor>{author}</ReviewAuthor>
          </ReviewTitleContainer>
          <RCDateText>{date}</RCDateText>
        </RCHeaderContent>
      </ReviewContainerHeader>
      <ReviewMessage>{message}</ReviewMessage>
    </ReviewItemContainer>
  )
}
