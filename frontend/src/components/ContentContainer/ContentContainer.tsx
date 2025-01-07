import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import colors from '../../consts/color'
import fonts from '../../consts/fonts'
import MainButton from '../../components/Button/MainButton'

const ContentContainerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.125rem;
`

const Title = styled(motion.p)<{ color?: string }>`
  color: ${({ color }) => color || colors.BLACK};
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

interface ContentContainerProps {
  title: string
  buttonText: string
  titleColor?: string
  buttonBackgroundColor?: string
  buttonTextColor?: string
  variants?: Variants
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  title,
  buttonText,
  titleColor,
  buttonBackgroundColor,
  buttonTextColor,
  variants,
}) => {
  return (
    <ContentContainerWrapper variants={variants} initial='hidden' animate='visible'>
      <Title color={titleColor}>{title}</Title>
      <MainButton
        backgroundColor={buttonBackgroundColor || colors.WHITE}
        textColor={buttonTextColor || colors.BLACK}
        hoverEffect={{
          backgroundColor: colors.LIGHT_GREY_200,
          textColor: colors.BLACK,
        }}
      >
        {buttonText}
      </MainButton>
    </ContentContainerWrapper>
  )
}

export default ContentContainer
