import { FC, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Footer, Navbar, ProductFilter, ProductsList, Promotions, WhyChooseOutdry } from '@/components'
import { MainTitleText } from '../HomePage/HomePage.styled.tsx'
import { FilterWithProductsContainer, PageContainer } from './ProductsPage.styled'
import { IProduct } from '@/models'
import useCategoryProducts from './useNewProducts.tsx'
import EmptyProductList from './EmptyProductList' // Import the new component

const ProductsPage: FC = () => {
  const { category } = useParams<{ category: string }>()

  const { products: allProducts, loading, error } = useCategoryProducts(category || 'new')

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(allProducts)
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation()

  useEffect(() => {
    console.log('URL changed:', location.pathname)
  }, [location.pathname])

  useEffect(() => {
    setFilteredProducts(allProducts)
  }, [allProducts])

  const sizes = Array.from(new Set(allProducts.map(product => product.size)))
  const productTypes = Array.from(new Set(allProducts.map(product => product.type.name)))
  const colors = Array.from(new Set(allProducts.map(product => product.color.name)))
  const genders = Array.from(new Set(allProducts.map(product => product.gender)))
  const prices = ['$0-50', '$50-100', '$100-150', '$150-200', '$200-250', '$250-300']

  const title = category ? category.charAt(0).toUpperCase() + category.slice(1) : ''

  const handleFilterChange = (filters: {
    sizes: string[]
    productTypes: string[]
    colors: string[]
    genders: string[]
    prices: string[]
  }) => {
    const filtered = allProducts.filter(product => {
      const discount = product.discount || 0
      const discountedPrice = product.price * (1 - discount / 100)

      const isPriceInRange =
        filters.prices.length === 0 ||
        filters.prices.some((price: string) => {
          const [min, max] = price.replace('$', '').split('-').map(Number)
          return discountedPrice >= min && discountedPrice <= max
        })

      return (
        (filters.sizes.length === 0 || filters.sizes.includes(product.size)) &&
        (filters.productTypes.length === 0 || filters.productTypes.includes(product.type.name)) &&
        (filters.colors.length === 0 || filters.colors.includes(product.color.name)) &&
        (filters.genders.length === 0 || filters.genders.includes(product.gender)) &&
        isPriceInRange
      )
    })

    setFilteredProducts(filtered)
    setCurrentPage(1)
  }

  const handleSortChange = (sortOption: string) => {
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
  }

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

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <PageContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Navbar />
      <FilterWithProductsContainer
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <ProductFilter
          category={category || 'new-in'}
          number_of_products={filteredProducts.length}
          title={title}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          sizes={sizes}
          productTypes={productTypes}
          availableColors={colors}
          genders={genders}
          prices={prices}
        />
        {filteredProducts.length === 0 ? (
          <EmptyProductList />
        ) : (
          <ProductsList
            isWishList={false}
            products={currentProducts}
            currentPage={currentPage}
            totalPages={totalPages}
            onPreviousClick={handlePreviousClick}
            onNextClick={handleNextClick}
            onDeleteItem={itemId => {
              console.log('Deleting item with ID:', itemId)
            }}
          />
        )}
      </FilterWithProductsContainer>
      <Promotions isOnSale={true}>
        <MainTitleText>Favorable offers</MainTitleText>
      </Promotions>
      <WhyChooseOutdry />
      <Footer />
    </PageContainer>
  )
}

export default ProductsPage
