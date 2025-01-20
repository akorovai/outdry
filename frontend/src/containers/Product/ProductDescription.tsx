import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb, MainButton } from '@/components'
import {
  ProductPageContainer,
  ProductImagesContainer,
  MainImageSection,
  MainProductImage,
  SecondaryImagesSection,
  SecondaryImagesRow,
  SecondaryImage,
  ProductDetailsContainer,
  ProductDescriptionContainer,
  DescriptionTextContainer,
  ProductDescriptionText,
  ProductDescriptionHeader,
  ProductTitle,
  AdditionalProductInfoContainer,
  ProductIDText,
  ReviewsCountText,
  ColorAndSizeOptionsContainer,
  ColorOptionsContainer,
  ColorOptionsTitle,
  ColorCirclesContainer,
  ColorCircle,
  SizeOptionsContainer,
  SizeOptionsTitle,
  SizeOptionsList,
  SizeOption,
  PriceAndDiscountContainer,
  DiscountTextContainer,
  DiscountText,
  PriceInfoContainer,
  MainPriceText,
  SeparatorPriceSymbol,
  DiscountNumber,
  ButtonsContainer,
  ButtonContainer,
} from './ProductDescription.styled'
import { colors } from '@/consts'
import { ColorResponse } from '@/models'
import useProductDescription from './useProductDescription'
import WishlistButton from './WishlistButton'
import useAddToCart from '@/hooks/useCart'

interface IProductDescriptionProps {
  messagesNumber: number
}
const ProductDescription: React.FC<IProductDescriptionProps> = ({ messagesNumber }) => {
  const { category, id } = useParams<{ category: string; id: string }>()
  const [selectedColor, setSelectedColor] = useState<ColorResponse | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const { product, loading: isProductLoading, error: productError } = useProductDescription(id || '')
  const { addToCart, loading: isAddToCartLoading } = useAddToCart()

  const title = category ? category.charAt(0).toUpperCase() + category.slice(1) : ''

  if (isProductLoading) return <div>Loading...</div>
  if (productError) return <div>Error: {productError}</div>
  if (!product) return <div>Product not found</div>

  const mapSizeToLetter = (size: string): string => {
    const sizeMap: Record<string, string> = {
      'Extra Small': 'XS',
      Small: 'S',
      Medium: 'M',
      Large: 'L',
      'Extra Large': 'XL',
      'Double Extra Large': 'XXL',
    }
    return sizeMap[size] || size
  }

  const getColorOptions = (): ColorResponse[] => {
    if (!product.sizeAvailabilityByColor) return []

    return Object.keys(product.sizeAvailabilityByColor).map((colorName, index) => ({
      id: index + 1,
      name: colorName,
      code: product.color.code,
    }))
  }

  const getSizeOptions = (): string[] => {
    if (!selectedColor || !product.sizeAvailabilityByColor) return []
    const sizes = product.sizeAvailabilityByColor[selectedColor.name] || []
    return sizes.map(size => mapSizeToLetter(size))
  }

  const colorOptions = getColorOptions()
  const sizeOptions = getSizeOptions()

  const handleColorSelect = (color: ColorResponse) => {
    if (selectedColor?.name === color.name) {
      setSelectedColor(null)
      setSelectedSize(null)
    } else {
      setSelectedColor(color)
      setSelectedSize(null)
    }
  }

  const handleSizeSelect = (size: string) => {
    if (selectedSize === size) {
      setSelectedSize(null)
    } else {
      setSelectedSize(size)
    }
  }

  const handleAddToCart = async () => {
    if (!id) return

    if (!selectedColor || !selectedSize) {
      alert('Please select a color and size before adding to cart.')
      return
    }

    const productId = parseInt(id, 10)
    const response = await addToCart(productId)

    if (response) {
      alert('Product added to cart successfully!')
    } else {
      alert('Failed to add product to cart.')
    }
  }

  return (
    <ProductPageContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <MainImageSection>
        <ProductImagesContainer>
          <Breadcrumb items={['Home', title, `${product.type.name}`]} activeIndex={1} />
          <MainProductImage
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <SecondaryImagesSection>
            <SecondaryImagesRow>
              <SecondaryImage />
              <SecondaryImage />
            </SecondaryImagesRow>
          </SecondaryImagesSection>
        </ProductImagesContainer>
      </MainImageSection>
      <ProductDetailsContainer>
        <ProductDescriptionContainer>
          <DescriptionTextContainer>
            <ProductDescriptionHeader>
              <AdditionalProductInfoContainer>
                <ProductIDText>#{product.id}</ProductIDText>
                <ReviewsCountText>
                  {messagesNumber === 0 || messagesNumber === undefined
                    ? 'No reviews yet'
                    : `${messagesNumber} ${messagesNumber === 1 ? 'review' : 'reviews'}`}
                </ReviewsCountText>
              </AdditionalProductInfoContainer>
              <ProductTitle>{product.name}</ProductTitle>
            </ProductDescriptionHeader>
            <ProductDescriptionText>{product.description}</ProductDescriptionText>
          </DescriptionTextContainer>
          <ColorAndSizeOptionsContainer>
            <ColorOptionsContainer>
              <ColorOptionsTitle>Color</ColorOptionsTitle>
              <ColorCirclesContainer>
                {colorOptions.length > 0 ? (
                  colorOptions.map(color => (
                    <ColorCircle
                      key={color.id}
                      color={`#${color.code}`}
                      isSelected={selectedColor?.name === color.name}
                      onClick={() => handleColorSelect(color)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))
                ) : (
                  <p>No colors available</p>
                )}
              </ColorCirclesContainer>
            </ColorOptionsContainer>
            <SizeOptionsContainer>
              <SizeOptionsTitle>Size</SizeOptionsTitle>
              <SizeOptionsList>
                {selectedColor ? (
                  sizeOptions.map(size => (
                    <SizeOption
                      key={size}
                      isSelected={selectedSize === size}
                      onClick={() => handleSizeSelect(size)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <p>{size}</p>
                    </SizeOption>
                  ))
                ) : (
                  <p>Please select a color to see available sizes.</p>
                )}
              </SizeOptionsList>
            </SizeOptionsContainer>
          </ColorAndSizeOptionsContainer>
        </ProductDescriptionContainer>
        <PriceAndDiscountContainer>
          <DiscountTextContainer>
            <PriceInfoContainer>
              <MainPriceText>${product.price.toFixed(2)}</MainPriceText>
              {product.discount > 0 && (
                <>
                  <SeparatorPriceSymbol>/</SeparatorPriceSymbol>
                  <DiscountNumber>${(product.price / (1 - product.discount / 100)).toFixed(2)}</DiscountNumber>
                </>
              )}
            </PriceInfoContainer>
            {product.discount > 0 && <DiscountText>The discount is {product.discount}%</DiscountText>}
          </DiscountTextContainer>
          <ButtonsContainer>
            <WishlistButton productId={id || ''} />
            <ButtonContainer>
              <MainButton
                backgroundColor={colors.LIGHT_GREEN_400}
                textColor={colors.WHITE}
                onClick={handleAddToCart}
                disabled={isAddToCartLoading}
              >
                {isAddToCartLoading ? 'Adding to Cart...' : 'Add to Cart'}
              </MainButton>
            </ButtonContainer>
          </ButtonsContainer>
        </PriceAndDiscountContainer>
      </ProductDetailsContainer>
    </ProductPageContainer>
  )
}

export default ProductDescription
