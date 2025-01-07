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

export const Subtotal: FC = () => {
  return (
    <SubtotalContainer>
      <PricesContainer>
        <SubtotalLine>
          <PriceTypeText>Subtotal</PriceTypeText>
          <PriceTextValue>$105.00</PriceTextValue>
        </SubtotalLine>
        <ShippingLine>
          <PriceTypeText>Shipping</PriceTypeText>
          <ShippingPriceText>Free</ShippingPriceText>
        </ShippingLine>
      </PricesContainer>
      <ShippingTypeText>Standard Shipping</ShippingTypeText>
    </SubtotalContainer>
  )
}
