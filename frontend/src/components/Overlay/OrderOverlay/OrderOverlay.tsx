import React, { useEffect } from 'react'
import { motion } from 'framer-motion' // Import motion from framer-motion
import { SVG } from '@/components'
import {
  OverlayBackdrop,
  OverlayContainer,
  OverlayHeader,
  CloseButton,
  OverlayContent,
  OverlayContentHeader,
  OverlayContentHeaderLeft,
  OverlayContentHeaderLeftText,
  OrderItemCounter,
  OrderItemCountText,
  ProductList,
  OrderProductCard,
  OrderItemImage,
  OrderItemTitle,
  OrderItemTitleMainText,
  OrderItemTitleText,
} from './OrderOverlay.styled.tsx'
import { colors } from '../../../consts'

interface Product {
  id: number
  imageUrl: string
  title: string
  description: string
}

interface OrderOverlayProps {
  products: Product[]
  onClose: () => void
}

const OrderOverlay: React.FC<OrderOverlayProps> = ({ products, onClose }): React.ReactElement => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  // Animation variants for internal elements
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
                <OrderItemImage imageUrl={product.imageUrl} />
                <OrderItemTitle>
                  <OrderItemTitleMainText>{product.title}</OrderItemTitleMainText>
                  <OrderItemTitleText>{product.description}</OrderItemTitleText>
                </OrderItemTitle>
              </OrderProductCard>
            ))}
          </ProductList>
        </OverlayContent>
      </OverlayContainer>
    </>
  )
}

export default OrderOverlay
