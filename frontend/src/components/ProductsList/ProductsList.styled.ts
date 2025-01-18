import styled from 'styled-components'
import { colors, fonts } from '../../consts'

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  align-self: stretch;
`

export const ProductsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const ListNavigationPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const NavbarPanelText = styled.p`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`
