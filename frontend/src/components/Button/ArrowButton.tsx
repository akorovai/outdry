import React from 'react'
import styled from 'styled-components'
import { SVG } from '../index.ts'
import { colors, fonts } from '../../consts'

interface IArrowButtonProps {
  text: string
  direction?: 'previous' | 'next'
  onClick?: () => void
  disabled?: boolean
}

const ButtonContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: ${({ disabled }) => (disabled ? colors.LIGHT_GREY_300 : colors.LIGHT_GREEN_500)};
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? colors.LIGHT_GREY_300 : colors.DARK_GREEN)};
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-2px)')};
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(0)')};
  }
`

const ButtonContent = styled.div<{ direction: 'previous' | 'next' }>`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${({ direction }) => (direction === 'next' ? 'row-reverse' : 'row')};

  svg {
    transform: ${({ direction }) => (direction === 'next' ? 'rotate(180deg)' : 'none')};
  }
`

const ButtonText = styled.p<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? colors.LIGHT_GREEN_400 : colors.WHITE)};
  font-family: ${fonts.POPPINS};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  margin: 0;
`

const ArrowButton: React.FC<IArrowButtonProps> = ({
  text,
  direction = 'previous',
  onClick,
  disabled = false,
}): React.ReactElement => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  return (
    <ButtonContainer onClick={handleClick} disabled={disabled}>
      <ButtonContent direction={direction}>
        <SVG.Arrow color={disabled ? colors.LIGHT_GREEN_400 : colors.WHITE} />
        <ButtonText disabled={disabled}>{text}</ButtonText>
      </ButtonContent>
    </ButtonContainer>
  )
}

export default ArrowButton
