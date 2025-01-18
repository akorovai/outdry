import { useState, useEffect, memo, FC, useMemo } from 'react'
import { motion } from 'framer-motion'
import { CartItem as CartItemType } from '../types/cart.types'
import { SVG } from '../../../index'
import {
  CartItemContainer,
  CartItemContentContainer,
  LeftCartItemContainer,
  ImageContainer,
  LCIInfo,
  LCIInfoTop,
  IDText,
  ProductName,
  LCIInfoBottom,
  CategoryValueContainer,
  CategoryText,
  ValueText,
  RightCartItemContainer,
  RemoveText,
  PriceAmountContainer,
  AmountContainer,
  IconButton,
  AmountText,
  PriceDiscountContainer,
  DiscountText,
  PriceText,
  Divider,
} from './styles'
import { colors } from '../../../../consts'

interface CartItemProps {
  item: CartItemType
  onRemove: (id: string) => void
  onQuantityChange: (id: string, quantity: number) => Promise<boolean>
}

const CartItem: FC<CartItemProps> = memo(({ item, onRemove, onQuantityChange }) => {
  const { id, quantity, imageUrl, name, color, size, discount, price } = item
  const [localQuantity, setLocalQuantity] = useState(quantity)
  const [isUpdating, setIsUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLocalQuantity(quantity)
  }, [quantity])

  const handleQuantityChange = async (newQuantity: number) => {
    if (newQuantity < 1 || newQuantity === localQuantity || isUpdating) return

    setLocalQuantity(newQuantity)
    setIsUpdating(true)
    setError(null)

    try {
      const success = await onQuantityChange(id, newQuantity)
      if (!success) {
        setError('Failed to update quantity. Please try again.')
        setLocalQuantity(quantity)
      }
    } catch (err) {
      console.error('Error updating quantity:', err)
      setError('An error occurred. Please try again.')
      setLocalQuantity(quantity)
    } finally {
      setIsUpdating(false)
    }
  }

  const discountedPrice = useMemo(() => {
    return (discount ?? 0) > 0 ? price * (1 - (discount ?? 0) / 100) : price
  }, [discount, price])

  return (
    <CartItemContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <CartItemContentContainer>
        <LeftCartItemContainer>
          <ImageContainer imageUrl={imageUrl} />
          <LCIInfo>
            <LCIInfoTop>
              <IDText>#{id}</IDText>
              <ProductName>{name}</ProductName>
            </LCIInfoTop>
            <LCIInfoBottom>
              <CategoryValueContainer>
                <CategoryText>Colour:</CategoryText>
                <ValueText>{color}</ValueText>
              </CategoryValueContainer>
              <CategoryValueContainer>
                <CategoryText>Size:</CategoryText>
                <ValueText>{size}</ValueText>
              </CategoryValueContainer>
            </LCIInfoBottom>
          </LCIInfo>
        </LeftCartItemContainer>
        <RightCartItemContainer>
          <RemoveText onClick={() => onRemove(id)}>Remove</RemoveText>
          <PriceAmountContainer>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
            >
              <AmountContainer>
                <IconButton
                  onClick={() => handleQuantityChange(localQuantity - 1)}
                  disabled={localQuantity === 1 || isUpdating}
                  aria-label='Decrease quantity'
                >
                  <SVG.Minus color={localQuantity === 1 ? colors.LIGHT_GREY_300 : colors.BLACK} />
                </IconButton>
                <AmountText>{isUpdating ? '...' : localQuantity}</AmountText>
                <IconButton
                  onClick={() => handleQuantityChange(localQuantity + 1)}
                  disabled={isUpdating}
                  aria-label='Increase quantity'
                >
                  <SVG.Plus color={colors.BLACK} />
                </IconButton>
              </AmountContainer>
            </motion.div>
            <PriceDiscountContainer>
              <PriceDiscountContainer>
                {(discount ?? 0) > 0 ? (
                  <>
                    <DiscountText style={{ textDecoration: 'line-through', color: colors.ORANGE }}>
                      ${price.toFixed(2)}
                    </DiscountText>
                    <PriceText>${discountedPrice.toFixed(2)}</PriceText>
                  </>
                ) : (
                  <PriceText>${price.toFixed(2)}</PriceText>
                )}
              </PriceDiscountContainer>
            </PriceDiscountContainer>
          </PriceAmountContainer>
        </RightCartItemContainer>
      </CartItemContentContainer>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Divider />
    </CartItemContainer>
  )
})

export default CartItem
