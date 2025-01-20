import React from 'react'
import { motion } from 'framer-motion'
import { Footer, Navbar, Promotions } from '../../components'
import { MainTitleText } from '../HomePage/HomePage.styled.tsx'
import ProductDescription from '../../containers/Product/ProductDescription.tsx'
import { ProductPageContainer } from './ProductPage.styled'
import { CustomerReviews } from '../../containers'
import { useParams } from 'react-router-dom'

const ProductPage: React.FC = (): React.ReactElement => {
  const { id } = useParams<{ category: string; id: string }>()
  const [messagesNumber, setMessagesNumber] = React.useState(0)
  return (
    <ProductPageContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Navbar />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{ width: '100%' }}
      >
        <ProductDescription messagesNumber={messagesNumber} />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{ width: '100%' }}
      >
        <Promotions isOnSale={false} productId={parseInt(id || '0')}>
          <MainTitleText>You may also like</MainTitleText>
        </Promotions>
      </motion.div>

      <CustomerReviews setMessagesNumber={setMessagesNumber} id={id} />

      <Footer />
    </ProductPageContainer>
  )
}

export default ProductPage
