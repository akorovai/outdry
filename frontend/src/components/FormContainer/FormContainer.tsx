import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'

import colors from '../../consts/color'
import fonts from '../../consts/fonts'
import MainButton from '../../components/Button/MainButton'

const FormContainerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`

const InputsAndButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  align-self: stretch;
`

const InputsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`

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

interface FormContainerProps {
  inputs: {
    type: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }[]
  buttonText: string
  variants?: Variants
}

const FormContainer: React.FC<FormContainerProps> = ({ inputs, buttonText, variants }) => {
  return (
    <FormContainerWrapper variants={variants} initial='hidden' animate='visible'>
      <InputsAndButtonContainer>
        <InputsContainer>
          {inputs.map((input, index) => (
            <InputContainer key={index} variants={variants} initial='hidden' animate='visible'>
              <CustomInput
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onChange={input.onChange}
              />
            </InputContainer>
          ))}
        </InputsContainer>
        <MainButton
          backgroundColor={colors.BLACK}
          textColor={colors.WHITE}
          hoverEffect={{
            backgroundColor: colors.LIGHT_GREY_600,
            textColor: colors.WHITE,
          }}
        >
          {buttonText}
        </MainButton>
      </InputsAndButtonContainer>
    </FormContainerWrapper>
  )
}

export default FormContainer
