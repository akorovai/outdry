import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Footer, Navbar, ProductFilter, ProductsList, Promotions, SVG } from '@/components'
import { MainTitleText } from '../HomePage/HomePage.styled'
import {
  DeleteAllButton,
  MainContentContainer,
  PageContainer,
  WishListContent,
  WishListHeaderContainer,
  WishListTitle,
} from './WishListPage.styled'
import { IProduct } from '@/models'
import useWishList from '@/hooks/useWishlist'
import { useParams } from 'react-router-dom'
import { colors } from '@/consts'
import EmptyListLabel from './EmptyListLabel'

const WishListPage: React.FC = (): React.ReactElement => {
  const { wishListProducts, deleteAllWishListItems, deleteWishListItem } = useWishList()
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const { category } = useParams<{ category: string }>()

  useEffect(() => {
    if (wishListProducts.length > 0) {
      setFilteredProducts(wishListProducts)
    }
  }, [wishListProducts, wishListProducts.length])

  const sizes = useMemo(() => Array.from(new Set(wishListProducts.map(product => product.size))), [wishListProducts])
  const productTypes = useMemo(
    () => Array.from(new Set(wishListProducts.map(product => product.type.name))),
    [wishListProducts],
  )
  const availableColors = useMemo(
    () => Array.from(new Set(wishListProducts.map(product => product.color.name))),
    [wishListProducts],
  )
  const genders = useMemo(
    () => Array.from(new Set(wishListProducts.map(product => product.gender))),
    [wishListProducts],
  )
  const prices = ['$0-50', '$50-100', '$100-150', '$150-200', '$200-250', '$250-300']

  const handleFilterChange = useCallback(
    (filters: { sizes: string[]; productTypes: string[]; colors: string[]; genders: string[]; prices: string[] }) => {
      const filtered = wishListProducts.filter(product => {
        return (
          (filters.sizes.length === 0 || filters.sizes.includes(product.size)) &&
          (filters.productTypes.length === 0 || filters.productTypes.includes(product.type.name)) &&
          (filters.colors.length === 0 || filters.colors.includes(product.color.name)) &&
          (filters.genders.length === 0 || filters.genders.includes(product.gender)) &&
          (filters.prices.length === 0 ||
            filters.prices.some((price: string) => {
              const [min, max] = price.replace('$', '').split('-').map(Number)
              return product.price >= min && product.price <= max
            }))
        )
      })
      setFilteredProducts(filtered)
      setCurrentPage(1)
    },
    [wishListProducts],
  )

  const handleSortChange = useCallback(
    (sortOption: string) => {
      const sortedProducts = [...filteredProducts]
      switch (sortOption) {
        case 'Price, low to high':
          sortedProducts.sort((a, b) => a.price - b.price)
          break
        case 'Price, high to low':
          sortedProducts.sort((a, b) => b.price - a.price)
          break
        case 'Alphabetically A-Z':
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
          break
        case 'Alphabetically Z-A':
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name))
          break
        default:
          break
      }
      setFilteredProducts(sortedProducts)
    },
    [filteredProducts],
  )

  const rowsPerPage = 3
  const productsPerPage = rowsPerPage * 4
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const handleDeleteAll = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const result = await deleteAllWishListItems()

    if (result && result.success) {
      setFilteredProducts([])
      setCurrentPage(1)
    } else {
      console.error(result?.message || 'Failed to delete all items')
    }
  }

  const handleDeleteItem = async (productId: number) => {
    const result = await deleteWishListItem(productId)
    if (result && result.success) {
      setFilteredProducts(prev => prev.filter(product => product.id !== productId))
    } else {
      console.error(result?.message || 'Failed to delete item')
    }
  }

  return (
    <PageContainer>
      <Navbar />
      <WishListContent>
        <MainContentContainer>
          {filteredProducts.length > 0 && (
            <ProductFilter
              number_of_products={filteredProducts.length}
              title={'Wishlist'}
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
              sizes={sizes}
              productTypes={productTypes}
              availableColors={availableColors}
              genders={genders}
              prices={prices}
              category={category || 'wishlist'}
            />
          )}
          <WishListHeaderContainer>
            {filteredProducts.length > 0 && (
              <>
                <WishListTitle>Added products</WishListTitle>
                <DeleteAllButton onClick={handleDeleteAll}>
                  <SVG.Trash color={colors.ERROR} />
                  <p>delete all</p>
                </DeleteAllButton>
              </>
            )}
          </WishListHeaderContainer>
          {filteredProducts.length === 0 ? (
            <EmptyListLabel />
          ) : (
            <ProductsList
              isWishList={true}
              products={currentProducts}
              currentPage={currentPage}
              totalPages={totalPages}
              onPreviousClick={handlePreviousClick}
              onNextClick={handleNextClick}
              onDeleteItem={handleDeleteItem}
            />
          )}
        </MainContentContainer>
      </WishListContent>
      <Promotions isOnSale={true}>
        <MainTitleText>Favorable offers</MainTitleText>
      </Promotions>
      <Footer />
    </PageContainer>
  )
}

export default WishListPage
