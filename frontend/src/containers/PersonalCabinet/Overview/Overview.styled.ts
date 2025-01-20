import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors, fonts } from '../../../consts'

export const OverviewContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 1rem;
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const OverviewHeader = styled(motion.h1)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 1.875rem;
  font-weight: 500;
  line-height: 2.375rem;
  margin: 0;
`

export const ViewAllButton = styled(motion.button)`
  color: ${colors.LIGHT_GREEN_500};
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.DARK_GREEN_2};
  }
`

export const NoContentText = styled(motion.p)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75rem;
  margin: 0;
`

export const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
}

export const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}
