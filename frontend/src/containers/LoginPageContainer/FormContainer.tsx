import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { MainButton } from '@/components'

import { Link } from 'react-router-dom'
import routePath from '@/consts/routePath'
import { colors, fonts } from '@/consts'
import { InputField } from '@/components'

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

const ForgetYourPasswordLink = styled(Link)`
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

interface FormContainerProps {
  email: string
  password: string
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  variants?: Variants
}

const FormContainer: React.FC<FormContainerProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  variants,
}) => {
  return (
    <FormContainerWrapper variants={variants} initial='hidden' animate='visible'>
      <InputsAndButtonContainer>
        <InputField type='email' placeholder='Email' value={email} onChange={onEmailChange} variants={variants} />
        <InputField
          type='password'
          placeholder='Password'
          value={password}
          onChange={onPasswordChange}
          variants={variants}
        />
        <MainButton
          backgroundColor={colors.BLACK}
          textColor={colors.WHITE}
          hoverEffect={{
            backgroundColor: colors.LIGHT_GREY_600,
            textColor: colors.WHITE,
          }}
        >
          Sign In
        </MainButton>
      </InputsAndButtonContainer>
      <ForgetYourPasswordLink to={routePath.FORGET_PASSWORD}>Forgot your password?</ForgetYourPasswordLink>
    </FormContainerWrapper>
  )
}

export default FormContainer
