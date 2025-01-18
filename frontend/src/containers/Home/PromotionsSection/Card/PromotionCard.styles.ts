import styled from 'styled-components'
import { colors, fonts } from '../../../../consts'

export const InformationContainer = styled.div`
  display: flex;
  width: 188px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border-radius: 4px;
  margin-left: 20px;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  z-index: 2;
`

export const PromotionCardContainer = styled.div<{ imageUrl: string }>`
  display: flex;
  padding: 500px 360px 40px 20px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  &:hover ${InformationContainer} {
    opacity: 1;
    transform: translateY(0);
  }
`

export const PromotionText = styled.span`
  color: ${colors.WHITE};
  font-family: ${fonts.POPPINS};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
`

export const PromotionLabelContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${colors.LIGHT_GREEN_500};
  padding: 8px 16px;
  border-radius: 4px;
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  z-index: 2;

  ${PromotionCardContainer}:hover & {
    opacity: 0;
    transform: translateY(-20px);
  }
`

export const PromotionLabelText = styled.span`
  color: ${colors.WHITE}; // Белый текст
  font-family: ${fonts.POPPINS};
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`
