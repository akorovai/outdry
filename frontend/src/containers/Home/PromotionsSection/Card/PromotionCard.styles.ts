import styled from 'styled-components'
import { colors, fonts } from '../../../../consts'

export const InformationContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 188px;
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

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 10px;
  }
`

export const PromotionCardContainer = styled.div<{ imageUrl: string }>`
  display: flex;
  padding: 40% 20% 40px 20px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
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

  @media (max-width: 768px) {
    padding: 30% 10% 20px 10px;
  }
`

export const PromotionText = styled.span`
  color: ${colors.WHITE};
  font-family: ${fonts.POPPINS};
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    padding: 6px 12px;
  }
`

export const PromotionLabelText = styled.span`
  color: ${colors.WHITE};
  font-family: ${fonts.POPPINS};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`
