import React from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar, Promotions } from '../../components';
import { MainTitleText } from '../HomePage/HomePage.styled.tsx';
import ProductDescription from '../../containers/Product/ProductDescription.tsx';
import { ProductPageContainer } from './ProductPage.styled';

const ProductPage: React.FC = (): React.ReactElement => {
    return (
        <ProductPageContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Navbar />
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <ProductDescription />
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <Promotions isOnSale={false}>
                    <MainTitleText>You may also like</MainTitleText>
                </Promotions>
            </motion.div>
            <Footer />
        </ProductPageContainer>
    );
};

export default ProductPage;