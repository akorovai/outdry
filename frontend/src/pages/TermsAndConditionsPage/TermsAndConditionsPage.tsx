import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Footer, Navbar } from '@/components'
import { TermsAndConditions } from '@/containers'

export const PageContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
`
const TermsAndConditionsPage: React.FC = (): React.ReactElement => {
  return (
    <PageContainer>
      <Navbar />
      <TermsAndConditions />
      <Footer />
    </PageContainer>
  )
}

export default TermsAndConditionsPage
