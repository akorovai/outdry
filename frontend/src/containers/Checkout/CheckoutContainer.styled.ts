import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { colors, fonts } from '@/consts'

const flexColumn = css`
  display: flex;
  flex-direction: column;
`

const flexRow = css`
  display: flex;
  flex-direction: row;
`

const textStyle = (color: string, fontSize: string, fontWeight: string, lineHeight: string) => css`
  color: ${color};
  font-family: ${fonts.POPPINS};
  font-size: ${fontSize};
  font-style: normal;
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
`

export const WrapperContainer = styled(motion.div)`
  ${flexRow};
  width: 100%;
  height: 100%;
  align-items: flex-start;
`

export const RightContainer = styled(motion.div)`
  ${flexColumn};
  padding: 3.125rem 14.6875rem 20.875rem 2.25rem;
  align-items: center;
  background: ${colors.LIGHT_GREY_300};
  height: 100vh;
`

export const RightContainerContent = styled(motion.div)`
  ${flexColumn};
  width: 26.8125rem;
  gap: 3.125rem;
`

export const HassleFreeContainer = styled(motion.div)`
  ${flexColumn};
  width: 21.6875rem;
  gap: 1rem;
`

export const HassleFreeContainerContent = styled(motion.div)`
  ${textStyle(colors.BLACK, '0.75rem', '400', '1.125rem')};
  align-self: stretch;
`

export const HassleFreeHeader = styled(motion.div)`
  ${flexRow};
  align-items: center;
  gap: 0.5rem;
`

export const HFHText = styled(motion.p)`
  ${textStyle(colors.BLACK, '1.125rem', '400', '1.75rem')};
`

export const ProductsContainer = styled(motion.div)`
  ${flexColumn};
  gap: 1rem;
  align-self: stretch;
`

export const ProductItemsList = styled(motion.div)`
  ${flexColumn};
  gap: 1rem;
  align-self: stretch;
`

export const ProductItem = styled(motion.div)`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const ProductItemLeft = styled(motion.div)`
  ${flexRow};
  align-items: center;
  gap: 1.25rem;
`

export const ProductImageContainer = styled(motion.div)`
  ${flexColumn};
  width: 5rem;
  height: 6.875rem;
  justify-content: center;
  align-items: center;
`

export const ProductImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`

export const ProductInfoContainer = styled(motion.div)`
  ${flexColumn};
  width: 13.25rem;
  gap: 0.25rem;
`

export const ProductInfoTitle = styled(motion.h1)`
  ${textStyle(colors.BLACK, '0.875rem', '400', '140%')};
`

export const ProductInfoText = styled(motion.p)`
  ${textStyle(colors.LIGHT_GREY_600, '0.625rem', '400', '1.125rem')};
  align-self: stretch;
`

export const ProductItemRight = styled(motion.div)`
  ${flexRow};
  align-items: center;
  gap: 1.25rem;
`

export const PriceText = styled(motion.h3)`
  ${textStyle(colors.BLACK, '0.875rem', '500', '1.25rem')};
`

export const AmountBox = styled(motion.div)`
  ${flexRow};
  width: 1.875rem;
  height: 1.875rem;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${colors.LIGHT_GREY_300};
  background: #fff;
`

export const AmountText = styled(motion.p)`
  ${textStyle(colors.BLACK, '1rem', '400', '1.5rem')};
  text-align: center;
`

export const SubtotalContainer = styled(motion.div)`
  ${flexColumn};
  align-items: flex-end;
  gap: 0.75rem;
`

export const ShippingTypeText = styled(motion.p)`
  ${textStyle(colors.BLACK, '0.75rem', '400', '1.125rem')};
  text-align: right;
`

export const PricesContainer = styled(motion.div)`
  ${flexColumn};
  width: 26.75rem;
  gap: 0.375rem;
`

export const SubtotalLine = styled(motion.div)`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const ShippingLine = styled(motion.div)`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const PriceTypeText = styled(motion.h1)`
  ${textStyle(colors.BLACK, '0.75rem', '400', '1.125rem')};
`

export const PriceTextValue = styled(motion.h1)`
  ${textStyle(colors.BLACK, '1rem', '500', '1.5rem')};
`

export const ShippingPriceText = styled(motion.h4)`
  ${textStyle(colors.BLACK, '0.75rem', '400', '1.125rem')};
`

export const CheckoutLeftContainer = styled(motion.div)`
  ${flexColumn};
  padding: 3.125rem 4.8125rem 3.125rem 5rem;
  justify-content: center;
  align-items: center;
  background-color: ${colors.WHITE};
  width: 100%;
`

export const CheckoutLeftContainerContent = styled(motion.div)`
  ${flexColumn};
  width: 46.4375rem;
  align-items: flex-start;
  gap: 2rem;
`

