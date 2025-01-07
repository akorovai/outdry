import { FC } from 'react'
import {
  ProductsContainer,
  ProductItemsList,
  ProductItem,
  ProductItemLeft,
  ProductImageContainer,
  ProductImage,
  ProductInfoContainer,
  ProductInfoTitle,
  ProductInfoText,
  ProductItemRight,
  AmountBox,
  AmountText,
  PriceText,
} from './CheckoutContainer.styled'

export const ProductList: FC = () => {
  return (
    <ProductsContainer>
      <ProductItemsList>
        <ProductItem>
          <ProductItemLeft>
            <ProductImageContainer>
              <ProductImage />
            </ProductImageContainer>
            <ProductInfoContainer>
              <ProductInfoTitle>Geo Palms - Mens Recycled Zip Hoodie - Grey</ProductInfoTitle>
              <ProductInfoText>Grey/XS</ProductInfoText>
            </ProductInfoContainer>
          </ProductItemLeft>
          <ProductItemRight>
            <AmountBox>
              <AmountText>1</AmountText>
            </AmountBox>
            <PriceText>$45.00</PriceText>
          </ProductItemRight>
        </ProductItem>
      </ProductItemsList>
    </ProductsContainer>
  )
}
