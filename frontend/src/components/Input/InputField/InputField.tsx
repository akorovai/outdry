import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { colors, fonts } from '../../../consts/index.tsx'
const InputContainer = styled(motion.div)`
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

const CustomInput = styled(motion.input)`
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

interface InputFieldProps {
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  variants?: Variants
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange, variants }) => {
  return (
    <InputContainer variants={variants} initial='hidden' animate='visible'>
      <CustomInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </InputContainer>
  )
}

export default InputField
