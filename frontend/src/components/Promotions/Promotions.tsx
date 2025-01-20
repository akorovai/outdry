import { PropsWithChildren, useState, useEffect, FC, ReactElement } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../ProductCard/ProductCard.tsx'
import { colors } from '../../consts'
import { SVG } from '../index.ts'
import {
  ArrowContainer,
  Bulit,
  BulitsContainer,
  HeaderContainer,
  LeftContainer,
  SectionContainer,
  TitleRow,
  CarouselArrowsContainer,
  CardsContainer,
} from './Promotions.styled.ts'
import useDiscountedProducts from './useDiscountedProducts'
import useSimilarProducts from './useSimilarProducts'

interface IPromotionPropsWithChildrenProps extends PropsWithChildren {
  isOnSale: boolean
  productId?: number
}

const Promotions: FC<IPromotionPropsWithChildrenProps> = ({ children, isOnSale, productId }): ReactElement => {
  const [activeBullet, setActiveBullet] = useState(0)
  const [productsPerSlide, setProductsPerSlide] = useState(8)

  const { products: discountedProducts, loading: discountedLoading, error: discountedError } = useDiscountedProducts()
  const { similarProducts, loading: similarLoading, error: similarError } = useSimilarProducts(productId || 0)

  const products = isOnSale ? discountedProducts : similarProducts
  const loading = isOnSale ? discountedLoading : similarLoading
  const error = isOnSale ? discountedError : similarError

  const totalBullets = Math.ceil(products.length / productsPerSlide)

  const startIndex = activeBullet * productsPerSlide
  const endIndex = startIndex + productsPerSlide
  const visibleProducts = products.slice(startIndex, endIndex)

  const handlePrev = () => {
    if (activeBullet > 0) {
      setActiveBullet(activeBullet - 1)
    }
  }

  const handleNext = () => {
    if (activeBullet < totalBullets - 1) {
      setActiveBullet(activeBullet + 1)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProductsPerSlide(1)
      } else if (window.innerWidth < 1200) {
        setProductsPerSlide(3)
      } else if (window.innerWidth < 1600) {
        setProductsPerSlide(5)
      } else {
        setProductsPerSlide(7)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <SectionContainer initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <HeaderContainer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <LeftContainer
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TitleRow>{children}</TitleRow>
          <BulitsContainer>
            {[...Array(totalBullets)].map((_, index) => (
              <Bulit
                key={index}
                isActive={index === activeBullet}
                onClick={() => setActiveBullet(index)}
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  backgroundColor: index === activeBullet ? colors.LIGHT_GREEN_400 : colors.LIGHT_GREY,
                }}
              />
            ))}
          </BulitsContainer>
        </LeftContainer>
        <CarouselArrowsContainer>
          <ArrowContainer
            isActive={activeBullet > 0}
            onClick={activeBullet > 0 ? handlePrev : undefined}
            isLeft
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              border: activeBullet > 0 ? 'none' : '1px solid #000',
              background: activeBullet > 0 ? colors.DARK_GREEN_2 : colors.WHITE,
              opacity: activeBullet > 0 ? 1 : 0.5,
            }}
          >
            <SVG.Arrow color={activeBullet > 0 ? colors.WHITE : colors.BLACK} />
          </ArrowContainer>
          <ArrowContainer
            isActive={activeBullet < totalBullets - 1}
            onClick={activeBullet < totalBullets - 1 ? handleNext : undefined}
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              border: activeBullet < totalBullets - 1 ? 'none' : '1px solid #000',
              background: activeBullet < totalBullets - 1 ? colors.DARK_GREEN_2 : colors.WHITE,
              opacity: activeBullet < totalBullets - 1 ? 1 : 0.5,
            }}
          >
            <SVG.Arrow color={activeBullet < totalBullets - 1 ? colors.WHITE : colors.BLACK} />
          </ArrowContainer>
        </CarouselArrowsContainer>
      </HeaderContainer>
      <CardsContainer>
        {visibleProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard
              id={product.id!}
              name={product.name}
              colors={[product.color.name]}
              price={product.price}
              isOnSale={isOnSale}
              discountPercent={product.discount}
              category={product.gender.toLowerCase()}
              imageUrl={product.links[0] as string}
            />
          </motion.div>
        ))}
      </CardsContainer>
    </SectionContainer>
  )
}

export default Promotions
