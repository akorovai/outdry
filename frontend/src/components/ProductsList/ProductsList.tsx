import { FC, ReactElement } from 'react'
import { ProductCard } from '../index.ts'
import ArrowButton from '../Button/ArrowButton.tsx'
import { ListNavigationPanel, NavbarPanelText, ProductsSection, SectionContainer } from './ProductsList.styled.ts'
import { IProduct } from '@/models'

interface IProductListProps {
  isWishList: boolean
  products: IProduct[]
  currentPage: number
  totalPages: number
  onPreviousClick: () => void
  onNextClick: () => void
  onDeleteItem: (productId: number) => void
}

const ProductsList: FC<IProductListProps> = ({
  isWishList,
  products,
  currentPage,
  totalPages,
  onPreviousClick,
  onNextClick,
  onDeleteItem,
}): ReactElement => {
  return (
    <SectionContainer>
      <ProductsSection>
        {products.map(product => {
          if (product.id === undefined || product.discount === undefined) {
            return null
          }

          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              colors={[product.color.name]}
              price={product.price}
              isOnSale={product.discount > 0}
              isWishlist={isWishList}
              size={product.size}
              color={product.color.name}
              discountPercent={product.discount}
              category={product.gender.toLowerCase()}
              onTrashClick={() => onDeleteItem(product.id || -1)}
            />
          )
        })}
      </ProductsSection>
      {totalPages > 1 && (
        <ListNavigationPanel>
          <ArrowButton text='Previous' direction='previous' onClick={onPreviousClick} disabled={currentPage === 1} />
          <NavbarPanelText>{`${currentPage} of ${totalPages}`}</NavbarPanelText>
          <ArrowButton text='Next' direction='next' onClick={onNextClick} disabled={currentPage === totalPages} />
        </ListNavigationPanel>
      )}
    </SectionContainer>
  )
}

export default ProductsList
