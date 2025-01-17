import React from 'react'
import {
  PromotionCardContainer,
  InformationContainer,
  PromotionText,
  PromotionLabelContainer,
  PromotionLabelText,
} from './PromotionCard.styles.ts'
import { colors } from '@/consts'
import { MainButton } from '@/components'

interface PromotionCardProps {
  promotionText: string
  imageUrl: string
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotionText, imageUrl }): React.ReactElement => {
  return (
    <PromotionCardContainer imageUrl={imageUrl}>
      <PromotionLabelContainer>
        <PromotionLabelText>Promotion</PromotionLabelText>
      </PromotionLabelContainer>
      <InformationContainer>
        <PromotionText>{promotionText}</PromotionText>
        <MainButton backgroundColor={colors.WHITE} textColor={colors.BLACK}>
          Show now
        </MainButton>
      </InformationContainer>
    </PromotionCardContainer>
  )
}

export default PromotionCard
