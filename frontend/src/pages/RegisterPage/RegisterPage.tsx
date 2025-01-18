import React from 'react'
import { Footer, Navbar } from '@/components'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { RegisterPageContainer } from '../../containers'
export const PageContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
`
const RegisterPage: React.FC = (): React.ReactElement => {
  return (
    <PageContainer>
      <Navbar />
      <RegisterPageContainer />
      <Footer />
    </PageContainer>
  )
}

export default RegisterPage
