import styled, { keyframes } from 'styled-components'
import { colors, fonts } from '../../consts'

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  align-self: stretch;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 30px;
    padding: 10px;
  }
`

export const ProductsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`

export const ListNavigationPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 0;
  }
`

export const NavbarPanelText = styled.p`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
