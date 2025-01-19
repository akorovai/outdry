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
  onClick?: (value?: number) => void // Updated to accept a value
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
      setIsExpanded(true) // Expand the button to show the input field
    } else {
      onClick?.() // Call the onClick handler without a value
    }
  }

  const handleInputBlur = () => {
    setIsExpanded(false) // Collapse the button
    const discount = parseFloat(inputValue) // Parse the input value
    if (!isNaN(discount)) {
      onClick?.(discount) // Pass the discount value to the onClick handler
    }
    setInputValue('') // Clear the input field
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value) // Update the input value
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const discount = parseFloat(inputValue) // Parse the input value
      if (!isNaN(discount)) {
        onClick?.(discount) // Pass the discount value to the onClick handler
      }
      setIsExpanded(false) // Collapse the button
      setInputValue('') // Clear the input field
    }
  }

  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      onClick={handleClick}
      initial={{ width: 'auto' }}
      animate={{
        width: isExpanded ? '250px' : 'auto', // Expand/collapse animation
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
