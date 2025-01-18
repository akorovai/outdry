import styled, { keyframes } from 'styled-components'
import { colors, fonts } from '../../../../consts'
import { motion } from 'framer-motion'

const slideUp = keyframes`
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`

export const SubtotalContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  padding: 24px 36px;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  background: ${colors.LIGHT_GREY_200};
  position: sticky;
  bottom: 0;
`

export const InfoButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`

export const SubtotalSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`

export const SubtotalInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`

export const SubtotalInfoValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`

export const SubtotalText = styled.p`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`

export const SubtotalTextValue = styled.p`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`

export const ViewOrdersLink = styled.p<{ handleLinkClick: () => void }>`
  color: ${colors.BLACK};
  text-align: center;
  font-family: ${fonts.INTER};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  text-transform: uppercase;
  animation: ${slideUp} 0.5s ease-in-out 0.2s;
`
