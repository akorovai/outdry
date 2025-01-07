import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Navbar, Footer } from '@/components'
import { LoginPageContainer } from '@/containers'
export const PageContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
`

const LoginPage: React.FC = (): React.ReactElement => {
  return (
    <PageContainer>
      <Navbar />
      <LoginPageContainer />
      <Footer />
    </PageContainer>
  )
}

export default LoginPage
