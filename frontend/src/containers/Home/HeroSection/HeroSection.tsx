import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AlmostContainer,
  AlmostText,
  ContentWrapper,
  DiscountContainer,
  DiscountPercentage,
  DiscountText,
  PromotionText,
  SectionContainer,
  TextWrapper,
} from './HeroSection.styled.ts'
import { MainButton, SVG } from '@/components'

import routePath from '@/consts/routePath.ts'

const HeroSection: FC = () => {
  const navigate = useNavigate()
  const handleStartShoppingButton = () => navigate(routePath.PRODUCTS.replace(':category', 'new-in'))
  return (
    <SectionContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <ContentWrapper
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <TextWrapper>
          <DiscountContainer
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 1 }}
          >
            <DiscountPercentage>20</DiscountPercentage>
            <DiscountText>% Off</DiscountText>
          </DiscountContainer>
          <PromotionText
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Everything
          </PromotionText>
          <AlmostContainer
            initial={{ scale: 0, x: '-50%', y: '-50%', rotate: -7 }}
            animate={{ scale: 1, x: '-50%', y: '-50%', rotate: -7 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 2 }}
          >
            <AlmostText>Almost</AlmostText>
          </AlmostContainer>
          <SVG.Vector color='white' />
        </TextWrapper>
        <MainButton width={50} onClick={handleStartShoppingButton}>
          Start Shopping
        </MainButton>
      </ContentWrapper>
    </SectionContainer>
  )
}

export default HeroSection
