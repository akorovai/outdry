import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Footer, Navbar } from '@/components'
import { WarehouseContainer } from '@/containers'

export const PageContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
`

const WarehousePage: React.FC = (): React.ReactElement => {
  return (
    <PageContainer>
      <Navbar />
      <WarehouseContainer />
      <Footer />
    </PageContainer>
  )
}

export default WarehousePage
