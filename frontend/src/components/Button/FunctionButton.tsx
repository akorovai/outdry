import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { colors, fonts } from '../../consts'

const ButtonContainer = styled(motion.div)<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.625rem 1.125rem;
  border-radius: 0.5rem;
  background: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  overflow: hidden;
  min-width: fit-content;
  transition: background 0.3s ease;
  width: ${({ theme }) => theme.width || 'auto'};

  &:hover {
    opacity: 0.9;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`

const ButtonText = styled.div<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`

const InputField = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  color: ${colors.WHITE};
  width: 100%;
  padding: 0;
  flex-grow: 1;

  &::placeholder {
    color: ${colors.WHITE};
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`

interface FunctionButtonProps {
  text: string
  icon?: React.ReactNode
  backgroundColor?: string
  textColor?: string
  onClick?: (value?: number) => void
  expandable?: boolean
}

const FunctionButton: React.FC<FunctionButtonProps> = ({
  text,
  icon,
  backgroundColor = colors.LIGHT_GREY_700,
  textColor = colors.WHITE,
  onClick,
  expandable = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleClick = () => {
    if (expandable) {
      setIsExpanded(true)
    } else {
      onClick?.()
    }
  }

  const handleInputBlur = () => {
    setIsExpanded(false)
    const discount = parseFloat(inputValue)
    if (!isNaN(discount)) {
      onClick?.(discount)
    }
    setInputValue('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const discount = parseFloat(inputValue)
      if (!isNaN(discount)) {
        onClick?.(discount)
      }
      setIsExpanded(false)
      setInputValue('')
    }
  }

  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      onClick={handleClick}
      initial={{ width: 'auto' }}
      animate={{
        width: isExpanded ? '250px' : 'auto',
      }}
      transition={{ duration: 0.3 }}
    >
      {isExpanded ? (
        <InputField
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder={text}
        />
      ) : (
        <ButtonText textColor={textColor}>{text}</ButtonText>
      )}
      {icon && icon}
    </ButtonContainer>
  )
}

export default FunctionButton
