import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors, fonts } from '../../consts'

const flexColumn = `
  display: flex;
  flex-direction: column;
`

const flexCenter = `
  display: flex;
  align-items: center;
`

interface TextStyleProps {
  isActive?: boolean
}

const textStyle = (fontSize: string, fontWeight: number, color: string | ((props: TextStyleProps) => string)) => `
  font-family: ${fonts.POPPINS};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  color: ${typeof color === 'function' ? color : color};
`
export const SectionContainer = styled(motion.div)`
  ${flexColumn};
  padding: 3.125rem 5rem 6.25rem 5rem;
  align-items: flex-start;
  gap: 2.25rem;
  width: 100%;
`

export const ProductsWithButtons = styled.div`
  ${flexColumn};
  gap: 2.75rem;
  align-self: stretch;
`

export const ButtonsContainer = styled.div`
  ${flexColumn};
  gap: 1rem;
  align-self: stretch;
`

export const ButtonsTitle = styled.div`
  ${textStyle('1.875rem', 500, colors.BLACK)};
  line-height: 2.375rem;
`

export const ButtonsSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`

export const RightButtonsContainer = styled.div`
  ${flexCenter};
  justify-content: flex-end;
  gap: 0.75rem;
`

export const TableWrapper = styled.div`
  width: 100%;
  max-height: 1000px;
  overflow-y: auto;
  border-radius: 0.5rem;
  border: 1px solid ${colors.LIGHT_GREY_300};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.LIGHT_GREY_200};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.LIGHT_GREY_400};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.LIGHT_GREY_600};
  }
`

export const ProductTableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableHeader = styled.thead`
  background-color: ${colors.LIGHT_GREY_200};
`

export const TableRow = styled(motion.tr)`
  border-bottom: 1px solid ${colors.LIGHT_GREY_300};
`

export const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  ${textStyle('1.125rem', 500, colors.BLACK)};
  vertical-align: middle;
`

export const TableCell = styled.td`
  padding: 1rem;
  text-align: left;
  ${textStyle('1rem', 500, colors.BLACK)};
  vertical-align: middle;
`

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 0.5rem;
  object-fit: cover;
  vertical-align: middle;
`

export const ProductNameSection = styled.div`
  ${flexCenter};
  gap: 1rem;
`

export const SelectedParameter = styled(motion.div)`
  ${flexCenter};
  gap: 0.5rem;
`

export const ParameterText = styled(motion.h3)<{ isActive?: boolean }>`
  ${textStyle('1.125rem', 500, ({ isActive }) => (isActive ? colors.DARK_GREEN_2 : colors.BLACK))};
  line-height: 1.75rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.DARK_GREEN_2};
  }
`

export const SelectedParameterArrows = styled(motion.div)`
  ${flexColumn};
  align-items: flex-start;

  svg:first-child {
    transform: rotate(90deg);
    margin: 0;
  }

  svg:last-child {
    transform: rotate(-90deg);
    margin: 0;
  }
`

export const CheckboxContainer = styled.div`
  cursor: pointer;
  ${flexCenter};
`

export const EditableInput = styled.input`
  ${textStyle('1rem', 500, colors.BLACK)};
  border: 1px solid ${colors.LIGHT_GREY_300};
  border-radius: 0.25rem;
  padding: 0.5rem;
  width: 100%;
  vertical-align: middle;
`

export const DiscountedPrice = styled.span`
  color: ${colors.DARK_GREEN_2};
`

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: ${colors.ERROR};
  margin-left: 0.5rem;
`
