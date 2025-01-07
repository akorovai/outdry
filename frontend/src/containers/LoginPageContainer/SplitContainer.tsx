import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { colors } from '@/consts'

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
  background: ${colors.LIGHT_GREEN_500};
`

const RightContainer = styled(motion.div)`
  flex: 1;
  background-color: ${colors.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`

interface SplitContainerProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  variants?: Variants
}

const SplitContainer: React.FC<SplitContainerProps> = ({ leftContent, rightContent, variants }) => {
  return (
    <OuterContainer variants={variants} initial='hidden' animate='visible'>
      <LeftContainer variants={variants} initial='hidden' animate='visible'>
        {leftContent}
      </LeftContainer>
      <RightContainer variants={variants} initial='hidden' animate='visible'>
        {rightContent}
      </RightContainer>
    </OuterContainer>
  )
}

export default SplitContainer