export const ContinueToPaymentContainer = styled(motion.div)`
  ${flexRow};
  align-items: center;
  gap: 7.3125rem;
  align-self: stretch;
  color: ${colors.WHITE};
`

export const ContinueToPaymentText = styled(motion.p)`
  ${textStyle('rgba(0, 0, 0, 0.7)', '0.75rem', '400', '1.125rem')};
`

export const FormContainer = styled(motion.div)`
  ${flexColumn};
  align-items: flex-start;
  gap: 1.75rem;
  align-self: stretch;
`

export const FCHeader = styled(motion.header)`
  ${flexColumn};
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`

export const FCTitle = styled(motion.h1)`
  ${textStyle(colors.BLACK, '3.375rem', '500', 'normal')};
  align-self: stretch;
`

export const FirstStepContainer = styled(motion.div)`
  ${flexColumn};
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`

export const FSFormContainer = styled(motion.div)`
  ${flexColumn};
  width: 20rem;
  align-items: flex-start;
  gap: 1.25rem;
`

export const FSFCTitle = styled(motion.h2)`
  ${textStyle(colors.BLACK, '1.25rem', '400', '1.875rem')};
`

export const SecondStepContainer = styled(motion.div)`
  ${flexColumn};
  width: 20rem;
  align-items: flex-start;
  gap: 1.25rem;
`

export const StepsContainer = styled(motion.div)`
  ${flexColumn};
  align-items: flex-start;
  gap: 1.75rem;
  align-self: stretch;
`

export const SecondStapWithShippingMethodContainer = styled(motion.div)`
  ${flexRow};
  align-items: flex-start;
  gap: 1.5rem;
  align-self: stretch;
`

export const ShippingContainer = styled(motion.div)`
  ${flexColumn};
  width: 24.9375rem;
  padding-top: 3.0625rem;
  align-items: flex-start;
  gap: 1.25rem;
`

export const ShippingTitle = styled(motion.h3)`
  ${textStyle(colors.BLACK, '1.125rem', '400', '1.75rem')};
`

export const ShippingDotListContainer = styled(motion.div)`
  ${flexColumn};
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`

export const ShippingElement = styled(motion.div)<{ isSelected?: boolean }>`
  ${flexRow};
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  padding: 0.75rem;
  border: ${({ isSelected }) => (isSelected ? `2px` : `1px`)} solid
    ${({ isSelected }) => (isSelected ? colors.LIGHT_GREEN_500 : colors.LIGHT_GREY_400)};
  border-radius: 0.5rem;
  background: ${colors.WHITE};
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${colors.LIGHT_GREEN_500};
  }
`

export const SECText = styled(motion.p)`
  ${textStyle(colors.BLACK, '1rem', '400', '1.5rem')};
`

export const SECInfo = styled(motion.div)`
  ${flexColumn};
  align-items: flex-start;
  flex: 1 0 0;
`

export const SECInfoTitle = styled(motion.span)`
  ${textStyle(colors.BLACK, '1rem', '400', '1.5rem')};
  align-self: stretch;
`

export const SECInfoTime = styled(motion.span)`
  ${textStyle(colors.LIGHT_GREY_400, '0.75rem', '400', '1.125rem')};
  align-self: stretch;
`

export const CompleteSecondStepAndNewThirdSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.8125rem;
  align-self: stretch;
`

export const CSSANTSContent = styled(motion.section)`
  display: flex;
  align-items: center;
  gap: 5.125rem;
  align-self: stretch;
`

export const SecondStepsResults = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

  h1 {
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 145%;
    align-self: stretch;
  }

  h3 {
    width: 31.75rem;
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }
`

export const ThirdStepContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
`

export const FinalContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100vh; /* Занимает всю высоту экрана */
  padding: 3.125rem 5rem;
  align-items: center; /* Центрирование по вертикали */
  justify-content: center; /* Центрирование по горизонтали */
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    height: auto; /* На мобильных устройствах высота автоматическая */
  }
`

export const ImageContainer = styled(motion.div)<{ path: string }>`
  display: flex;
  width: 50%; /* Увеличиваем ширину изображения */
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;

  .image {
    width: 100%;
    height: 40rem;
    background: url(${({ path }) => path}) lightgray 50% / cover no-repeat;
    border-radius: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;

    .image {
      height: 20rem;
    }
  }
`

export const FinalContainerContent = styled(motion.div)`
  display: flex;
  width: 50%; /* Увеличиваем ширину контента */
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`

export const ThankYouText = styled(motion.p)`
  color: ${colors.DARK_GREEN_2};
  font-family: ${fonts.INTER};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`

export const FCCMainSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.125rem;
  align-self: stretch;

  @media (max-width: 768px) {
    align-items: center;
    gap: 2rem;
  }
`

export const FCCTitle = styled(motion.span)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: -0.06rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`
