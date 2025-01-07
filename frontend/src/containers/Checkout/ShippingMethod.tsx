import { FC } from 'react'
import {
  ShippingElement,
  ShippingDotListContainer,
  SECInfo,
  SECInfoTitle,
  SECInfoTime,
  SECText,
} from './CheckoutContainer.styled'

interface ShippingMethodProps {
  selectedShippingMethod: string
  onSelectShippingMethod: (method: string) => void
  disabled?: boolean // Новый пропс для отключения
}

export const ShippingMethod: FC<ShippingMethodProps> = ({
  selectedShippingMethod,
  onSelectShippingMethod,
  disabled,
}) => {
  return (
    <ShippingDotListContainer>
      <ShippingElement
        isSelected={selectedShippingMethod === 'Standard Shipping'}
        onClick={() => !disabled && onSelectShippingMethod('Standard Shipping')}
        style={{ opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'auto' }}
      >
        <SECInfo>
          <SECInfoTitle>Standard Shipping</SECInfoTitle>
          <SECInfoTime>3-5 business days</SECInfoTime>
        </SECInfo>
        <SECText>Free</SECText>
      </ShippingElement>
      <ShippingElement
        isSelected={selectedShippingMethod === 'Expedited Shipping'}
        onClick={() => !disabled && onSelectShippingMethod('Expedited Shipping')}
        style={{ opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'auto' }}
      >
        <SECInfo>
          <SECInfoTitle>Expedited Shipping</SECInfoTitle>
          <SECInfoTime>1-3 business days</SECInfoTime>
        </SECInfo>
        <SECText>$12.99</SECText>
      </ShippingElement>
      <ShippingElement
        isSelected={selectedShippingMethod === 'Overnight Shipping'}
        onClick={() => !disabled && onSelectShippingMethod('Overnight Shipping')}
        style={{ opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'auto' }}
      >
        <SECInfo>
          <SECInfoTitle>Overnight Shipping</SECInfoTitle>
          <SECInfoTime>1 business day</SECInfoTime>
        </SECInfo>
        <SECText>$24.99</SECText>
      </ShippingElement>
    </ShippingDotListContainer>
  )
}
