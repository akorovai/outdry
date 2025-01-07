import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Navbar } from '@/components'
import { CheckoutContainer } from '@/containers'

export const PageContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
`

const CheckoutPage: React.FC = (): React.ReactElement => {
  return (
    <PageContainer>
      <Navbar isMinimal />
      <CheckoutContainer />
    </PageContainer>
  )
}

export default CheckoutPage
