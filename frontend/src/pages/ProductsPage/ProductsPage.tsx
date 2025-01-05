import React from 'react';
import { useParams } from 'react-router-dom';

import { Footer, Navbar, ProductFilter, ProductsList, Promotions, WhyChooseOutdry } from '../../components';
import { MainTitleText } from '../HomePage/HomePage.styled.tsx';
import { PageContainer, FilterWithProductsContainer } from './ProductsPage.styled';

const ProductsPage: React.FC = (): React.ReactElement => {
    const { category } = useParams<{ category: string }>();

    const title = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

    return (
        <PageContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Navbar />
            <FilterWithProductsContainer
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <ProductFilter number_of_products={28} title={title} />
                <ProductsList isWishList={false} />
            </FilterWithProductsContainer>
            <Promotions isOnSale={true}>
                <MainTitleText>Favorable offers</MainTitleText>
            </Promotions>
            <WhyChooseOutdry />
            <Footer />
        </PageContainer>
    );
};

export default ProductsPage;