import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors, fonts } from '@/consts'

const BaseText = styled.span`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.72px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
  }
`

export const SectionContainer = styled(motion.div)`
  display: flex;
  padding: 40px 100px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  background: ${colors.BRAND_LIGHT_GREEN_25};

  @media (max-width: 1024px) {
    padding: 40px 60px;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
  }
`

export const SectionHeading = styled(BaseText)`
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

export const BrandName = styled(BaseText)`
  color: ${colors.LIGHT_GREEN_500};
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

export const CardsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  justify-content: space-between;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`

export const TitleContainer = styled(motion.div)`
  display: flex;
  align-items: baseline;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`
