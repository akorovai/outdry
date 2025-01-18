import { FC, ReactElement, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { SVG } from '@/components'
import { colors } from '@/consts'
import {
  AddToCartButton,
  ColorCircle,
  ColorContainer,
  DetailsContainer,
  PriceAndColorContainer,
  PriceContainer,
  ProductCardContainer,
  ProductImageContainer,
  ProductInfoContainer,
  ProductInfoHeader,
  SaleLabel,
} from './ProductCard.styled.ts'
import useCart from '../../hooks/useCart.tsx'

interface IProductCardProps {
  id: number
  name: string
  colors?: string[]
  color?: string
  size?: string
  price: number
  isOnSale?: boolean
  isWishlist?: boolean
  onQuickBuyClick?: () => void
  onTrashClick?: () => void
  discountPercent?: number
  category: string
}

const ProductCard: FC<IProductCardProps> = ({
  id,
  name,
  colors: productColors = [],
  color,
  size,
  price,
  isOnSale = false,
  isWishlist = false,
  onQuickBuyClick,
  onTrashClick,
  discountPercent,
  category,
}): ReactElement => {
  const { addToCart, loading, error } = useCart()
  const navigate = useNavigate()

  const discountMultiplier = discountPercent !== undefined ? (100 - discountPercent) / 100 : 1
  const discountedPrice = price * discountMultiplier

  const handleCardClick = () => {
    navigate(`/products/${category}/${id}`)
  }

  const handleTrashClick = (e: MouseEvent) => {
    e.stopPropagation()
    onTrashClick?.()
  }

  const handleAddToCart = async (e: MouseEvent) => {
    e.stopPropagation()
    await addToCart(id)
    onQuickBuyClick?.()
  }

  const renderSaleLabel = () => {
    if (!isOnSale && !isWishlist) return null
    return (
      <SaleLabel
        onClick={isWishlist ? handleTrashClick : undefined}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isWishlist ? <SVG.Trash color={colors.WHITE} /> : <p>On Sale</p>}
      </SaleLabel>
    )
  }

  const renderPrice = () => {
    return isOnSale ? (
      <>
        <h4>${discountedPrice.toFixed(2)}</h4>
        <h5>/</h5>
        <h6>${price.toFixed(2)}</h6>
      </>
    ) : (
      <h4>${price.toFixed(2)}</h4>
    )
  }

  const renderColorDetails = () => {
    return isWishlist ? (
      <DetailsContainer>
        <p>
          {color} / {size}
        </p>
      </DetailsContainer>
    ) : (
      <ColorContainer>
        {productColors.map((color, index) => (
          <ColorCircle key={index} color={color} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
        ))}
      </ColorContainer>
    )
  }

  return (
    <ProductCardContainer onClick={handleCardClick} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <ProductImageContainer>
        {renderSaleLabel()}
        <AddToCartButton
          onClick={handleAddToCart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          Quick Buy
          <SVG.Bucket color={colors.WHITE} />
        </AddToCartButton>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </ProductImageContainer>
      <ProductInfoContainer>
        <ProductInfoHeader>
          <p>{name}</p>
        </ProductInfoHeader>
        {renderColorDetails()}
        <PriceAndColorContainer>
          <PriceContainer>{renderPrice()}</PriceContainer>
        </PriceAndColorContainer>
      </ProductInfoContainer>
    </ProductCardContainer>
  )
}

export default ProductCard
