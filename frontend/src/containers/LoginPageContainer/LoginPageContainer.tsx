import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainButton } from '@/components'
import routePath from '@/consts/routePath'
import {
  CustomInput,
  ForgetYourPasswordLink,
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
} from './LoginPageContainer.styled'
import { colors } from '@/consts'
import { useAuth } from '@/context/AuthContext/AuthContext.tsx'

const LoginPageContainer: React.FC = (): React.ReactElement => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleRegisterClick = () => {
    navigate(routePath.REGISTRATION)
  }

  const handleLogin = async () => {
    setError(null)

    try {
      await login({ email, password })
      navigate('/')
    } catch (err) {
      setError('Invalid email or password. Please try again.')
      console.error('Login error:', err)
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
          <LeftContainerTitle>Login to your account</LeftContainerTitle>
          <MainButton
            backgroundColor={colors.WHITE}
            textColor={colors.BLACK}
            hoverEffect={{
              backgroundColor: colors.LIGHT_GREY_200,
              textColor: colors.BLACK,
            }}
            onClick={handleRegisterClick}
          >
            Don't have an account?
          </MainButton>
        </LeftContainerContent>
      </LeftContainer>
      <RightContainer variants={rightContainerVariants} initial='hidden' animate='visible'>
        <RightContainerContent>
          <RightContainerTitle>Sign in</RightContainerTitle>
          <InputsAndButtonContainer>
            <InputsContainer>
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
              onClick={handleLogin}
            >
              Sign In
            </MainButton>
            <ForgetYourPasswordLink to={routePath.FORGET_PASSWORD}>Forgot your password?</ForgetYourPasswordLink>
          </InputsAndButtonContainer>
        </RightContainerContent>
      </RightContainer>
    </OuterContainer>
  )
}

export default LoginPageContainer
