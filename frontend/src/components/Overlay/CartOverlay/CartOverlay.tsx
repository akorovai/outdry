import React, { useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CartOverlayProps } from './types/cart.types.ts'
import { EmptyCart } from './EmptyCart/EmptyCart'
import { CartHeader } from './CartHeader/CartHeader'
import CartItem from './CartItem/CartItem' // Import the memoized CartItem
import { CartSubtotal } from './CartSubtotal/CartSubtotal'
import { Backdrop, CardItemList, CartOverlayContent, CartOverlayWrapper } from './styles'
import { useNavigate } from 'react-router-dom'
import { routePath } from '@/consts'
import useShoppingCart from './hooks/useCart.tsx'

export const CartOverlay: React.FC<CartOverlayProps> = ({ onClose }) => {
  const navigate = useNavigate()

  const { cartItems, error, fetchShoppingCartItems, deleteShoppingCartItem, updateShoppingCartItemQuantity } =
    useShoppingCart()

  const handleRemoveItem = useCallback(
    async (id: string) => {
      const result = await deleteShoppingCartItem(Number(id))
      if (result.success) {
        console.log(result.message)
      } else {
        console.error(result.message)
      }
    },
    [deleteShoppingCartItem],
  )

  const handleQuantityChange = useCallback(
    async (id: string, newQuantity: number) => {
      if (newQuantity < 1) return false

      try {
        const result = await updateShoppingCartItemQuantity(Number(id), newQuantity)
        if (result.success) {
          console.log(result.message)
          return true
        } else {
          console.error(result.message)
          return false
        }
      } catch (err) {
        console.error('Failed to update quantity:', err)
        return false
      }
    },
    [updateShoppingCartItemQuantity],
  )

  const calculateSubtotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)
  }, [cartItems])

  const handleCheckoutButton = useCallback(() => {
    navigate(routePath.CHECKOUT)
  }, [navigate])

  useEffect(() => {
    fetchShoppingCartItems()
  }, [fetchShoppingCartItems])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <AnimatePresence>
      <Backdrop
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      {cartItems.length === 0 ? (
        <EmptyCart onClose={onClose} />
      ) : (
        <CartOverlayWrapper
          as={motion.div}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <CartHeader itemCount={cartItems.length} onClose={onClose} />
          <CartOverlayContent>
            <CardItemList>
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={{
                    id: item.id.toString(),
                    name: item.product.name,
                    price: item.product.price,
                    discount: item.product.discount || 0,
                    quantity: item.quantity,
                    imageUrl: item.product.imageUrl,
                    color: item.product.color,
                    size: item.product.size,
                  }}
                  onRemove={handleRemoveItem}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
            </CardItemList>
          </CartOverlayContent>
          <CartSubtotal total={calculateSubtotal()} onCheckoutClick={handleCheckoutButton} />
        </CartOverlayWrapper>
      )}
    </AnimatePresence>
  )
}

export default CartOverlay
