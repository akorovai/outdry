import React from 'react'
import { SVG } from '../../components'
import { colors } from '../../consts'
import styled from 'styled-components'
import {
  ReviewSummary,
  SummaryHeader,
  HeaderText,
  Divider,
  StarsContainer,
  StarsSummary,
  StarsNumberContainer,
  MainNumber,
  SecondaryNumberContainer,
  SecondaryNumber,
  StarsSummaryContainer,
  RatingAmountText,
  FillStarsContainer,
  LineProgressesComponent,
  LineProgress,
  StarNumberContainer,
  StarNumberText,
  PercantageValue,
  ProgressBar,
  ProgressBarLayer,
  ProgressBarBackground,
  ProgressBarValue,
} from './styles'

// Styled component for the star wrapper
const StarWrapper = styled.div<{ filled: boolean }>`
  svg {
    fill: ${({ filled }) => (filled ? colors.LIGHT_GREEN_500 : colors.LIGHT_GREEN_100)};
    width: 1.5rem;
  }
`

interface RatingSummaryProps {
  averageRating: number
  totalReviews: number
  starRatings: { stars: number; percentage: number }[]
  percentageOfReviewers: number
}

export const RatingSummary: React.FC<RatingSummaryProps> = ({ averageRating, totalReviews, starRatings }) => {
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      const filled = i <= averageRating
      stars.push(
        <StarWrapper key={i} filled={filled}>
          <SVG.Star />
        </StarWrapper>,
      )
    }
    return stars
  }

  return (
    <ReviewSummary>
      <SummaryHeader>
        <HeaderText>Customer reviews</HeaderText>
        <Divider />
      </SummaryHeader>
      <StarsContainer>
        <StarsSummary>
          <StarsNumberContainer>
            <MainNumber>{averageRating}</MainNumber>
            <SecondaryNumberContainer>
              <SecondaryNumber>/</SecondaryNumber>
              <SecondaryNumber>5</SecondaryNumber>
            </SecondaryNumberContainer>
          </StarsNumberContainer>
          <StarsSummaryContainer>
            <FillStarsContainer>{renderStars()}</FillStarsContainer>
            <RatingAmountText>{totalReviews} reviews</RatingAmountText>
          </StarsSummaryContainer>
        </StarsSummary>
        <LineProgressesComponent>
          {starRatings.map((rating, index) => (
            <LineProgress key={index}>
              <StarNumberContainer>
                <StarNumberText>{rating.stars}</StarNumberText>
                <SVG.Star color={colors.LIGHT_GREEN_500} />
              </StarNumberContainer>
              <ProgressBar>
                <ProgressBarLayer>
                  <ProgressBarBackground>
                    <ProgressBarValue width={rating.percentage} />
                  </ProgressBarBackground>
                </ProgressBarLayer>
              </ProgressBar>
              <PercantageValue>{rating.percentage}%</PercantageValue>
            </LineProgress>
          ))}
        </LineProgressesComponent>
      </StarsContainer>
    </ReviewSummary>
  )
}
