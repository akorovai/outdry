import styled, { keyframes } from 'styled-components'
import { colors, fonts } from '@/consts'
import { motion } from 'framer-motion'

const scaleUp = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`

export const CartItemContainer = styled(motion.div)`
  display: flex;
  padding: 0 36px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`
export const CartItemContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  justify-content: space-between;
  width: 100%;
  align-self: stretch;
`

export const LeftCartItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`

export const ImageContainer = styled.div<{ imageUrl: string }>`
  width: 120px;
  height: 160px;
  background-image: url(${props => props.imageUrl}), url('https://via.placeholder.com/120x160');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
`

export const LCIInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`

export const LCIInfoTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`

export const IDText = styled.p`
  color: ${colors.LIGHT_GREEN_500};
  font-family: ${fonts.POPPINS};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  align-self: stretch;
`

export const ProductName = styled.p`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`

export const LCIInfoBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`

export const CategoryValueContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const CategoryText = styled.p`
  color: rgba(152, 162, 179, 0.7);
  font-family: ${fonts.POPPINS};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`

export const ValueText = styled.p`
  color: ${colors.LIGHT_GREY_400};
  font-family: ${fonts.POPPINS};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`

export const RightCartItemContainer = styled.div`
  display: flex;
  width: 230px;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const RemoveText = styled.p`
  text-align: right;
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  align-self: stretch;
  cursor: pointer;

  &:hover {
    color: ${colors.ERROR};
  }
`

export const PriceAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const PriceDiscountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1 0 0;
  align-self: stretch;
`

export const PriceText = styled.div`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`

export const DiscountText = styled.div`
  color: ${colors.ORANGE};
  leading-trim: both;
  text-edge: cap;
  font-family: ${fonts.POPPINS};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: line-through;
`

export const AmountContainer = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 16px;
  border: 1px solid ${colors.LIGHT_GREY_300};
  background: ${colors.WHITE};
  animation: ${scaleUp} 0.3s ease-in-out 0.2s;
`

export const AmountText = styled.p`
  color: ${colors.BLACK};
  text-align: center;
  font-family: ${fonts.POPPINS};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

export const IconButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Divider = styled.div`
  height: 2px;
  align-self: stretch;
  background-color: ${colors.LIGHT_GREY_300};
  border-radius: 2px;
`
