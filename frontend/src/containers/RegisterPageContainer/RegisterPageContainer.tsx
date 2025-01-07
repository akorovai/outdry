import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import colors from '@/consts/color'
import fonts from '@/consts/fonts'
import MainButton from '@/components/Button/MainButton.tsx'

const OuterContainer = styled(motion.div)`
  display: flex;
  height: 90vh;
  width: 100%;
`

const LeftContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.WHITE}; // Белый фон для правой части
`

const LeftContainerContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.125rem;
`

const RightContainer = styled(motion.div)`
  flex: 1;

  background: ${colors.LIGHT_GREEN_500};
  display: flex;
  justify-content: center;
  align-items: center;
`

const LeftContainerTitle = styled(motion.p)`
  color: ${colors.BLACK};
  text-align: center;
  width: 18.75rem;
  font-family: ${fonts.POPPINS};
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.75rem;
  letter-spacing: -0.06rem;
  align-self: stretch;
`

const RightContainerTitle = styled(motion.p)`
  color: ${colors.WHITE};
  text-align: center;
  font-family: ${fonts.POPPINS};
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.75rem;
  letter-spacing: -0.06rem;
  align-self: stretch;
`

const RightContainerContent = styled(motion.div)`
  display: flex;
  width: 20rem;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem;
`

const FormContainer = styled(motion.div)`
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

const RegisterPageContainer: React.FC = (): React.ReactElement => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  // Анимации
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
          <LeftContainerTitle>Registration</LeftContainerTitle>
          <FormContainer>
            <InputsAndButtonContainer>
              <InputsContainer>
                <InputContainer variants={inputVariants} initial='hidden' animate='visible'>
                  <CustomInput type='text' placeholder='Username' value={username} onChange={handleUsernameChange} />
                </InputContainer>
                <InputContainer variants={inputVariants} initial='hidden' animate='visible'>
                  <CustomInput type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
                </InputContainer>
                <InputContainer variants={inputVariants} initial='hidden' animate='visible'>
                  <CustomInput
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </InputContainer>
              </InputsContainer>
              <MainButton
                backgroundColor={colors.BLACK}
                textColor={colors.WHITE}
                hoverEffect={{
                  backgroundColor: colors.LIGHT_GREY_600,
                  textColor: colors.WHITE,
                }}
              >
                Sign Up
              </MainButton>
            </InputsAndButtonContainer>
          </FormContainer>
        </LeftContainerContent>
      </LeftContainer>
      <RightContainer variants={rightContainerVariants} initial='hidden' animate='visible'>
        <RightContainerContent>
          <RightContainerTitle>Create your account</RightContainerTitle>
          <MainButton
            backgroundColor={colors.WHITE}
            textColor={colors.BLACK}
            hoverEffect={{
              backgroundColor: colors.LIGHT_GREY_200,
              textColor: colors.BLACK,
            }}
          >
            Already have an account?
          </MainButton>
        </RightContainerContent>
      </RightContainer>
    </OuterContainer>
  )
}

export default RegisterPageContainer