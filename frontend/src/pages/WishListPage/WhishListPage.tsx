import React from 'react'
import { Footer, Navbar, ProductFilter, ProductsList, Promotions, SVG } from '@/components'
import { MainTitleText } from '../HomePage/HomePage.styled.tsx'
import {
  DeleteAllButton,
  MainContentContainer,
  PageContainer,
  WishListContent,
  WishListHeaderContainer,
  WishListTitle,
} from './WishListPage.styled'
import { colors } from '@/consts'

const WishListPage: React.FC = (): React.ReactElement => {
  const handleDeleteAll = () => {
    console.log('All items deleted')
  }

  return (
    <PageContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Navbar />
      <WishListContent>
        <MainContentContainer
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ProductFilter number_of_products={28} title={'Wishlist'} />
          <WishListHeaderContainer>
            <WishListTitle
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Added products
            </WishListTitle>
            <DeleteAllButton
              onClick={handleDeleteAll}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.6, duration: 0.5 }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <SVG.Trash color={colors.ERROR} />
              <p>delete all</p>
            </DeleteAllButton>
          </WishListHeaderContainer>
          <ProductsList isWishList={true} />
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
