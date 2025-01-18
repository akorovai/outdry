import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { SVG } from '@/components'
import {
  CloseButton,
  OrderItemCounter,
  OrderItemCountText,
  OrderItemImage,
  OrderItemTitle,
  OrderItemTitleMainText,
  OrderItemTitleText,
  OrderProductCard,
  OverlayBackdrop,
  OverlayContainer,
  OverlayContent,
  OverlayContentHeader,
  OverlayContentHeaderLeft,
  OverlayContentHeaderLeftText,
  OverlayHeader,
  ProductList,
} from './OrderOverlay.styled.tsx'
import { colors } from '../../../consts'
import { OrderItemResponse } from '@/models'
import styled from 'styled-components'

interface OrderOverlayProps {
  products: OrderItemResponse[]
  onClose: () => void
}

export const OrderItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
`

export const OrderItemDetailText = styled.p`
  font-size: 14px;
  color: ${colors.LIGHT_GREY_600};
`
const OrderOverlay: React.FC<OrderOverlayProps> = ({ products, onClose }): React.ReactElement => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const productCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const staggerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
      <OverlayBackdrop onClick={onClose} />
      <OverlayContainer>
        <OverlayHeader>
          <CloseButton onClick={onClose}>
            <SVG.Cross color={colors.WHITE} />
          </CloseButton>
        </OverlayHeader>
        <OverlayContent>
          <OverlayContentHeader as={motion.div} variants={headerVariants} initial='hidden' animate='visible'>
            <OverlayContentHeaderLeft>
              <OverlayContentHeaderLeftText>Ordered items</OverlayContentHeaderLeftText>
              <OrderItemCounter>
                <OrderItemCountText>{products.length}</OrderItemCountText>
              </OrderItemCounter>
            </OverlayContentHeaderLeft>
          </OverlayContentHeader>

          <ProductList as={motion.div} variants={staggerVariants} initial='hidden' animate='visible'>
            {products.map(product => (
              <OrderProductCard key={product.id} as={motion.div} variants={productCardVariants}>
                <OrderItemImage imageUrl={product.imageLink} />
                <OrderItemTitle>
                  <OrderItemTitleMainText>{product.productName}</OrderItemTitleMainText>
                  <OrderItemTitleText>
                    {product.size}, {product.color}
                  </OrderItemTitleText>
                </OrderItemTitle>
                <OrderItemDetails>
                  <OrderItemDetailText>Quantity: {product.quantity}</OrderItemDetailText>
                  <OrderItemDetailText>Price: ${product.price.toFixed(2)}</OrderItemDetailText>
                </OrderItemDetails>
              </OrderProductCard>
            ))}
          </ProductList>
        </OverlayContent>
      </OverlayContainer>
    </>
  )
}

export default OrderOverlay
