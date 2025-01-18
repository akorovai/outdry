import { FC } from 'react'
import {
  SubtotalContainer,
  PricesContainer,
  SubtotalLine,
  PriceTypeText,
  PriceTextValue,
  ShippingLine,
  ShippingPriceText,
  ShippingTypeText,
} from './CheckoutContainer.styled'

interface SubtotalProps {
  total: number
  shippingCost: number
}

export const Subtotal: FC<SubtotalProps> = ({ total, shippingCost }) => {
  return (
    <SubtotalContainer>
      <PricesContainer>
        <ShippingLine>
          <PriceTypeText>Shipping</PriceTypeText>
          <ShippingPriceText>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</ShippingPriceText>
        </ShippingLine>
        <SubtotalLine>
          <PriceTypeText>Total</PriceTypeText>
          <PriceTextValue>${total.toFixed(2)}</PriceTextValue>
        </SubtotalLine>
      </PricesContainer>
      <ShippingTypeText>Standard Shipping</ShippingTypeText>
    </SubtotalContainer>
  )
}
