import styled, { keyframes } from 'styled-components'
import { colors, fonts } from '@/consts'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

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

export const EmptyCartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  animation: ${fadeIn} 0.5s ease-in-out;
`

export const EmptyCartMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  animation: ${slideUp} 0.5s ease-in-out;
`

export const EmptyCartText = styled.p`
  color: ${colors.BLACK};
  text-align: center;
  font-family: ${fonts.INTER};
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`

export const AccountPrompt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  animation: ${slideUp} 0.5s ease-in-out 0.2s; // Delay the animation
`

export const AccountPromptTitle = styled.div`
  color: ${colors.BLACK};
  text-align: center;
  font-family: ${fonts.INTER};
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const LoginPrompt = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const LoginLink = styled.p`
  color: ${colors.BLACK};
  text-align: center;
  font-family: ${fonts.POPPINS};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-decoration-line: underline;
  cursor: pointer;
`

export const LoginContinuation = styled.p`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 28px;
  right: 36px;
  cursor: pointer;
  margin: 0;
  padding: 0;
  animation: ${fadeIn} 0.5s ease-in-out 0.4s;

  svg {
    width: 32px;
    height: 32px;
  }
`
