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
} from '../CheckoutContainer.styled'

interface Product {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  variant?: string
  discount?: number
}

interface ProductListProps {
  products: Product[]
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <ProductsContainer>
      <ProductItemsList>
        {products.map(product => {
          const discount = product.discount || 0
          const discountedPrice = product.price * (1 - discount / 100)
          const totalPrice = discountedPrice * product.quantity

          return (
            <ProductItem key={product.id}>
              <ProductItemLeft>
                <ProductImageContainer>
                  <ProductImage src={product.image} alt={product.name} />
                </ProductImageContainer>
                <ProductInfoContainer>
                  <ProductInfoTitle>{product.name}</ProductInfoTitle>
                  {product.variant && <ProductInfoText>{product.variant}</ProductInfoText>}
                </ProductInfoContainer>
              </ProductItemLeft>
              <ProductItemRight>
                <AmountBox>
                  <AmountText>{product.quantity}</AmountText>
                </AmountBox>
                <PriceText>${totalPrice.toFixed(2)}</PriceText>
              </ProductItemRight>
            </ProductItem>
          )
        })}
      </ProductItemsList>
    </ProductsContainer>
  )
}
