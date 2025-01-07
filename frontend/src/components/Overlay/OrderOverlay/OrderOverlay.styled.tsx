import styled from 'styled-components'
import { colors, fonts } from '@/consts'

export const OverlayBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const OverlayContainer = styled.div`
  width: 90%;
  max-width: 71rem;
  height: 90%;
  max-height: 37.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.WHITE};
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 95%;
    height: 95%;
  }
`

export const OverlayHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0.75rem 2.25rem;
  justify-content: flex-end;
  align-items: center;
  background: ${colors.LIGHT_GREEN_500};
`

export const CloseButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OverlayContent = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 4rem);
  flex-direction: column;
  align-items: flex-start;
  gap: 1.875rem;
  padding: 2rem;
`

export const OverlayContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const OverlayContentHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const OverlayContentHeaderLeftText = styled.div`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.75rem;
  letter-spacing: -0.045rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

export const OrderItemCounter = styled.div`
  display: flex;
  width: 1.75rem;
  height: 1.75rem;
  padding: 0.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 50%;
  background: ${colors.ERROR};
`

export const OrderItemCountText = styled.p`
  color: ${colors.WHITE};
  text-align: center;
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`

export const ProductList = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 1rem 1.25rem;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.LIGHT_GREY_300};
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.LIGHT_GREEN_500};
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.DARK_GREEN_2};
  }
`

export const OrderProductCard = styled.div`
  display: flex;
  width: 9.9375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  @media (max-width: 768px) {
    width: 48%;
  }
`

export const OrderItemImage = styled.div<{ imageUrl: string }>`
  height: 11.25rem;
  width: 100%;
  border: 1px solid ${colors.LIGHT_GREY_300};
  background: url(${props => props.imageUrl}) lightgray 50% / cover no-repeat;
  border-radius: 0.5rem;
`

export const OrderItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
`

export const OrderItemTitleMainText = styled.h2`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`

export const OrderItemTitleText = styled.h6`
  color: ${colors.LIGHT_GREY_300};
  font-family: ${fonts.POPPINS};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`
