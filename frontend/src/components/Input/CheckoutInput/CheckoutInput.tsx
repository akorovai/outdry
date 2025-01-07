import { FC, ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { colors, fonts } from '@/consts'
import { SVG } from '@/components'

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-self: stretch;
`

const InputWrapper = styled.div<{ hasError?: boolean; disabled?: boolean }>`
  display: flex;
  padding: 0.625rem 0.875rem;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid
    ${({ hasError, disabled }) => (hasError ? colors.ERROR : disabled ? colors.LIGHT_GREY_400 : colors.BLACK)};
  background: ${({ disabled }) => (disabled ? colors.LIGHT_GREY_200 : colors.WHITE)};
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`

const StyledInput = styled.input<{ disabled?: boolean }>`
  flex: 1;
  border: none;
  outline: none;
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${({ disabled }) => (disabled ? colors.LIGHT_GREY_400 : colors.BLACK)};
  background: transparent;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};

  &::placeholder {
    color: ${colors.LIGHT_GREY_400};
  }
`

const ErrorMessage = styled.span`
  color: ${colors.ERROR};
  font-family: ${fonts.POPPINS};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
`

interface InputFieldProps {
  type: string
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  validator?: (value: string) => string | null
  disabled?: boolean
}

const InputField: FC<InputFieldProps> = ({ type, placeholder, value, onChange, validator, disabled = false }) => {
  const [error, setError] = useState<string | null>(null)

  const handleBlur = () => {
    if (validator && !disabled) {
      const errorMessage = validator(value)
      setError(errorMessage)
    }
  }

  const getIcon = () => {
    if (disabled) return null
    if (!value) return null
    if (error) return <SVG.SmallCross color={colors.ERROR} />
    return <SVG.Checkmark color={colors.LIGHT_GREEN_500} />
  }

  return (
    <InputFieldContainer>
      <InputWrapper hasError={!!error} disabled={disabled}>
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          disabled={disabled}
        />
        {getIcon()}
      </InputWrapper>
      {error && !disabled && <ErrorMessage>{error}</ErrorMessage>}
    </InputFieldContainer>
  )
}

export default InputField
