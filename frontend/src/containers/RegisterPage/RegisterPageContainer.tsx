import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainButton from '@/components/Button/MainButton.tsx'
import {
  CustomInput,
  InputContainer,
  InputsAndButtonContainer,
  InputsContainer,
  LeftContainer,
  LeftContainerContent,
  LeftContainerTitle,
  OuterContainer,
  RightContainer,
  RightContainerContent,
  RightContainerTitle,
} from './RegisterPageContainer.styled'
import { colors } from '../../consts'
import { useAuth } from '../../context/AuthContext/AuthContext.tsx'

const RegisterPageContainer: React.FC = (): React.ReactElement => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const { register } = useAuth()

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLoginRedirect = () => {
    navigate('/login')
  }

  const handleRegister = async () => {
    setError(null)

    try {
      await register({ username, email, password })
      navigate('/login')
    } catch (err) {
      setError('Registration failed. Please try again.')
      console.error('Registration error:', err)
    }
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
          <LeftContainerTitle>Registration</LeftContainerTitle>
          <InputsAndButtonContainer>
            <InputsContainer>
              <InputContainer variants={inputVariants} initial='hidden' animate='visible'>
                <CustomInput
                  type='text'
                  placeholder='Username'
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </InputContainer>
              <InputContainer variants={inputVariants} initial='hidden' animate='visible'>
                <CustomInput type='email' placeholder='Email' value={email} onChange={handleEmailChange} required />
              </InputContainer>
              <InputContainer variants={inputVariants} initial='hidden' animate='visible'>
                <CustomInput
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </InputContainer>
            </InputsContainer>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            <MainButton
              backgroundColor={colors.BLACK}
              textColor={colors.WHITE}
              hoverEffect={{
                backgroundColor: colors.LIGHT_GREY_600,
                textColor: colors.WHITE,
              }}
              onClick={handleRegister}
            >
              Sign Up
            </MainButton>
          </InputsAndButtonContainer>
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
            onClick={handleLoginRedirect}
          >
            Already have an account?
          </MainButton>
        </RightContainerContent>
      </RightContainer>
    </OuterContainer>
  )
}

export default RegisterPageContainer
