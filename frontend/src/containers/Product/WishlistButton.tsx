import React from 'react'

import { AddToWishListContainer, AddToWishListText } from './ProductDescription.styled'
import { colors } from '@/consts'
import useWishlist from './useWishlist.ts'
import { SVG } from '@/components'
interface WishlistButtonProps {
  productId: string
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ productId }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist(productId)

  const handleWishlistToggle = async () => {
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
