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

interface Product {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  variant?: string
}

interface ProductListProps {
  products: Product[]
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <ProductsContainer>
      <ProductItemsList>
        {products.map(product => (
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
              <PriceText>${(product.price * product.quantity).toFixed(2)}</PriceText>
            </ProductItemRight>
          </ProductItem>
        ))}
      </ProductItemsList>
    </ProductsContainer>
  )
}
