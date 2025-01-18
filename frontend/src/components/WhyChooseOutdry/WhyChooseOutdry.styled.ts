import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors, fonts } from '../../consts'
import mainImage from '/src/assets/images/WhyChooseOutdry_1.png'

export const SectionComponent = styled(motion.div)`
  display: flex;
  width: 100%;
  min-height: 1252px;
  padding: 100px 100px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
  }

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`

export const TextContainerComponent = styled(motion.div)`
  display: flex;
  max-width: 586px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`

export const MainTitleText = styled(motion.h2)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.72px;
  display: inline;
`

export const ColorfulTitleText = styled(motion.span)`
  color: ${colors.LIGHT_GREEN_500};
  font-family: ${fonts.POPPINS};
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.72px;
  display: inline;
`

export const ListContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
  align-self: stretch;
`

export const TextElementBlock = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const NumberElement = styled(motion.p)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`

export const TextElement = styled(motion.span)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  flex: 1 0 0;
`

export const PicturesContainer = styled(motion.div)`
  display: flex;
  max-width: 830px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`

export const MainPictureContainer = styled(motion.div)`
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-image: url(${mainImage});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 300px;
  }
`

export const SecondaryPicturesContaiener = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

interface SecondaryPictureContainerProps {
  image: string
}

export const SecondaryPictureContainer = styled(motion.div)<SecondaryPictureContainerProps>`
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 300px;
  }
`
