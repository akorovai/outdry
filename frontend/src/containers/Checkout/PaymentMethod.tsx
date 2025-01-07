import { FC } from 'react'
import styled from 'styled-components'
import { colors, fonts } from '@/consts'
import { SVG } from '@/components'

const PaymentDotListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`

const PaymentElement = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  padding: 0.75rem;
  border: ${({ isSelected }) => (isSelected ? `2px` : `1px`)} solid
    ${({ isSelected }) => (isSelected ? colors.LIGHT_GREEN_500 : colors.LIGHT_GREY_400)};
  border-radius: 0.5rem;
  background: ${colors.WHITE};
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${colors.LIGHT_GREEN_500};
  }
`

const PaymentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`

const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`

const PaymentInfoTitle = styled.span`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  align-self: stretch;
`

interface PaymentMethodProps {
  selectedPaymentMethod: string
  onSelectPaymentMethod: (method: string) => void
}

export const PaymentMethod: FC<PaymentMethodProps> = ({ selectedPaymentMethod, onSelectPaymentMethod }) => {
  return (
    <PaymentDotListContainer>
      <PaymentElement isSelected={selectedPaymentMethod === 'Visa'} onClick={() => onSelectPaymentMethod('Visa')}>
        <PaymentIcon>
          <SVG.Visa />
        </PaymentIcon>
        <PaymentInfo>
          <PaymentInfoTitle>Visa</PaymentInfoTitle>
        </PaymentInfo>
      </PaymentElement>

      <PaymentElement
        isSelected={selectedPaymentMethod === 'MasterCard'}
        onClick={() => onSelectPaymentMethod('MasterCard')}
      >
        <PaymentIcon>
          <SVG.MasterCard />
        </PaymentIcon>
        <PaymentInfo>
          <PaymentInfoTitle>MasterCard</PaymentInfoTitle>
        </PaymentInfo>
      </PaymentElement>

      <PaymentElement isSelected={selectedPaymentMethod === 'PayPal'} onClick={() => onSelectPaymentMethod('PayPal')}>
        <PaymentIcon>
          <SVG.PayPal />
        </PaymentIcon>
        <PaymentInfo>
          <PaymentInfoTitle>PayPal</PaymentInfoTitle>
        </PaymentInfo>
      </PaymentElement>
    </PaymentDotListContainer>
  )
}
