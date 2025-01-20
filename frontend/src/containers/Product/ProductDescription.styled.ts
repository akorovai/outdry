import styled from 'styled-components'
import { motion } from 'framer-motion' // Import framer-motion
import { colors, fonts } from '../../consts'

export const ProductPageContainer = styled(motion.section)`
  display: flex;
  padding: 50px 100px 100px 100px;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`

// export const ProductImagesContainer = styled(motion.article)`
//   display: flex;
//   width: 830px;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 8px;
// `
export const ProductImagesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const MainImageSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`

export const MainProductImage = styled(motion.figure)<{ imageUrl: string }>`
  height: 600px;
  align-self: stretch;
  background-color: #f0f0f0;
  margin: 0;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`

export const SecondaryImagesSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  margin: 0;
`

export const SecondaryImagesRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`

export const SecondaryImage = styled(motion.figure)<{ imageUrl: string }>`
  display: flex;
  width: 409px;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  margin: 0;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`

export const ProductDetailsContainer = styled(motion.div)`
  display: flex;
  flex-grow: 1;
  padding-top: 29px;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  width: 100%;
`

export const ProductDescriptionContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  align-self: stretch;
`

export const DescriptionTextContainer = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

export const ProductDescriptionText = styled(motion.p)`
  color: ${colors.BLACK};
  align-self: stretch;
  font-family: ${fonts.POPPINS};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

export const ProductDescriptionHeader = styled(motion.header)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`

export const ProductTitle = styled(motion.h1)`
  color: ${colors.BLACK};
  align-self: stretch;
  font-family: ${fonts.INTER};
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: -0.72px;
  margin: 0;
  padding: 0;
`

export const AdditionalProductInfoContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const ProductIDText = styled(motion.p)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`

export const ReviewsCountText = styled(motion.p)`
  color: ${colors.BLACK};
  opacity: 0.7;
  font-family: ${fonts.POPPINS};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 145%;
`

export const ColorAndSizeOptionsContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`

export const ColorOptionsContainer = styled(motion.article)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`

export const ColorOptionsTitle = styled(motion.h2)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  align-self: stretch;
`

export const ColorCirclesContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

export const ColorCircle = styled(motion.div)<{ color: string; isSelected: boolean }>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ color }) => color};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? '2px solid #000' : '2px solid transparent')};
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    border-color: ${({ isSelected }) => (isSelected ? '#000' : '#ccc')};
  }

  &::after {
    content: '${({ isSelected }) => (isSelected ? '✓' : '')}';
    color: #ffffff !important;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    z-index: 2;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }
`

export const SizeOptionsContainer = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`

export const SizeOptionsTitle = styled(motion.h2)`
  color: ${colors.BLACK};
  font-family: ${fonts.INTER};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`

export const SizeOptionsList = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

export const SizeOption = styled(motion.div)<{ isSelected: boolean }>`
  display: flex;
  width: 50px;
  height: 40px;
  padding: 14px 29px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 2px solid ${colors.BLACK};
  background: ${({ isSelected }) => (isSelected ? colors.BLACK : colors.WHITE)};
  cursor: pointer;

  p {
    color: ${({ isSelected }) => (isSelected ? colors.WHITE : colors.BLACK)};
    font-family: ${fonts.POPPINS};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
`

export const PriceAndDiscountContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`

export const DiscountTextContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const DiscountText = styled(motion.p)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  opacity: 45%;
`

export const PriceInfoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const MainPriceText = styled(motion.p)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
`

export const SeparatorPriceSymbol = styled(motion.p)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`

export const DiscountNumber = styled(motion.p)`
  color: ${colors.ORANGE};
  font-family: ${fonts.POPPINS};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: line-through;
  opacity: 0.7;
`

export const ButtonsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

export const AddToWishListContainer = styled(motion.div)<{ isInWishlist: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  svg {
    width: 20px;
    fill: ${({ isInWishlist }) => (isInWishlist ? colors.ERROR : 'none')};
    transition:
      fill 0.2s ease,
      stroke 0.2s ease;
  }

  &:hover svg {
    stroke: ${colors.ERROR};
  }
`

export const AddToWishListText = styled(motion.p)<{ isInWishlist: boolean }>`
  color: ${({ isInWishlist }) => (isInWishlist ? colors.ERROR : colors.ORANGE)};
  font-family: ${fonts.INTER};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  transition: color 0.2s ease;
`

export const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`
