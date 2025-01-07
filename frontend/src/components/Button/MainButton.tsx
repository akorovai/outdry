import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../consts'

interface HoverEffectProps {
  backgroundColor?: string
  textColor?: string
}

interface MainButtonProps {
  onClick?: () => void
  children: React.ReactNode
  width?: number
  backgroundColor?: string
  textColor?: string
  hoverEffect?: HoverEffectProps
  disabled?: boolean
}

const StyledButton = styled.button<{
  width?: number
  backgroundColor?: string
  hoverEffect?: HoverEffectProps
  disabled?: boolean
}>`
  display: inline-flex;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: ${({ backgroundColor, disabled }) =>
    disabled ? colors.LIGHT_GREY_400 : backgroundColor || colors.WHITE};
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition:
    background 0.3s ease,
    transform 0.2s ease,
    color 0.3s ease;
  width: ${({ width }) => width}%;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  &:hover {
    background: ${({ hoverEffect, disabled }) =>
      disabled ? colors.LIGHT_GREY_400 : hoverEffect?.backgroundColor || colors.LIGHT_GREEN_400};
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(0.98)')};
  }
`

const ButtonText = styled.p<{ textColor?: string; hoverEffect?: HoverEffectProps; disabled?: boolean }>`
  color: ${({ textColor, disabled }) => (disabled ? colors.WHITE : textColor || colors.LIGHT_GREEN_500)};
  font-family: ${fonts.POPPINS};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  text-transform: uppercase;
  margin: 0;
  transition: color 0.3s ease;

  ${StyledButton}:hover & {
    color: ${({ hoverEffect, disabled }) => (disabled ? colors.LIGHT_GREY_200 : hoverEffect?.textColor)};
  }
`

const MainButton: React.FC<MainButtonProps> = ({
  onClick,
  children,
  width = 100,
  backgroundColor,
  textColor,
  hoverEffect,
  disabled = false,
}) => {
  return (
    <StyledButton
      onClick={disabled ? undefined : onClick}
      width={width}
      backgroundColor={backgroundColor}
      hoverEffect={hoverEffect}
      disabled={disabled}
    >
      <ButtonText textColor={textColor} hoverEffect={hoverEffect} disabled={disabled}>
        {children}
      </ButtonText>
    </StyledButton>
  )
}

export default MainButton
