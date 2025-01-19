import React from 'react'
import { AddToWishListContainer, AddToWishListText } from './ProductDescription.styled'
import { colors } from '@/consts'
import useWishlist from './useWishlist'
import { SVG } from '@/components'

interface WishlistButtonProps {
  productId: string
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ productId }) => {
  const { isInWishlist, isLoading, addToWishlist, removeFromWishlist } = useWishlist(productId)

  const handleWishlistToggle = async () => {
    if (isLoading) return // Защита от повторных запросов

    if (isInWishlist) {
      await removeFromWishlist()
    } else {
      await addToWishlist()
    }
  }

  return (
    <AddToWishListContainer isInWishlist={isInWishlist} onClick={handleWishlistToggle}>
      <SVG.Like color={colors.ERROR} />
      <AddToWishListText isInWishlist={isInWishlist}>
        {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </AddToWishListText>
    </AddToWishListContainer>
  )
}

export default WishlistButton
