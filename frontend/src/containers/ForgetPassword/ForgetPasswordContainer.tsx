import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MainButton } from '@/components'
import { routePath, colors } from '@/consts'
import {
  OuterContainer,
  LeftContainer,
  LeftContainerContent,
  RightContainer,
  LeftContainerTitle,
  RightContainerTitle,
  RightContainerContent,
  FormContainer,
  InputsAndButtonContainer,
  BackToLoginLink,
  InputsContainer,
  InputContainer,
  CustomInput,
} from './ForgetPassword.styled'

const ForgetPasswordContainer: React.FC = (): React.ReactElement => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleResetPasswordClick = () => {
    console.log('Reset password for:', email)
  }

  const handleBackToLoginClick = () => {
    navigate(routePath.LOGIN)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const leftContainerVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const rightContainerVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <OuterContainer variants={containerVariants} initial='hidden' animate='visible'>
      <LeftContainer variants={leftContainerVariants} initial='hidden' animate='visible'>
        <LeftContainerContent>
          <LeftContainerTitle>Reset your password</LeftContainerTitle>
          <MainButton
            backgroundColor={colors.WHITE}
            textColor={colors.BLACK}
            hoverEffect={{
              backgroundColor: colors.LIGHT_GREY_200,
              textColor: colors.BLACK,
            }}
            onClick={handleBackToLoginClick}
          >
            Back to Login
          </MainButton>
        </LeftContainerContent>
      </LeftContainer>
      <RightContainer variants={rightContainerVariants} initial='hidden' animate='visible'>
        <RightContainerContent>
          <RightContainerTitle>Forgot Password?</RightContainerTitle>
          <FormContainer>
            <InputsAndButtonContainer>
              <InputsContainer>
                <InputContainer variants={inputVariants} initial='hidden' animate='visible'>
                  <CustomInput type='email' placeholder='Enter your email' value={email} onChange={handleEmailChange} />
                </InputContainer>
              </InputsContainer>
              <MainButton
                backgroundColor={colors.BLACK}
                textColor={colors.WHITE}
                hoverEffect={{
                  backgroundColor: colors.LIGHT_GREY_600,
                  textColor: colors.WHITE,
                }}
                onClick={handleResetPasswordClick}
              >
                Reset Password
              </MainButton>
            </InputsAndButtonContainer>
            <BackToLoginLink to={routePath.LOGIN}>Remember your password? Log in</BackToLoginLink>
          </FormContainer>
        </RightContainerContent>
      </RightContainer>
    </OuterContainer>
  )
}

export default ForgetPasswordContainer
