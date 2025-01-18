import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { colors, fonts } from '@/consts'

export const OuterContainer = styled(motion.div)`
  display: flex;
  height: 90vh;
  width: 100%;
`

export const LeftContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.LIGHT_GREEN_500};
`

export const LeftContainerContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.125rem;
`

export const RightContainer = styled(motion.div)`
  flex: 1;
  background-color: ${colors.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LeftContainerTitle = styled(motion.p)`
  color: ${colors.WHITE};
  text-align: center;
  width: 18.75rem;
  font-family: ${fonts.POPPINS};
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.75rem; /* 125% */
  letter-spacing: -0.06rem;
  align-self: stretch;
`

export const RightContainerTitle = styled(motion.p)`
  color: ${colors.BLACK};
  text-align: center;
  font-family: ${fonts.POPPINS};
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.75rem; /* 125% */
  letter-spacing: -0.06rem;
  align-self: stretch;
`

export const RightContainerContent = styled(motion.div)`
  display: flex;
  width: 20rem;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem;
`

export const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`

export const InputsAndButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  align-self: stretch;
`

export const ForgetYourPasswordLink = styled(Link)`
  color: ${colors.LIGHT_GREEN_400};
  text-align: center;
  font-family: ${fonts.POPPINS};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 1.225rem */
  align-self: stretch;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const InputsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`

export const InputContainer = styled(motion.div)`
  display: flex;
  padding: 0.625rem 0.875rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border: 1px solid ${colors.LIGHT_GREY_300};
  background: ${colors.WHITE};
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  border-radius: 0.5rem;
`

export const CustomInput = styled(motion.input)`
  width: 100%;
  border: none;
  outline: none;
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${colors.BLACK};

  &::placeholder {
    color: ${colors.LIGHT_GREY_400};
  }

  &:focus {
    border-color: ${colors.LIGHT_GREEN_400};
  }
`
