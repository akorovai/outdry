import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import colors from '../../consts/color'

const OuterContainer = styled(motion.div)`
  display: flex;
  height: 90vh;
  width: 100%;
`

const LeftContainer = styled(motion.div)<{ backgroundColor?: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.WHITE};
`

const RightContainer = styled(motion.div)<{ backgroundColor?: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.LIGHT_GREEN_500};
`

interface SplitContainerProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  leftBackgroundColor?: string
  rightBackgroundColor?: string
  variants?: Variants
}

const SplitContainer: React.FC<SplitContainerProps> = ({
  leftContent,
  rightContent,
  leftBackgroundColor,
  rightBackgroundColor,
  variants,
}) => {
  return (
    <OuterContainer variants={variants} initial='hidden' animate='visible'>
      <LeftContainer backgroundColor={leftBackgroundColor} variants={variants} initial='hidden' animate='visible'>
        {leftContent}
      </LeftContainer>
      <RightContainer backgroundColor={rightBackgroundColor} variants={variants} initial='hidden' animate='visible'>
        {rightContent}
      </RightContainer>
    </OuterContainer>
  )
}

export default SplitContainer
